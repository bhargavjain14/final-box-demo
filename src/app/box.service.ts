import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BoxService {
    public boxVisibilityArray: boolean[] = [true, true, true, true];
    public boxVisibilitySubject: BehaviorSubject<boolean[]>;

    constructor() {
        this.boxVisibilitySubject = new BehaviorSubject(this.boxVisibilityArray);
    }

    toggleBoxVisiblity(boxNumber: number) {
        this.boxVisibilityArray[boxNumber] = !this.boxVisibilityArray[boxNumber];
        this.boxVisibilitySubject.next(this.boxVisibilityArray);
    }

    resetBoxData(): void {
        this.boxVisibilityArray = [true, true, true, true];
        this.boxVisibilitySubject.next(this.boxVisibilityArray);
    }
}
