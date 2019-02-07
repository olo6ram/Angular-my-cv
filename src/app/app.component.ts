import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../models/portfolio.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public portfolio; // :Portfolio
  public logOpen:boolean = true;
  public logOpenUpdates:boolean = true;
  public ngOnInit():void{
    this.portfolio = {
      nom: 'DOE',
      prenom: 'JOHN',
      subheading:'Developpeur web and mobile',
      socialMedia:[
        {
          icon:"fa fa-facebook fa-2x",
          link:"https://www.facebook.com",
          color: "rgb(18,126,195)"
        },
        {
          icon:"fa fa-youtube-play fa-2x",
          link:"https://www.youtube.com",
          color: "#f00"
        },
        {
          icon:"fa fa-twitter fa-2x",
          link:"https://www.twtter.com",
          color: "rgb(21,105,232)"
        }
      ],
      introduction:"Hi, im Doe and i am web developpeur",
      changeLog:[
        {
          color:"rgb(242,75,240)",
          month:"November",
          year:2017,
          highlight:"worked on an angular projet",
          details:"lorem ksjflmsdkfj sdkfjdslkfjs qsmlff f jfqmkdfjkfj fkdfjdlkfjdfqmq dlflkdsjs ddfkjdfmfdkfjlksqdjfkjfksdfsdflfsml"
        },
        {
          color:"rgb(243,75,240)",
          month:"Septembre",
          year:2016,
          highlight:"worked on an JS projet",
          details:"lorem ksjflmsdkfj sdkfjdslkfjs qsmlff f jfqmkdfjkfj fkdfjdlkfjdfqmq dlflkdsjs ddfkjdfmfdkfjlksqdjfkjfksdfsdflfsml"
        },
        {
          color:"rgb(243,75,241)",
          month:"aout",
          year:2015,
          highlight:"worked on an html projet",
          details:"lorem ksjflmsdkfj sdkfjdslkfjs qsmlff f jfqmkdfjkfj fkdfjdlkfjdfqmq dlflkdsjs ddfkjdfmfdkfjlksqdjfkjfksdfsdflfsml"
        }
      ],
      updates:[
        {
          description:"this only one description of a fuction",
          link:"https://www.pinterest.com"
        },
        {
          description:"this another description of another fuction",
          link:"https://www.yahoo.com"
        },
        {
          description:"this one more description or other fuction",
          link:"https://www.tumblr.com"
        }
      ]
    }
  }
  public toggleOpen(valueToToggle:string):void{
    switch(valueToToggle){
      case 'logOpen':
      this.logOpen = !this.logOpen;
      break;
      case 'logOpenUpdates':
      this.logOpenUpdates = !this.logOpenUpdates;
      break;
    }
  }
}
