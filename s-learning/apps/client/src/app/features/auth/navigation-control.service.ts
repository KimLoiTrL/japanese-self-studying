import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationControlService {

  shouldDisplayNavigation = true;

  constructor() {}
}
