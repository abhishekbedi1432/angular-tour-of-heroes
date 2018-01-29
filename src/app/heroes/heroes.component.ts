import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
// import { HEROES } from '../mock-heroes'; // Now we will use service to get the Heroes list




@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[]
  selectedHero: Hero;

  //The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site
  constructor(private heroService:HeroService) { }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit() {
    this.getHeroes()
  }


  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(hero.name)
  }

}

