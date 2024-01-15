import { Directive, ElementRef,Input,OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[setBackground]'
})


export class Setbackground{

    private elem:ElementRef

    // @Input()
    // backColor:string='#36454F'

    // @Input('setBackground')
    // backColor:string='black'
    // @Input()
    // textColor:string='white'

    @Input('setBackground')colorObject:{backColor:string,textColor:string}
    constructor(element:ElementRef, private render:Renderer2){
        this.elem=element
    }

    // ngOnInit(){
    //     this.elem.nativeElement.style.backgroundColor='#36454f'
    //     this.elem.nativeElement.style.color='white'
    // }

    // -----------------------------------rederer2----------------------
    ngOnInit(){
        this.render.setStyle(this.elem.nativeElement,'backgroundColor',this.colorObject.backColor)
        this.render.setStyle(this.elem.nativeElement,'color',this.colorObject.textColor)
       
        //    this.render.setAttribute(this.elem.nativeElement,'title','This is example title')
    
    // -----------------------------------rederer2----------------------
    
      
    }



}