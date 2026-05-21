import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabaseService } from '../../services/database';

@Component({
  selector: 'app-ramo',
  imports: [CommonModule],
  templateUrl: './ramo.html',
  styleUrl: './ramo.css',
})
export class Ramo implements OnInit {
  sectores: string[] = [];
  opcionesSiNo: string[] = [];
  calculoPrima: string[] = [];

  constructor(private dbService: DatabaseService) {}

  async ngOnInit(): Promise<void> {
    await this.dbService.initialize();
    this.sectores = this.dbService.getSectores();
    this.opcionesSiNo = this.dbService.getOpcionesSiNo();
    this.calculoPrima = this.dbService.getCalculoPrima();
  }
}
