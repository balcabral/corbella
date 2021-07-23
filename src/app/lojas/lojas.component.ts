import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lojas',
  templateUrl: './lojas.component.html',
  styleUrls: ['./lojas.component.scss']
})
export class LojasComponent implements OnInit {

  mapa = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.4964542407706!2d-47.098346885400616!3d-22.895052543207523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c62d204e273b%3A0xe6e2655d28fe73a3!2sAv.%20Mal.%20Rondon%2C%201564%20-%20Jardim%20Chapad%C3%A3o%2C%20Campinas%20-%20SP%2C%2013070-173!5e0!3m2!1spt-BR!2sbr!4v1620680189081!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';

  cidades = [
    "Campinas",
    "Valinhos",
    "Paulínia",
    "Sumaré",
    "Hortolandia",
    "Indaiatuba",
    "Santa Bárbara d'Oeste",
    "Americana",
    "Piracicaba",
    "São Carlos",
    "Salto",
    "Vinhedo"
  ]

  lojas = [
    {
      cidade: "Campinas",
      nome: "CORBELLA MARECHAL RONDON",
      endereco: "AV MARECHAL RONDON, 1564 - JD CHAPADÃO",
      telefone: "(19) 3243-4087",
      email: "marechalrondon@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.4964542407706!2d-47.098346885400616!3d-22.895052543207523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c62d204e273b%3A0xe6e2655d28fe73a3!2sAv.%20Mal.%20Rondon%2C%201564%20-%20Jardim%20Chapad%C3%A3o%2C%20Campinas%20-%20SP%2C%2013070-173!5e0!3m2!1spt-BR!2sbr!4v1620680189081!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/01/01.jpg",
      visible: false
    },
    {
      cidade: "Campinas",
      nome: "CORBELLA PIÇARRÃO",
      endereco: "RUA IPORANGA, 120 - VILA MARIETA",
      telefone: "(19) 3234-0570",
      email: "picarrao@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.5745947939577!2d-47.05800168539984!3d-22.92905654442971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8ced5a84e65df%3A0x84e5d4fe2c81c94a!2sR.%20Iporanga%2C%20120%20-%20Vila%20Marieta%2C%20Campinas%20-%20SP%2C%2013042-075!5e0!3m2!1spt-BR!2sbr!4v1618266079349!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/02/02.jpg",
      visible: false
    },
    {
      cidade: "Campinas",
      nome: "P.H.E. BALÃO DO TAVARES",
      endereco: "AV STA MARGARIDA MARIA ALACOQUE, 543 - JD BANDEIRANTES",
      telefone: "(19) 3212-0663",
      email: "tavares@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.4366122693373!2d-47.09863218540051!3d-22.89726134328683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c62ca4ce5575%3A0x8ccc2a99eb1fe673!2sR.%20Santa%20Margarida%20Maria%20Alacoque%2C%20543%20-%20Jardim%20Bandeirantes%2C%20Campinas%20-%20SP%2C%2013033-390!5e0!3m2!1spt-BR!2sbr!4v1618267859880!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/03/03.jpg",
      visible: false
    },
    {
      cidade: "Campinas",
      nome: "P.H.E. SUAÇUNA",
      endereco: "AVENIDA SUAÇUNA, 672 - VILA AEROPORTO",
      telefone: "(19) 3266-1260",
      email: "suacuna@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.495845826917!2d-47.13036058539892!3d-22.968787145859956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c9dd1067af4f%3A0x9f0872470a1aa18c!2sAv.%20Sua%C3%A7una%2C%20672%20-%20VL%20Aeroporto%2C%20Campinas%20-%20SP%2C%2013054-105!5e0!3m2!1spt-BR!2sbr!4v1618268141797!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/04/04.jpg",
      visible: false
    },
    {
      cidade: "Campinas",
      nome: "CORBELLA RUY RODRIGUES",
      endereco: "AV RUY RODRIGUES, 1070 - JD SANTA LUCIA",
      telefone: "(19) 3263-1523",
      email: "ruyrodrigues@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.282349424808!2d-47.10981768539967!3d-22.939826444817108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c84de2dd19cb%3A0x11a3995b4ac7b2d!2sAv.%20Ruy%20Rodrigues%2C%201070%20-%20Jardim%20Santa%20L%C3%BAcia%2C%20Campinas%20-%20SP%2C%2013056-507!5e0!3m2!1spt-BR!2sbr!4v1618436763459!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/05/05.jpg",
      visible: false
    },
    {
      cidade: "Campinas",
      nome: "CORBELLA JAÇANA",
      endereco: "AV JACANA, 905 - VILA AEROPORTO",
      telefone: "(19) 3223-3529",
      email: "loja6@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.4665925593667!2d-47.13068628539877!3d-22.96986364589874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c9dd9f41f1a7%3A0x8579f2784a470ec3!2sR.%20Ja%C3%A7an%C3%A3%2C%20905%20-%20Vila%20Aeroporto%2C%20Campinas%20-%20SP%2C%2013054-130!5e0!3m2!1spt-BR!2sbr!4v1618436885137!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/06/06.jpg",
      visible: false
    },
    {
      cidade: "Valinhos",
      nome: "CORBELLA VALINHOS 1",
      endereco: "AV JOAQUIM ALVES CORREA, 4746 - PQ NOVA SUIÇA",
      telefone: "(19) 3849-6735",
      email: "valinhos@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.4037908029695!2d-47.01359248539888!3d-22.972174545982032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cdb7080279c9%3A0x4d0d554c26704d5d!2sAv.%20Joaquim%20Alves%20Corr%C3%AAa%2C%204746%20-%20PQ%20NV%20Sui%C3%A7a%2C%20Valinhos%20-%20SP%2C%2013271-425!5e0!3m2!1spt-BR!2sbr!4v1618437087738!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/07/07.jpg",
      visible: false
    },
    {
      cidade: "Paulínia",
      nome: "CORBELLA PAULINIA 1",
      endereco: "RUA BOLIVIA, 80 - JARDIM AMÉRICA",
      telefone: "(19) 3212-0349",
      email: "paulinia@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.8331350054727!2d-47.149481085403785!3d-22.771573038784172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8bfe497b00001%3A0x928927a211c908cf!2sR.%20Bol%C3%ADvia%2C%2080%20-%20Jardim%20America%2C%20Paul%C3%ADnia%20-%20SP%2C%2013140-709!5e0!3m2!1spt-BR!2sbr!4v1618437184607!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/08/08.jpg",
      visible: false
    },
    {
      cidade: "Sumaré",
      nome: "CORBELLA SUMARE 1",
      endereco: "AVENIDA LUÍS FRUTUOSO, 420 - VILA SANTANA",
      telefone: "(19) 3803-3116",
      email: "sumare@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.5727797638833!2d-47.275607585402625!3d-22.81828894045492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8bd42a3503fcf%3A0x9687fb94bc3c1880!2sAv.%20Lu%C3%ADs%20Frutuoso%2C%20420%20-%20Vila%20Santana%2C%20Sumar%C3%A9%20-%20SP%2C%2013170-260!5e0!3m2!1spt-BR!2sbr!4v1618437395413!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/09/09.jpg",
      visible: false
    },
    {
      cidade: "Campinas",
      nome: "CORBELLA SWISS PARK",
      endereco: "AV. DERMIVAL BERNARDES SIQUEIRA, 3000 - SWISS PARK",
      telefone: "(19) 3238-8107",
      email: "swisspark@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.263099055942!2d-47.07474768539869!3d-22.97735074616854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cbe423f12bf3%3A0xd59a192010cff2c6!2sAv.%20Dermival%20Bernardes%20Siqueira%2C%203000%20-%20Swiss%20Park%2C%20Campinas%20-%20SP%2C%2013049-593!5e0!3m2!1spt-BR!2sbr!4v1618437512678!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/10/10.jpg",
      visible: false
    },
    {
      cidade: "Campinas",
      nome: "CORBELLA CASTELO",
      endereco: "AV FRANCISCO JOSE DE CAMARGO ANDRADE, 620 - JD CHAPADÃO",
      telefone: "(19) 3325-0003",
      email: "castelo@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.776242107076!2d-47.07621158540089!3d-22.884722742836587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c61742ec5d49%3A0x662f62215ac13c13!2sAv.%20Francisco%20Jos%C3%A9%20de%20Camargo%20Andrade%2C%20620%20-%20Jardim%20Chapad%C3%A3o%2C%20Campinas%20-%20SP%2C%2013070-055!5e0!3m2!1spt-BR!2sbr!4v1618437987170!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/11/11.jpg",
      visible: false
    },
    {
      cidade: "Hortolandia",
      nome: "CORBELLA HORTOLANDIA 1",
      endereco: "R. AMÉLIA CAMARGO BLUMER, 10 - REMANSO CAMPINEIRO",
      telefone: "(19) 3504-1264",
      email: "hortolandia@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.2257330146426!2d-47.21492518540136!3d-22.86811824224077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b955c7797e1f%3A0x5e1aefa15eb64258!2sR.%20Am%C3%A9lia%20Camargo%20Blumer%2C%2010%20-%20Lot.%20Remanso%20Campineiro%2C%20Hortol%C3%A2ndia%20-%20SP%2C%2013184-440!5e0!3m2!1spt-BR!2sbr!4v1618438093136!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/12/12.jpg",
      visible: false
    },
    {
      cidade: "Campinas",
      nome: "CORBELLA BARÃO GERALDO 1",
      endereco: "AVENIDA ALBINO JOSE BARBOSA DE OLIVEIRA, 1603 - BARÃO GERALDO",
      telefone: "(19) 3395-6110",
      email: "barao@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.4149442507915!2d-47.08244558540237!3d-22.824132840664188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c6cbcac747e7%3A0x693e2497cf61e7d9!2sAv.%20Albino%20J.%20B.%20de%20Oliveira%2C%201603%20-%20Jardim%20Afife%2C%20Campinas%20-%20SP%2C%2013084-008!5e0!3m2!1spt-BR!2sbr!4v1618438162028!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/14/14.jpg",
      visible: false
    },
    {
      cidade: "Hortolandia",
      nome: "CORBELLA HORTOLANDIA 2",
      endereco: "RUA LIBERO BADARO, 314 - JARDIM SANTA RITA DE CASSIA",
      telefone: "(19) 3504-4486",
      email: "hortolandia2@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.869538648415!2d-47.19829308540105!3d-22.8812772427129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b96b16f83309%3A0xf8aeae49e8ca1352!2sR.%20L%C3%ADbero%20Badar%C3%B3%2C%20314%20-%20JS%20STA%20Rita%20DE%20Cassia%2C%20Hortol%C3%A2ndia%20-%20SP%2C%2013186-260!5e0!3m2!1spt-BR!2sbr!4v1618438227542!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/15/15.jpg",
      visible: false
    },
    {
      cidade: "Campinas",
      nome: "CORBELLA LONDRES",
      endereco: "RUA JOSE ROSOLEM, 317 - JARDIM LONDRES",
      telefone: "(19) 3395-4336",
      email: "londres@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.8312290957433!2d-47.114288785400035!3d-22.919595044089498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c86c2b247783%3A0x6c820b87b2ce38b6!2sR.%20Jos%C3%A9%20Rosolem%2C%20317%20-%20Jardim%20Londres%2C%20Campinas%20-%20SP%2C%2013060-222!5e0!3m2!1spt-BR!2sbr!4v1618438310646!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/16/16.jpg",
      visible: false
    },
    {
      cidade: "Valinhos",
      nome: "CORBELLA VALINHOS 2",
      endereco: "AVENIDA DOS ESPORTES, 477 - VILA BISSOTO",
      telefone: "(19) 3299-5245",
      email: "valinhos2@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.3350142724275!2d-46.99985528539862!3d-22.974705046073133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cd97814a064b%3A0xc2d05c4b5704fb74!2sAv.%20dos%20Esportes%2C%20477%20-%20Vila%20Olivo%2C%20Valinhos%20-%20SP%2C%2013270-210!5e0!3m2!1spt-BR!2sbr!4v1620680337866!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/17/17.jpg",
      visible: false
    },
    {
      cidade: "Indaiatuba",
      nome: "CORBELLA INDAIATUBA 1",
      endereco: "AV PRESIDENTE VARGAS, 252 - VILA VITORIA II",
      telefone: "(19) 3329-2545",
      email: "indaiatuba@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.234764619789!2d-47.21067318539581!3d-23.088500350183953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b4ac1dd51695%3A0xf2d66ccfe10b44e1!2sAv.%20Pres.%20Vargas%2C%20252%20-%20Vila%20Vitoria%20II%2C%20Indaiatuba%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1620680437284!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/18/18.jpg",
      visible: false
    },
    {
      cidade: "Campinas",
      nome: "CORBELLA JARDIM DO TREVO",
      endereco: "AV BENEDITO DE CAMPOS, 447 - JARDIM DO TREVO",
      telefone: "(19) 3272-0330",
      email: "trevo@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.6145659725257!2d-47.07126858539989!3d-22.92758314437675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c8d9eda4c499%3A0xbb3c2938d611695c!2sAv.%20Benedito%20de%20Campos%2C%20447%20-%20Jardim%20do%20Trevo%2C%20Campinas%20-%20SP%2C%2013030-100!5e0!3m2!1spt-BR!2sbr!4v1620680502993!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/19/19.jpg",
      visible: false
    },
    {
      cidade: "Campinas",
      nome: "CORBELLA TAQUARAL",
      endereco: "AVENIDA MONSENHOR JERONIMO BAGGIO, 58 - JD NOSSA SENHORA AUXILIADORA",
      telefone: "(19) 3381-7643",
      email: "auxiliadora@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.8357146034296!2d-47.067075385400955!3d-22.882526442757694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c60588f7b1df%3A0x453b50c2f118aaa3!2sAv.%20Monsenhor%20Jer%C3%B4nimo%20Baggio%2C%2058%20-%20Jardim%20Nossa%20Sra.%20Auxiliadora%2C%20Campinas%20-%20SP%2C%2013075-350!5e0!3m2!1spt-BR!2sbr!4v1620680583245!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/20/20.jpg",
      visible: false
    },
    {
      cidade: "Hortolandia",
      nome: "CORBELLA JARDIM AMANDA",
      endereco: "AVENIDA SANTANA, 339 - JD AMANDA I",
      telefone: "(19) 3865-1024",
      email: "jdamanda@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.3547243873127!2d-47.232247985400576!3d-22.900283543395435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8bbc8c1d397f7%3A0xc56e0f9a29465318!2sAv.%20Santana%2C%20339%20-%20Parque%20Ortol%C3%A2ndia%2C%20Hortol%C3%A2ndia%20-%20SP%2C%2013184-210!5e0!3m2!1spt-BR!2sbr!4v1620680651949!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/21/21.jpg",
      visible: false
    },
    {
      cidade: "Santa Bárbara d'Oeste",
      nome: "CORBELLA SANTA BARBARA",
      endereco: "RUA DO OSMIO, 171 - JARDIM MOLLON",
      telefone: "(19) 3629-3350",
      email: "santabarbara@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.492387279089!2d-47.36697388540442!3d-22.747101237910325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c89bf15cb0a1f7%3A0x5375debde6e7be29!2sR.%20do%20%C3%93smio%2C%20171%20-%20Mollon%2C%20Santa%20B%C3%A1rbara%20d&#39;Oeste%20-%20SP%2C%2013456-620!5e0!3m2!1spt-BR!2sbr!4v1620680720372!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/22/22.jpg",
      visible: false
    },
    {
      cidade: "Sumaré",
      nome: "CORBELLA TINTAS SUMARE 2",
      endereco: "AV JULIA VASCONCELOS BUFARAH, 459 - CENTRO",
      telefone: "(19) 3883-1991",
      email: "sumare2@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.5407398648795!2d-47.26827878540257!3d-22.819475340497448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8bd6e834fc1d1%3A0xe7105e8f3f96d643!2sAv.%20J%C3%BAlia%20Vasconcelos%20Bufarah%2C%20459%20-%20Centro%2C%20Sumar%C3%A9%20-%20SP%2C%2013170-006!5e0!3m2!1spt-BR!2sbr!4v1620680789486!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/23/23.jpg",
      visible: false
    },
    {
      cidade: "Paulínia",
      nome: "CORBELLA PAULINIA 2",
      endereco: "AVENIDA PAULISTA, 342 - JD PLANALTO",
      telefone: "(19) 3217-1778",
      email: "paulinia2@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.3252010934493!2d-47.17002908540427!3d-22.75330963813188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8950d29c7212f%3A0x5afa74fd3604fef6!2sAv.%20Paulista%2C%20342%20-%20Jardim%20Planalto%2C%20Paul%C3%ADnia%20-%20SP%2C%2013145-089!5e0!3m2!1spt-BR!2sbr!4v1620680848094!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/24/24.jpg",
      visible: false
    },
    {
      cidade: "Americana",
      nome: "CORBELLA TINTAS AMERICANA",
      endereco: "RUA FLORINDO CIBIN, 1065 - PARAISO",
      telefone: "(19) 3601-1321",
      email: "americana@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.597614538175!2d-47.343193785404544!3d-22.74319283777085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c89bcff97e3dab%3A0xe26ca4fcf04171d5!2sR.%20Florindo%20Cibin%2C%201065%20-%20Para%C3%ADso%2C%20Americana%20-%20SP%2C%2013465-700!5e0!3m2!1spt-BR!2sbr!4v1620680911156!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/25/25.jpg",
      visible: false
    },
    {
      cidade: "Indaiatuba",
      nome: "CORBELLA INDAIATUBA 2",
      endereco: "AVENIDA ÁRIO BARNABÉ, 427 - JD MORADA DO SOL",
      telefone: "(19) 3328-0687",
      email: "indaiatuba2@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.402409021727!2d-47.230927985395134!3d-23.118961951287663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf4cbdfe567101%3A0x612a20de93694ae6!2sAv.%20%C3%81rio%20Barnab%C3%A9%2C%20427%20-%20Jardim%20Morada%20do%20Sol%2C%20Indaiatuba%20-%20SP%2C%2013346-400!5e0!3m2!1spt-BR!2sbr!4v1620680968724!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/26/26.jpg",
      visible: false
    },
    {
      cidade: "Campinas",
      nome: "CORBELLA BARAO GERALDO 2",
      endereco: "AVENIDA SANTA IZABEL, 273 - BARAO GERALDO",
      telefone: "(19) 2117-7941",
      email: "barao2@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.358103403217!2d-47.08395028540252!3d-22.826237040739578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c6c95dc97c6f%3A0x3499a07eef49846a!2sAv.%20Santa%20Isabel%2C%20273%20-%20Bar%C3%A3o%20Geraldo%2C%20Campinas%20-%20SP%2C%2013084-012!5e0!3m2!1spt-BR!2sbr!4v1620681031272!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/27/27.jpg",
      visible: false
    },
    {
      cidade: "Piracicaba",
      nome: "CORBELLA PIRACICABA",
      endereco: "AVENIDA PROFESSOR ALBERTO VOLLET SACHS, 3213 - VILA INDEPENDENCIA",
      telefone: "(19) 3377-3505",
      email: "piracicaba@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.0645846089637!2d-47.62946208540479!3d-22.725840737151938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c631b67186347f%3A0x9cfa33abd5c776bb!2sAv.%20Prof.%20Alberto%20Vollet%20Sachs%2C%203213%20-%20Vila%20Independencia%2C%20Piracicaba%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1620681076038!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/28/28.jpg",
      visible: false
    },
    {
      cidade: "Indaiatuba",
      nome: "CORBELLA INDAIATUBA 3",
      endereco: "AVENIDA CONCEICAO, 2102 - CIDADE NOVA II",
      telefone: "(19) 2518-6150",
      email: "indaiatuba3@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.584348347385!2d-47.203906485396125!3d-23.075695349720426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b4bc639ae13d%3A0xcf727164862b10d8!2sAv.%20Concei%C3%A7%C3%A3o%2C%202102%20-%20Cidade%20Nova%20II%2C%20Indaiatuba%20-%20SP%2C%2013334-345!5e0!3m2!1spt-BR!2sbr!4v1620681148513!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/29/29.jpg",
      visible: false
    },
    {
      cidade: "Piracicaba",
      nome: "CORBELLA PIRACICABA 2",
      endereco: "RUA VIRGILIO DA SILVA FAGUNDES, 466 - SANTA TEREZINHA",
      telefone: "(19) 3371-8000",
      email: "piracicaba2@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.354929939655!2d-47.68216948540593!3d-22.677827535441605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c633869d77823f%3A0x296708c555dc152d!2sR.%20Virg%C3%ADlio%20da%20Silva%20Fagundes%2C%20466%20-%20Santa%20Terezinha%2C%20Piracicaba%20-%20SP%2C%2013411-083!5e0!3m2!1spt-BR!2sbr!4v1620681236532!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/30/30.jpg",
      visible: false
    },
    {
      cidade: "Hortolandia",
      nome: "CORBELLA HORTOLANDIA 4",
      endereco: "RUA ANTONIO FERNANDES LEITE, 115 - JD SANTA IZABEL",
      telefone: "(19) 3809-3581",
      email: "hortolandia4@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.5318209650945!2d-47.178220485400814!3d-22.8937470431607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b9ab3b0a27c7%3A0xc2f9b9a26183c88f!2sR.%20Ant%C3%B4nio%20Fernandes%20Leite%2C%20115%20-%20Jardim%20Santa%20Izabel%2C%20Hortol%C3%A2ndia%20-%20SP%2C%2013185-230!5e0!3m2!1spt-BR!2sbr!4v1620681303074!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/31/31.jpg",
      visible: false
    },
    {
      cidade: "Campinas",
      nome: "CORBELLA BALAO DO LARANJA",
      endereco: "AVENIDA PRESIDENTE JUSCELINO, 505 - JD CAMPOS ELISEOS",
      telefone: "(19) 3291-2878",
      email: "balaodolaranja@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.538034257044!2d-47.10250108539988!3d-22.93040414447818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c859a71e3759%3A0xddca6be67e6bcde2!2sAv.%20Pres.%20Juscelino%2C%20505%20-%20Jardim%20Campos%20Eliseos%2C%20Campinas%20-%20SP%2C%2013060-858!5e0!3m2!1spt-BR!2sbr!4v1620681358714!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/32/32.jpg",
      visible: false
    },
    {
      cidade: "Campinas",
      nome: "CORBELLA SOUSAS",
      endereco: "AVENIDA ANTONIO CARLOS COUTO DE BARROS, 650 - JARDIM CONCEICAO (SOUSAS)",
      telefone: "(19) 3307-4179",
      email: "sousas@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.8385550022995!2d-46.97395088540089!3d-22.882421542754003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8d0232734c229%3A0xd2997d3d5f030f00!2sAv.%20Dr.%20Ant%C3%B4nio%20Carlos%20Couto%20de%20Barros%2C%20650%20-%20Vila%20S%C3%B4nia%20(Sousas)%2C%20Campinas%20-%20SP%2C%2013105-500!5e0!3m2!1spt-BR!2sbr!4v1620681434515!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/33/33.jpg",
      visible: false
    },
    {
      cidade: "Piracicaba",
      nome: "CORBELLA PIRACICABA 3",
      endereco: "AV DOUTOR PAULO DE MORAES, 1000 - PAULISTA",
      telefone: "(19) 3302-9427",
      email: "piracicaba3@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.8718157844237!2d-47.66275218540467!3d-22.7330053374074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c631116c0b00f3%3A0x68bd4866e99353aa!2sAv.%20Dr.%20Paulo%20de%20Moraes%2C%201000%20-%20Paulista%2C%20Piracicaba%20-%20SP%2C%2013400-853!5e0!3m2!1spt-BR!2sbr!4v1620681514939!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/34/34.jpg",
      visible: false
    },
    {
      cidade: "Salto",
      nome: "CORBELLA TINTAS SALTO",
      endereco: "AVENIDA JOSE MARIA MARQUES DE OLIVEIRA, 1000 - VILA NORMA",
      telefone: "(11) 4029-2120",
      email: "salto@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.8038942464755!2d-47.31424808539374!3d-23.1773564534075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf52429da4d5ad%3A0x45a7fb352d0c3445!2sAv.%20Jose%20Maria%20Marques%20de%20Oliveira%2C%201000%20-%20Res.%20Alvorada%2C%20Salto%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1620681592372!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/35/35.jpg",
      visible: false
    },
    {
      cidade: "Piracicaba",
      nome: "CORBELLA PIRACICABA 4",
      endereco: "AVENIDA DOIS CORREGOS, 297 - PIRACICAMIRIM",
      telefone: "(19) 3374-4100",
      email: "piracicaba4@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.7227024179297!2d-47.629807585404514!3d-22.738545937605025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c63049b26615cb%3A0x2746151a4b2ba18a!2sAv.%20Dois%20C%C3%B3rregos%2C%20297%20-%20Piracicamirim%2C%20Piracicaba%20-%20SP%2C%2013420-610!5e0!3m2!1spt-BR!2sbr!4v1620681649189!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/36/36.jpg",
      visible: false
    },
    {
      cidade: "São Carlos",
      nome: "CORBELLA SÃO CARLOS 1",
      endereco: "AVENIDA GETULIO VARGAS, 1830 - VILA LUTFALLA",
      telefone: "(16) 3368-2318",
      email: "saocarlos@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.38651086684!2d-47.875374585421696!3d-22.03480561287544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b876f9e925c979%3A0x23e530bc6d57c802!2sAv.%20Get%C3%BAlio%20Vargas%2C%201830%20-%20Vila%20Lutfalla%2C%20S%C3%A3o%20Carlos%20-%20SP%2C%2013570-390!5e0!3m2!1spt-BR!2sbr!4v1620681707434!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/37/37.jpg",
      visible: false
    },
    {
      cidade: "Paulínia",
      nome: "CORBELLA PAULINIA 3",
      endereco: "AVENIDA JOSE PAULINO, 4733 - PARQUE DA FIGUEIRA",
      telefone: "(19) 3833-3589",
      email: "paulinia3@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.292348827693!2d-47.14090908540315!3d-22.791628739501082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8bf00b39e027b%3A0x57cbc375db56a9af!2sAv.%20Jos%C3%A9%20Paulino%2C%204733%20-%20Parque%20da%20Figueira%2C%20Paul%C3%ADnia%20-%20SP%2C%2013140-000!5e0!3m2!1spt-BR!2sbr!4v1620681767154!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/38/38.jpg",
      visible: false
    },
    {
      cidade: "Sumaré",
      nome: "CORBELLA SUMARÉ 3",
      endereco: "AVENIDA FUAD ASSEF MALUF, 1932 - RESIDENCIAL BORDON",
      telefone: "(19) 2214-7440",
      email: "sumare3@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.9810099149736!2d-47.27473578540303!3d-22.80316753991376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c897de03631913%3A0xc4699ef8fb44b270!2sAv.%20Fuad%20Assef%20Maluf%2C%201932%20-%20Res.%20Bordon%2C%20Sumar%C3%A9%20-%20SP%2C%2013173-382!5e0!3m2!1spt-BR!2sbr!4v1620681824289!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/39/39.jpg",
      visible: false
    },
    {
      cidade: "São Carlos",
      nome: "CORBELLA SÃO CARLOS 2",
      endereco: "RUA MIGUEL PETRONI, 3382 - JARDIM BANDEIRANTES",
      telefone: "(16) 3307-4002",
      email: "saocarlos2@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.4831555924525!2d-47.92078238542278!3d-21.99279091142303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8709f034cd375%3A0xf9a722cdf7408cc4!2sR.%20Miguel%20Petroni%2C%203382%20-%20Jardim%20Bandeirantes%2C%20S%C3%A3o%20Carlos%20-%20SP%2C%2013563-470!5e0!3m2!1spt-BR!2sbr!4v1620681882886!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/40/40.jpg",
      visible: false
    },
    {
      cidade: "Vinhedo",
      nome: "CORBELLA VINHEDO",
      endereco: "Av independência 7132, Jardim São Matheus - Vinhedo",
      telefone: "(19) 3886-3316",
      email: "corbella.vinhedo@terra.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.27838662794!2d-46.988221785397734!3d-23.013548547474144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cd515a6ed0b1%3A0x61732895b25691b8!2sAv.%20Independ%C3%AAncia%2C%207132%20-%20Jardim%20Sao%20Matheus%2C%20Vinhedo%20-%20SP%2C%2013280-000!5e0!3m2!1spt-BR!2sbr!4v1627051488810!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/13/13.jpg",
      visible: false
    },
    {
      cidade: "Vinhedo",
      nome: "CORBELLA VINHEDO 2",
      endereco: "Av Brasil 789 - Jardim Brasil - Vinhedo - SP",
      telefone: "(19) 3826-3696",
      email: "vinhedo2@corbellatintas.com.br",
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.6823345583825!2d-46.987096785397306!3d-23.035433148264403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf32a18468d0ff%3A0x244ce98dd89d0292!2sAv.%20Brasil%2C%20789%20-%20Res.%20Aqu%C3%A1rio%2C%20Vinhedo%20-%20SP%2C%2013280-000!5e0!3m2!1spt-BR!2sbr!4v1627051409133!5m2!1spt-BR!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
      foto: "assets/images/lojas/41/41.jpg",
      visible: false
    }
  ];

  lojasTela = this.lojas;

  image = "";
  nomeLoja = "";

  @ViewChild('imagemLoja', { read: TemplateRef }) imagemLoja: TemplateRef<any>;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.cidades.sort();
  }

  open(image, nomeLoja) {
    this.image = image;
    this.nomeLoja = nomeLoja;
    this.modalService.open(this.imagemLoja);
  }

  closeImage() {
    this.modalService.dismissAll();
  }

  changeMap(map) {
    this.mapa = map;
  }

  showMap(loja) {
    loja.visible = !loja.visible;
  }

  changeCity(city) {
    this.lojasTela = this.lojas;
    if (city !== "todas") {
      this.lojasTela = this.lojas.filter(lojas => {
        return lojas.cidade === city;
      })
    }
  }

}
