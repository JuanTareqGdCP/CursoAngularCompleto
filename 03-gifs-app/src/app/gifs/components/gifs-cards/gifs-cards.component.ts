import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../Interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-cards.component.html'
})

export class GifsCardsComponent implements OnInit {

  @Input()
  public gif!: Gif;

  ngOnInit():void {
    if ( !this.gif)   throw new Error('Gif property is required')
  }


  constructor() { }

}
