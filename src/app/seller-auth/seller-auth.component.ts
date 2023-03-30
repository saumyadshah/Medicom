import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'medicom-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  constructor(private seller: SellerService){

  }

  signUp(data: object): void{
    console.log(data);
    this.seller.userSignUp();
  }
}
