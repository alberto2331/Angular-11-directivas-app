import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
@Directive({
  selector: '[custimIf]'
})
export class CustimIfDirective {

  @Input() set custimIf(condicion:boolean){
    if (condicion){
      //tengo que mostrar el elemento
      this.viewContainer.createEmbeddedView ( this.templateRef);
    }else{
      //No tengo que mostrar el elemento
      this.viewContainer.clear();
    }
  }
  constructor( 
    private templateRef: TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef
  ) {}
}

