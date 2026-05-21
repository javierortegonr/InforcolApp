import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NormasGenerales } from './components/normas-generales/normas-generales';
import { Ramo } from './components/ramo/ramo';
import { TiposDeTerceros } from './components/tipos-de-terceros/tipos-de-terceros';
import { DatosVariables } from './components/datos-variables/datos-variables';
import { DatosFijos } from './components/datos-fijos/datos-fijos';
import { Deducibles } from './components/deducibles/deducibles';
import { Limites } from './components/limites/limites';

@Component({
  selector: 'app-root',
  imports: [CommonModule, NormasGenerales, Ramo, TiposDeTerceros, DatosVariables, DatosFijos, Deducibles, Limites],
  templateUrl: './app.html',
  styleUrl: './app.css',
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
    'INFORMACION ISO',
  ];

  selectedItem: string | null = null;

  selectItem(item: string) {
    this.selectedItem = item;
  }
}
