import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const config: Routes = [
  { path: 'contacts', component: ContactsComponent },
  { path: 'detail', component: DetailComponent },
  { path: '', redirectTo: 'contacts', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DetailComponent } from './detail/detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    DetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
