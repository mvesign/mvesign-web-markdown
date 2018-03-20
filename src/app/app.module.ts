import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from "@angular/http";
import {RouteReuseStrategy} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MarkdownModule} from 'angular2-markdown';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AppRouteReuseModule} from './app-routing-reuse.module';

import {PreviewComponent} from './components/preview/preview.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    MatGridListModule,
    AppRoutingModule,
    MarkdownModule.forRoot()
  ],
  declarations: [
    AppComponent,
    PreviewComponent,
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: AppRouteReuseModule
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}