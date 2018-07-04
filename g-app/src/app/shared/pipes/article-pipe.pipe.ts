import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'articlepipe'
})
export class ArticlePipePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
        return it.Title.toLowerCase().includes(searchText) || it.ISSN.toLowerCase().includes(searchText);
    });
}

}
