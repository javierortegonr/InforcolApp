import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Limite {
  id: number;
  nombreCobertura: string;
  limiteInferior: string;
  limiteSuperior: string;
  valorPorDefecto: string;
  observaciones: string;
}

@Component({
  selector: 'app-limites',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './limites.html',
  styleUrl: './limites.css',
})
export class Limites implements OnInit {
  limites: Limite[] = [];
  mostrarModal = false;
  limiteEditando: Limite | null = null;
  formEditando: any = {};
  nuevoLimite: Limite = {
    id: 0,
    nombreCobertura: '',
    limiteInferior: '',
    limiteSuperior: '',
    valorPorDefecto: '',
    observaciones: '',
  };

  ngOnInit(): void {
    this.cargarLimites();
  }

  private cargarLimites(): void {
    this.limites = [
      {
        id: 1,
        nombreCobertura: 'Responsabilidad Civil',
        limiteInferior: '50000',
        limiteSuperior: '1000000',
        valorPorDefecto: '500000',
        observaciones: 'Límite por ocurrencia',
      },
      {
        id: 2,
        nombreCobertura: 'Daños Materiales',
        limiteInferior: '10000',
        limiteSuperior: '500000',
        valorPorDefecto: '100000',
        observaciones: 'Cobertura total del bien',
      },
      {
        id: 3,
        nombreCobertura: 'Lesiones Corporales',
        limiteInferior: '25000',
        limiteSuperior: '1000000',
        valorPorDefecto: '250000',
        observaciones: 'Por persona afectada',
      },
      {
        id: 4,
        nombreCobertura: 'Asistencia Jurídica',
        limiteInferior: '5000',
        limiteSuperior: '100000',
        valorPorDefecto: '50000',
        observaciones: 'Gastos legales',
      },
    ];
  }

  agregarLimite(): void {
    if (
      this.nuevoLimite.nombreCobertura.trim() &&
      this.nuevoLimite.limiteInferior &&
      this.nuevoLimite.limiteSuperior
    ) {
      const nuevoId = this.limites.length > 0 ? Math.max(...this.limites.map((l) => l.id)) + 1 : 1;
      this.limites.push({
        ...this.nuevoLimite,
        id: nuevoId,
      });
      this.limpiarFormulario();
    }
  }

  abrirModal(limite: Limite): void {
    this.limiteEditando = limite;
    this.formEditando = { ...limite };
    this.mostrarModal = true;
  }

  cerrarModal(): void {
    this.mostrarModal = false;
    this.limiteEditando = null;
    this.formEditando = {};
  }

  guardarCambios(): void {
    if (this.limiteEditando) {
      const index = this.limites.findIndex((l) => l.id === this.limiteEditando!.id);
      if (index !== -1) {
        this.limites[index] = { ...this.formEditando };
      }
    }
    this.cerrarModal();
  }

  eliminarLimite(id: number): void {
    this.limites = this.limites.filter((l) => l.id !== id);
  }

  limpiarFormulario(): void {
    this.nuevoLimite = {
      id: 0,
      nombreCobertura: '',
      limiteInferior: '',
      limiteSuperior: '',
      valorPorDefecto: '',
      observaciones: '',
    };
  }
}
