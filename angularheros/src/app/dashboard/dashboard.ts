import { Component } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService } from '../hero-service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  myheroes:Hero[]=[];
  constructor(private heroService:HeroService){}

  ngOnInIt():void{
    this.getHeroes();
  }
  getHeroes():void{
    this.myheroes=this.heroService.getTopheros()

      console.log(this.myheroes);
    
  }
}
