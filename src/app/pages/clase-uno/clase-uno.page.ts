import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clase-uno',
  templateUrl: './clase-uno.page.html',
  styleUrls: ['./clase-uno.page.scss'],
})
export class ClaseUnoPage implements OnInit {
  public number_a: number;
  public number_b: number;
  public number_c: string;
  public number_d: string;

  public bloques = [
    {
      color: 'primary',
      title: 'Numérico',
      subtitle: 'number - int (integer) - float - double',
      descrip:
        'Enteros son un tipo de datos primarios que almacenan valores numéricos de 16 bits sin decimales comprendidos en el rango 32,767 a -32,768.',
    },
    {
      color: 'success',
      title: 'Booleano',
      subtitle: 'boolean - bool',
      descrip:
        'Un booleano solo tiene dos valores true y false. Cada booleano ocupa un byte de memoria.',
    },
    {
      color: 'warning',
      title: 'Caracteres',
      subtitle: 'string - char',
      descrip:
        'Un char representa un carácter que ocupa 1 byte de memoria. Los caracteres simples se representan con comillas simples ‘a’ y para múltiples caracteres o strings se representan con comillas dobles “Hola!”.',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
