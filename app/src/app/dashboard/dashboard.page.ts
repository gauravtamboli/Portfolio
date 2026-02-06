import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false,
})
export class DashboardPage implements OnInit {
  skills: any[] = [];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.skills = this.data.skills;
  }
}
