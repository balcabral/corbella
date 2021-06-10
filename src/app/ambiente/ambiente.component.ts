import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ambiente',
  templateUrl: './ambiente.component.html',
  styleUrls: ['./ambiente.component.scss']
})
export class AmbienteComponent implements OnInit {

  cores = [
    {
      nome: "Branco",
      css: "branco",
      tons: [
        {
          nomeTom: "Branco Permanente",
          corTom: "#F2ECDF"
        },
        {
          nomeTom: "Branco",
          corTom: "#F2ECDF"
        },
        {
          nomeTom: "Branco Artesão",
          corTom: "#EFEBE3"
        },
        {
          nomeTom: "Branco Gatinho",
          corTom: "#E6E1D8"
        },
        {
          nomeTom: "Esquinócio de Outono",
          corTom: "#E3DCD4"
        },
        {
          nomeTom: "Branco Gelo",
          corTom: "#DBD8D0"
        },
      ]
    },
    {
      nome: "Vermelho",
      css: "vermelho",
      tons: [
        {
          nomeTom: "Violeta",
          corTom: "#E1D1D7"
        },
        {
          nomeTom: "Rosa Açai",
          corTom: "#C46F8A"
        },
        {
          nomeTom: "Rubi",
          corTom: "#B44A47"
        },
        {
          nomeTom: "Vermelho Cardinal",
          corTom: "#B33E3C"
        },
        {
          nomeTom: "Vermelho",
          corTom: "#A82223"
        },
        {
          nomeTom: "Vermelho goya",
          corTom: "#5C2927"
        },
      ]
    },
    {
      nome: "Laranja",
      css: "laranja",
      tons: [
        {
          nomeTom: "Pêsssego",
          corTom: "#EABDA3"
        },
        {
          nomeTom: "Laranja Cítrico",
          corTom: "#F7A156"
        },
        {
          nomeTom: "Laranja Imperial",
          corTom: "#E48E5F"
        },
        {
          nomeTom: "Laranja Maracatú",
          corTom: "#E97B4E"
        },
        {
          nomeTom: "Laranja",
          corTom: "#D75413"
        },
        {
          nomeTom: "Cerâmica",
          corTom: "#944F39"
        },
      ]
    },
    {
      nome: "Dourado",
      css: "dourado",
      tons: [
        {
          nomeTom: "Romã",
          corTom: "#F6E7D2"
        },
        {
          nomeTom: "Amarelo Canário",
          corTom: "#B96B35"
        },
        {
          nomeTom: "Creme",
          corTom: "#E2BE8B"
        },
        {
          nomeTom: "Amarelo Demarcação",
          corTom: "#EEB34C"
        },
        {
          nomeTom: "Mangaba",
          corTom: "#DC9C50"
        },
        {
          nomeTom: "Amarelo",
          corTom: "#FCA400"
        },
      ]
    },
    {
      nome: "Amarelo",
      css: "amarelo",
      tons: [
        {
          nomeTom: "Geada",
          corTom: "#EBE4D1"
        },
        {
          nomeTom: "Pérola",
          corTom: "#F1E1C9"
        },
        {
          nomeTom: "Palha",
          corTom: "#EBDEC6"
        },
        {
          nomeTom: "Marfim",
          corTom: "#EEDCBB"
        },
        {
          nomeTom: "Amarelo Frevo",
          corTom: "#FCBE39"
        },
        {
          nomeTom: "Ouro",
          corTom: "#CEA127"
        },
      ]
    },
    {
      nome: "Lima",
      css: "lima",
      tons: [
        {
          nomeTom: "Verde Vale",
          corTom: "#D9DCB8"
        },
        {
          nomeTom: "Refresco",
          corTom: "#D8C552"
        },
        {
          nomeTom: "Verde Limão",
          corTom: "#B2BB5B"
        },
        {
          nomeTom: "Imensidão Verde",
          corTom: "#ACA90C"
        },
        {
          nomeTom: "Verde Intuição",
          corTom: "#908B2C"
        },
        {
          nomeTom: "Estragão",
          corTom: "#484737"
        },
      ]
    },
    {
      nome: "Verde",
      css: "verde",
      tons: [
        {
          nomeTom: "Verde Primavera",
          corTom: "#E0EBCF"
        },
        {
          nomeTom: "Verde Nilo",
          corTom: "#81A473"
        },
        {
          nomeTom: "Verde Timbalada",
          corTom: "#56A251"
        },
        {
          nomeTom: "Verde Quadra",
          corTom: "#5B7252"
        },
        {
          nomeTom: "Verde Escolar",
          corTom: "#4F584D"
        },
        {
          nomeTom: "Verde Folha",
          corTom: "#3A6332"
        },
      ]
    },
    {
      nome: "Turquesa",
      css: "turquesa",
      tons: [
        {
          nomeTom: "Céu Aquariano",
          corTom: "#D9EDE3"
        },
        {
          nomeTom: "Perfume de Hortelã",
          corTom: "#CAE3DB"
        },
        {
          nomeTom: "Beleza do Caribe",
          corTom: "#89D6D5"
        },
        {
          nomeTom: "Verde Piscina",
          corTom: "#A0D9D0"
        },
        {
          nomeTom: "Pavão",
          corTom: "#009FA7"
        },
        {
          nomeTom: "Azul Piscina",
          corTom: "#0088A3"
        },
      ]
    },
    {
      nome: "Azul",
      css: "azul",
      tons: [
        {
          nomeTom: "Azul Praia",
          corTom: "#C3DEE9"
        },
        {
          nomeTom: "Marine",
          corTom: "#AFCBD4"
        },
        {
          nomeTom: "Azul Arpoador",
          corTom: "#7CB8C6"
        },
        {
          nomeTom: "Oceano",
          corTom: "#0092C4"
        },
        {
          nomeTom: "Azul Profundo",
          corTom: "#006F9A"
        },
        {
          nomeTom: "Azul Del Rey",
          corTom: "#113D63"
        },
      ]
    },
    {
      nome: "Violeta",
      css: "violeta",
      tons: [
        {
          nomeTom: "Lilás",
          corTom: "#A3AEC6"
        },
        {
          nomeTom: "Branco Alfazema",
          corTom: "#D1D2DC"
        },
        {
          nomeTom: "Lilás Primavera",
          corTom: "#C8B7D6"
        },
        {
          nomeTom: "Dignidade",
          corTom: "#AD94C2"
        },
        {
          nomeTom: "Poção Mágica",
          corTom: "#546894"
        },
        {
          nomeTom: "Espírito de Sedução",
          corTom: "#5F507A"
        },
      ]
    },
    {
      nome: "Neutro Frio",
      css: "neutro-frio",
      tons: [
        {
          nomeTom: "Prata",
          corTom: "#AFB4AC"
        },
        {
          nomeTom: "Platina",
          corTom: "#ABB1AC"
        },
        {
          nomeTom: "Cinza Médio",
          corTom: "#919C9A"
        },
        {
          nomeTom: "Cinza Escuro",
          corTom: "#5C5C5B"
        },
        {
          nomeTom: "Cinza - Padrãp Ferrolack",
          corTom: "#E5FFF4"
        },
        {
          nomeTom: "Preto",
          corTom: "#3B3C3C"
        },
      ]
    },
    {
      nome: "Neutro Quente",
      css: "neutro-quente",
      tons: [
        {
          nomeTom: "Castanho",
          corTom: "#D7BEA3"
        },
        {
          nomeTom: "Zepelim",
          corTom: "#B7B3AC"
        },
        {
          nomeTom: "Camurça",
          corTom: "#BDA68D"
        },
        {
          nomeTom: "Concreto",
          corTom: "#9C8F79"
        },
        {
          nomeTom: "Tabaco",
          corTom: "#6B442F"
        },
        {
          nomeTom: "Marrom",
          corTom: "#4B2F28"
        },
      ]
    }
  ];

  tons = [
    {
      nomeTom: "Branco Permanente",
      corTom: "#F2ECDF"
    },
    {
      nomeTom: "Branco",
      corTom: "#F2ECDF"
    },
    {
      nomeTom: "Branco Artesão",
      corTom: "#EFEBE3"
    },
    {
      nomeTom: "Branco Gatinho",
      corTom: "#E6E1D8"
    },
    {
      nomeTom: "Esquinócio de Outono",
      corTom: "#E3DCD4"
    },
    {
      nomeTom: "Branco Gelo",
      corTom: "#DBD8D0"
    },
  ];

  corFundo = 'orange';

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(color) {
    this.corFundo = color;
  }

  setTom(tons) {
    this.tons = tons;
  }

}
