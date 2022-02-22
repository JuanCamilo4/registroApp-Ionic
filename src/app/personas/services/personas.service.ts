import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../interfaces/persona.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>('http://localhost:3000/personas');
  }

  getPersonasById(id: string): Observable<Persona> {
    return this.http.get<Persona>(`http://localhost:3000/personas/${id}`);
  }

  postPersonas(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>('http://localhost:3000/personas', persona);
  }

  putPersonas(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(`http://localhost:3000/personas/${persona.id}`, persona);
  }

  deletePersona(id: string): Observable<{}> {
    return this.http.delete(`http://localhost:3000/personas/${id}`);
  }

}
