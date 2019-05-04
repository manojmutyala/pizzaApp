import { Component, OnInit } from '@angular/core';
import { PizzaServiceService } from '../services/pizza-service.service';
import { Subscription }   from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private PizzaService: PizzaServiceService) { }
    

  ngOnInit() {
    this.buysArray = this.PizzaService.buyTotal
    this.totalCal();
    console.log(this.buysArray);
  }

  buysArray = [];
  totalAmount:number = 0;

  totalCal(): void {
    this.PizzaService.buyTotal.forEach(ele => {
      this.totalAmount += ele.prize;
    })
  }

  delete(itemId): void {
    console.log(itemId);
    this.PizzaService.buyTotal.forEach(ele => {
      if(itemId == ele.pizzaId) {
        this.totalAmount -= ele.prize;
      }
    })
    this.PizzaService.deleteItem(itemId);
  }

}
