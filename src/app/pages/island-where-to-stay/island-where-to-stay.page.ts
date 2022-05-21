import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-island-where-to-stay',
  templateUrl: './island-where-to-stay.page.html',
  styleUrls: ['./island-where-to-stay.page.scss'],
})
export class IslandWhereToStayPage {

  @Input() title: string | undefined;
  @Input() content: Observable<any> | undefined;

  constructor() {

  }

}
