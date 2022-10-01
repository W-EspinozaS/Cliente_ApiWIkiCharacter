import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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

  getCharacter(){
    return this.http.get<PersonajeDTO[]>(`${ruta}/character`);
  }

  create(user: PersonajeDTO, token: string){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    return this.http.post(`${ruta}/character/create`, user, {headers});
  }

  update(user: PersonajeDTO, token: string, id: string){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    return this.http.patch(`${ruta}/character/${id}`, user, {headers});
  }

  delete(token: string, id: string){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    return this.http.patch(`${ruta}/character/${id}`, {headers});
  }

}