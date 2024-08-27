import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';
import { NgIf } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <h2 class="center">Editer {{ pokemon?.name }}</h2>
    <p *ngIf="pokemon" class="center">
      <img [src]="pokemon.picture">
    </p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  standalone: true,
  imports: [NgIf, PokemonFormComponent]
})
export class EditPokemonComponent implements OnInit {

  pokemon: Pokemon | undefined;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private title: Title
  ) { }

  ngOnInit() {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId)
        .subscribe(pokemon => {
          this.pokemon = pokemon;
          this.initTitle(pokemon);
        });
    } else {
      this.pokemon = undefined;
    }
  }

  initTitle(pokemon: Pokemon | undefined) {
    if (!pokemon) {
      this.title.setTitle('Pokemon not found');
    } else {
      this.title.setTitle(`${pokemon.name}`);
    }
  }
}
