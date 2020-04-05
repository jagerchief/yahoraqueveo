import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.scss']
})
export class MainButtonComponent implements OnInit {

  @Input() text = 'Example text';
  constructor() { }

  ngOnInit() {
  }

}
