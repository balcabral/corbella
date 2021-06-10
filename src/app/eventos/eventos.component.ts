import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  eventos = [
    {
      nome: "EXPO 2019",
      fotos: [
        "assets/images/eventos/EXPO2019/1.jpg",
        "assets/images/eventos/EXPO2019/2.jpg",
        "assets/images/eventos/EXPO2019/3.jpg",
        "assets/images/eventos/EXPO2019/4.jpg",
        "assets/images/eventos/EXPO2019/5.jpg",
        "assets/images/eventos/EXPO2019/6.jpg",
        "assets/images/eventos/EXPO2019/7.jpg",
        "assets/images/eventos/EXPO2019/8.jpg",
        "assets/images/eventos/EXPO2019/9.jpg",
        "assets/images/eventos/EXPO2019/10.jpg",
        "assets/images/eventos/EXPO2019/11.jpg",
        "assets/images/eventos/EXPO2019/12.jpg",
        "assets/images/eventos/EXPO2019/13.jpg",
        "assets/images/eventos/EXPO2019/14.jpg",
        "assets/images/eventos/EXPO2019/15.jpg",
        "assets/images/eventos/EXPO2019/16.jpg",
        "assets/images/eventos/EXPO2019/17.jpg",
        "assets/images/eventos/EXPO2019/18.jpg",
        "assets/images/eventos/EXPO2019/19.jpg",
        "assets/images/eventos/EXPO2019/20.jpg",
        "assets/images/eventos/EXPO2019/21.jpg",
        "assets/images/eventos/EXPO2019/22.jpg",
        "assets/images/eventos/EXPO2019/23.jpg",
        "assets/images/eventos/EXPO2019/24.jpg",
        "assets/images/eventos/EXPO2019/25.jpg",
        "assets/images/eventos/EXPO2019/26.jpg",
        "assets/images/eventos/EXPO2019/27.jpg",
        "assets/images/eventos/EXPO2019/28.jpg",
        "assets/images/eventos/EXPO2019/29.jpg",
        "assets/images/eventos/EXPO2019/30.jpg",
        "assets/images/eventos/EXPO2019/31.jpg",
        "assets/images/eventos/EXPO2019/32.jpg",
        "assets/images/eventos/EXPO2019/33.jpg",
        "assets/images/eventos/EXPO2019/34.jpg",
        "assets/images/eventos/EXPO2019/35.jpg",
        "assets/images/eventos/EXPO2019/36.jpg",
        "assets/images/eventos/EXPO2019/37.jpg",
        "assets/images/eventos/EXPO2019/38.jpg",
        "assets/images/eventos/EXPO2019/39.jpg",
        "assets/images/eventos/EXPO2019/40.jpg",
        "assets/images/eventos/EXPO2019/41.jpg",
        "assets/images/eventos/EXPO2019/42.jpg",
        "assets/images/eventos/EXPO2019/43.jpg",
        "assets/images/eventos/EXPO2019/44.jpg",
        "assets/images/eventos/EXPO2019/45.jpg",
      ]
    }
  ];

  image = "";
  nomeEvento = "";

  @ViewChild('imagemEvento', { read: TemplateRef }) imagemEvento: TemplateRef<any>;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(image, nomeEvento) {
    this.image = image;
    this.nomeEvento = nomeEvento;
    this.modalService.open(this.imagemEvento);
  }

  closeImage() {
    this.modalService.dismissAll();
  }

}
