import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css']
})
export class GoodslistComponent implements OnInit {

  @Input() Glist:any;
  constructor() { }

  ngOnInit() {
  }

}
