import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public listaPersonajes: Personaje[] = [{
    name: 'Trunks',
    power: 8080
  }];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  public onDeletePersonaje(id?: string): void {

    if (!id) return;
    this.onDelete.emit(id);
  }


}
