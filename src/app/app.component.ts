import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'oren';

  constructor() {
    // console.log(123);
    // this.name = 'sammy'
    //  this.changeName('kabab')
  }

  // changeName(name: string): void {
  //   this.name = name;
  // }

}
