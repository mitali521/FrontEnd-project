import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerorderdetailsComponent } from './components/customerorderdetails/customerorderdetails.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductaddComponent } from './components/productadd/productadd.component';
import { AddcustomerComponent } from './components/addcustomer/addcustomer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerorderdetailsComponent,
    ProductaddComponent,
    AddcustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
