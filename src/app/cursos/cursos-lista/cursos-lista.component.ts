import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../curso';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css']
})
export class CursosListaComponent implements OnInit {

  //cursos!: Curso[];

  cursos$!: Observable<Curso[]>;

  constructor(private cursoService: CursosService) { }

  ngOnInit(): void {
    /*this.cursoService.list().subscribe(dados => this.cursos = dados);*/
    this.cursos$ = this.cursoService.list();
  }

}
