import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/produit';
import { ProductServiczService } from '../product-servicz.service';
@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit {

   listProduits: Produit[]=[{idProduit:1,code:"P147852P",libelle:"Produit1", prixUnitaire:12.5, tauxTVA:0.02},
  {idProduit:2,code:"P147552P",libelle:"Produit1", prixUnitaire:30, tauxTVA:0.1980},
  {idProduit:3,code:"D14785CC",libelle:"Produit1", prixUnitaire:20, tauxTVA:0.1980},
  {idProduit:4,code:"E147852P",libelle:"Produit1", prixUnitaire:50, tauxTVA:0.1980},
  {idProduit:5,code:"F147852P",libelle:"Produit1", prixUnitaire:70, tauxTVA:0.02}]

  constructor(public  productS:ProductServiczService) { 
   
  }

  ngOnInit(): void {
   
  }
 public Affiche(){
    this.productS.getAllproducts();
  }
  public getAllproducts(){
    return([
      { idProduct: 1, code: 127,libelle: "PC", prixunitaire : 2000, tauxTva :10},
      { idProduct: 2, code: 128,libelle: "TV", prixunitaire : 1000, tauxTva :20},
      { idProduct: 3, code: 128,libelle: "Table", prixunitaire : 200, tauxTva :30},
      ]);
    }
}
