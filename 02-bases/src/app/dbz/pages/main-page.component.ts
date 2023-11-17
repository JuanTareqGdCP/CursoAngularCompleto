import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { DBZService } from '../services/dbz.services';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})


export class MainPageComponent implements OnInit {

  constructor(private dbzService: DBZService) {  }

  get characters(): Personaje[] {
    return [...this.dbzService.characters];
  }

  onDeletePersonaje(id: string): void {
    this.dbzService.borrarPersonajePorId(id);
  }

  onNewPersonaje(personaje:Personaje) {
    this.dbzService.onNewPersonaje(personaje);
  }

  ngOnInit() { }
}
