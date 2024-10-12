import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testing-ap';
  subset = 'info-dump';

  jsonArray = [
    {
      "title": "hello1",
      "body": "this is a body1",
      "number": 31
    },
    {
      "title": "hello2",
      "body": "this is a body2",
      "number": 32
    },
    {
      "title": "hello3",
      "body": "this is a body3",
      "number": 33
    },

  ]
}
