import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images = [
    'assets/images/banner1.jpg',
    'assets/images/banner2.jpg'
  ];

  imagesTintas = [
    {path: "assets/images/marcas/coral.jpg"},
    {path: "assets/images/marcas/anjo.jpg"},
    {path: "assets/images/marcas/sw.png"},
    {path: "assets/images/marcas/atlas.jpg"},
    {path: "assets/images/marcas/montana.jpg"},
    {path: "assets/images/marcas/mactra.jpg"},
    {path: "assets/images/marcas/hydroN.jpg"},
    {path: "assets/images/marcas/brazilian.jpg"},
    {path: "assets/images/marcas/sayerlack.jpg"},
    {path: "assets/images/marcas/colorgin.jpg"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
