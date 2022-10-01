import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsuarioDTO } from '../dto/usuario-dto';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loading= false;

  constructor(
    private _snackBar: MatSnackBar,
    private services: PeticionesService,
    private fb: FormBuilder,
    private router: Router
    ) { }

    form = this.fb.group({
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required],
    });

  ngOnInit(): void {
  }

  login(){
    this.services.logins(<UsuarioDTO>this.form.value).subscribe((user:any)=>{
      if(user.status == 406){
        this.form.reset();
        this.error();
      }else{
        localStorage.setItem('token', user.access_token);
        localStorage.setItem('usuario', this.form.value.usuario!);
        this.fakelogin();
      } 
    });
  }

  error(){
    this._snackBar.open('Los Datos son incorrectos', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  fakelogin(){
    this.loading= true;
    setTimeout(()=>{
      this.router.navigate(['/home']);
      this.loading=false;
    }, 1500);
  }
}
