import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result = '';

  getAction(item:string|number) {
    if (item ==="DEL"){
      this.result = this.result.slice(0,-1);
      return;
    }
    this.result += item; 
  }

  clrear() {
    this.result = ''
  }
}
