/* eslint-disable @typescript-eslint/no-explicit-any */
import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appDialogFooter]',
})
export class DialogFooterDirective {
  constructor(public tpl: TemplateRef<any>) {}
}
