import { Host, Injectable } from '@angular/core';
import { HEROSList } from './mock-heros';
import { Hero } from './Hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  selectedHero?:Hero;
  GetHeros():Hero[]{
    return HEROSList;
  }
  getTopheros():Hero[]{
    return HEROSList.slice(1,5  );
  }
  GetSelectedHero():Hero{
    return this.selectedHero;
  }
  
SaveSelectedHero(hero: Hero): void {
    this.selectedHero = hero;
  }

}
