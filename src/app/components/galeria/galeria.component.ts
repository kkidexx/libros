import { Component } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {


  constructor(private servicio: LibrosService ){}

  libros:any

  ngOnInit() {
    this.servicio.getLibros().subscribe(lib=>{
      this.libros = lib
    })


  }

}



