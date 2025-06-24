import { Component } from '@angular/core';
import { Carousel } from '../../carousel/carousel';
import { Section } from '../../section/section';

import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-home',
  imports: [Carousel,Section],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
