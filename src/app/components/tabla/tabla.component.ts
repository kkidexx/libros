import { Component, inject } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  servicio = inject(LibrosService);
  libros: any;

  ngOnInit() {
    this.servicio.getLibros().subscribe(a => {
      this.libros = a;
    });
  }

  eliminar(id: string) {
    this.servicio.deleteLibros(id).subscribe(() => {
      this.libros = this.libros.filter((item: any) => item.id !== id);
    });
  }
}


