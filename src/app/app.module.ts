import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductComponent } from './pages/product/product.component';
import { BreadcrumbsComponent } from './static/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './static/footer/footer.component';
import { HeaderComponent } from './static/header/header.component';
import { NavComponent } from './static/nav/nav.component';
import { SidebarComponent } from './static/sidebar/sidebar.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProductComponent,
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    NavComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
