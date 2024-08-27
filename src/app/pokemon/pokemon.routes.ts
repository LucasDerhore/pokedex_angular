import { Routes } from "@angular/router";
import { PokemonService } from "./pokemon.service";

export default [{
  path: '',
  providers: [PokemonService],
  children: [
    {
      path: 'edit/pokemon/:id',
      loadComponent: () => import('./edit-pokemon/edit-pokemon.component').then(m => m.EditPokemonComponent)
    },
    {
      path: 'pokemon/add',
      title: 'Add Pokemon',
      loadComponent: () => import('./add-pokemon/add-pokemon.component').then(m => m.AddPokemonComponent)
    },
    {
      path: 'pokemons',
      title: 'Pokédex',
      loadComponent: () => import('./list-pokemon/list-pokemon.component').then(m => m.ListPokemonComponent)
    },
    {
      path: 'pokemon/:id',
      loadComponent: () => import('./detail-pokemon/detail-pokemon.component').then(m => m.DetailPokemonComponent)
    }
  ]
}] as Routes;