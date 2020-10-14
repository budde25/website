import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects: Project[];

  constructor() {
    this.projects = [
      {
        title: 'Party DJ - Spotify Queuing app',
        imageSrc: 'assets/pics/partydj.png',
        githubUri: 'https://github.com/budde25/PartyDJ',
        android: 'https://play.google.com/store/apps/details?id=dev.budde.spotify_queue',
        ios: 'https://apps.apple.com/us/app/party-music-queue/id1497405326?ls=1',
        icons: []
      },
      {
        title: 'KeySync - SSH Key Sync CLI & Service',
        imageSrc: 'assets/pics/keysync.png',
        githubUri: 'https://github.com/budde25/ssh-key-sync',
        cratesio: 'https://crates.io/crates/keysync',
        icons: []
      },
      {
        title: 'NXCloud - NextCloud Client CLI',
        imageSrc: 'assets/pics/nxcloud.png',
        githubUri: 'https://github.com/budde25/nextcloud-client-cli',
        cratesio: 'https://crates.io/crates/nxcloud',
        icons: []
      },
      {
        title: 'PortalU - Student Dashboard',
        imageSrc: 'assets/pics/portalU.png',
        githubUri: 'https://github.com/budde25/portalU',
        uri: 'https://budde25.github.io/PortalU',
        icons: []
      },
      {
        title: 'Neural Numbers - Identify Handrawn Digits',
        imageSrc: 'assets/pics/numbers.png',
        githubUri: 'https://github.com/budde25/NeuralNumbers',
      },
      {
        title: 'Neural Network Library',
        imageSrc: 'assets/pics/nn.png',
        githubUri: 'https://github.com/budde25/NeuralNetworkLibrary',
        icons: ['java']
      },
      {
        title: 'Smart Dots - Genertic Algorithmn',
        imageSrc: 'assets/pics/smartDots.png',
        githubUri: 'https://budde25.github.io/smart-dots/',
        uri: 'https://budde25.github.io/smart-dots/',
        icons: []
      },
      {
        title: 'Game of life',
        imageSrc: 'assets/pics/life.png',
        githubUri: 'https://github.com/budde25/conways-game-of-life',
        icons: []
      },
      {
        title: 'Java Game Engine',
        imageSrc: 'assets/pics/engine.png',
        githubUri: 'https://github.com/budde25/JavaGameEngine',
      },
      {
        title: 'JS Snake',
        imageSrc: 'assets/pics/snake.png',
        githubUri: 'https://github.com/budde25/smart-dots',
        uri: 'https://budde25.github.io/js-snake/',
        icons: []
      },
    ];
   }

  ngOnInit() {
  }
}
