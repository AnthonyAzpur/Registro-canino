import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  login: boolean = true;

    // Variables para almacenar datos del usuario
    usu_apemat: string | null = "";
    usu_apepat: string | null = "";
    usu_id: string | null = "";
    usu_loging: string | null = "";
    usu_nombre: string | null = "";
    usu_nomcom: string | null = "";


    dataEmpresas: any = []; // Datos de empresas si se necesitan


  constructor(private router: Router) { }

  ngOnInit() {}
}
