import { Component, OnInit } from '@angular/core';
import Customer from '../common/Customer';
import { DataService } from '../common/data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[] = [];
  original:Customer[] = [];

  isCard:boolean = true;
  searchText:string = "";
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // REST api call to pull customers
    this.dataService.getCustomers().subscribe(data => {
      this.customers = this.original = data;
    });
  }

  deleteCustomer(id:number) :void {
    this.customers = this.customers.filter(c => c.id !== id);
    this.dataService.deleteCustomer(id).subscribe(() => console.log("deleted!!!"));
  }

  filterCustomers(): void {
    this.customers = this.original.filter( c => {
      return c.lastName.toLowerCase().indexOf(this.searchText.toLowerCase()) >= 0
    })
  }
}
