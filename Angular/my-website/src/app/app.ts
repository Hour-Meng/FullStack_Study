import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


interface MenuItem {
  id: number;
  name: string;
  category: 'Hot' | 'Iced' | 'Pastry' ;
  price: number;
  description: string;
}

interface CartItem extends MenuItem {
  quantity: number;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})  
export class App {
  protected readonly title = signal('my-website');

  menuList: MenuItem[] = [
    {id: 1, name: 'Expresso', category: 'Hot', price: 3.50, description: 'Rich, bold, double-shot espresso.'},
    {id:2, name: 'Iced Caramel Latte', category: 'Iced', price: 3.00, description: 'Espresso, cold milk, and caramel drizzle.'},
    { id: 3, name: 'Matcha Green Tea', category: 'Hot', price: 4.75, description: 'Creamy ceremonial-grade matcha latte.' },
    { id: 4, name: 'Cold Brew', category: 'Iced', price: 4.50, description: 'Steeped for 18 hours for a smooth finish.' },
    { id: 5, name: 'Butter Croissant', category: 'Pastry', price: 3.75, description: 'Flaky, buttery, golden-baked pastry.' },
    { id: 6, name: 'Blueberry Muffin', category: 'Pastry', price: 3.25, description: 'Freshly baked muffin with whole blueberries.' }
  ];

  selectedCategory: string = 'All';

  cart: CartItem[] = [];

  get filteredMenu() : MenuItem[] {
    if ( this.selectedCategory === 'All') return this.menuList;
    return this.menuList.filter( item => item.category === this.selectedCategory);
  }

  addToCart(item: MenuItem) {
    const existing = this.cart.find( c => c.id === item.id );
    if ( existing ) {
      existing.quantity += 1;
    }
    else {
      this.cart.push({...item, quantity: 1});
    }
  }
  
  // This one is to remove item from the cart

  removeFromCart(itemId: number) {
    this.cart = this.cart.filter(item => item.id !== itemId);
  }

  // This one is to calculate the total price

  get grandTotal(): number {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  checkOut() {
    alert(`Order Placed! Total: $${this.grandTotal.toFixed(2)}`);
    this.cart = [];
  }

  
}  


