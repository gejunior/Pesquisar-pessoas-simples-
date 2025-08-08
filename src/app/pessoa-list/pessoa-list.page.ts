import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  IonItem, IonLabel, IonList, IonSearchbar, IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';
import { PessoaService } from '../services/pessoa.service';
import { Pessoa } from '../models/pessoa';

import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.page.html',
  styleUrls: ['./pessoa-list.page.scss'],
  standalone: true,
  imports: [IonItem, IonLabel, IonList, IonSearchbar, IonIcon, IonFabButton, IonFab, IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PessoaListPage implements OnInit {

  protected pessoas: Pessoa[] = [];
  
  private pessoaService = inject(PessoaService);
  private router = inject(Router);

  constructor() {
    addIcons({ add });
    this.pessoas = this.pessoaService.getTodos();
  }

  ngOnInit() {
    this.pessoas = this.pessoaService.getTodos();
    this.pessoasEncontradas = this.pessoas;
  }

  irPageHome() {
    this.router.navigate(['home'])
  }

  public pessoasEncontradas: Pessoa[] = [];

  pesquisar(event: any) {
    const target = event.target as HTMLIonSearchbarElement;
    const query = target.value?.toLowerCase() || '';

    this.pessoasEncontradas = this.pessoas.filter(pessoas => { 
      return pessoas.nome.toLowerCase().includes(query)});
  }

}
