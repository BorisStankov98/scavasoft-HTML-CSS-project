import { Component, OnInit } from '@angular/core';
import { Product } from '../../modules/product.interface';
import { FormControl, FormGroup, FormArray } from '@angular/forms'
import { StockInventoryService } from './services/stock-inventory.service';


@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.scss']
})
export class StockInventoryComponent implements OnInit {
  products!: Product[]
  form = new FormGroup({
    store: new FormGroup({
      branch : new FormControl(''),
      code: new FormControl('')
    }),
    selector: this.createStock({}),
    stock: new FormArray([])
  })
   
  createStock(stock:any){
    return new FormGroup({
      product_id: new FormControl(parseInt(stock.product_id,10) || ''),
      quantity: new FormControl(stock.quantity || 10)
    })
  }
  addStock(stock:any){
    const control = this.form.get('stock') as FormArray;
    control.push(this.createStock(stock))
  }

  removeStock({group,index }:{group:FormGroup,index:number}){
    console.log(group, index)
    const control = this.form.get('stock') as FormArray;
    control.removeAt(index)
  }

  constructor(
    private stockService : StockInventoryService
  ) {}

  ngOnInit(): void {
    const data = this.stockService.getCart();
    data.subscribe((subscribedData)=> {
      this.products = subscribedData.products
    })
    this.form.get('stock')?.valueChanges.subscribe(value =>{
      console.log(value)
    })
  }

  onSubmit(){
    console.log(`Submit: ${this.form.value}`)
  }
}
