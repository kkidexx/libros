import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibrosService } from '../../services/libros.service';

@Component({
  selector: 'app-detallelibros',
  standalone: true,
  imports: [],
  templateUrl: './detallelibros.component.html',
  styleUrl: './detallelibros.component.css'
})
export class DetallelibrosComponent {
  constructor(private ruta: ActivatedRoute, private servicio: LibrosService){}

  libros:any

  ngOnInit(){
    this.ruta.params.subscribe(parametro=>{
      console.log(parametro['idLibro'])
      let id=parametro['idLibro'];

      this.servicio.getLibro(id).subscribe(libro=>{
        this.libros=libro
        console.log(libro)
      })
    })
  }

}




