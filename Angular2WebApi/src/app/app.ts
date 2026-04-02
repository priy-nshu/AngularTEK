import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentService } from './services/student-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular2WebApi');
}
