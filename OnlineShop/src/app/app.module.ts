import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CategoriesComponent } from './categories/categories.component';
import {ProductItemComponent} from './product-item/product-item.component';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { TestComponent } from './test/test.component';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import {AuthInterceptor} from './auth.interceptor';
import {SortByPipe} from './product-list.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    RouterModule.forRoot([
      {path: '', component: CategoriesComponent},
      {path: 'category/:categoryId/products', component: CategoriesComponent},
      {path: 'products/:productId', component: ProductItemComponent},
      {path: 'cart', component: CartComponent},
      {path: 'login', component: LoginComponent},
    ]),
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    NavigationComponent,
    CategoriesComponent,
    ProductItemComponent,
    CartComponent,
    TestComponent,
    FooterComponent,
    LoginComponent,
  ],
  bootstrap: [ AppComponent ],
  entryComponents: [TestComponent]
})
export class AppModule { }

