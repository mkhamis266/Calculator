import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result = '';
  new_operation = false;

  getAction(item:string|number) {
    if (this.new_operation == false){
      if (item ==="DEL"){
        this.result = this.result.slice(0,-1);
        return;
      }
    } else if (this.new_operation == true && (item !== "+" && item !== "-" && item != "*" && item !== "/") ) {
        this.result = item.toString();
        this.new_operation = false;
        return
    }
    this.result += item; 
    this.new_operation = false;
  }

  clrear() {
    this.result = ''
    this.new_operation = false;
  }

  equal(){
    this.result = eval(this.result).toFixed(2);
    this.new_operation = true;
  }
}
