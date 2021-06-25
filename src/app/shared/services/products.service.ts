import { Injectable } from '@angular/core';
import { Product } from "../interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [
    {
      name: 'Champu Savital Anticaspa',
      image: '/assets/img/champu.png',
      price: 11360
    },
    {
      name: 'Detergente Ariel Liquido Doypack',
      image: '/assets/img/detergente.png',
      price: 10870
    },
    {
      name: 'Gaseosa Coca-Cola Original',
      image: '/assets/img/gaseosa.png',
      price: 3500
    },
    {
      name: 'Arroz Diana',
      image: '/assets/img/arroz.png',
      price: 17200
    },
    {
      name: 'Azucar Blanca Incauca',
      image: '/assets/img/azucar.png',
      price: 3600
    },
    {
      name: 'Lavaloza AXION Limon Crema',
      image: '/assets/img/lavaloza.png',
      price: 5750
    },
    {
      name: 'Papel Higienico Suave Gold Triple Hoja',
      image: '/assets/img/papel-higienico.png',
      price: 9500
    },
    {
      name: 'Jabon PROTEX Limpieza Profunda',
      image: '/assets/img/jabon.png',
      price: 2900
    },
    {
      name: 'Pan BIMBO Blanco Actileche',
      image: '/assets/img/pan.png',
      price: 4200
    },
    {
      name: 'Leche Entera PARMALAT',
      image: '/assets/img/leche.png',
      price: 2500
    },
  ];

  constructor() {
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  get getProducts(): Product[] {
    return this.products;
  }

}
