import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Deducible {
  id: number;
  nombreCobertura: string;
  limiteInferior: string;
  limiteSuperior: string;
  valorPorDefecto: string;
  observaciones: string;
}

@Component({
  selector: 'app-deducibles',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './deducibles.html',
  styleUrl: './deducibles.css',
})
export class Deducibles implements OnInit {
  deducibles: Deducible[] = [];
  mostrarModal = false;
  deducibleEditando: Deducible | null = null;
  formEditando: any = {};
  nuevoDeducible: Deducible = {
    id: 0,
    nombreCobertura: '',
    limiteInferior: '',
    limiteSuperior: '',
    valorPorDefecto: '',
    observaciones: '',
  };

  ngOnInit(): void {
    this.cargarDeducibles();
  }

  private cargarDeducibles(): void {
    this.deducibles = [
      {
        id: 1,
        nombreCobertura: 'Responsabilidad Civil',
        limiteInferior: '100',
        limiteSuperior: '10000',
        valorPorDefecto: '500',
        observaciones: 'Aplica a terceros',
      },
      {
        id: 2,
        nombreCobertura: 'Daños Materiales',
        limiteInferior: '50',
        limiteSuperior: '5000',
        valorPorDefecto: '250',
        observaciones: 'Incluye robo y hurto',
      },
      {
        id: 3,
        nombreCobertura: 'Lesiones Corporales',
        limiteInferior: '200',
        limiteSuperior: '20000',
        valorPorDefecto: '1000',
        observaciones: 'Por persona afectada',
      },
    ];
  }

  agregarDeducible(): void {
    if (
      this.nuevoDeducible.nombreCobertura.trim() &&
      this.nuevoDeducible.limiteInferior &&
      this.nuevoDeducible.limiteSuperior
    ) {
      const nuevoId =
        this.deducibles.length > 0 ? Math.max(...this.deducibles.map((d) => d.id)) + 1 : 1;
      this.deducibles.push({
        ...this.nuevoDeducible,
        id: nuevoId,
      });
      this.limpiarFormulario();
    }
  }

  abrirModal(deducible: Deducible): void {
    this.deducibleEditando = deducible;
    this.formEditando = { ...deducible };
    this.mostrarModal = true;
  }

  cerrarModal(): void {
    this.mostrarModal = false;
    this.deducibleEditando = null;
    this.formEditando = {};
  }

  guardarCambios(): void {
    if (this.deducibleEditando) {
      const index = this.deducibles.findIndex((d) => d.id === this.deducibleEditando!.id);
      if (index !== -1) {
        this.deducibles[index] = { ...this.formEditando };
      }
    }
    this.cerrarModal();
  }

  eliminarDeducible(id: number): void {
    this.deducibles = this.deducibles.filter((d) => d.id !== id);
  }

  limpiarFormulario(): void {
    this.nuevoDeducible = {
      id: 0,
      nombreCobertura: '',
      limiteInferior: '',
      limiteSuperior: '',
      valorPorDefecto: '',
      observaciones: '',
    };
  }
}
