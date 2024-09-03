import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeRoute: string = '';
  title = 'demo';

 
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/']); // Navigate to the home page
  }

  navigateTo(path: string) {
    this.router.navigate([`/${path}`]);
  }
}
