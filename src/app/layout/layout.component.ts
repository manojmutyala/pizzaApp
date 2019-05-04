import { Component, OnInit, OnDestroy } from '@angular/core';
import { PizzaServiceService } from '../services/pizza-service.service';
import { Subscription }   from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  subscription: Subscription;
  constructor(private PizzaService: PizzaServiceService) { 
    this.subscription = PizzaService.buyTotalN.subscribe(
      item => {
        this.totalBuys = item;
      }
    )
  }
  
  ngOnInit() {
    this.totalBuys = this.PizzaService.buyTotal.length;
  }

  totalBuys:number = 0;

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
