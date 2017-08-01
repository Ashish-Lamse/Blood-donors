import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {DataTableModule} from "angular2-datatable";
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'ng2-select';
import { MyDatePickerModule } from 'mydatepicker';
import {SearchService} from './service/search.service';
import {RouterModule} from '@angular/router'
import { ModalModule, OverlayRenderer, DOMOverlayRenderer, Overlay } from 'angular2-modal';
import { Modal, BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import {appRoutes} from './app.routes';
import { RegisterDonorComponent } from './register-donor/register-donor.component';

/*For Tabs*/
import { NguiTabComponent } from '@ngui/tab';
import { ChartsModule } from 'ng2-charts/ng2-charts';


const MODAL_PROVIDERS = [
  Modal,
  Overlay,
  { provide: OverlayRenderer, useClass: DOMOverlayRenderer }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RegisterDonorComponent,
    NguiTabComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DataTableModule,
    FormsModule,
    SelectModule,
    RouterModule.forRoot(appRoutes),
    BootstrapModalModule,
    ModalModule,
    MyDatePickerModule,
    ChartsModule
  ],
  providers: [SearchService,MODAL_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
