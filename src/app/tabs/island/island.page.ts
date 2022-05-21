import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {DatabaseService} from "../../services/database.service";
import {Router} from "@angular/router";
import {ToastController} from "@ionic/angular";
import {AuthService} from "../../services/auth.service";
import {SQLiteService} from "../../services/sqlite.service";

@Component({
  selector: 'island-page',
  templateUrl: './island.page.html',
  styleUrls: ['./island.page.scss'],
})
export class IslandPage {

  islandDescription: Observable<any[]> | undefined;
  islandWhatToDo: Observable<any[]> | undefined;
  islandWhereToStay: Observable<any[]> | undefined;
  islandHowToGetThereDescription: Observable<any[]> | undefined;
  islandHowToGetThereContent: Observable<any[]> | undefined;
  introTitle: Observable<any> | undefined;

  addedToFav: boolean = false;
  favButtonText: string = "Add To Favorite";
  userID: string;

  constructor(
    private service: DatabaseService,
    private router: Router,
    private toastController: ToastController,
    private auth: AuthService,
    private db: SQLiteService
  ) {
    this.getIslandInfo(service, router);
    this.setUserID();
  }

  setUserID() {
    this.auth.getUserId().then((id) => {
      this.userID = id;
    });
  }

  async generatePopUp(message: string) {
    const toast =  await this.toastController.create({
      message: message,
      duration: 2000,
      position: "top"
    });
    await toast.present();
  }

  async checkFavButton() {
    if (this.addedToFav) {
      this.db.removeFavorite(this.userID, this.router.url);
      this.addedToFav = false;
      this.favButtonText = 'Add To Favorite';
      await this.generatePopUp('Removed From Favorite');
    } else {
      this.db.addFavorite(this.userID, this.router.url);
      this.addedToFav = true;
      this.favButtonText = 'Remove From Favorite';
      await this.generatePopUp('Added To Favorite');
    }
  }

  getIslandInfo(service: DatabaseService, router: Router) {
    switch (router.url) {
      case '/lanzarote': {
        let basePath = "/LanzarotePage/LanzaroteCollection";
        this.islandDescription = service.getCollection(basePath + "/LanzaroteDescription");
        this.islandWhatToDo = service.getCollection(basePath + "/LanzaroteWhatToDo");
        this.islandWhereToStay = service.getCollection(basePath + "/LanzaroteWhereToStay");
        this.islandHowToGetThereDescription = service.getCollection(basePath + "/LanzaroteHowToGetThereDescription");
        this.islandHowToGetThereContent = service.getCollection(basePath + "/LanzaroteHowToGetThereContent");
        this.introTitle = service.getDocument("/IntroBG", "/Lanzarote");
        break;
      }

      case '/gran-canaria': {
        let basePath = "/GranCanariaPage/GranCanariaCollection";
        this.islandDescription = service.getCollection(basePath + "/GranCanariaDescription");
        this.islandWhatToDo = service.getCollection(basePath + "/GranCanariaWhatToDo");
        this.islandWhereToStay = service.getCollection(basePath + "/GranCanariaWhereToStay");
        this.islandHowToGetThereDescription = service.getCollection(basePath + "/GranCanariaHowToGetThereDescription");
        this.islandHowToGetThereContent = service.getCollection(basePath + "/GranCanariaHowToGetThereContent");
        this.introTitle = service.getDocument("/IntroBG", "/GranCanaria");
        break;
      }

      case '/tenerife': {
        let basePath = "/TenerifePage/TenerifeCollection";
        this.islandDescription = service.getCollection(basePath + "/TenerifeDescription");
        this.islandWhatToDo = service.getCollection(basePath + "/TenerifeWhatToDo");
        this.islandWhereToStay = service.getCollection(basePath + "/TenerifeWhereToStay");
        this.islandHowToGetThereDescription = service.getCollection(basePath + "/TenerifeHowToGetThereDescription");
        this.islandHowToGetThereContent = service.getCollection(basePath + "/TenerifeHowToGetThereContent");
        this.introTitle = service.getDocument("/IntroBG", "/Tenerife");
        break;
      }

      case '/fuerteventura': {
        let basePath = "/FuerteventuraPage/FuerteventuraCollection";
        this.islandDescription = service.getCollection(basePath + "/FuerteventuraDescription");
        this.islandWhatToDo = service.getCollection(basePath + "/FuerteventuraWhatToDo");
        this.islandWhereToStay = service.getCollection(basePath + "/FuerteventuraWhereToStay");
        this.islandHowToGetThereDescription = service.getCollection(basePath + "/FuerteventuraHowToGetThereDescription");
        this.islandHowToGetThereContent = service.getCollection(basePath + "/FuerteventuraHowToGetThereContent");
        this.introTitle = service.getDocument("/IntroBG", "/Fuerteventura");
        break;
      }

      case '/la-palma': {
        let basePath = "/LaPalmaPage/LaPalmaCollection";
        this.islandDescription = service.getCollection(basePath + "/LaPalmaDescription");
        this.islandWhatToDo = service.getCollection(basePath + "/LaPalmaWhatToDo");
        this.islandWhereToStay = service.getCollection(basePath + "/LaPalmaWhereToStay");
        this.islandHowToGetThereDescription = service.getCollection(basePath + "/LaPalmaHowToGetThereDescription");
        this.islandHowToGetThereContent = service.getCollection(basePath + "/LaPalmaHowToGetThereContent");
        this.introTitle = service.getDocument("/IntroBG", "/LaPalma");
        break;
      }

      case '/la-graciosa': {
        let basePath = "/LaGraciosaPage/LaGraciosaCollection";
        this.islandDescription = service.getCollection(basePath + "/LaGraciosaDescription");
        this.islandWhatToDo = service.getCollection(basePath + "/LaGraciosaWhatToDo");
        this.islandWhereToStay = service.getCollection(basePath + "/LaGraciosaWhereToStay");
        this.islandHowToGetThereDescription = service.getCollection(basePath + "/LaGraciosaHowToGetThereDescription");
        this.islandHowToGetThereContent = service.getCollection(basePath + "/LaGraciosaHowToGetThereContent");
        this.introTitle = service.getDocument("/IntroBG", "/LaGraciosa");
        break;
      }

      case '/el-hierro': {
        let basePath = "/ElHierroPage/ElHierroCollection";
        this.islandDescription = service.getCollection(basePath + "/ElHierroDescription");
        this.islandWhatToDo = service.getCollection(basePath + "/ElHierroWhatToDo");
        this.islandWhereToStay = service.getCollection(basePath + "/ElHierroWhereToStay");
        this.islandHowToGetThereDescription = service.getCollection(basePath + "/ElHierroHowToGetThereDescription");
        this.islandHowToGetThereContent = service.getCollection(basePath + "/ElHierroHowToGetThereContent");
        this.introTitle = service.getDocument("/IntroBG", "/ElHierro");
        break;
      }

      case '/la-gomera': {
        let basePath = "/LaGomeraPage/LaGomeraCollection";
        this.islandDescription = service.getCollection(basePath + "/LaGomeraDescription");
        this.islandWhatToDo = service.getCollection(basePath + "/LaGomeraWhatToDo");
        this.islandWhereToStay = service.getCollection(basePath + "/LaGomeraWhereToStay");
        this.islandHowToGetThereDescription = service.getCollection(basePath + "/LaGomeraHowToGetThereDescription");
        this.islandHowToGetThereContent = service.getCollection(basePath + "/LaGomeraHowToGetThereContent");
        this.introTitle = service.getDocument("/IntroBG", "/LaGomera");
        break;
      }
    }
  }

}
