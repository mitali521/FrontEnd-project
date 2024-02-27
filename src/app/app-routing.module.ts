import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerorderdetailsComponent } from './components/customerorderdetails/customerorderdetails.component';

const routes: Routes = [
  {
    path:'getOneCustomer/:id',
    component: CustomerorderdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
