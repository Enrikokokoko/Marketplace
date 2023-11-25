import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { OrderRegisterComponent } from './pages/order-register/order-register.component';
import { CabinetComponent } from './pages/cabinet/cabinet.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { MainCategoriesComponent } from './pages/main-categories/main-categories.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrComponent } from './pages/registr/registr.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main'},
  { path: 'main', component: MainPageComponent},
  { path: 'product', component: ProductPageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrComponent},
  { path: 'product/order', component: OrderRegisterComponent},
  { path: 'cabinet', component: CabinetComponent},
  { path: 'category', component: MainCategoriesComponent},
];
