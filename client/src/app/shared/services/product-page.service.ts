import { Injectable } from "@angular/core";
import { Product, Product_One } from "../interface/product";
import { BehaviorSubject, Subject } from "rxjs";
import { ProductQuantities } from "../interface/quantity";

@Injectable({
  providedIn: 'root',
})
export class ProductPageService {
    private cartSubject$: Subject<number> = new BehaviorSubject(0)
    private cartItemSubject$: Subject<Product[]> = new Subject()
    public cartCount$ = this.cartSubject$.asObservable()
    public cartItem$ = this.cartItemSubject$.asObservable()
    private productData: any;
    private cartItems: Product[] = []
    private itemStorage: any
    private productQuantity: ProductQuantities = {}

    public updateCountCart() {
      this.cartSubject$.next(this.cartItems.length)
    }

    public increaseQuantity(itemId: number) {
      if(this.productQuantity[itemId]) {
        this.productQuantity[itemId]++
      } else {
        this.productQuantity[itemId] = 1
      }

      localStorage.setItem('productQuantity', JSON.stringify(this.productQuantity))
    }

    public decreaseQuantity(itemId: number) {
      if(this.productQuantity[itemId] && this.productQuantity[itemId] > 1) {
        this.productQuantity[itemId]--
      }

      localStorage.setItem('productQuantity', JSON.stringify(this.productQuantity))
    }

    public getProductQuantity(itemId: number) {
        return this.productQuantity[itemId]
    }

    public setProductData(data: any): void {
      this.productData = data
    }

    public getProductData() {
      return this.productData
    }

    public displayCartItem() {
      if(typeof localStorage !== 'undefined') {
        this.itemStorage = localStorage.getItem('cart')
      }
      
      if(this.itemStorage) {
        this.cartItems = JSON.parse(this.itemStorage)
      }
      console.log(this.cartItems);
      
      this.cartItemSubject$.next(this.cartItems)
    }

    public updateCart() {

    }

    public addItemToCart(item: Product) {
      if(typeof localStorage !== 'undefined') {
        this.itemStorage = localStorage.getItem('cart')
      }
      
      if(this.itemStorage) {
        this.cartItems = JSON.parse(this.itemStorage)
      }

      this.cartItems.push(item)
      this.saveToLocalstorage()
      this.updateCountCart()
    }

    public removeItemFormCart(item: Product) {
      if(typeof localStorage !== 'undefined') {
        this.itemStorage = localStorage.getItem('cart')
      }

      if(this.itemStorage) {
        this.cartItems = JSON.parse(this.itemStorage)
      }
      const indexCartArray = this.cartItems.findIndex(value => value.id === item.id)
      console.log(indexCartArray);
      this.cartItems.splice(indexCartArray, 1)
      this.saveToLocalstorage()
      this.displayCartItem()
      this.updateCountCart()
    }

    private saveToLocalstorage() {
      localStorage.setItem('cart', JSON.stringify(this.cartItems))
    }

}