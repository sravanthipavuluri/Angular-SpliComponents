import { Component, OnInit, Input , Output , EventEmitter , ViewChild , ElementRef } from '@angular/core';

@Component({
  selector: 'app-goodsentry',
  templateUrl: './goodsentry.component.html',
  styleUrls: ['./goodsentry.component.css']
})
export class GoodsentryComponent implements OnInit {
  
  itemName:string;
  @ViewChild('itemPrice') textInput: ElementRef;


  // itemPrice1:number;
  // itemPrice2:number;
  // itemPrice3:number;
  // itemPrice4:number;
  // sum:number;
  // discount:number;

@Input() items:any;

  @Output() ItemAdded = new EventEmitter<{listType:string,itemName:string,itemDesc:string,itemPrice:number}>();
  constructor() { }

  ngOnInit() {
  }
  addGLItem(itemDesc:HTMLInputElement){
    this.ItemAdded.emit({
      listType: "GList",
      itemName: this.itemName,
      itemDesc: itemDesc.value,
      itemPrice: this.textInput.nativeElement.value
    })
    
  }
  addGWLItem(itemDesc:HTMLInputElement){
    this.ItemAdded.emit({
      listType: "GWList",
      itemName: this.itemName,
      itemDesc: itemDesc.value,
      itemPrice: this.textInput.nativeElement.value
    })
  }

  // AddSum(){
  //     this.sum  = this.itemPrice1+this.itemPrice2+this.itemPrice3+this.itemPrice4;
  //     //alert(this.sum);
  //     this.sum = this.sum - (this.sum*this.discount)/100;
  // }
}
