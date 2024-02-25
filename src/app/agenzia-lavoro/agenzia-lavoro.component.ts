import { Component } from '@angular/core';

@Component({
  selector: 'app-agenzia-lavoro',
  templateUrl: './agenzia-lavoro.component.html',
  styleUrls: ['./agenzia-lavoro.component.css']
})
export class AgenziaLavoroComponent {
  ticket:number = 0;
  tabellone: string[] = [];
  maxTicket:number = 10;
  lastTicket:string = '';
  coda: string[] = [];
  primoTicket?: string = '';

  prendiTicket(){
    this.ticket ++;
    this.ticketToString()
    this.addCoda();
  }

  private ticketToString(){
    
    let str:string = this.ticket.toString();
    
    this.lastTicket = str.padStart(3, '0');
    
    // if (this.ticket < 10) {
    //   str = '00' + str;
    // } 
    // else if (this.ticket < 100) {
    //   str = '0' + str
    // }

    // this.lastTicket = str;

  }

  private addCoda() {

    this.coda.push(this.lastTicket);
  }

  mostraTicket(){
    this.primoTicket = this.coda.shift();

    if(this.primoTicket !== undefined)
    {
      this.tabellone.unshift(this.primoTicket);
    }
    else{
      this.primoTicket = 'ticket finiti';
    }

    if (this.tabellone.length >= this.maxTicket) {
      this.tabellone.splice(this.maxTicket)
    }

  }

  leggiInt(nome:string){
    return parseInt(nome);
  }

}
