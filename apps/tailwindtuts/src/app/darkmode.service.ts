import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {

  $darkmode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { 
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.$darkmode.next(true)
    }
  }
}
