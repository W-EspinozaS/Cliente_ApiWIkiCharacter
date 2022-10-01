import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonajeDTO } from 'src/app/dto/personaje-dto';
import { PeticionesService } from 'src/app/services/peticiones.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  constructor(
    private services: PeticionesService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  form1 = this.fb.group({
    nombre: ['', Validators.required],
    alias: ['', Validators.required],
    descripcion: ['', Validators.required],
    foto: ['', Validators.required],
    lanzamiento: ['', Validators.required],
    status: ['', Validators.required],
    apariciones: [
      {
        idAparicion: ['', Validators.pattern('^[0-9]*$'), Validators.required],
        pelicula: ['', Validators.required],
        estreno: ['', Validators.required],
        sinopsis: ['', Validators.required],
      },
    ],
  });

  ngOnInit(): void {}

  crear() {
    this.services
      .create(
        <PersonajeDTO>(<unknown>this.form1.value),
        localStorage.getItem('token')!
      )
      .subscribe(
        (user: any) => {
          if (user.status == 404) return alert('Error 404, El Servidor Falló');
          alert('Guardado con exito');
          this.router.navigate(['/home/personajes']);
        },
        (error: any) => {
          if (error.status == 401) {
            alert('sesion agotada');
            // return this.services.logOut();
          }
          return alert('Error al registrar personaje');
        }
      );
  }
}
