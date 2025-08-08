import { Injectable } from '@angular/core';
import { Pessoa } from '../models/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private pessoas: Pessoa[] = [];

  constructor() { }

  public adicionar(pessoa: Pessoa): void {
    this.pessoas.push(pessoa);
  }

  public getTodos(): Pessoa[] {
    return this.pessoas;
  }
}
