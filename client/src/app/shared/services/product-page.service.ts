import { Injectable } from "@angular/core";
import { Product, Product_One } from "../interface/product";
import { BehaviorSubject, Subject } from "rxjs";
import { ProductQuantities } from "../interface/quantity";

@Injectable({
  providedIn: 'root',
})
export class ProductPageService {
    private cartSubject$: Subject<number> = new BehaviorSubject(0)
    private quantityCountSubject$: Subject<ProductQuantities> = new BehaviorSubject<ProductQuantities>({})
    private cartItemSubject$: Subject<Product[]> = new BehaviorSubject<Product[]>([])
    public cartCount$ = this.cartSubject$.asObservable()
    public cartItem$ = this.cartItemSubject$.asObservable()
    public quantityCount$ = this.quantityCountSubject$.asObservable()

    private productData: any;
    private cartItems: Product[] = []
    public cartItem: Product[] = [];
    public quantityItems!: ProductQuantities;
    private itemStorage: any
    private quantityStorage: any
    private productQuantity: ProductQuantities = {}

    public updateCountCart() {
      this.cartSubject$.next(this.cartItems.length)
      this.cartItemSubject$.next(this.cartItems)
    }

    public increaseQuantity(itemId: number) {
      if(typeof localStorage !== 'undefined') {
        this.quantityStorage = localStorage.getItem('productQuantity')
      }

      if(this.quantityStorage) {
        this.productQuantity = JSON.parse(this.quantityStorage)
      }

      if(this.productQuantity[itemId]) {
        this.productQuantity[itemId]++
      } else {
        this.productQuantity[itemId] = 2
      }
      localStorage.setItem('productQuantity', JSON.stringify(this.productQuantity))
      this.displayItemQuantity()
    }

    public decreaseQuantity(itemId: number) {
      if(typeof localStorage !== 'undefined') {
        this.quantityStorage = localStorage.getItem('productQuantity')
      }

      if(this.quantityStorage) {
        this.productQuantity = JSON.parse(this.quantityStorage)
      }

      if(this.productQuantity[itemId] && this.productQuantity[itemId] > 1) {
        this.productQuantity[itemId]--
      }
      localStorage.setItem('productQuantity', JSON.stringify(this.productQuantity))
      this.displayItemQuantity()
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

    public displayItemQuantity() {
      if(typeof localStorage !== 'undefined') {
        this.quantityStorage = localStorage.getItem('productQuantity')
      }
      if(this.quantityStorage) {
        this.quantityItems = JSON.parse(this.quantityStorage)
      }
      this.quantityCountSubject$.next(this.quantityItems)
    }

    public displayCartItem() {
      if(typeof localStorage !== 'undefined') {
        this.itemStorage = localStorage.getItem('cart')
      }
      if(this.itemStorage) {
        this.cartItems = JSON.parse(this.itemStorage)
      }
      this.cartItemSubject$.next(this.cartItems)
    }

    public addItemToCart(item: Product) {
      if(typeof localStorage !== 'undefined') {
        this.itemStorage = localStorage.getItem('cart')
        this.quantityStorage = localStorage.getItem('productQuantity')
      }
      
      if(this.itemStorage) {
        this.cartItems = JSON.parse(this.itemStorage)
      }

      if(this.quantityStorage) {
        this.productQuantity = JSON.parse(this.quantityStorage)
      }
      
      if(!this.cartItems.some(value => value.id === item.id)){
        this.cartItems.push(item)
        this.productQuantity[item.id] = 1
        localStorage.setItem('productQuantity', JSON.stringify(this.productQuantity))
      };
      
      this.displayItemQuantity()
      this.saveToLocalstorage()
      this.updateCountCart()
    }

    public removeItemFormCart(item: Product) {
      if(typeof localStorage !== 'undefined') {
        this.itemStorage = localStorage.getItem('cart')
        this.quantityStorage = localStorage.getItem('productQuantity')
      }

      if(this.itemStorage) {
        this.cartItems = JSON.parse(this.itemStorage)
      }

      if(this.quantityStorage) {
        this.quantityItems = JSON.parse(this.quantityStorage)
      }

      const indexCartArray = this.cartItems.findIndex(value => value.id === item.id)
      this.cartItems.splice(indexCartArray, 1)

      delete this.quantityItems[item.id]
      localStorage.setItem('productQuantity', JSON.stringify(this.quantityItems))
      
      this.saveToLocalstorage()
      this.displayItemQuantity()
      this.displayCartItem()
      this.updateCountCart()
    }

    public saveToLocalstorage() {
      localStorage.setItem('cart', JSON.stringify(this.cartItems))
    }
}