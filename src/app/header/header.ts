import { Component } from '@angular/core';
import { Contentcomponent } from '../content/content';
import {Spacecraft} from '../spacecraft/spacecraft'
@Component({
  selector: 'app-header',
  standalone: true,
 imports: [Contentcomponent,Spacecraft],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {

    header : string = "🚀 Deep Space Tracker";

}
