import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-island-what-to-do',
  templateUrl: './island-what-to-do.page.html',
  styleUrls: ['./island-what-to-do.page.scss'],
})
export class IslandWhatToDoPage {

  @Input() title: string | undefined;
  @Input() content: Observable<any> | undefined;

  constructor() {

  }

}
