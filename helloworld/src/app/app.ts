import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Greet } from './greet/greet';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Greet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('helloAngularworld');
}
