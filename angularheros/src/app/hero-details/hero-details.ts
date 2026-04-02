import { Component, Input } from '@angular/core';
import { Hero } from '../Hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero-service';

@Component({
  selector: 'app-hero-details',
  imports: [],
  templateUrl: './hero-details.html',
  styleUrl: './hero-details.css',
})
export class HeroDetails {
 // @Input() myHero?:Hero
 myHero?: any;
 constructor(private myHeroSvc: HeroService, private route: ActivatedRoute){}
 
 ngOnInit():void{
  this.ComponentgetHero();
 }
  ComponentgetHero():void{
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.myHeroSvc.GetHeros()
    .subscribe( h1=>this.myHero =h1);
    };
}
