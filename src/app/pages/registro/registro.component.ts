import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  servicio = inject(LoginService)

  email:any
  password:any

registro ( usuario : any){
  let email = usuario.value.email
  let password = usuario.value.password
  let rol = 'user'
  let id = usuario.value.id


  let usuarioT ={
    id : id,
    email : email,
    password : password,
    rol : rol

  }


  this.servicio.postResgistrar( usuarioT).subscribe()

}


}
