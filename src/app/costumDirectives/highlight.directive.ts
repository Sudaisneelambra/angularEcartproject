import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element:ElementRef,private render:Renderer2) {

   }

   @HostListener('mouseenter') mouseEnter(){
    this.render.addClass(this.element.nativeElement,'highlight-product')
   }


   @HostListener('mouseout') mouseOut(){
    this.render.removeClass(this.element.nativeElement,'highlight-product')
   }

}
