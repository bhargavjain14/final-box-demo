import { Component, OnInit } from '@angular/core';
import { BoxService } from './box.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public boxVisibilityArray: boolean[] = [true, true, true, true];

  constructor(private boxService: BoxService) {
  }

  ngOnInit() {
    this.boxService.boxVisibilitySubject.subscribe(boxArray => this.boxVisibilityArray = boxArray);
  }

  isResetLinkVisiable(): boolean {
    return this.boxVisibilityArray.indexOf(true) === -1;
  }

  resetBoxData(): void {
    this.boxService.resetBoxData();
  }
}
