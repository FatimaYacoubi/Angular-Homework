import { Injectable } from '@angular/core';
import { Produit } from './models/produit';

@Injectable({
  providedIn: 'root'
})

export class ProductServiczService {
 list= [
    { idProduct: 1, code: 127,libelle: "PC", prixunitaire : 2000, tauxTva :10},
    { idProduct: 2, code: 128,libelle: "TV", prixunitaire : 1000, tauxTva :20},
    { idProduct: 3, code: 128,libelle: "Table", prixunitaire : 200, tauxTva :30},
    ];
  log(msg: any) { console.log(msg); }
  error(msg: any) { console.error(msg); }
  warn(msg: any) { console.warn(msg); }
  Products!: Produit[];
  constructor() { }
  getAllproducts(){
 return this.list;
  }
  getNbProductsByLibelle(libelle:string){
    
  }
}

