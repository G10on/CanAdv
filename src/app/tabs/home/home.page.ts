import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {DatabaseService} from "../../services/database.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  homeIntroBG: Observable<any>;
  homeCatTxt: Observable<any>;
  homeInspTxt: Observable<any>;
  homeEventTxt: Observable<any>;
  homeArticleTxt: Observable<any>;
  homeGalleryData: Observable<any[]>;
  homeGalleryInspiredData: Observable<any[]>;
  homeEventsData: Observable<any[]>;
  homeArticlesData: Observable<any[]>;


  constructor(private service: DatabaseService) {
    this.homeIntroBG = this.service.getDocument('IntroBG', 'Home');
    this.homeCatTxt = this.service.getDocument('Home', 'discover');
    this.homeInspTxt = this.service.getDocument('Home', 'inspired');
    this.homeEventTxt = this.service.getDocument('Home', 'events');
    this.homeArticleTxt = this.service.getDocument('Home', 'articles');
    this.homeGalleryData = this.service.getCollection('HomeCategories');
    this.homeGalleryInspiredData = this.service.getCollection('WhatToDo/Categories/WhatToDo');
    this.homeEventsData = service.getCollection('Events/Christmas/RelatedContent');
    this.homeArticlesData = service.getCollection('Articles/SurfCanteras/RelatedContent');
  }

}
