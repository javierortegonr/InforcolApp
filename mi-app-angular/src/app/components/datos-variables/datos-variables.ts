import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatabaseService } from '../../services/database';

interface DatoVariable {
  id: number;
  nombreCampo: string;
  datoTronweb: string;
  datoTronador: string;
  valoresPosibles: string;
  datoVisible: string;
  secuencia: string;
  tipoCampo: string;
  longitudCampo: string;
  solicitudCampo: string;
  cobertura: string;
  mostraraSiniestros: string;
  obligatorio: string;
  claveTarifaria: string;
  paraPresupuesto: string;
  valorDefecto: string;
  validacion: string;
  regPreField: string;
  codRegla: string;
  valoresValidos: string;
  permitNulo: string;
  infoAdicional: string;
  observacionesCliente: string;
}

@Component({
  selector: 'app-datos-variables',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './datos-variables.html',
  styleUrl: './datos-variables.css',
})
export class DatosVariables implements OnInit {
  datosVariables: DatoVariable[] = [];
  tiposCampo: string[] = [];
  nextId = 1;

  form = {
    nombreCampo: '',
    datoTronweb: '',
    datoTronador: '',
    valoresPosibles: '',
    datoVisible: '',
    secuencia: '',
    tipoCampo: '',
    longitudCampo: '',
    solicitudCampo: '',
    cobertura: '',
    mostraraSiniestros: '',
    obligatorio: '',
    claveTarifaria: '',
    paraPresupuesto: '',
    valorDefecto: '',
    validacion: '',
    regPreField: '',
    codRegla: '',
    valoresValidos: '',
    permitNulo: '',
    infoAdicional: '',
    observacionesCliente: '',
  };

  constructor(private dbService: DatabaseService) {}

  async ngOnInit(): Promise<void> {
    await this.dbService.initialize();
    this.tiposCampo = this.dbService.getTiposCampo();
  }

  agregarDatoVariable(): void {
    if (this.form.nombreCampo.trim()) {
      const nuevoDato: DatoVariable = {
        id: this.nextId++,
        ...this.form,
      };
      this.datosVariables.push(nuevoDato);
      this.limpiarFormulario();
    }
  }

  eliminarDatoVariable(id: number): void {
    this.datosVariables = this.datosVariables.filter((d) => d.id !== id);
  }

  limpiarFormulario(): void {
    this.form = {
      nombreCampo: '',
      datoTronweb: '',
      datoTronador: '',
      valoresPosibles: '',
      datoVisible: '',
      secuencia: '',
      tipoCampo: '',
      longitudCampo: '',
      solicitudCampo: '',
      cobertura: '',
      mostraraSiniestros: '',
      obligatorio: '',
      claveTarifaria: '',
      paraPresupuesto: '',
      valorDefecto: '',
      validacion: '',
      regPreField: '',
      codRegla: '',
      valoresValidos: '',
      permitNulo: '',
      infoAdicional: '',
      observacionesCliente: '',
    };
  }
}
