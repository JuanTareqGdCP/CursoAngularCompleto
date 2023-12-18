import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent {
  public nameLower: string = 'tareq';
  public nameUpper: string = 'TAREQ';
  public fullName: string = 'JuAn TarEQ GOnzáLez dE CháVEZ PéreZ';
  public customDate: Date = new Date();
}
