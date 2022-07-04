import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from '../../modules/product.interface';
@Component({
  selector: 'app-stock-branch',
  templateUrl: './stock-branch.component.html',
  styleUrls: ['./stock-branch.component.scss']
})
export class StockBranchComponent implements OnInit {
  @Input()
  parent!: FormGroup<any>;

  @Input()
  products!:Product[]

  constructor() { }
  ngOnInit(): void {
  }

}
