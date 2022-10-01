import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Apariciones, PersonajeDTO } from 'src/app/dto/personaje-dto';
const ruta="http://localhost:3000";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  personajes:PersonajeDTO[]=[];
  apariciones:Apariciones[]=[];

  constructor(
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<PersonajeDTO[]>(`${ruta}/character`).subscribe((res)=>{
      this.personajes=res
    });

  }

}
