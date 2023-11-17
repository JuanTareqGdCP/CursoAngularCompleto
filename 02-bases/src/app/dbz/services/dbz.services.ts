import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import {v4 as uuid} from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DBZService {

  constructor() { }

  public characters: Personaje[] = [{
    name: 'Krillin',
    power: 500,
    id: uuid()
  },
  {
    name: 'Goku',
    power: 9500,
    id: uuid()
  },
  {
    name: 'Vegeta',
    power: 7500,
    id: uuid()
  }]

  onNewPersonaje(personaje: Personaje): void {
    const newCharacter: Personaje = {...personaje, id: uuid()};

    this.characters.push(newCharacter);
  }

  onDeletePersonaje(index: number) {
    this.characters.splice(index, 1);
  }

  borrarPersonajePorId(id: string) {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
