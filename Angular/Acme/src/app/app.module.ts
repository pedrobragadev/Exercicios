import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductListComponent} from './product/product-list.component';
import {FormsModule} from '@angular/forms';
import {changeToSapce} from './shared/change-to-spaces.pipe';
import {StarComponent} from './shared/star.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailComponent } from './product/product-detail.component';
import {RouterModule} from '@angular/router';
import {WelcomeComponent} from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    changeToSapce,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', component: ProductDetailComponent},
      {path: 'index', component: WelcomeComponent},
      {path: '', redirectTo: 'index', pathMatch: 'full'},
      {path: '**', redirectTo: 'index', pathMatch: 'full'}
      ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
