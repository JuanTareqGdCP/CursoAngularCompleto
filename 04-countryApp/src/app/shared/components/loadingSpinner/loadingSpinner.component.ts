import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-loading-spinner',
  templateUrl: './loadingSpinner.component.html',
  styleUrls: ['./loadingSpinner.component.css']
})
export class LoadingSpinnerComponent {

@Input()
public placeholder: string = '';

@Output()
public onValue = new EventEmitter<string>();

emitValue( value:string):void {
  this.onValue.emit(value);
}

}
