import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/client/home-page/home-page.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { AboutPageComponent } from './pages/client/about-page/about-page.component';
import { ProductDetailComponent } from './pages/client/product-detail/product-detail.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductAddComponent } from './pages/admin/product-add/product-add.component';
import { ProductEditComponent } from './pages/admin/product-edit/product-edit.component';
import { ProductListComponent } from './pages/admin/product-list/product-list.component';
import { PageNotFoundComponent } from './pages/client/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        component: BaseLayoutComponent,
        children: [
            { path: '', component: HomePageComponent },
            { path: 'about', component: AboutPageComponent },
            { path: 'product/:id', component: ProductDetailComponent },
        ],
    },
    {
        path: 'admin',
        component: AdminLayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'product', component: ProductListComponent },
            { path: 'product/add', component: ProductAddComponent },
            { path: 'product/:id/edit', component: ProductEditComponent },
            
            
        ],
    },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
