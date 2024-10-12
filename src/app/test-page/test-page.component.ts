import { Component } from '@angular/core';

@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [],
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.css'
})
export class TestPageComponent {

  //json object array
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
