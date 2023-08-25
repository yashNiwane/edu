import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {

  items:any =[1,2,3,4,5,6];
  constructor() {}

  ngOnInit(): void {}
}
