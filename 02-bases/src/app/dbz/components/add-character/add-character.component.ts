import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();


  public personaje: Personaje = {
    name: '',
    power: 0
  }

  crearPersonaje(): void {
    if (this.personaje.name.length === 0) return;

    this.onNewPersonaje.emit({...this.personaje});

    this.personaje.name = '';
    this.personaje.power = 0;
  }
}
