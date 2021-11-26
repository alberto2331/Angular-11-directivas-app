import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  texto1:string="Alberto Saiz";
  color:string="red";

  colorQueQuiero="yellow";
  miFormulario:FormGroup=this.fb.group({
    nombre:['', Validators.required]
  });
  constructor(private fb:FormBuilder) { }

  tieneError(campo:string){
    return this.miFormulario.get('nombre')!.invalid;
  }
  cambiarNombre(){
    this.texto1= Math.random().toString();
  }
  
  cambiarColor(){
    const colorRandom = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color=colorRandom;
  }
}
