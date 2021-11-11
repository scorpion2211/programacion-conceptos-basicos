import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Tipo de Datos', url: '/tipo-de-datos', icon: 'videocam' },
    {
      title: 'Variables, Constantes y Valores',
      url: '/variables',
      icon: 'videocam',
    },
    { title: 'Operadores', url: '/operadores', icon: 'videocam' },
    { title: 'Condicionales', url: '/condicionales', icon: 'videocam' },
    { title: 'Bucles', url: '/clase-cinco', icon: 'videocam' },
    { title: 'Arrays / Vectores', url: '/clase-seis', icon: 'videocam' },
    { title: 'Funciones / Métodos', url: '/clase-siete', icon: 'videocam' },
    { title: 'Clases y Objetos', url: '/clase-ocho', icon: 'videocam' },
    { title: 'Namespace', url: '/clase-nueve', icon: 'videocam' },
  ];
  public labels = [];
  constructor() {
    setTimeout(() => {
      console.clear();
      //aquí debajo escribir
    }, 300);
  }
}
