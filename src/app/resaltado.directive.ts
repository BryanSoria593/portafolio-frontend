import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(
    public element: ElementRef
  ) { 
    const elemento = element.nativeElement;
    elemento.style.backgroundColor = 'yellow';
    elemento.style.padding = '20px';
  }

}
