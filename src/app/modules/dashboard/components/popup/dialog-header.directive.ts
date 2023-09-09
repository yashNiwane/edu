/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appDialogHeader]',
})
export class DialogHeaderDirective {
  constructor(public tpl: TemplateRef<any>) {}
}