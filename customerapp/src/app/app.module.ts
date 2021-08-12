import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersCardComponent } from './customers-card/customers-card.component';
import { CustomersListComponent } from './customers-list/customers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomersCardComponent,
    CustomersListComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
