

import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,  // Add standalone if your components are standalone
  imports: [Navbar, RouterOutlet, RouterLink, Footer], // add RouterLink
  templateUrl: './app.html',
  styleUrls: ['./app.css']   // fixed typo here
})
export class App implements OnInit {
  protected title = 'angular';

  ngOnInit() {
    AOS.init({
      duration: 1000, // Animation duration
      once: true      // Only animate once
    });
  }
}
