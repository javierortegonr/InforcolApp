import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NormasGenerales } from './components/normas-generales/normas-generales';
import { Ramo } from './components/ramo/ramo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, NormasGenerales, Ramo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  menuItems = [
    'NORMAS GENERALES',
    'RAMO',
    'TIPOS DE TERCERO',
    'DATOS VARIABLES',
    'DATOS FIJOS',
    'COBERTURAS',
    'LIMITES',
    'DEDUCIBLES',
    'RECARGOS Y DESCUENTOS',
    'CLAUSULAS',
    'CONTROLES TECNICOS',
    'SUPLEMENTOS',
    'COMENTARIOS ADICIONALES',
    'FORMAS DE PAGOS',
    'MODALIDADES',
    'APERTURA SINIESTROS',
    'TABLAS ADICIONALES',
    'INFORMACION ISO'
  ];

  selectedItem: string | null = null;

  selectItem(item: string) {
    this.selectedItem = item;
  }
}
