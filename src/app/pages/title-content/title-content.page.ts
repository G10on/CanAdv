import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-title-content',
  templateUrl: './title-content.page.html',
  styleUrls: ['./title-content.page.scss'],
})
export class TitleContentPage {

  @Input() data: Observable<any> | undefined;

  constructor() {

  }

}
