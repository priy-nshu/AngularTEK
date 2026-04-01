import { Component, Input } from '@angular/core';
import { Hero } from '../Hero';

@Component({
  selector: 'app-hero-details',
  imports: [],
  templateUrl: './hero-details.html',
  styleUrl: './hero-details.css',
})
export class HeroDetails {
  @Input() myHero?:Hero
}
