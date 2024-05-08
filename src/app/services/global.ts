import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  globalName: string = '';

  constructor() { }

  setGlobalName(name: string): void {
    this.globalName = name;
  }
}
