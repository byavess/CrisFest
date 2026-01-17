import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Cris Fest');

  // Aqui mapeamos as pastas que vi na sua primeira imagem
  protected readonly acervo = signal([
    { 
      nome: 'Vamos lá Meninos', 
      imagem: 'assets/images/praMeninos/WhatsApp Image 2026-01-16 at 14.52.24 (2).jpeg', 
      desc: 'Nosso catálogo principal' 
    },
    { 
      nome: 'Vamos lá Meninas', 
      imagem: 'assets/images/praMeninas/logo.jpeg', // Ajuste o nome da foto se necessário
      desc: 'Temas delicados e exclusivos' 
    },
    { 
      nome: 'Acervo Geral', 
      imagem: 'assets/images/nossoAcervo/logo.jpeg', 
      desc: 'Tudo para sua festa' 
    }
  ]);

  enviarWhatsapp() {
    const msg = encodeURIComponent('Olá Cris Fest! Gostaria de um orçamento.');
    window.open(`https://wa.me/5511999999999?text=${msg}`, '_blank');
  }
}