import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component'

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'About',
    component: AboutComponent
  },
  {
    path: 'Contact',
    component: ContactComponent
  },
  { path: '**', redirectTo: '', }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true,
      }
    )
  ],
  exports: [
    RouterModule
  ],
})

export class AppRoutingModule { }


