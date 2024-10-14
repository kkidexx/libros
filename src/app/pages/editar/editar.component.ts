import { Component, inject } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {

  servicio = inject(LibrosService)
  ruta = inject(ActivatedRoute)

  id:any
  autor:any
  titulolibro:any
  aniopublicado:any


  ngOnInit() {


    this.ruta.params.subscribe(parametro =>{
    this.servicio.getLibro(parametro['idLibro']).subscribe(p=>{
      this.id= p.id
      this.autor= p.auto
      this.titulolibro= p.titulolibro
      this.aniopublicado=p.aniopublicado

    })

    })



  }

  editar(data:any){
    this.servicio.putLibros(data.value).subscribe()
    location.href= 'gestion'

  }

}


