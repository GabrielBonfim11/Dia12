import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import {IonContent, IonCardTitle, IonCard, IonCardHeader, IonCardSubtitle } from '@ionic/angular/standalone';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle],
})
export class HomePage implements OnInit{
  dataInicial: Date;
  tempoPassado: String = "00:00:00";
  intervalId: any;

  imagens = [
    {
      path: "../../assets/1.jpg"
    },
    {
      path: "../../assets/2.jpg"
    },
    {
      path: "../../assets/3.jpg"
    },
    {
      path: "../../assets/4.jpg"
    },
    {
      path: "../../assets/5.jpg"
    },
    {
      path: "../../assets/6.jpg"
    },
    {
      path: "../../assets/7.jpg"
    },
    {
      path: "../../assets/8.jpg"
    },
    {
      path: "../../assets/9.jpg"
    },
    {
      path: "../../assets/10.jpg"
    },
    {
      path: "../../assets/11.jpg"
    },
    {
      path: "../../assets/12.jpg"
    },
    {
      path: "../../assets/13.jpg"
    },
    {
      path: "../../assets/14.jpg"
    },
    {
      path: "../../assets/15.jpg"
    },
    {
      path: "../../assets/16.jpg"
    },
    {
      path: "../../assets/17.jpg"
    },
    {
      path: "../../assets/18.jpg"
    },
    {
      path: "../../assets/19.jpg"
    },
    {
      path: "../../assets/20.jpg"
    },
    {
      path: "../../assets/21.jpg"
    },
    {
      path: "../../assets/22.jpg"
    },
    {
      path: "../../assets/23.jpg"
    },
  ]

  dias: number = 0; 
  horas: number = 0; 
  minutos: number = 0; 
  segundos: number = 0; 

  constructor() {
    this.dataInicial = new Date(2020, 6, 18, 0, 0, 0);
  }

  ngOnInit(){
    this.atualizarTempo();
    
    this.intervalId = setInterval(() => {
      this.atualizarTempo();
    }, 1000);
  }

  atualizarTempo(){
    const agora = new Date();
    const tempoTotal = agora.getTime() - this.dataInicial.getTime();

    this.segundos = Math.floor((tempoTotal / 1000) % 60);
    this.minutos = Math.floor((tempoTotal / (1000 * 60)) % 60);
    this.horas = Math.floor((tempoTotal / (1000 * 60 * 60)) % 24);
    this.dias = Math.floor(tempoTotal / (1000 * 60 * 60 * 24));

    // this.tempoPassado = `${dias} DIAS, ${horas.toString().padStart(2, '0')} HORAS, ${minutos.toString().padStart(2, '0')} MINUTOS E  ${segundos.toString().padStart(2, '0')} SEGUNDOS`;
  }
}
