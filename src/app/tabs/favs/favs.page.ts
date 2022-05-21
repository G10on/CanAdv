import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {DatabaseService} from "../../services/database.service";
import {Router} from "@angular/router";
import {ToastController} from "@ionic/angular";
import {AuthService} from "../../services/auth.service";
import {SQLiteService} from "../../services/sqlite.service";

@Component({
  selector: 'app-favs',
  templateUrl: './favs.page.html',
  styleUrls: ['./favs.page.scss'],
})
export class FavsPage implements OnInit {

  favIntroBG: Observable<any> | undefined;
  userID: string;
  favList: any = [];

  constructor(
    private service: DatabaseService,
    private router: Router,
    private toastController: ToastController,
    private auth: AuthService,
    private db: SQLiteService
  ) {
    this.favIntroBG = this.service.getDocument('IntroBG', 'Favs');
    this.setUserID();
    this.favList = this.getFavList(this.userID);
  }

  setUserID() {
    this.auth.getUserId().then((id) => {
      this.userID = id;
    });
  }

  getFavList(userID: string) {
    return this.db.getRecords(userID);
  }

  removeFav(userID: string, favItem: any) {
    this.db.removeFavorite(userID, favItem.link);
  }

  ngOnInit() {
  }

}
