import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
  standalone: false,
})
export class ProjectsPage implements OnInit {
  projects: any[] = [];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.projects = this.data.projects;
  }
}
