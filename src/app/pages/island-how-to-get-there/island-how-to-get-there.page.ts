import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-island-how-to-get-there',
  templateUrl: './island-how-to-get-there.page.html',
  styleUrls: ['./island-how-to-get-there.page.scss'],
})
export class IslandHowToGetTherePage {

  @Input() title: string | undefined;
  @Input() description: Observable<any> | undefined;
  @Input() content: Observable<any> | undefined;

  constructor() {

  }

}
