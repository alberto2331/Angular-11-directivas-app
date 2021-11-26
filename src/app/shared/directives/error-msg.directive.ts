import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appErrorMsg]'
})
export class ErrorMsgDirective implements OnInit{

  private _color:string ='red';
  private _mensaje:string ='Mensaje de Alerta';
  elementoHtml:ElementRef<HTMLElement>
  
  @Input() set mensaje(value:string){
    console.log(value);
    this.elementoHtml.nativeElement.innerText=value;
  }
  @Input() set color(valor:string){
    this.elementoHtml.nativeElement.style.color=valor;
  }
  
  @Input() set valido(valor:boolean){
    if(valor){
      this.elementoHtml.nativeElement.classList.add('hidden');
      //Le agregamos la clase hidden a la etiqueta 
    }else{
      this.elementoHtml.nativeElement.classList.remove('hidden');
      //Le quitamos la clase hidden a la etiqueta 
    }
  }
  constructor( private el:ElementRef<HTMLElement>) {
    this.elementoHtml= el;
   }
  
  ngOnInit(): void {
    //console.log("onInit activo");
    this.setColor();
    this.setMensaje();
  }

  setEstilo():void{
    this.elementoHtml.nativeElement.style.color=this.color;
  }
  setColor(){ 
    this.elementoHtml.nativeElement.style.color=this._color;
  }
  setMensaje(){ 
    this.elementoHtml.nativeElement.innerText=this._mensaje;
  }
}
