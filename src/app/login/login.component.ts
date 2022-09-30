import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsuarioDTO } from '../dto/usuario-dto';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  constructor(
    private _snackBar: MatSnackBar,
    private loginservices: LoginService,
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
    this.loginservices.logins(<UsuarioDTO>this.form.value).subscribe((user:any)=>{
      if(user.status == 406){
        this.form.reset();
        this.error();
      }else{
        localStorage.setItem('token', user.access_token);
        localStorage.setItem('usuario', this.form.value.usuario!);
        this.router.navigate(['/home']);
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
}
