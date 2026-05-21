import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Tercero {
  id: number;
  tipo: string;
  cantidadMaxima: string;
  peticionDatos: string;
  peticionPorcentaje: string;
  hayPrincipal: string;
  observacionesGenerales: string;
  observacionesCliente: string;
}

@Component({
  selector: 'app-tipos-de-terceros',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tipos-de-terceros.html',
  styleUrl: './tipos-de-terceros.css',
})
export class TiposDeTerceros {
  terceros: Tercero[] = [];
  nextId = 1;

  form = {
    tipo: '',
    cantidadMaxima: '',
    peticionDatos: '',
    peticionPorcentaje: '',
    hayPrincipal: '',
    observacionesGenerales: '',
    observacionesCliente: '',
  };

  agregarTercero(): void {
    if (this.form.tipo.trim()) {
      const nuevoTercero: Tercero = {
        id: this.nextId++,
        ...this.form,
      };
      this.terceros.push(nuevoTercero);
      this.limpiarFormulario();
    }
  }

  eliminarTercero(id: number): void {
    this.terceros = this.terceros.filter((t) => t.id !== id);
  }

  limpiarFormulario(): void {
    this.form = {
      tipo: '',
      cantidadMaxima: '',
      peticionDatos: '',
      peticionPorcentaje: '',
      hayPrincipal: '',
      observacionesGenerales: '',
      observacionesCliente: '',
    };
  }
}
