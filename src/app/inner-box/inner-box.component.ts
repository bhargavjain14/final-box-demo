import { Component, OnInit, Input } from '@angular/core';
import { BoxService } from '../box.service';

@Component({
  selector: 'app-inner-box',
  templateUrl: './inner-box.component.html',
  styleUrls: ['./inner-box.component.scss']
})
export class InnerBoxComponent implements OnInit {

  constructor(private boxService: BoxService) { }

  public boxVisibilityArray: boolean[] = [true, true, true, true];

  ngOnInit(): void {
    this.boxService.boxVisibilitySubject.subscribe(boxArray => this.boxVisibilityArray = boxArray);
  }

  @Input() boxId: number = 0;

  innerBoxClickedFn(boxId: number): void {
    this.boxService.toggleBoxVisiblity(boxId);
  }

}
