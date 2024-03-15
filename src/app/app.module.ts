import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { registerLocaleData } from '@angular/common';
import localFr from '@angular/common/locales/fr';
import { SortProductsPipe } from './sort-products/sort-products.pipe'
import { SelectProductKeyComponent } from './select-product-key/select-product-key.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CatalogComponent } from './catalog/catalog.component';
import { BasketComponent } from './basket/basket.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BasketEmptyComponent } from './basket-empty/basket-empty.component';

registerLocaleData(localFr);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductComponent,
    SortProductsPipe,
    SelectProductKeyComponent,
    CatalogComponent,
    BasketComponent,
    ProductDetailsComponent,
    BasketEmptyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'Fr'},
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
