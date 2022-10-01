import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Apariciones, PersonajeDTO } from 'src/app/dto/personaje-dto';
import { PeticionesService } from 'src/app/services/peticiones.service';
const ruta="http://localhost:3000";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private services:PeticionesService
  ) { }

  personajes:PersonajeDTO[]=[];
  ngOnInit(): void {
    this.services.getCharacter().subscribe((personajes:any) =>{
      this.personajes=personajes;
    });

  }

  delete(){}

  update(){}

}
