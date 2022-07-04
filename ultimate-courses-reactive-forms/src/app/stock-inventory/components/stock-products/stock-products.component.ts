import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.scss']
})
export class StockProductsComponent implements OnInit {

  @Input()
  parent!: FormGroup<any>;

  @Output()
  removed = new EventEmitter<any>()

  onRemove(group:any, index:any){
    this.removed.emit({group , index})
  }

  get stocks() {
    return (this.parent.get('stock') as FormArray).controls
}

  constructor() { }
  ngOnInit(): void {
  }

}
