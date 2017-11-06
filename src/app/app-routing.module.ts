import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { DetailComponent } from './detail/detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const config: Routes = [
    { path: 'contacts', component: ContactsComponent },
    { path: 'detail/:id', component: DetailComponent },
    { path: '', redirectTo: 'contacts', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(config)
    ],
    declarations: [
        ContactsComponent,
        DetailComponent,
        PageNotFoundComponent
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
