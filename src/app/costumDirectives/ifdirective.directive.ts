import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfdirectiveDirective {

  constructor(private view:TemplateRef<any>,private template:ViewContainerRef) { }

}
