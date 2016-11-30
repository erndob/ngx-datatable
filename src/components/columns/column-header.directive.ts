import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[column-header-template]',
})
export class DataTableColumnHeaderDirective {
  
  constructor(public template: TemplateRef<any>) { };

}