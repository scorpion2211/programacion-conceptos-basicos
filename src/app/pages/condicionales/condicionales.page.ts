import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condicionales',
  templateUrl: './condicionales.page.html',
  styleUrls: ['./condicionales.page.scss'],
})
export class CondicionalesPage implements OnInit {
  public bloques = [
    {
      color: 'primary',
      title: 'if (condición)',
      subtitle: '',
      code: `if(valor1 == valor2){
  // mi código
}`,
      descrip:
        'Ejecuta el código escrito dentro de las llaves solo si la condición es verdadera.',
    },
    {
      color: 'danger',
      title: 'else',
      subtitle: '',
      code: `if(valor1 == valor2){
  // mi código
} else {
  //si no se cumple hago algo
}`,
      descrip:
        'Si la condición puesta en el IF resulta falsa, enconteces ejecuto un código diferente.',
    },
    {
      color: 'warning',
      title: 'else if (condición)',
      subtitle: '',
      code: `if(valor1 == valor2){
  // mi código
} else if (valor1 < valor2){
  //si no se cumple pero se cumple esta segunda condición hago algo
} else {
  //si no se cumple hago algo
}`,
      descrip:
        'Si la primer condición no se cumple, puedo proponer otra condición y, nuevamente, si esta segunda condición no es cumpĺida entro al bloque de ELSE.',
    },
    {
      color: 'warning',
      title: 'switch (dato)',
      subtitle: '',
      code: '',
      descrip: '',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
