import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { PlaceDetailComponent } from './components/place-detail/place-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AutocompleteComponent,
    PlaceDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCxhHULsqibUfHdQgeL4K9mJIjM3HNDFY0',
      libraries: ['places']
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
