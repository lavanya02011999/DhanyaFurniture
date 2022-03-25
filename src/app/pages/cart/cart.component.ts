import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private param:ActivatedRoute, private service:OrderDetailsService) { }
  getMenuId:any;
  furnitureData:any;
  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.furnitureData =  this.service.furnitureDetails.filter((value)=>{
          return value.id == this.getMenuId;
        });
        console.log(this.furnitureData,'menudata>>');
        
    }
    
  }
  }
