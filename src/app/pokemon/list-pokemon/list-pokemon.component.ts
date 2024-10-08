import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router, RouterLink } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { BorderCardDirective } from '../border-card.directive';
import { NgFor, DatePipe } from '@angular/common';
import { SearchPokemonComponent } from '../search-pokemon/search-pokemon.component';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  standalone: true,
  imports: [SearchPokemonComponent, NgFor, BorderCardDirective, RouterLink, DatePipe, PokemonTypeColorPipe]
})
export class ListPokemonComponent {
  pokemonList: Pokemon[];

  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.pokemonService.getPokemonList()
      .subscribe(pokemonList => this.pokemonList = pokemonList);
  }

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id]);
  }
}