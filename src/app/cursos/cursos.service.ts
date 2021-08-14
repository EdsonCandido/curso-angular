import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Curso } from '../cursos/curso'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API_KEY = `${environment.API}/cursos`;

  constructor(private http: HttpClient) { }

  list(): Observable<Curso[]>{
    return this.http.get<Curso[]>(this.API_KEY);
  }
}
