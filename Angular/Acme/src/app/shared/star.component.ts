import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: 'star.component.html',
  styleUrls: ['star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  @Output() starClicked = new EventEmitter<string>();
  starWidth: number;
  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }
  onClickStar(): void {
    this.starClicked.emit('The rating ${this.rating} was clicked');
  }
}
