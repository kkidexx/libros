import { Component } from '@angular/core';
import { GaleriaComponent } from '../../components/galeria/galeria.component';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [GaleriaComponent],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent {

}
