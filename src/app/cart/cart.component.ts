import { Component, OnInit, OnDestroy } from '@angular/core';
import { PizzaServiceService } from '../services/pizza-service.service';
import { Subscription }   from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  host: {
    style:'width:100%;margin: 20px;'
  }
})
export class CartComponent implements OnInit {

  constructor(private PizzaService: PizzaServiceService) { }
    

  ngOnInit() {
    this.buysArray = this.PizzaService.buyTotal
    this.totalCal();
    console.log(this.buysArray);
  }
  current = 0;
  index = 'First-content';
  buysArray = [];
  totalAmount:number = 0;
  selectedValue = null;

  totalCal(): void {
    this.totalAmount = 0;
    this.PizzaService.buyTotal.forEach(ele => {
      this.totalAmount += ele.prize * ele.quantity;
    })
  }

  addItem(pizzaId): void {
    this.PizzaService.addQuantity(pizzaId)
    .subscribe(items => this.buysArray = items);
    this.totalCal();
  }

  minusItem(pizzaId): void {
    this.buysArray.forEach(ele => {
      if(ele.pizzaId == pizzaId) {
        if(ele.quantity !== 1) {
          this.PizzaService.minusQuantity(pizzaId)
        .subscribe(items => this.buysArray = items);
        } else {
          this.delete(pizzaId);
        }
      }
    })
  }

  delete(itemId): void {
    this.PizzaService.buyTotal.forEach(ele => {
      if(itemId == ele.pizzaId) {
        this.totalAmount -= ele.prize * ele.quantity;
      }
    })
    this.PizzaService.deleteItem(itemId);
  }

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    if(this.current == 2 && this.selectedValue != null) {
      this.changeContent();  
    } else if (this.current == 1) {
      this.changeContent();
    } else {
      this.current -= 1;
      alert('Please Select Payment Bank');
    }
    // this.changeContent();
  }

  done(): void {
      this.PizzaService.deleteItemAll();
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'First-content';
        break;
      }
      case 1: {
        this.index = 'Second-content';
        break;
      }
      case 2: {
        this.index = 'third-content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }

}
