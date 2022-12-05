import { Component } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'es5_Angular';
  count: number = 0;

  constructor(private cardsSrv: CardsService){}

  ngOnInit() {
      this.cardsSrv.likeO.subscribe(() => {
        this.count++;
      })


  }
}
