import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HeroService {


  messageServiceVariable: MessageService;

  constructor(private messageService: MessageService, private http: HttpClient) {
    this.messageServiceVariable = messageService;
  }

  getHeroes(): Observable<Hero[]> {
    this.messageServiceVariable.add("HeroService: fetched heroes");
    
    const HEROES: Hero[] = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {

    this.messageService.add(`HeroService: fetched hero id=${id}`);
    
    return of(HEROES.find(hero => hero.id === id));
  }
}
