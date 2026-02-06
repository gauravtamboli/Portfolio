import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  name = '';

  constructor(private data: DataService) { }

  ngOnInit() {
    this.name = this.data.name;
  }
}
