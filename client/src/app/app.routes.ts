import { Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/auth-guard';

export const routes: Routes = [
  {
    path: 'main',
    loadComponent: () =>
      import('./pages/main-page/main-page.component').then(
        (m) => m.MainPageComponent
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main',
  },
  {
    path: 'product/:productName',
    loadComponent: () =>
      import('./pages/product-page/product-page.component').then(
        (m) => m.ProductPageComponent
      ),
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'productInfo',
      },
      {
        path: 'productInfo',
        loadComponent: () =>
          import(
            './pages/product-page/product-info/product-info.component'
          ).then((m) => m.ProductInfoComponent),
      },
      {
        path: 'characteristic',
        loadComponent: () =>
          import(
            './pages/product-page/characteristic/characteristic.component'
          ).then((m) => m.CharacteristicComponent),
      },
      {
        path: 'feedback',
        loadComponent: () =>
          import('./pages/product-page/feedback/feedback.component').then(
            (m) => m.FeedbackComponent
          ),
      },
      {
        path: 'question',
        loadComponent: () =>
          import('./pages/product-page/question/question.component').then(
            (m) => m.QuestionComponent
          ),
      },
    ],
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'registration',
    loadComponent: () =>
      import('./pages/registr/registr.component').then(
        (m) => m.RegistrComponent
      ),
  },
  {
    path: 'order-registr',
    loadComponent: () =>
      import('./pages/order-register/order-register.component').then(
        (m) => m.OrderRegisterComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'category',
    loadComponent: () =>
      import('./pages/main-categories/main-categories.component').then(
        (m) => m.MainCategoriesComponent
      ),
  },
  {
    path: 'category/:categoryName',
    loadComponent: () =>
      import('./pages/subcategories/subcategories.component').then(
        (m) => m.SubcategoriesComponent
      ),
  },
  {
    path: 'category/:subcategory/:productName',
    loadComponent: () =>
      import('./pages/subproducts/subproducts.component').then(
        (m) => m.SubproductsComponent
      ),
  },
  {
    path: 'cabinet',
    loadComponent: () =>
      import('./pages/cabinet/cabinet.component').then(
        (m) => m.CabinetComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'cabinet/orders',
    loadComponent: () =>
      import('./pages/orders/orders.component').then((m) => m.OrdersComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'cabinet/wishlist',
    loadComponent: () =>
      import('./pages/wishlist/wishlist.component').then(
        (m) => m.WishlistComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/page-not-found/page-not-found.component').then(
        (m) => m.PageNotFoundComponent
      ),
  },
];
