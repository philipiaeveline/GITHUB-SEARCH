import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { FooterComponent } from './footer/footer.component';
import {SearchRequestService} from './search-request.service';

import {FormsModule} from '@angular/forms';
import { SearchComponent } from './search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  
    RepositoriesComponent,
    SearchFormComponent,
    FooterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SearchRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppBootstrapModule { }

