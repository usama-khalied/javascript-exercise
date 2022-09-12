import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
   selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
addClass = 'special'
isSpecial = true;
inputValue = "test"

style = {
  'font-style':'italic',
  'color': 'blue'
}
onChange(){
  console.log(this.inputValue)
}
  constructor() {

   }

  ngOnInit(): void {
  }

}
