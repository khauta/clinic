import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeBodyComponent } from '../home-body/home-body.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {  }

}
