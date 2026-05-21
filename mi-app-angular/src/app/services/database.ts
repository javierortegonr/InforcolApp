import { Injectable } from '@angular/core';
import initSqlJs, { Database as SqlJsDatabase } from 'sql.js';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private db: SqlJsDatabase | null = null;
  private SQL: any;

  async initialize(): Promise<void> {
    if (this.db) return;

    this.SQL = await initSqlJs({
      locateFile: (filename: string) => `/sql-wasm.wasm`
    });
    this.db = new this.SQL.Database();
    this.createTables();
    this.insertData();
  }

  private createTables(): void {
    if (!this.db) return;

    this.db.run(`
      CREATE TABLE IF NOT EXISTS sectores (
        id INTEGER PRIMARY KEY,
        nombre TEXT NOT NULL UNIQUE
      )
    `);

    this.db.run(`
      CREATE TABLE IF NOT EXISTS opciones_si_no (
        id INTEGER PRIMARY KEY,
        valor TEXT NOT NULL UNIQUE
      )
    `);

    this.db.run(`
      CREATE TABLE IF NOT EXISTS calculo_prima (
        id INTEGER PRIMARY KEY,
        tipo TEXT NOT NULL UNIQUE
      )
    `);

    this.db.run(`
      CREATE TABLE IF NOT EXISTS tipos_terceros (
        id INTEGER PRIMARY KEY,
        nombre TEXT NOT NULL UNIQUE
      )
    `);

    this.db.run(`
      CREATE TABLE IF NOT EXISTS tipos_campo (
        id INTEGER PRIMARY KEY,
        nombre TEXT NOT NULL UNIQUE
      )
    `);
  }

  private insertData(): void {
    if (!this.db) return;

    const sectores = ['Automoviles', 'Generales', 'Finanzas', 'Vida', 'Transporte'];
    sectores.forEach((sector) => {
      try {
        this.db!.run('INSERT INTO sectores (nombre) VALUES (?)', [sector]);
      } catch (e) {}
    });

    const opciones = ['Si', 'No'];
    opciones.forEach((opcion) => {
      try {
        this.db!.run('INSERT INTO opciones_si_no (valor) VALUES (?)', [opcion]);
      } catch (e) {}
    });

    const primas = ['Automaticas', 'Manuales', 'Automaticas/Manuales'];
    primas.forEach((prima) => {
      try {
        this.db!.run('INSERT INTO calculo_prima (tipo) VALUES (?)', [prima]);
      } catch (e) {}
    });

    const tiposTerceros = [
      'TOMADOR',
      'TOMADORES ALTERNOS',
      'ASEGURADOS',
      'CONDUCTORES',
      'PROPIETARIOS',
      'BENEFS. CONTINGENTE - VIDA',
      'BENEFICIARIOS VIDA',
      'PROPONENTE',
      'ENDOSATARIO',
      'PREVENTOR',
      'ASEGURADO SINOT',
    ];
    tiposTerceros.forEach((tipo) => {
      try {
        this.db!.run('INSERT INTO tipos_terceros (nombre) VALUES (?)', [tipo]);
      } catch (e) {}
    });

    const tiposCampo = ['Tipo de Campo', 'Carácter', 'Numérico', 'Fecha'];
    tiposCampo.forEach((tipo) => {
      try {
        this.db!.run('INSERT INTO tipos_campo (nombre) VALUES (?)', [tipo]);
      } catch (e) {}
    });
  }

  getSectores(): string[] {
    if (!this.db) return [];
    const stmt = this.db.prepare('SELECT nombre FROM sectores ORDER BY nombre');
    const result: string[] = [];
    while (stmt.step()) {
      result.push(stmt.getAsObject()['nombre'] as string);
    }
    stmt.free();
    console.log('Sectores cargados:', result);
    return result;
  }

  getOpcionesSiNo(): string[] {
    if (!this.db) return [];
    const stmt = this.db.prepare('SELECT valor FROM opciones_si_no ORDER BY valor');
    const result: string[] = [];
    while (stmt.step()) {
      result.push(stmt.getAsObject()['valor'] as string);
    }
    stmt.free();
    console.log('Opciones Si/No cargadas:', result);
    return result;
  }

  getCalculoPrima(): string[] {
    if (!this.db) return [];
    const stmt = this.db.prepare('SELECT tipo FROM calculo_prima ORDER BY tipo');
    const result: string[] = [];
    while (stmt.step()) {
      result.push(stmt.getAsObject()['tipo'] as string);
    }
    stmt.free();
    console.log('Cálculo Prima cargado:', result);
    return result;
  }

  getTiposTerceros(): string[] {
    if (!this.db) return [];
    const stmt = this.db.prepare('SELECT nombre FROM tipos_terceros ORDER BY nombre');
    const result: string[] = [];
    while (stmt.step()) {
      result.push(stmt.getAsObject()['nombre'] as string);
    }
    stmt.free();
    console.log('Tipos de terceros cargados:', result);
    return result;
  }

  getTiposCampo(): string[] {
    if (!this.db) return [];
    const stmt = this.db.prepare('SELECT nombre FROM tipos_campo ORDER BY nombre');
    const result: string[] = [];
    while (stmt.step()) {
      result.push(stmt.getAsObject()['nombre'] as string);
    }
    stmt.free();
    console.log('Tipos de campo cargados:', result);
    return result;
  }
}
