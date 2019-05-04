import { Component, OnInit } from '@angular/core';
import { PizzaServiceService } from '../services/pizza-service.service';
import { Pizza } from '../models/pizza.model';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {

  constructor(private PizzaService: PizzaServiceService) { }

  ngOnInit() {
    this.getPizza();
  }

  pizzaItems: Pizza[];

  getPizza(): void {
    this.PizzaService.getPizzas()
    .subscribe(items => this.pizzaItems = items);
  }

  onBuyClick(index): void {
    console.log(index);
    this.PizzaService.buyClick(index)
    .subscribe(items => this.pizzaItems = items);
  }
  onRemoveClick(index): void {
    this.PizzaService.removeClick(index)
    .subscribe(items => this.pizzaItems = items);
  }

  onHeartClick(index): void {
    console.log(index);
    this.PizzaService.heartClick(index)
    .subscribe(items => this.pizzaItems = items);
  }

}
