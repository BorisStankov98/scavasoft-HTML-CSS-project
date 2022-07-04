import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StockInventoryModule } from './stock-inventory/stock-inventory.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StockInventoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
