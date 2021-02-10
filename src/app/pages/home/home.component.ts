import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  vipWebsites = [
    { image: '../../../../assets/home/importantSites/towers.png' },
    { image: 'assets/home/importantSites/fox-hub-2.png' },
    { image: 'assets/home/importantSites/kyan.png' },
    { image: 'assets/home/importantSites/a-lab.png' },
    { image: 'assets/home/importantSites/tower.png' },
    { image: 'assets/home/importantSites/asgardia.png' },
  ];

  vipHeader = 'مواقع تهمك';
  constructor() {}

  ngOnInit(): void {}
}
