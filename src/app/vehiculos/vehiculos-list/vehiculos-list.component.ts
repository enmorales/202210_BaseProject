import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculosService } from '../vehiculos.service';

@Component({
  selector: 'app-vehiculos-list',
  templateUrl: './vehiculos-list.component.html',
  styleUrls: ['./vehiculos-list.component.css'],
})
export class VehiculosListComponent implements OnInit {
  vehiculos: Array<Vehiculo> = [];

  constructor(private vehiculosService: VehiculosService) {}

  getVehiculos(): void {
    this.vehiculosService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
    });
  }

  ngOnInit() {
    this.getVehiculos();
  }
}
