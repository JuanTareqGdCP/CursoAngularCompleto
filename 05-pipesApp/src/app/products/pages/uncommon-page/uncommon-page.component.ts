import { Component } from '@angular/core';
import { Observable, interval, tap, timer } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18nselect
  public name: string = 'Tareq';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient():void {
    this.name = 'Melisa';
    this.gender = 'female';
  }

  //i18nPlural

  public clients: string[] = ['Maria','Pedro','Juan','Carla','Fernando',
          'Mario','Beatriz'];

  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  //keyValue Pipe

  public person = {
    name: 'Tareq',
    age: 30,
    address: 'Fernandez Herrero, SC'

  }

  //Async Pipe

  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log(value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
     resolve('Tenemos data en la promesa.'),
     console.log('Tenemos promesa'),
     this.person.name = 'Promesa'
    }, 3500 );
  })

}
