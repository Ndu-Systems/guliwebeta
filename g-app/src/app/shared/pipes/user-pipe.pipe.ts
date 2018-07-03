import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userpipe'
})
export class UserPipePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
        return it.Email.toLowerCase().includes(searchText) || it.FirstName.toLowerCase().includes(searchText) || it.Surname.toLowerCase().includes(searchText);
    });
}

}
