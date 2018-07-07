import { Router } from '@angular/router';
import { SelectService } from './../../../shared/select.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-articles',
  templateUrl: './view-articles.component.html',
  styleUrls: ['./view-articles.component.css']
})
export class ViewArticlesComponent implements OnInit {
  pending : number
  active : number
  archived : number

  constructor(
    private selectService : SelectService, 
    private route : Router
  ) { }

  ngOnInit() {
    this.GetPending();
  }

  GetPending(){
    this.selectService.select("user_article WHERE STATE = 'Pending' AND Status = 'Active'")
    .subscribe(response =>{
        this.pending = response.length;
    })
  }
  GetActive(){
    this.selectService.select("user_article WHERE STATE = 'Download' AND Status = 'Active'")
    .subscribe(response =>{
        this.active = response.length;
    })
  }
  GetArchived(){
    this.selectService.select("user_article WHERE STATE = 'Archived' AND Status = 'Active'")
    .subscribe(response =>{
        this.archived = response.length;
    })
  }
}
