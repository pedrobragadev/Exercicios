import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductListComponent} from './product/product-list.component';
import {FormsModule} from '@angular/forms';
import {changeToSapce} from './shared/change-to-spaces.pipe';
import {StarComponent} from './shared/star.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    changeToSapce,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
