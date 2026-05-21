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

interface FilaFijo {
  id: number;
  grupo: string;
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
  aseguradosFijos: FilaFijo[] = [];
  recibosFijos: FilaFijo[] = [];
  productorFijos: FilaFijo[] = [];
  otrasIntervencionesFijos: FilaFijo[] = [];

  mostrarModal = false;
  mostrarModalAsegurado = false;
  datoEditando: DatoFijo | null = null;
  aseguradoEditando: FilaFijo | null = null;
  formEditando: any = {};
  formEditandoAsegurado: any = {};
  listaEditando: FilaFijo[] = [];

  ngOnInit(): void {
    this.cargarDatos();
    this.cargarDatosAsegurado();
    this.cargarDatosRecibos();
    this.cargarDatosProductor();
    this.cargarDatosOtrasIntervenciones();
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
        validacion: 'Validar que si pueda digitar C:Solicitud, Pápollas, 3=Póliza Grupo, 4=Póliza...',
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
        validacion: 'Validar que si pueda digitar C:Solicitud, Pápollas, 3=Póliza Grupo, 4=Póliza...',
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
        validacion: 'Validar que existe en la tabla A2939800 siempre y cuando no haya digito dos i sal',
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

  private cargarDatosAsegurado(): void {
    this.aseguradosFijos = [
      { id: 1, grupo: 'Documento', nombreCampo: 'Número de Identificación', campoTronweb: 'N', secuencia: '1', tipoCampo: 'C', longitudCampo: '15', campoObligatorio: 'S', campoPresupuesto: 'S', campoNulo: 'N', validacion: '', valoresValidos: 'Número que identificará al asegurado', infoAdicional: '', observaciones: '' },
      { id: 2, grupo: 'Documento', nombreCampo: 'Nombre del Asegurado', campoTronweb: 'N', secuencia: '2', tipoCampo: 'C', longitudCampo: '30', campoObligatorio: 'S', campoPresupuesto: 'S', campoNulo: 'N', validacion: '', valoresValidos: '', infoAdicional: '', observaciones: '' },
      { id: 3, grupo: 'Documento', nombreCampo: 'Apellidos del Asegurado', campoTronweb: 'N', secuencia: '3', tipoCampo: 'C', longitudCampo: '30', campoObligatorio: 'S', campoPresupuesto: 'S', campoNulo: 'N', validacion: '', valoresValidos: '', infoAdicional: '', observaciones: '' },
      { id: 4, grupo: 'Datos Personas Físicas', nombreCampo: 'Fecha de Nacimiento', campoTronweb: 'N', secuencia: '4', tipoCampo: 'F', longitudCampo: '8', campoObligatorio: 'S', campoPresupuesto: 'S', campoNulo: 'S', validacion: 'Valida que la Fecha sea Mes, Día, Año', valoresValidos: '', infoAdicional: '', observaciones: 'Obligatorio en Auto.' },
      { id: 5, grupo: 'Datos Personas Físicas', nombreCampo: 'Sexo', campoTronweb: 'N', secuencia: '5', tipoCampo: 'C', longitudCampo: '1', campoObligatorio: 'S', campoPresupuesto: 'S', campoNulo: 'N', validacion: 'Válida que sea S=Señor, Casado, Divorciado, Viuda, Divorciado', valoresValidos: 'S,D,V,D', infoAdicional: '', observaciones: 'Obligatorio en Auto.' },
      { id: 6, grupo: 'Datos Personas Físicas', nombreCampo: 'Estado Civil', campoTronweb: 'N', secuencia: '6', tipoCampo: 'C', longitudCampo: '1', campoObligatorio: 'N', campoPresupuesto: 'S', campoNulo: 'S', validacion: 'Válida que exista en la tabla de profesiones', valoresValidos: 'S,C,V,D', infoAdicional: '', observaciones: 'Obligatorio en Auto.' },
      { id: 7, grupo: 'Datos Personas Físicas', nombreCampo: 'Profesión', campoTronweb: 'N', secuencia: '7', tipoCampo: 'N', longitudCampo: '3', campoObligatorio: 'N', campoPresupuesto: 'S', campoNulo: 'S', validacion: 'Válida que exista en la tabla de profesiones', valoresValidos: 'GI00000', infoAdicional: '', observaciones: 'GI00000: Valida contra una tabla de profesiones' },
      { id: 8, grupo: 'Datos Personas Físicas', nombreCampo: 'Ocupación', campoTronweb: 'S', secuencia: '8', tipoCampo: 'N', longitudCampo: '3', campoObligatorio: 'N', campoPresupuesto: 'S', campoNulo: 'S', validacion: 'Válida que exista en la tabla de profesiones', valoresValidos: '0,0,2', infoAdicional: '', observaciones: '' },
      { id: 9, grupo: 'Datos Personas Físicas', nombreCampo: 'Nacionalidad', campoTronweb: 'S', secuencia: '9', tipoCampo: 'C', longitudCampo: '3', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'S', validacion: 'Valida que exista en la tabla de Países AN000001', valoresValidos: 'AN000001', infoAdicional: '', observaciones: '' },
      { id: 10, grupo: 'Datos Razón Social', nombreCampo: 'Personas a cargo', campoTronweb: 'S', secuencia: '10', tipoCampo: 'C', longitudCampo: '60', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'N', validacion: 'Validar que exista en la tabla GI010031', valoresValidos: '', infoAdicional: '', observaciones: 'Datos: Datos si solicita siempre y cuando d\'Trasladador no sea una persona física' },
      { id: 11, grupo: 'Datos Razón Social', nombreCampo: 'Cargo Profesional', campoTronweb: 'S', secuencia: '11', tipoCampo: 'N', longitudCampo: '2', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'S', validacion: 'Validar que exista en la tabla GI010031', valoresValidos: 'GI010031', infoAdicional: '', observaciones: '' },
      { id: 12, grupo: 'Datos Razón Social', nombreCampo: 'Actividad Económica', campoTronweb: 'S', secuencia: '12', tipoCampo: 'N', longitudCampo: '2', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'S', validacion: 'Validar que exista en la tabla GI010031', valoresValidos: 'GI010031', infoAdicional: '', observaciones: '' },
      { id: 13, grupo: 'Datos Bancarios', nombreCampo: 'Entidad', campoTronweb: 'S', secuencia: '13', tipoCampo: 'C', longitudCampo: '4', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'S', validacion: 'Valida que exista en la tabla A5020300', valoresValidos: 'A5020300', infoAdicional: '', observaciones: '' },
      { id: 14, grupo: 'Datos Bancarios', nombreCampo: 'Oficinas', campoTronweb: 'S', secuencia: '14', tipoCampo: 'C', longitudCampo: '4', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'S', validacion: 'Valida que exista en la tabla A5020300', valoresValidos: 'A5020300', infoAdicional: '', observaciones: '' },
      { id: 15, grupo: 'Datos Bancarios', nombreCampo: 'DC', campoTronweb: 'N', secuencia: '15', tipoCampo: 'C', longitudCampo: '2', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'S', validacion: '', valoresValidos: '', infoAdicional: '', observaciones: 'Obligatorio si la forma de cobro es Banco, A.C.C.' },
      { id: 16, grupo: 'Datos Bancarios', nombreCampo: 'Ahorro o Cheques', campoTronweb: 'N', secuencia: '16', tipoCampo: 'C', longitudCampo: '1', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'N', validacion: '', valoresValidos: '', infoAdicional: '', observaciones: 'Obligatorio si la forma de cobro es Banco, A.C.C.' },
      { id: 17, grupo: 'Datos Bancarios', nombreCampo: 'Tipo Tarjeta', campoTronweb: 'S', secuencia: '17', tipoCampo: 'N', longitudCampo: '1', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'S', validacion: 'Valida que exista en la tabla A5020021', valoresValidos: 'A5020021', infoAdicional: '', observaciones: '' },
      { id: 18, grupo: 'Datos Bancarios', nombreCampo: 'Código Tarjeta', campoTronweb: 'S', secuencia: '18', tipoCampo: 'N', longitudCampo: '1', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'S', validacion: 'Valida que exista en la tabla A5020022', valoresValidos: 'A5020022', infoAdicional: '', observaciones: '' },
      { id: 19, grupo: 'Datos Bancarios', nombreCampo: 'Número Tarjeta', campoTronweb: 'S', secuencia: '19', tipoCampo: 'C', longitudCampo: '20', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'N', validacion: '', valoresValidos: '', infoAdicional: '', observaciones: '' },
      { id: 20, grupo: 'Datos Bancarios', nombreCampo: 'Fecha Vencimiento Tarjeta', campoTronweb: 'S', secuencia: '20', tipoCampo: 'F', longitudCampo: '6', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'N', validacion: '', valoresValidos: '', infoAdicional: '', observaciones: '' },
      { id: 21, grupo: 'Otros Datos', nombreCampo: 'Idioma', campoTronweb: 'S', secuencia: '21', tipoCampo: 'C', longitudCampo: '2', campoObligatorio: 'S', campoPresupuesto: 'S', campoNulo: 'S', validacion: 'Valida que exista el idioma ES-Español, Ética', valoresValidos: 'ES, EN', infoAdicional: '', observaciones: '' },
      { id: 22, grupo: 'Otros Datos', nombreCampo: 'Observaciones', campoTronweb: 'S', secuencia: '22', tipoCampo: 'C', longitudCampo: '60', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'N', validacion: '', valoresValidos: '', infoAdicional: '', observaciones: '' },
      { id: 23, grupo: 'Dirección Física - Habitaciones', nombreCampo: 'País', campoTronweb: 'S', secuencia: '23', tipoCampo: 'C', longitudCampo: '3', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'N', validacion: 'Validar que existe en la Tabla A1000101', valoresValidos: 'A1000101', infoAdicional: '', observaciones: 'Código de País, Código del Estado (50 para Puerto Rico). Validado contra la tabla de Estados.' },
      { id: 24, grupo: 'Dirección Física - Habitaciones', nombreCampo: 'Estado', campoTronweb: 'N', secuencia: '24', tipoCampo: 'N', longitudCampo: '2', campoObligatorio: 'S', campoPresupuesto: 'S', campoNulo: 'S', validacion: 'Validar que existe en la Tabla A1000104', valoresValidos: 'A1000104', infoAdicional: '', observaciones: '' },
      { id: 25, grupo: 'Dirección Física - Habitaciones', nombreCampo: 'Pueblo - Municipio', campoTronweb: 'N', secuencia: '25', tipoCampo: 'N', longitudCampo: '5', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'S', validacion: 'Validar que existe en la Tabla A1000100', valoresValidos: 'A1000100', infoAdicional: '', observaciones: 'Código del Pueblo. Validado contra la tabla de Pueblos.' },
      { id: 26, grupo: 'Dirección Física - Habitaciones', nombreCampo: 'Localidad', campoTronweb: 'S', secuencia: '26', tipoCampo: 'N', longitudCampo: '5', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'S', validacion: 'Validar que existe en la Tabla A1000103', valoresValidos: 'A1000103', infoAdicional: '', observaciones: 'Validado contra la tabla de códigos postales que se actualizan con d CD que el correo nos envía.' },
      { id: 27, grupo: 'Dirección Física - Habitaciones', nombreCampo: 'Direccion', campoTronweb: 'N', secuencia: '27', tipoCampo: 'C', longitudCampo: '40', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'N', validacion: '', valoresValidos: '', infoAdicional: '', observaciones: '' },
      { id: 28, grupo: 'Dirección Física - Habitaciones', nombreCampo: 'Direccion 1', campoTronweb: 'S', secuencia: '28', tipoCampo: 'C', longitudCampo: '40', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'N', validacion: '', valoresValidos: '', infoAdicional: '', observaciones: '' },
      { id: 29, grupo: 'Dirección Física - Habitaciones', nombreCampo: 'Direccion 2', campoTronweb: 'S', secuencia: '29', tipoCampo: 'C', longitudCampo: '40', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'N', validacion: '', valoresValidos: '', infoAdicional: '', observaciones: '' },
      { id: 30, grupo: 'Dirección Física - Habitaciones', nombreCampo: 'Código Postal', campoTronweb: 'N', secuencia: '30', tipoCampo: 'C', longitudCampo: '15', campoObligatorio: 'S', campoPresupuesto: 'S', campoNulo: 'S', validacion: 'Validar que existe en la Tabla A1000103', valoresValidos: '', infoAdicional: '', observaciones: 'Para algunos rangos si es obligatorio. Cuando lo es, no tiene validación.' },
      { id: 31, grupo: 'Dirección Física - Habitaciones', nombreCampo: 'Teléfono', campoTronweb: 'N', secuencia: '31', tipoCampo: 'C', longitudCampo: '10', campoObligatorio: 'N', campoPresupuesto: 'S', campoNulo: 'N', validacion: '', valoresValidos: '', infoAdicional: '', observaciones: '' },
      { id: 32, grupo: 'Dirección Física - Habitaciones', nombreCampo: 'E-mail', campoTronweb: 'N', secuencia: '32', tipoCampo: 'C', longitudCampo: '60', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'N', validacion: '', valoresValidos: '', infoAdicional: '', observaciones: '' },
      { id: 33, grupo: 'Dirección Física - Habitaciones', nombreCampo: 'Fax', campoTronweb: 'N', secuencia: '33', tipoCampo: 'C', longitudCampo: '10', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'N', validacion: '', valoresValidos: '', infoAdicional: '', observaciones: '' },
      { id: 34, grupo: 'Dirección Física - Habitaciones', nombreCampo: 'Fecha de Expiración de Licencia', campoTronweb: 'N', secuencia: '34', tipoCampo: 'F', longitudCampo: '8', campoObligatorio: 'N', campoPresupuesto: 'S', campoNulo: 'N', validacion: '', valoresValidos: '', infoAdicional: '', observaciones: 'Obligatorio en Auto.' },
      { id: 35, grupo: 'Dirección Comercial - Oficina', nombreCampo: 'País', campoTronweb: 'S', secuencia: '40', tipoCampo: 'C', longitudCampo: '3', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'N', validacion: 'Validar que existe en la Tabla A1000101', valoresValidos: 'A1000101', infoAdicional: '', observaciones: 'Código de País, Código del Estado (50 para Puerto Rico). Validado contra la tabla de Estados.' },
      { id: 36, grupo: 'Dirección Comercial - Oficina', nombreCampo: 'Estado', campoTronweb: 'N', secuencia: '41', tipoCampo: 'N', longitudCampo: '2', campoObligatorio: 'S', campoPresupuesto: 'S', campoNulo: 'S', validacion: 'Validar que existe en la Tabla A1000104', valoresValidos: 'A1000104', infoAdicional: '', observaciones: '' },
      { id: 37, grupo: 'Dirección Comercial - Oficina', nombreCampo: 'Pueblo - Municipio', campoTronweb: 'N', secuencia: '42', tipoCampo: 'N', longitudCampo: '5', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'S', validacion: 'Validar que existe en la Tabla A1000100', valoresValidos: 'A1000100', infoAdicional: '', observaciones: 'Código del Pueblo. Validado contra la tabla de Pueblos.' },
      { id: 38, grupo: 'Dirección Comercial - Oficina', nombreCampo: 'Localidad', campoTronweb: 'S', secuencia: '43', tipoCampo: 'N', longitudCampo: '5', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'S', validacion: 'Validar que existe en la Tabla A1000102', valoresValidos: 'A1000102', infoAdicional: '', observaciones: '' },
      { id: 39, grupo: 'Dirección Comercial - Oficina', nombreCampo: 'Direccion', campoTronweb: 'N', secuencia: '44', tipoCampo: 'C', longitudCampo: '40', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'N', validacion: '', valoresValidos: '', infoAdicional: '', observaciones: '' },
      { id: 40, grupo: 'Dirección Comercial - Oficina', nombreCampo: 'Direccion 1', campoTronweb: 'S', secuencia: '45', tipoCampo: 'C', longitudCampo: '40', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'N', validacion: '', valoresValidos: '', infoAdicional: '', observaciones: '' },
      { id: 41, grupo: 'Dirección Comercial - Oficina', nombreCampo: 'Direccion 2', campoTronweb: 'S', secuencia: '46', tipoCampo: 'C', longitudCampo: '40', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'N', validacion: '', valoresValidos: '', infoAdicional: '', observaciones: '' },
      { id: 42, grupo: 'Dirección Comercial - Oficina', nombreCampo: 'Código Postal', campoTronweb: 'N', secuencia: '47', tipoCampo: 'C', longitudCampo: '15', campoObligatorio: 'S', campoPresupuesto: 'S', campoNulo: 'S', validacion: 'Validar que existe en la Tabla A1000103', valoresValidos: '', infoAdicional: '', observaciones: 'Validado contra la tabla de códigos postales que se actualizan con d CD que el correo nos envía.' },
      { id: 43, grupo: 'Dirección Comercial - Oficina', nombreCampo: 'Teléfono', campoTronweb: 'N', secuencia: '48', tipoCampo: 'C', longitudCampo: '10', campoObligatorio: 'N', campoPresupuesto: 'S', campoNulo: 'N', validacion: '', valoresValidos: '', infoAdicional: '', observaciones: '' },
      { id: 44, grupo: 'Dirección Comercial - Oficina', nombreCampo: 'E-mail', campoTronweb: 'N', secuencia: '49', tipoCampo: 'C', longitudCampo: '60', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'N', validacion: '', valoresValidos: '', infoAdicional: '', observaciones: '' },
      { id: 45, grupo: 'Dirección Comercial - Oficina', nombreCampo: 'Fax', campoTronweb: 'N', secuencia: '50', tipoCampo: 'C', longitudCampo: '10', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'N', validacion: '', valoresValidos: '', infoAdicional: '', observaciones: '' },
      { id: 46, grupo: 'Dirección Comercial - Oficina', nombreCampo: 'Fecha de Expiración de Licencia', campoTronweb: 'N', secuencia: '51', tipoCampo: 'F', longitudCampo: '8', campoObligatorio: 'N', campoPresupuesto: 'S', campoNulo: 'N', validacion: '', valoresValidos: '', infoAdicional: '', observaciones: 'Obligatorio en Auto.' },
      { id: 47, grupo: 'Dirección Correspondencia', nombreCampo: 'Tipo de Correspondencia', campoTronweb: 'S', secuencia: '52', tipoCampo: 'N', longitudCampo: '1', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'S', validacion: 'Valida que sea Habitación, 2=Oficina, 3=Otros', valoresValidos: '', infoAdicional: '', observaciones: '' },
      { id: 48, grupo: 'Dirección Correspondencia', nombreCampo: 'País', campoTronweb: 'S', secuencia: '53', tipoCampo: 'C', longitudCampo: '3', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'N', validacion: 'Validar que existe en la Tabla A1000101', valoresValidos: 'A1000101', infoAdicional: '', observaciones: 'Código de País, Código del Estado (50 para Puerto Rico). Validado contra la tabla de Estados.' },
      { id: 49, grupo: 'Dirección Correspondencia', nombreCampo: 'Estado', campoTronweb: 'S', secuencia: '54', tipoCampo: 'N', longitudCampo: '2', campoObligatorio: 'S', campoPresupuesto: 'S', campoNulo: 'S', validacion: 'Validar que existe en la Tabla A1000104', valoresValidos: 'A1000104', infoAdicional: '', observaciones: '' },
      { id: 50, grupo: 'Dirección Correspondencia', nombreCampo: 'Pueblo - Municipio', campoTronweb: 'S', secuencia: '55', tipoCampo: 'N', longitudCampo: '5', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'S', validacion: 'Validar que existe en la Tabla A1000100', valoresValidos: 'A1000100', infoAdicional: '', observaciones: 'Código del Pueblo. Validado contra la tabla de Pueblos.' },
      { id: 51, grupo: 'Dirección Correspondencia', nombreCampo: 'Localidad', campoTronweb: 'S', secuencia: '56', tipoCampo: 'N', longitudCampo: '5', campoObligatorio: 'N', campoPresupuesto: 'S', campoNulo: 'S', validacion: 'Validar que existe en la Tabla A1000102', valoresValidos: 'A1000102', infoAdicional: '', observaciones: '' },
      { id: 52, grupo: 'Dirección Correspondencia', nombreCampo: 'Dirección', campoTronweb: 'S', secuencia: '57', tipoCampo: 'C', longitudCampo: '40', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'N', validacion: '', valoresValidos: '', infoAdicional: '', observaciones: '' },
      { id: 53, grupo: 'Dirección Correspondencia', nombreCampo: 'Dirección 1', campoTronweb: 'S', secuencia: '58', tipoCampo: 'C', longitudCampo: '40', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'N', validacion: '', valoresValidos: '', infoAdicional: '', observaciones: '' },
      { id: 54, grupo: 'Dirección Correspondencia', nombreCampo: 'Dirección 2', campoTronweb: 'S', secuencia: '59', tipoCampo: 'C', longitudCampo: '40', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'N', validacion: '', valoresValidos: '', infoAdicional: '', observaciones: '' },
      { id: 55, grupo: 'Dirección Correspondencia', nombreCampo: 'Código Postal', campoTronweb: 'S', secuencia: '60', tipoCampo: 'C', longitudCampo: '15', campoObligatorio: 'S', campoPresupuesto: 'S', campoNulo: 'S', validacion: 'Validar que existe en la Tabla A1000103', valoresValidos: '', infoAdicional: '', observaciones: '' },
      { id: 56, grupo: 'Dirección Correspondencia', nombreCampo: 'Teléfono', campoTronweb: 'S', secuencia: '61', tipoCampo: 'C', longitudCampo: '10', campoObligatorio: 'N', campoPresupuesto: 'S', campoNulo: 'N', validacion: '', valoresValidos: '', infoAdicional: '', observaciones: '' },
      { id: 57, grupo: 'Dirección Correspondencia', nombreCampo: 'E-mail', campoTronweb: 'S', secuencia: '62', tipoCampo: 'C', longitudCampo: '60', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'N', validacion: '', valoresValidos: '', infoAdicional: '', observaciones: '' },
    ];
  }

  private cargarDatosRecibos(): void {
    this.recibosFijos = [
      { id: 1, grupo: 'RECIBOS', nombreCampo: 'Forma de Pago', campoTronweb: 'S', secuencia: '1', tipoCampo: 'N', longitudCampo: '5', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'S', validacion: 'Validar que existe en la tabla A6001402', valoresValidos: 'A1001402', infoAdicional: '', observaciones: '' },
      { id: 2, grupo: 'RECIBOS', nombreCampo: 'Irs Cuota', campoTronweb: 'S', secuencia: '2', tipoCampo: 'N', longitudCampo: '17', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'N', validacion: '', valoresValidos: 'Valor de la primera cuota del riesgo', infoAdicional: '', observaciones: '' },
      { id: 3, grupo: 'RECIBOS', nombreCampo: 'Forma de Cobro', campoTronweb: 'N', secuencia: '3', tipoCampo: 'C', longitudCampo: '1', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'S', validacion: 'Valida que solamente es digite 1, 2, 3, 4, 5', valoresValidos: '1,2,4,5', infoAdicional: '', observaciones: '' },
      { id: 4, grupo: 'RECIBOS', nombreCampo: 'Gestor de Cobro', campoTronweb: 'S', secuencia: '4', tipoCampo: 'C', longitudCampo: '2', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'S', validacion: 'Validar que existe en la tabla A5020200', valoresValidos: 'A5020200 Tabla de Gestores de Cobro (Aguas, banco, Cobrador, etc)', infoAdicional: '', observaciones: '' },
      { id: 5, grupo: 'RECIBOS', nombreCampo: 'Código Gestor de Cobro', campoTronweb: 'S', secuencia: '5', tipoCampo: 'C', longitudCampo: '15', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'S', validacion: 'Valida que existe en Gestor de Cobro', valoresValidos: '', infoAdicional: '', observaciones: '' },
    ];
  }

  private cargarDatosProductor(): void {
    this.productorFijos = [
      { id: 1, grupo: 'PRODUCTOR', nombreCampo: 'Productor', campoTronweb: 'N', secuencia: '1', tipoCampo: 'N', longitudCampo: '5', campoObligatorio: 'S', campoPresupuesto: 'S', campoNulo: 'N', validacion: '', valoresValidos: 'Código asignado al productor. Mínimo de 5 posiciones.', infoAdicional: '', observaciones: '' },
      { id: 2, grupo: 'PRODUCTOR', nombreCampo: 'Cuadro de Comisión', campoTronweb: 'N', secuencia: '2', tipoCampo: 'N', longitudCampo: '3', campoObligatorio: 'S', campoPresupuesto: 'N', campoNulo: 'N', validacion: '', valoresValidos: 'Código asignado a la comisión que es dará al productor.', infoAdicional: '', observaciones: '' },
      { id: 3, grupo: 'PRODUCTOR', nombreCampo: 'Segundo Agente', campoTronweb: 'N', secuencia: '3', tipoCampo: 'N', longitudCampo: '5', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'N', validacion: '', valoresValidos: 'Agente que participa de la comisión del productor principal según definición previa a la comisión de la póliza.', infoAdicional: '', observaciones: '' },
      { id: 4, grupo: 'PRODUCTOR', nombreCampo: 'Tercer Agente', campoTronweb: 'N', secuencia: '4', tipoCampo: 'N', longitudCampo: '5', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'N', validacion: '', valoresValidos: 'Otro agente que participa de la comisión del productor principal según definición previa a la comisión de la póliza.', infoAdicional: '', observaciones: '' },
      { id: 5, grupo: 'PRODUCTOR', nombreCampo: 'Cuarto Agente', campoTronweb: 'N', secuencia: '5', tipoCampo: 'N', longitudCampo: '5', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'N', validacion: '', valoresValidos: 'Otro agente que participa de la comisión del productor principal según definición previa a la comisión de la póliza.', infoAdicional: '', observaciones: '' },
    ];
  }

  private cargarDatosOtrasIntervenciones(): void {
    this.otrasIntervencionesFijos = [
      { id: 1, grupo: 'OTRAS INTERVENCIONES', nombreCampo: 'Ejecutivo', campoTronweb: 'S', secuencia: '1', tipoCampo: 'N', longitudCampo: '5', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'S', validacion: '', valoresValidos: '', infoAdicional: '', observaciones: '' },
      { id: 2, grupo: 'OTRAS INTERVENCIONES', nombreCampo: 'Inspector', campoTronweb: 'S', secuencia: '2', tipoCampo: 'N', longitudCampo: '5', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'S', validacion: '', valoresValidos: '', infoAdicional: '', observaciones: '' },
      { id: 3, grupo: 'OTRAS INTERVENCIONES', nombreCampo: 'Asesor', campoTronweb: 'S', secuencia: '3', tipoCampo: 'N', longitudCampo: '5', campoObligatorio: 'N', campoPresupuesto: 'N', campoNulo: 'S', validacion: '', valoresValidos: '', infoAdicional: '', observaciones: '' },
    ];
  }

  abrirModal(dato: DatoFijo): void {
    this.datoEditando = dato;
    this.formEditando = { ...dato };
    this.mostrarModal = true;
  }

  abrirModalAsegurado(fila: FilaFijo, lista?: FilaFijo[]): void {
    this.aseguradoEditando = fila;
    this.formEditandoAsegurado = { ...fila };
    this.listaEditando = lista || this.aseguradosFijos;
    this.mostrarModalAsegurado = true;
  }

  cerrarModal(): void {
    this.mostrarModal = false;
    this.datoEditando = null;
    this.formEditando = {};
  }

  cerrarModalAsegurado(): void {
    this.mostrarModalAsegurado = false;
    this.aseguradoEditando = null;
    this.formEditandoAsegurado = {};
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

  guardarCambiosAsegurado(): void {
    if (this.aseguradoEditando) {
      const index = this.listaEditando.findIndex((a) => a.id === this.aseguradoEditando!.id);
      if (index !== -1) {
        this.listaEditando[index] = { ...this.formEditandoAsegurado };
      }
    }
    this.cerrarModalAsegurado();
  }
}
