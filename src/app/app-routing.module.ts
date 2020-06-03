import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'brand/dell1001',
    pathMatch: 'full'
  },
  {
    path: 'brand/:brand-id',
    component: HomeComponent
  },
  {
    path: 'brand/:brandId/categories/:category-id',
    component: HomeComponent
  },
  {
    path: 'brand/:brandId/categories/:categoryId/sub-categories/:sc-d',
    component: HomeComponent
  },
  {
    path: 'brand/:brandId/categories/:categoryId/sub-categories/:sc-d/series/:series-id',
    component: HomeComponent
  },
  {
    path: 'brand/:brandId/categories/:categoryId/sub-categories/:sc-d/series/:series-id/products/:product-id',
    component: HomeComponent
  },
  {
    path: 'brand/:brandId/categories/:categoryId/sub-categories/:sc-d/series/:series-id/products/:product-id/models/:model-id',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
