import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-intro-title',
  templateUrl: './intro-title.page.html',
  styleUrls: ['./intro-title.page.scss'],
})
export class IntroTitlePage {

  @Input() data: Observable<any> | undefined;

  constructor() {

  }

}
