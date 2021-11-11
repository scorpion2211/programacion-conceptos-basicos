import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clase-dos',
  templateUrl: './clase-dos.page.html',
  styleUrls: ['./clase-dos.page.scss'],
})
export class ClaseDosPage implements OnInit {
  public bloques = [
    {
      color: 'tertiary',
      title: 'Variables',
      subtitle: 'var - let',
      descrip:
        'Se identifican con nombres que, por convención, se escriben con minúscula y almacenan un valor que puede ir cambiando.En caso de querer usarse más de una pablara para una variable estas las separamos con un "_", por ejemplo: mi_edad',
    },
    {
      color: 'warning',
      title: 'Constantes',
      subtitle: 'const',
      descrip:
        'Se nombran como las variables con la diferencia que su valor no puede cambiar, es decir, comienza con un valor y este no podra ser modificado en ningun momento. Estas suelen escribirse en mayúsculas.',
    },
    {
      color: 'dark',
      title: 'Valores',
      subtitle: 'datos - vacias - null - undefined',
      descrip:
        'Cuando utilizamos variables estan pueden tener un dato como el nombre de una persona, edad, o precio de algun artículo, pero también pueden estar nulas (null), o bien, pudieron ser llamadas sin antes definirse (undefined).',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
