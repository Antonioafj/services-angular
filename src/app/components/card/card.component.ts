import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonData } from '../../models/pokemonData';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  pokemon: PokemonData

  constructor(
    private service: PokemonService
  ){ this.pokemon = {
      id:0,
      name: '',
      sprites:{
        front_default:''
      },
      types:[]
    }
  }

  ngOnInit(): void {
    this.getPokemon('pikachu')
  }

  getPokemon(searchName: string){
    this.service.getPokemon(searchName).subscribe({
      next: (res) => {
        this.pokemon = {
          id: res.id,
          name: res.name,
          sprites: res.sprites,
          types : res.types
        }

      },
      error: (err) => console.log('not found')
    })
  }  
}
