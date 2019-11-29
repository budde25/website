import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  githubSnake(): void {
    window.open('https://github.com/budde25/js-snake', '_blank');
  }

  githubSmartDots(): void {
    window.open('https://github.com/budde25/smart-dots', '_blank');
  }

  githubNN(): void {
    window.open('https://github.com/budde25/NeuralNetworkLibrary', '_blank');
  }

  smartDots(): void {
    window.open('https://budde25.github.io/smart-dots/');
  }

  snake(): void {
    window.open('https://budde25.github.io/js-snake/');
  }
}
