import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
 onSubscribe(event: Event): void {
    event.preventDefault();
    // You can enhance this with real logic later (e.g., send to backend)
    alert('Subscribed!'); // Temporary feedback
  }
}
