import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: false,
})
export class AboutPage implements OnInit {
  name = '';
  email = '';
  projects: any[] = [];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.name = this.data.name;
    this.email = this.data.email;
    this.projects = this.data.projects;
  }
}
