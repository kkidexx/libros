import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {


  constructor(private http: HttpClient) { }

  private API_LIBROS="http://localhost:3000/libros"



  //escribir - guardar
  postLibros( persona: JSON ):Observable<any>{
    return this.http.post(this.API_LIBROS, persona)
  }


  //leer
  getLibros():Observable<any>{
    return this.http.get(this.API_LIBROS)

  }

  getLibro( id: string):Observable<any>{
    return this.http.get(this.API_LIBROS+"/"+id)
  }


  //editar
  putLibros(persona:any):Observable<any> {
    return this.http.put(`${this.API_LIBROS}/${persona.id}`,persona)
  }

  //eliminar
  deleteLibros(id: string):Observable<any>{
    return this.http.delete(`${this.API_LIBROS}/${id}`)
  }
}




