import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css'],
})
export class AchievementsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  //Class Binding
  appliedCSSClass = 'mint-green';
  notappliedCSSClass = 'false';
}
