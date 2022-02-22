import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../../interfaces/persona.interface';
import { PersonasService } from '../../services/personas.service';
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  generos: string[] = ['masculino', 'femenino'];
  guardado: boolean = false;
  fechaActual = new Date();
  fechaFormato: any = '';

  persona: Persona = {
    id: '',
    nombre: '',
    fecha_nacimiento: '',
    sexo: ''
  }

  constructor(private personaService: PersonasService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.personaService.getPersonasById(id))
      )
      .subscribe( (persona) => {
        this.persona = persona;
        this.guardado = true;
      })
    
    if (this.fechaActual.getMonth() +1 < 10) {
      this.fechaFormato = this.fechaActual.getFullYear() + "-" + `0${(this.fechaActual.getMonth() +1)}` + "-" + this.fechaActual.getDate();
    } else {
      this.fechaFormato = this.fechaActual.getFullYear() + "-" + (this.fechaActual.getMonth() +1) + "-" + this.fechaActual.getDate();
    }
  }

  guardar() {

    if (this.persona.id) {
      this.personaService.putPersonas(this.persona)   
        .subscribe(resp => {});
    } else {
      this.personaService.postPersonas(this.persona)
        .subscribe(resp => {});
    }
    this.guardado = true;
  }

}
