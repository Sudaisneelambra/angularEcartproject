import { Directive, ElementRef,OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[setBackground]'
})


export class Setbackground{

    private elem:ElementRef

    constructor(element:ElementRef, private render:Renderer2){
        this.elem=element
    }

    // ngOnInit(){
    //     this.elem.nativeElement.style.backgroundColor='#36454f'
    //     this.elem.nativeElement.style.color='white'
    // }

    // -----------------------------------rederer2----------------------
    ngOnInit(){
        this.render.setStyle(this.elem.nativeElement,'backgroundColor','#36454f')
        this.render.setStyle(this.elem.nativeElement,'color','#fff')
       
        //    this.render.setAttribute(this.elem.nativeElement,'title','This is example title')
    
    // -----------------------------------rederer2----------------------
    
      
    }



}