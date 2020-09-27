import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { HeaderComponent } from './core/header/header.component';
import { QuickNavigatorComponent } from './pages/home/quick-navigator/quick-navigator.component';
import { SubforumComponent } from './pages/home/subforum/subforum.component';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        HeaderComponent,
        QuickNavigatorComponent,
        SubforumComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
