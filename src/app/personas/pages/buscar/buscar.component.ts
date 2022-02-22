import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Persona } from '../../interfaces/persona.interface';
import { PersonasService } from '../../services/personas.service';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  ELEMENT_DATA: Persona[] = [];
  displayedColumns: string[] = ['nombre', 'fecha_nacimiento', 'sexo'];
  dataSource: any = '';

  constructor(private personaService: PersonasService) { }

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas() {
    this.personaService.getPersonas()
      .subscribe(persona => {
        this.ELEMENT_DATA = persona;
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
        console.log(this.ELEMENT_DATA);
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
