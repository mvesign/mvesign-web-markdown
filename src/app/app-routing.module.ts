import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PreviewComponent} from './components/preview/preview.component';

const routes: Routes = [
    { path: '', component: PreviewComponent, pathMatch: 'full' }
];
   
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}