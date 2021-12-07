import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemComponent } from './components/item/item.component';
import { InfoComponent } from './components/info/info.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
//HTTP
import { HttpClientModule } from '@angular/common/http';
//Forms
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
//Search Filter
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    InfoComponent,
    HomeComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
