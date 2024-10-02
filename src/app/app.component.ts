import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'belajar_angular';

  dummyData = {
    title: 'My First Project',
    content: 'This is my first angular application project',
  };

  internalMessage: string = 'This is my internal message app.component';

  receiveMessage($message: string): void {
    this.internalMessage = $message;
  }
}
