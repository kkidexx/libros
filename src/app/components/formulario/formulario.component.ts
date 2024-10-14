import { Component, inject } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  servicio= inject(LibrosService)

  id:any
  autor:any
  titulolibro:any
  aniopublicado:any



  guardar(data: any){
    alert("Mensaje resivido")
    this.servicio.postLibros(data.value).subscribe()
    this.limpiar()

  }





  limpiar(){
    this.id=''; this.autor=''; this.titulolibro=''; this.aniopublicado=''
  }

}



