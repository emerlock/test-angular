import { Component } from '@angular/core';

@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [],
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.css'
})
export class TestPageComponent {

  ssn: string = "";

//json object array
  jsonArray = [
    {
      "title": "hello1",
      "body": "this is a body1",
      "number": 31,
      "ssn": this.ssn
    },
    {
      "title": "hello2",
      "body": "this is a body2",
      "number": 32,
      "ssn": this.ssn
    },
    {
      "title": "hello3",
      "body": "this is a body3",
      "number": 33,
      "ssn": this.ssn
    },

  ]

  // CHANGE EVENT FROM KEYUP IN TEMPLATE
  changeEvent(event: any){
    this.ssn = event.target.value;

    //CALL CHANGEJSON TO UPDATE OBJECT
    this.changeJSON(event.target.value);
    console.log('changed! ', event.target.value );
  }

  //UPDATES JSON OBJECT
  changeJSON(ssn: any){
    this.jsonArray.forEach(item => {
      item.ssn = ssn
    });

  }


}
