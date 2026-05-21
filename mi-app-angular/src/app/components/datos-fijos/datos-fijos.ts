import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface DatoFijo {
  id: number;
  nombreCampo: string;
  campoTronweb: string;
  secuencia: string;
  tipoCampo: string;
  longitudCampo: string;
  campoObligatorio: string;
  campoPresupuesto: string;
  campoNulo: string;
  validacion: string;
  valoresValidos: string;
  infoAdicional: string;
  observaciones: string;
}

@Component({
  selector: 'app-datos-fijos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './datos-fijos.html',
  styleUrl: './datos-fijos.css',
})
export class DatosFijos implements OnInit {
  datosFijos: DatoFijo[] = [];
  mostrarModal = false;
  datoEditando: DatoFijo | null = null;
  formEditando: any = {};

  ngOnInit(): void {
    this.cargarDatos();
  }

  private cargarDatos(): void {
    this.datosFijos = [
      {
        id: 1,
        nombreCampo: 'Póliza',
        campoTronweb: 'N',
        secuencia: '1',
        tipoCampo: 'N',
        longitudCampo: '9',
        campoObligatorio: 'S',
        campoPresupuesto: 'S',
        campoNulo: 'S',
        validacion: 'Validar qué si ramo existe ús la tabla A1001800',
        valoresValidos: 'A1001800 Tabla de Pólmez',
        infoAdicional: '',
        observaciones: '',
      },
      {
        id: 2,
        nombreCampo: 'Raso',
        campoTronweb: 'N',
        secuencia: '1',
        tipoCampo: 'N',
        longitudCampo: '9',
        campoObligatorio: 'S',
        campoPresupuesto: 'S',
        campoNulo: 'S',
        validacion: 'Validar que si ramo existe ús la tabla',
        valoresValidos: 'A1001800',
        infoAdicional: '',
        observaciones: '',
      },
      {
        id: 3,
        nombreCampo: 'Tipo de Pólizas',
        campoTronweb: 'S',
        secuencia: '2',
        tipoCampo: 'C',
        longitudCampo: '1',
        campoObligatorio: 'S',
        campoPresupuesto: 'S',
        campoNulo: 'S',
        validacion:
          'Validar que si pueda digitar C:Solicitud, Pápollas, 3=Póliza Grupo, 4=Póliza...',
        valoresValidos: 'C,P,P,2',
        infoAdicional: '',
        observaciones: '',
      },
      {
        id: 4,
        nombreCampo: 'Póliza Grupo',
        campoTronweb: 'S',
        secuencia: '3',
        tipoCampo: 'C',
        longitudCampo: '13',
        campoObligatorio: 'N',
        campoPresupuesto: 'S',
        campoNulo: 'S',
        validacion:
          'Validar que si pueda digitar C:Solicitud, Pápollas, 3=Póliza Grupo, 4=Póliza...',
        valoresValidos: 'F,G,S',
        infoAdicional: '',
        observaciones: '',
      },
      {
        id: 5,
        nombreCampo: 'Tipo póliza Transportes',
        campoTronweb: 'S',
        secuencia: '4',
        tipoCampo: 'C',
        longitudCampo: '1',
        campoObligatorio: 'N',
        campoPresupuesto: 'S',
        campoNulo: 'S',
        validacion: '',
        valoresValidos: 'F,G,S',
        infoAdicional: '',
        observaciones: '',
      },
      {
        id: 6,
        nombreCampo: 'Póliza Cliente',
        campoTronweb: 'S',
        secuencia: '5',
        tipoCampo: 'C',
        longitudCampo: '13',
        campoObligatorio: 'N',
        campoPresupuesto: 'N',
        campoNulo: 'N',
        validacion: 'Validar que existe al Presupuesto en la tabla',
        valoresValidos: 'P9000000',
        infoAdicional: '',
        observaciones: '',
      },
      {
        id: 7,
        nombreCampo: 'Número de Presupuesto',
        campoTronweb: 'S',
        secuencia: '6',
        tipoCampo: 'N',
        longitudCampo: '10',
        campoObligatorio: 'N',
        campoPresupuesto: 'N',
        campoNulo: 'N',
        validacion: '',
        valoresValidos: 'P9000000',
        infoAdicional: '',
        observaciones: '',
      },
      {
        id: 8,
        nombreCampo: 'Número de la póliza',
        campoTronweb: 'N',
        secuencia: 'T',
        tipoCampo: 'N',
        longitudCampo: '15',
        campoObligatorio: 'S',
        campoPresupuesto: 'N',
        campoNulo: 'N',
        validacion: 'Validar que existe en la tabla A2939800 siempre y cuando no haya digito dos',
        valoresValidos: 'A2931800',
        infoAdicional: '',
        observaciones: 'Formato GGRAAAANNNNNNN desde la CCompañía, B+Número secuencial',
      },
      {
        id: 9,
        nombreCampo: 'Suplemento',
        campoTronweb: 'S',
        secuencia: '0',
        tipoCampo: 'N',
        longitudCampo: '5',
        campoObligatorio: 'N',
        campoPresupuesto: 'N',
        campoNulo: 'S',
        validacion:
          'Validar que existe en la tabla A2939800 siempre y cuando no haya digito dos i sal',
        valoresValidos: 'A2931800',
        infoAdicional: '',
        observaciones: '',
      },
      {
        id: 10,
        nombreCampo: 'Fecha de Efectividad',
        campoTronweb: 'N',
        secuencia: '3',
        tipoCampo: 'F',
        longitudCampo: '8',
        campoObligatorio: 'S',
        campoPresupuesto: 'S',
        campoNulo: 'N',
        validacion: '',
        valoresValidos: '',
        infoAdicional: '',
        observaciones: '',
      },
      {
        id: 11,
        nombreCampo: 'Fecha de Vencimiento',
        campoTronweb: 'N',
        secuencia: '10',
        tipoCampo: 'F',
        longitudCampo: '8',
        campoObligatorio: 'S',
        campoPresupuesto: 'S',
        campoNulo: 'N',
        validacion: '',
        valoresValidos: '',
        infoAdicional: '',
        observaciones: '',
      },
      {
        id: 12,
        nombreCampo: 'Beneficio al asegurado',
        campoTronweb: 'N',
        secuencia: '11',
        tipoCampo: 'C',
        longitudCampo: '1',
        campoObligatorio: 'S',
        campoPresupuesto: 'S',
        campoNulo: 'S',
        validacion: 'Validar que solamente se digite S o N',
        valoresValidos: 'S/N',
        infoAdicional: '',
        observaciones: 'S/N',
      },
      {
        id: 13,
        nombreCampo: 'Número de asegurados a reemb',
        campoTronweb: 'N',
        secuencia: '12',
        tipoCampo: 'N',
        longitudCampo: '2',
        campoObligatorio: 'N',
        campoPresupuesto: 'N',
        campoNulo: 'N',
        validacion: '',
        valoresValidos: '',
        infoAdicional: '',
        observaciones: 'Para proceso batch. Actualmente no se ara.',
      },
      {
        id: 14,
        nombreCampo: 'Número de riesgos',
        campoTronweb: 'N',
        secuencia: '13',
        tipoCampo: 'N',
        longitudCampo: '5',
        campoObligatorio: 'S',
        campoPresupuesto: 'N',
        campoNulo: 'N',
        validacion: '',
        valoresValidos: '',
        infoAdicional: '',
        observaciones: 'Se podrá indicar ndo ús ero o el ramo está definido como...',
      },
      {
        id: 15,
        nombreCampo: 'Moneda',
        campoTronweb: 'N',
        secuencia: '14',
        tipoCampo: 'N',
        longitudCampo: '2',
        campoObligatorio: 'S',
        campoPresupuesto: 'S',
        campoNulo: 'N',
        validacion: 'Validar que eso D/Existe, TrCódigo, Dv/Código, 2=Aceptado',
        valoresValidos: '0,12',
        infoAdicional: '',
        observaciones: 'Siempre s.1 (Dólar americano).',
      },
      {
        id: 16,
        nombreCampo: 'Coaseguro',
        campoTronweb: 'S',
        secuencia: '15',
        tipoCampo: 'N',
        longitudCampo: '1',
        campoObligatorio: 'N',
        campoPresupuesto: 'N',
        campoNulo: 'S',
        validacion: 'Validar que eso D/Existe, TrCódigo, Dv/Código, 2=Aceptado',
        valoresValidos: '0,12',
        infoAdicional: '',
        observaciones: '',
      },
      {
        id: 17,
        nombreCampo: 'Reaseguro Masivo',
        campoTronweb: 'N',
        secuencia: '16',
        tipoCampo: 'C',
        longitudCampo: '1',
        campoObligatorio: 'S',
        campoPresupuesto: 'N',
        campoNulo: 'S',
        validacion: 'Validar que solamente se digite S o N',
        valoresValidos: 'S/N',
        infoAdicional: '',
        observaciones: 'S/N\n(Código ISOit (Licencia), E+P (Espdadía), SSP (Ssg...',
      },
    ];
  }

  abrirModal(dato: DatoFijo): void {
    this.datoEditando = dato;
    this.formEditando = { ...dato };
    this.mostrarModal = true;
  }

  cerrarModal(): void {
    this.mostrarModal = false;
    this.datoEditando = null;
    this.formEditando = {};
  }

  guardarCambios(): void {
    if (this.datoEditando) {
      const index = this.datosFijos.findIndex((d) => d.id === this.datoEditando!.id);
      if (index !== -1) {
        this.datosFijos[index] = { ...this.formEditando };
      }
    }
    this.cerrarModal();
  }
}
