import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersCardComponent } from './customers-card/customers-card.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { AppHoverDirective } from './common/app-hover.directive';
 
import {Route, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TextconvertPipe } from './common/textconvert.pipe';
import { LinkGuardGuard } from './link-guard.guard';

const routes: Route[] = [
  {
    path: 'customers',
    component :CustomersComponent
  },
  {
    path: 'home',
    component :HomeComponent
  },
  {
    path: '',
    component :HomeComponent
  },
  {
    path: 'orders',
    canActivate: [LinkGuardGuard],
    loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
  },
  {
    path: '**',
    component :HomeComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomersCardComponent,
    CustomersListComponent,
    AppHoverDirective,
    HomeComponent,
    TextconvertPipe
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
