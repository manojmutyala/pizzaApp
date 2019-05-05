import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Pizza } from '../models/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class PizzaServiceService {

  constructor() { }
  private buyTotalNumber = new Subject<number>();
  buyTotalN = this.buyTotalNumber.asObservable();
  buyTotal = [];
  PIZZA: Pizza[] = [
    {
      pizzaId: 1008723,
      pizzaName: 'Margherita',
      pizzaUrl: 'https://www.skinnytaste.com/wp-content/uploads/2018/02/breakfast-pizza-1-8.jpg',
      prize: 259,
      favorite: false,
      buy: false,
      quantity: 1,
    },
    {
      pizzaId: 1008523,
      pizzaName: 'Mexican Green Wave',
      pizzaUrl: 'https://thestingyvegan.com/wp-content/uploads/2017/10/vegan-nacho-pizza-photo.jpg',
      prize: 129,
      favorite: false,
      buy: false,
      quantity: 1,
    },
    {
      pizzaId: 1008624,
      pizzaName: 'American Sandwitch',
      pizzaUrl: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2014/08/It-doesnt-get-much-better-than-Homemade-Hawaiian-Pizza.-Tropical-paradise-for-dinner-2.jpg',
      prize: 299,
      favorite: false,
      buy: false,
      quantity: 1,
    },
    {
      pizzaId: 1008625,
      pizzaName: 'Paneer Makhani',
      pizzaUrl: 'https://cookieandkate.com/images/2018/02/pizza-spaghetti-squash-recipe-550x824.jpg',
      prize: 229,
      favorite: false,
      buy: false,
      quantity: 1,
    },
    {
      pizzaId: 1008626,
      pizzaName: 'Pepper Barbecue',
      pizzaUrl: 'https://cookieandkate.com/images/2018/02/pizza-spaghetti-squash-close-up-550x824.jpg',
      prize: 429,
      favorite: false,
      buy: false,
      quantity: 1,
    },
    {
      pizzaId: 1008627,
      pizzaName: 'Chicken Pepperoni',
      pizzaUrl: 'https://thestingyvegan.com/wp-content/uploads/2017/10/vegan-nacho-pizza-photo.jpg',
      prize: 349,
      favorite: false,
      buy: false,
      quantity: 1,
    },
    {
      pizzaId: 1008628,
      pizzaName: 'Non Veg Supreme',
      pizzaUrl: 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_760/https://storage.googleapis.com/gen-atmedia/3/2018/03/55cd28cae8ee78fe1e52ab1adc9eafff24c9af92.jpeg',
      prize: 139,
      favorite: false,
      buy: false,
      quantity: 1,
    },
    {
      pizzaId: 1008629,
      pizzaName: 'Potato Cheese Shots',
      pizzaUrl: 'https://thebakermama.com/wp-content/uploads/2017/02/fullsizeoutput_58c7.jpg',
      prize: 89,
      favorite: false,
      buy: false,
      quantity: 1,
    },
    {
      pizzaId: 1008630,
      pizzaName: 'Taco Mexicana',
      pizzaUrl: 'https://www.skinnytaste.com/wp-content/uploads/2018/02/breakfast-pizza-1-8.jpg',
      prize: 99,
      favorite: false,
      buy: false,
      quantity: 1,
    },
  ]
  getPizzas(): Observable<Pizza[]> {
    
    console.log(this.PIZZA);
    return of(this.PIZZA);
  }

  buyClick(index): Observable<Pizza[]> {
    this.buyTotal.push(this.PIZZA[index]);
    this.buyTotalNumber.next(this.buyTotal.length);
    this.PIZZA[index].buy = true;
    return of(this.PIZZA);
  }

  removeClick(index): Observable<Pizza[]> {
    this.buyTotal.forEach((ele,ind) =>{
      if(this.PIZZA[index].pizzaId === ele.pizzaId) {
        this.buyTotal.splice(ind, 1);
      }
    })
    console.log(this.buyTotal);
    this.buyTotalNumber.next(this.buyTotal.length);
    this.PIZZA[index].buy = false;
    return of(this.PIZZA);
  }
  
  deleteItem(itemId): Observable<Pizza[]> {
    let index = 0;
    this.buyTotal.forEach((ele,ind) =>{
      if(itemId === ele.pizzaId) {
        this.buyTotal.splice(ind, 1);
        index = ind
      }
    })
    console.log(this.buyTotal);
    this.buyTotalNumber.next(this.buyTotal.length);
    this.PIZZA[index].buy = false;
    this.PIZZA[index].quantity = 1;
    return of(this.PIZZA);
  }

  deleteItemAll(): Observable<Pizza[]> {
    this.buyTotal = [];
    this.buyTotalNumber.next(this.buyTotal.length);
    this.PIZZA.forEach((ele,index) => {
      this.PIZZA[index].buy = false;
      this.PIZZA[index].quantity = 1;
    })
    return of(this.PIZZA);
  }

  heartClick(index): Observable<Pizza[]> {
    this.PIZZA[index].favorite = true;
    return of(this.PIZZA);
  }

  addQuantity(pizzaId): Observable<Pizza[]> {
    this.buyTotal.forEach((ele) => {
      if(ele.pizzaId == pizzaId) {
        ele.quantity++;
      }
    });
    return of(this.buyTotal);
  }

  minusQuantity(pizzaId): Observable<Pizza[]> {
    this.buyTotal.forEach((ele) => {
      if(ele.pizzaId == pizzaId) {
        ele.quantity--;
      }
    });
    return of(this.buyTotal);
  }
}
