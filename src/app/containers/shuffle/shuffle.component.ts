import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-shuffle',
  templateUrl: './shuffle.component.html',
  styleUrls: ['./shuffle.component.scss']
})
export class ShuffleComponent implements OnInit {

  public streamingServices = [
    'Netflix',
    'HBO',
    'Movistar+',
    'Disney+',
    'Amazon Prime',
    'Filmin',
  ];
  public mediaType = [
    'Peli',
    'Serie'
  ];
  public mediaCategory = [
    'Comedia',
    'Drama',
    'Suspense',
    'Terror',
    'Acción',
  ];

  @ViewChild('slot1', {static: false}) slotChild1;
  @ViewChild('slot2', {static: false}) slotChild2;
  @ViewChild('slot3', {static: false}) slotChild3;
  @ViewChild('slot4', {static: false}) slotChild4;

  constructor() { }

  ngOnInit() {
  }

  onButtonClick(){
    this.slotChild1.shuffle();
    this.slotChild2.shuffle();
    this.slotChild3.shuffle();
    this.slotChild4.shuffle();
  }

}
