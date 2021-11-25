import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaintingComponent } from './components/painting/painting.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { RepairInstallComponent } from './components/repair-install/repair-install.component';
import { PaintingCalculatorComponent } from './components/painting-calculator/painting-calculator.component';
import { ServiceRequestFormComponent } from './components/service-request-form/service-request-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PaintingComponent,
    AboutComponent,
    ContactUsComponent,
    RepairInstallComponent,
    PaintingCalculatorComponent,
    ServiceRequestFormComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
