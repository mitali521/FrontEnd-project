import { Component } from '@angular/core';

import { Customer } from '../../models/Customer';
import { CustoProServiceService } from '../../service/custo-pro-service.service';

@Component({
  selector: 'app-customerorderdetails',
  templateUrl: './customerorderdetails.component.html',
  styleUrl: './customerorderdetails.component.css'
})
export class CustomerorderdetailsComponent {
  
  cust:Customer = new Customer();
  visit: boolean=false;

  constructor(private service: CustoProServiceService)
  {

  }

  customerDetails(id:string)
  {
    return this.service.getOneCustomer(Number(id)).subscribe((data)=>{
      this.cust=data;

      console.log(data);
      console.log(this.cust);

      this.visit=true;
    })

  }
}
