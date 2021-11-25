import { RepairInstallComponent } from './components/repair-install/repair-install.component';
import { PaintingComponent } from './components/painting/painting.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ServiceRequestFormComponent } from './components/service-request-form/service-request-form.component';
import { PaintingCalculatorComponent } from './components/painting-calculator/painting-calculator.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'painting', component: PaintingComponent},
  {path: 'repair-install', component: RepairInstallComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'service-request-form', component: ServiceRequestFormComponent},
  {path: 'painting-calculator', component: PaintingCalculatorComponent},
  
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }