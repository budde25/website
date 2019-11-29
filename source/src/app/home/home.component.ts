import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects:Project[]

  constructor() {
    this.projects = [ {
        title: 'JS Snake',
        imageSrc: 'assets/pics/snake.png',
        githubUri: 'https://github.com/budde25/js-snake',
        uri: 'https://budde25.github.io/js-snake/',
        icons: []
      },
      {
        title: 'Smart Dots',
        imageSrc: 'assets/pics/smartDots.png',
        githubUri: 'https://budde25.github.io/smart-dots/',
        uri: 'https://budde25.github.io/smart-dots/',
        icons: []
      },
      {
        title: 'Neural Network Library',
        imageSrc: 'assets/pics/nn.png',
        githubUri: 'https://github.com/budde25/NeuralNetworkLibrary',
        icons: ['java']
      }
    ]
   }

  ngOnInit() {
  }
}
