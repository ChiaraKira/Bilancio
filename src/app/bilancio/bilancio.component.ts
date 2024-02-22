import { Component } from '@angular/core';

@Component({
  selector: 'app-bilancio',
  templateUrl: './bilancio.component.html',
  styleUrls: ['./bilancio.component.css']
})
export class BilancioComponent {
  bilancio: number[] = [];
  numero: number = 0;

  aggiungiEntrata() {
    if(this.numero <= 0)
    {
      alert("Non inserire numeri negativi O ZERO")
    }
   else{
    this.bilancio.push(this.numero);
    this.numero = 0;
   }
  }

  aggiungiUscita(){
    if(this.numero <= 0)
    {
      alert("Non inserire numeri negativi O ZERO ci penso io!")
    }
   else{
    this.bilancio.push(-this.numero);
    this.numero = 0;
   }
  }

  rimuoviMovimento(index:number){
    this.bilancio.splice(index,1);
  }

  sommaMovimenti(){
    let somma = 0;
    for(let i = 0; i < this.bilancio.length; i++)
    {
      somma += this.bilancio[i];
    }
    return somma;
  }

  totEntrate(){
    let totE = 0;
    for(let i = 0; i < this.bilancio.length; i++)
    {
      if(this.bilancio[i]>0){
        totE += this.bilancio[i];
      }
    }
    return totE;
  }


  totUscite(){
    let totU = 0;
    for(let i = 0; i < this.bilancio.length; i++)
    {
      if(this.bilancio[i]>0){
        totU += this.bilancio[i];
      }
    }
    return totU;
  }

}
