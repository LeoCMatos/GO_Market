import { Component } from '@angular/core';
import { GlobalService } from '../../services/global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private globalService: GlobalService) { }
  name: string = this.globalService.globalName;

}
