import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

/* 
Exemplo de diretiva estrutural
Template: <li *myFor="let n em [1, 2, 3] usando 'Diretiva personalizada'" >{{ n }}</li>
*/
@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit{

  @Input('myForEm')
  numbers!: number[];

  @Input('myForUsando')
  text!: string;

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }

  ngOnInit(): void {
    console.log(this.numbers);
    console.log(this.text);

    for(let number of this.numbers) {
      this.container.createEmbeddedView(this.template, { $implicit: number });
    }
  }
}
