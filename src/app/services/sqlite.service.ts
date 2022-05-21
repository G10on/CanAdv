import { Injectable } from '@angular/core';
import {Platform} from '@ionic/angular';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SQLiteService {

  private dbInstance: SQLiteObject;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  readonly dbName: string = 'database.db';
  // eslint-disable-next-line @typescript-eslint/member-ordering
  readonly dbTable: string = 'favorites';

  constructor(
    private platform: Platform,
    private sqlite: SQLite
  ) {
    this.dbConnect();
  }

  dbConnect() {
    this.platform.ready().then(() => {
      this.sqlite.create({name: this.dbName, location: 'default'})
        .then((sqLite) => {
          this.dbInstance = sqLite;
          this.dbInstance.executeSql(
            `CREATE TABLE IF NOT EXISTS ${this.dbTable} (
            userID TEXT, pageName TEXT
            )`, [])
            .then(() => {console.log('Executed CREATE');})
            .catch((e) => {console.log(e);});
        })
        .catch((e) => {console.log(e);});
    });
  }

  addFavorite(userID: string, pageName: string) {
    this.dbInstance.executeSql(
      //`INSERT INTO ? (userID, image, title, pageName, description) VALUES (?, ?, ?, ?, ?)`,
      `INSERT INTO ? (userID, pageName) VALUES (?, ?)`,
      [this.dbTable, userID, pageName])
      .then(() => {console.log('Executed INSERT');})
      .catch((e) => {console.log(e);});
  }

  removeFavorite(userID: string, pageName: string) {
    this.dbInstance.executeSql(
      `DELETE FROM ${this.dbTable} WHERE userID = '${userID}' AND pageName = '${pageName}')`, [])
      .then(() => {console.log('Executed DELETE');})
      .catch((e) => {console.log(e);});
  }

  getRecords(userID: string) {
    return this.dbInstance.executeSql(
      `SELECT * FROM ${this.dbTable} WHERE userID = ${userID})`, [])
      .then(sqlResult => {
        const records = [];
        for (let i = 0; i < sqlResult.rows.length; i++) {
          records.push(sqlResult.rows.item(i));
        }
        return Promise.resolve(records);
      })
      .catch((e) => {console.log(e);});
  }

}
