import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonList,
  IonItem, IonButton } from '@ionic/angular/standalone';
import { Pessoa } from '../models/pessoa';
import { PessoaService } from '../services/pessoa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButton, 
    FormsModule, //[(ngModel)]
    IonItem,
    IonList,
    IonInput,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonInput,
  ],
})
export class HomePage {
  protected nome!: string;
  protected telefone!: string;
  protected email!: string;
  protected senha!: string;

  private pessoaService = inject(PessoaService);
  private router = inject(Router);

  constructor() {}

  protected enviar() {

    const pessoa: Pessoa = {
      nome: this.nome,
      telefone: this.telefone,
      senha: this.senha,
      email: this.email
    }

    this.pessoaService.adicionar(pessoa);

    this.router.navigate(['pessoa-list']);
  }

}
