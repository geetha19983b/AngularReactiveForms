import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customers/customer.component';
import { CustomerReactiveComponent } from './customers/customer-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'custrect', component: CustomerReactiveComponent },
      { path: 'custtemp',component:CustomerComponent},
      { path: '', redirectTo: 'custrect', pathMatch: 'full' },
      { path: '**', redirectTo: 'custrect', pathMatch: 'full' }
    ]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
