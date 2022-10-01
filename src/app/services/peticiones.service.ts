import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PersonajeDTO } from '../dto/personaje-dto';
import { UsuarioDTO } from '../dto/usuario-dto';
const ruta="http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  constructor(private http: HttpClient, private router:Router) { }

  logins(user: UsuarioDTO){
    return this.http.post(`${ruta}/auth/login`, user);
  }

  public logOut(): void{
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/']);
  }

  list(){
  }

}