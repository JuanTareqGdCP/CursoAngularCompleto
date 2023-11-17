import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Hulk','SheHulk','Thor', 'Ironman'];
  public deletedHero?: string;

  borrarUltimoHeroe(): void {
    this.deletedHero = this.heroNames.pop();
    console.log(this.deletedHero);
  }

}
