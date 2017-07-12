import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {DataTableModule} from "angular2-datatable";
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'ng2-select';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DataTableModule,
    FormsModule,
    SelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
