import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewsComponent } from './views/views.component';
import { LogingComponent } from './loging/loging.component';
import { ViewCompiler } from '@angular/compiler/src/view_compiler/view_compiler';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'loging',
        pathMatch: 'full'
        
    },

    {
        path: 'view',
        component: ViewsComponent
    },

    {
        path: 'loging',
        component: LogingComponent
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }