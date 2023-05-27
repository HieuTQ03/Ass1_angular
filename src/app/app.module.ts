import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { HomePageComponent } from './pages/client/home-page/home-page.component';
import { AboutPageComponent } from './pages/client/about-page/about-page.component';
import { ProductDetailComponent } from './pages/client/product-detail/product-detail.component';
import { PageNotFoundComponent } from './pages/client/page-not-found/page-not-found.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductListComponent } from './pages/admin/product-list/product-list.component';
import { ProductAddComponent } from './pages/admin/product-add/product-add.component';
import { ProductEditComponent } from './pages/admin/product-edit/product-edit.component';

@NgModule({
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        BaseLayoutComponent,
        HomePageComponent,
        AboutPageComponent,
        ProductDetailComponent,
        PageNotFoundComponent,
        DashboardComponent,
        ProductListComponent,
        ProductAddComponent,
        ProductEditComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
