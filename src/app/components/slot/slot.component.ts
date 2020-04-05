import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.scss']
})
export class SlotComponent implements OnInit {

  @Input() defaultTerm = 'Default';
  public selectedValue;
  public isScrolling = false;
  public maxNumMediaItems = 4;
  @Input() valuesArray = [];
  constructor() { }

  ngOnInit() {
  }

  shuffle(){
    let randomValue;
    if(this.valuesArray.length == 0){
      randomValue = (Math.floor(Math.random() * this.maxNumMediaItems)) + 1;
      randomValue = randomValue + 'ª';
    }else{
      randomValue = this.valuesArray[Math.floor(Math.random() * this.valuesArray.length)];
    }
    this.isScrolling = true;
    setTimeout( () => {
      this.selectedValue = randomValue;
      this.isScrolling = false;

    }, 2000 );
  }

}
