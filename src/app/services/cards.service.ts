import { Injectable } from '@angular/core';
import { Card } from '../models/card.interface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  likeS = new Subject();
  likeO = this.likeS.asObservable();

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Card[]>('https://jsonplaceholder.typicode.com/photos').pipe(map(ris => ris))
  }

  delete(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
  }
}

