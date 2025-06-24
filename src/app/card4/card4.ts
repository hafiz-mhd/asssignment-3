import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card4',
  imports: [FormsModule],
  templateUrl: './card4.html',
  styleUrl: './card4.css'
})
export class Card4 {
onSubmit() {
    alert('Thank you! Your message has been submitted.');
  }
}
