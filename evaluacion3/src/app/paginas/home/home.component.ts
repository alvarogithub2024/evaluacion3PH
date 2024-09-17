import { Component, ChangeDetectorRef } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { CambiarValorModalComponent } from 'src/app/cambiar-valor-modal-component/cambiar-valor-modal-component.component';
import { ConfirmDialogoComponent } from 'src/app/confirmardialogo/confirmardialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { ViajesCategoria } from 'src/app/API/Viajes';
import { ViajesLugaresService } from 'src/app/viajes-lugares.service';

export class AppModule {}

export interface Destino {
  nombre: string;
  pais: string;
  imagen: string;
  moneda: string;
  valorVueloIdaVuelta: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CurrencyPipe, CommonModule, FormsModule, IonicModule],
})
export class HomeComponent {
  valoresGuardados: { valorVuelo: number; moneda: string }[] = [];
  destinos: Destino[] = [
    {
      nombre: 'Playa Gemela',
      pais: 'Costa Rica',
      imagen: 'assets/img/playa.jpg',
      moneda: 'USD ',
      valorVueloIdaVuelta: 400
    },
    {
      nombre: 'Montaña de Comayagua National Park',
      pais: 'Honduras',
      imagen: 'assets/img/comayagua.jpg',
      moneda: 'USD ',
      valorVueloIdaVuelta: 300,
    },
    {
      nombre: 'Pichilemu',
      pais: 'Chile',
      imagen: 'assets/img/pichilemu.jpg',
      moneda: 'CLP ',
      valorVueloIdaVuelta: 70000,
    },
    {
      nombre: 'Holy Cross Church, Hanga Roa',
      pais: 'Chile',
      imagen: 'assets/img/church.jpg',
      moneda: 'CLP ',
      valorVueloIdaVuelta: 800000,
    },
  ];
  constructor(public dialog: MatDialog, private cd: ChangeDetectorRef, private servicio: ViajesLugaresService ) {}

  async ngOnInit () {
    const res = await this.servicio.getCategorias ()
    this.categorias = res.Viajes
  }

  destinosFiltrados = [...this.destinos]; // Inicialmente mostramos todos los destinos

  // Función para filtrar los destinos
  filtrarDestinos(event: any) {
    const valorBuscado = event.target.value.toLowerCase();
    this.destinosFiltrados = this.destinos.filter(destino =>
      destino.nombre.toLowerCase().includes(valorBuscado) ||
      destino.pais.toLowerCase().includes(valorBuscado)
    );
  }

  async cambiarFoto(destino: Destino) {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
      });
      destino.imagen = image.webPath || 'fallback_image_url_here';
    } catch (error) {
      console.error('Error al obtener foto: ', error);
    }
  }

  // Función para abrir el modal y actualizar el valor y la moneda del destino
  abrirModal(destino: Destino) {
    const dialogRef = this.dialog.open(CambiarValorModalComponent, {
      width: '250px',
      data: { ...destino }, // Pasamos los datos actuales del destino
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Actualizamos el destino con los nuevos valores
        destino.valorVueloIdaVuelta = result.valorVuelo;
        destino.moneda = result.moneda;

        // Forzamos la detección de cambios
        this.cd.detectChanges();
      }
    });
  }
  solicitarConfirmacionEliminacion(destinoEliminado: Destino): void {
    const dialogRef = this.dialog.open(ConfirmDialogoComponent, {
      width: '300px',
      data: { ...destinoEliminado },
    });

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this.eliminarDestino(destinoEliminado);
      }
    });
  }

  eliminarDestino(destino: Destino): void {
    // Eliminamos el destino de la lista original
    this.destinos = this.destinos.filter((d) => d !== destino);

    // Actualizamos la lista filtrada
    this.destinosFiltrados = [...this.destinos];

    // Forzamos la detección de cambios
    this.cd.detectChanges();
  }
categorias: ViajesCategoria []  =  []
}