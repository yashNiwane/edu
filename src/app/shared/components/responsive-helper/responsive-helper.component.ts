/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-responsive-helper',
  templateUrl: './responsive-helper.component.html',
  styleUrls: ['./responsive-helper.component.scss'],
})
export class ResponsiveHelperComponent{
  public env: any = environment;
}