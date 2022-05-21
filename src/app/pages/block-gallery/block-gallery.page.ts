import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-block-gallery',
  templateUrl: './block-gallery.page.html',
  styleUrls: ['./block-gallery.page.scss'],
})
export class BlockGalleryPage {

  @Input() blocksData: Observable<any> | undefined;

  constructor() {

  }

}
