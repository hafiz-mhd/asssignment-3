import { Component } from '@angular/core';
import { Section } from '../../section/section';
import { Section2 } from '../../section2/section2';

@Component({
  selector: 'app-about',
  imports: [Section2],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

}
