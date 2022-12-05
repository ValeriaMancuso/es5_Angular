import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from 'src/app/models/card.interface';
import { CardsService } from 'src/app/services/cards.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  sub!: Subscription;
  cards: Card[] | undefined;
  count: number = 0;


  constructor(private http: HttpClient, private cardsSrv: CardsService) { }

  ngOnInit(): void {
    this.recuperaCarte();
  }

  recuperaCarte() {
    this.sub = this.cardsSrv.get().subscribe((ris) => {
      this.cards = ris;
      console.log(ris)
    })
  }

  cancellaCarta(id: number) {
    this.sub = this.cardsSrv.delete(id).subscribe(() => {
      this.cards = this.cards?.filter((card) => card.id != id);
  });
  }

  miPiace() {
    this.cardsSrv.likeS.next(this.count);
    }
}
