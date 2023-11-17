import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 40;

get capitalizedName():string {
  return this.name.toUpperCase();
}

public getHeroDescription(): string {
  return `${this.name } - ${ this.age }`
}

changeHero(): void {
  this.name = 'Test';
}

changeAge(): void {
  this.age = 10;
}

resetForm(): void {
  this.name = 'Ironman';
  this.age = 40;

  // document.querySelectorAll('h1')!.forEach(element => {
  //   element.innerHTML = "Reseteado";
  // });

}

}
