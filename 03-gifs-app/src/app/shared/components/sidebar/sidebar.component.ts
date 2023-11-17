import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.services';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) { }

  get tags() : string[] {
    return this.gifsService.TagsHistory;
  }

  searchTag(tag:string):void {
    this.gifsService.searchTag(tag);
  }
}
