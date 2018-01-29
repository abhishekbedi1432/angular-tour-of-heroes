import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from '../mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[]
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
    this.heroes = HEROES;
  }


  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(hero.name)
  }

}

