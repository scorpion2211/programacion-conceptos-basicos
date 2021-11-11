import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clase-tres',
  templateUrl: './clase-tres.page.html',
  styleUrls: ['./clase-tres.page.scss'],
})
export class ClaseTresPage implements OnInit {
  public artimeticos = [
    {
      color: 'dark',
      subtitle: '+',
      title: 'Suma',
      descrip: 'Suma dos números.',
    },
    {
      color: 'dark',
      subtitle: '-',
      title: 'Resta',
      descrip:
        'Busca la diferencia entre dos números o indica el valor negativo de un número.',
    },
    {
      color: 'dark',
      subtitle: '*',
      title: 'Multiplicación',
      descrip: 'Multiplica dos números.',
    },
    {
      color: 'dark',
      subtitle: '/',
      title: 'División',
      descrip: 'Divide el primer número entre el segundo.',
    },
    {
      color: 'dark',
      subtitle: '%',
      title: 'Resto',
      descrip:
        'Devuelve el resto de la división del primer número entre el segundo.',
    },
    {
      color: 'dark',
      subtitle: '++',
      title: 'Incremento',
      descrip: 'Aumenta en 1 el número de la izquierda.',
    },
    {
      color: 'dark',
      subtitle: '--',
      title: 'Disminución',
      descrip: 'Disminuye en 1 el número de la izquierda.',
    },
    {
      color: 'dark',
      subtitle: '+  .  &',
      title: 'Concatenación',
      descrip: 'Agrupa cadena de caracteres.',
    },
  ];
  public logicos = [
    {
      color: 'dark',
      subtitle: '&&  -a And',
      title: 'Conjunción',
      descrip: 'Devuelve True cuando Expresión1 y Expresión2 son verdaderas.',
    },
    {
      color: 'dark',
      subtitle: '|| -o Or',
      title: 'Disyunción',
      descrip: 'Devuelve True cuando Expresión1 o Expresión2 es verdadera.',
    },
    {
      color: 'dark',
      subtitle: '! ~ Not',
      title: 'Negación',
      descrip:
        'Devuelve <b>true</b> si el valor es <b>false</b> y devuelve <b>false</b> si el valor es <b>true</b>.',
    },
    {
      color: 'dark',
      subtitle: '^ Xor',
      title: '',
      descrip:
        'Devuelve True si Expresión1 es verdadera o Expresión2 es verdadera, pero no ambas.',
    },
  ];

  public comparativos = [
    {
      color: 'dark',
      subtitle: '==',
      title: 'Igualdad',
      descrip: 'Devuelve True cuando si ambos balores son iguales',
    },
    {
      color: 'dark',
      subtitle: '===',
      title: 'Estricta Igualdad',
      descrip:
        'Devuelve True cuando si ambos balores son iguales y son el mismo tipo de dato',
    },
    {
      color: 'dark',
      subtitle: '!=  <>',
      title: 'Distinto',
      descrip: 'Devuelve True si el primer valor no es igual al segundo valor.',
    },
    {
      color: 'dark',
      subtitle: '!==',
      title: 'Distinto Estricto',
      descrip:
        'Devuelve True si el primer valor no es igual al segundo valor o son iguales pero no son el mismo tipo de dato.',
    },
    {
      color: 'dark',
      subtitle: '< >',
      title: 'Desigualdad',
      descrip:
        '< compara si el primer valor es menor que el segundo. > compara si el primer valor es mayor que el seundo.',
    },
    {
      color: 'dark',
      subtitle: '<= >=',
      title: 'Desigualdad',
      descrip:
        '< compara si el primer valor es menor o igual que el segundo. > compara si el primer valor es mayor o igual que el seundo.',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
