import { NgModule, Injectable, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { Socket } from 'ngx-socket-io';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { ToastComponent } from './components/toast/toast.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxSpinnerModule } from "ngx-spinner";
import { DataTablesModule } from "angular-datatables";
import { DataTableDirective } from 'angular-datatables';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from "ngx-bootstrap/modal";
import { TreeviewModule } from 'ngx-treeview';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ModalcarneComponent } from './components/modalcarne/modalcarne.component';
import { ModalcertificadoComponent } from './components/modalcertificado/modalcertificado.component';
import { TypeaheadModule } from "ngx-bootstrap/typeahead";
import { MascotaComponent } from './pages/mascota/mascota.component';
import { CrearMascotaComponent } from './pages/crear-mascota/crear-mascota.component';
import { PropietarioComponent } from './pages/propietario/propietario.component';
import { CrearPropietarioComponent } from './pages/crear-propietario/crear-propietario.component';
import { AnimalPropietarioComponent } from './pages/animal-propietario/animal-propietario.component';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    TopbarComponent,
    LogoutComponent,
    ToastComponent,
    ModalcarneComponent,
    ModalcertificadoComponent,
    MascotaComponent,
    CrearMascotaComponent,
    PropietarioComponent,
    CrearPropietarioComponent,
    AnimalPropietarioComponent,
  ],
  imports: [
    BrowserModule,
    QRCodeModule,
    HttpClientModule,
    FormsModule,
    NgxDropzoneModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgSelectModule,
    ImageCropperModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    DataTablesModule,
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
    ModalModule.forRoot(),
    TreeviewModule.forRoot(),
    RouterModule.forRoot(ROUTES),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [
    ToastComponent,
    DataTableDirective,
    TooltipModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
