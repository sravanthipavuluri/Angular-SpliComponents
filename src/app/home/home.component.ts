import { Component, OnInit , ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class HomeComponent implements OnInit {

  glistItems:any=[];
  itemName:string;
  itemDesc:string;
  itemPrice:number;

  constructor() {
    this.glistItems=[
      {
        listType : "GList", 
        itemName : "Monitor",
        itemDesc : "Display Item",
        itemPrice : 2000
      },
      {
        listType : "GWList", 
        itemName : "Keyboard",
        itemDesc : "Input Item",
        itemPrice : 500
      } 
    ]
   
  }
      
  ngOnInit() {
  }
  addItem(event:any):void{
    this.glistItems.push(event);
  }

}
