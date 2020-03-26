import { Component, OnInit } from '@angular/core';
import { Competition } from '../models/competition';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.sass']
})
export class CompetitionsComponent implements OnInit {

  competitions: Competition[]

  constructor() {
    this.competitions = [

    ]
  }

  ngOnInit(): void {
  }

}
