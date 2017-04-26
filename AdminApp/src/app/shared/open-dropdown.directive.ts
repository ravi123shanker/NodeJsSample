import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[ngCustomOpen]'
})
export class OpenDropdownDirective {
  @HostBinding('class.open') get opened(){
    return this.isOpen;
  }
  @HostListener('mouseenter') open(){
    this.isOpen= true;
  }
  @HostListener('mouseleave') close(){
    this.isOpen= false;
  }
  private isOpen =false;
  constructor() {
   }

}
