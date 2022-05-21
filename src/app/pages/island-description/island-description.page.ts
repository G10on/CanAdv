import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-island-description',
  templateUrl: './island-description.page.html',
  styleUrls: ['./island-description.page.scss'],
})
export class IslandDescriptionPage {

  @Input() description: Observable<any> | undefined;

  constructor() {

  }

}
