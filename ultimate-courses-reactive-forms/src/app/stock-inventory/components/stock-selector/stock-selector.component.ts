import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from '../../modules/product.interface';

@Component({
  selector: 'app-stock-selector',
  templateUrl: './stock-selector.component.html',
  styleUrls: ['./stock-selector.component.scss']
})
export class StockSelectorComponent implements OnInit {

  @Input()
  products?:Product[]

  @Input()
  parent!: FormGroup<any>;

  constructor() { }
  ngOnInit(): void {
  }
  @Output()
  added = new EventEmitter<any>();

  onAdd(){
    this.added.emit(this.parent.get('selector')?.value)
  }

}
