import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../shared/user-data.service';
import { Router } from '@angular/router';
import { ResetUserService } from '../../shared/reset-user.service';
import { ArticleService } from '../article.service';
import { GetImagePath } from '../../shared/config';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  articleFile: File;
  coverFile: File;
  message: string;
  abstract: string;
  ISSN: any;
  Title: any;
  user: any;
  Price = 40;

  constructor(
    private userDataService: UserDataService,
    private router: Router,
    private resetUserService: ResetUserService,
    private articleService: ArticleService,
  ) {}

  ngOnInit() {
    this.user = this.userDataService.getUser();
    if (!this.user) {
      this.router.navigate(['/un-authorized']);
    }
  }

  filesChangedCover(files) {
    console.log(files);
    this.coverFile = <File>files[0];
  }
  filesChangedFile(files) {
    console.log(files);
    this.articleFile = <File>files[0];
  }
  uplaodFiles() {
    // check if cover uploaded
    if (!this.Title) {
      alert("Please enter title to continue!");
      return false;
    }
    if (!this.ISSN) {
      alert("Please enter ISSN to continue!");
      return false;
    }
    if (!this.Price) {
      alert("Please enter price to continue!");
      return false;
    }
    if (!this.abstract) {
      alert(this.abstract)
      alert("Please enter abstract to continue!");
      return false;
    }

    if (!this.coverFile) {
      alert("Please select article cover image to continue!");
      return false;
    }

    // check if atricle file uploaded
    if (!this.articleFile) {
      alert("Please select article  to continue!");
      return false;
    }

    this.articleService.uploadFile(this.coverFile).subscribe(response => {
      let coverFileUrl = GetImagePath(response.trim());

      // upload article file
      this.articleService
        .uploadFile(this.articleFile)
        .subscribe(response => {
          let articleFileUrl = GetImagePath(response.trim());

          //save pop to db

          let data = {
            Title: this.Title,
            issn: this.ISSN,
            Price: this.Price,
            abstract: this.abstract,
            ImageUrl: coverFileUrl,
            FileUrl : articleFileUrl,
            PublisherID:this.user.UserId
          };
        
          this.articleService.addArticle(data)
          .subscribe((response)=>{
            this.router.navigate(['/admin-dashboard']);
          });
        });
    });
  }
}
