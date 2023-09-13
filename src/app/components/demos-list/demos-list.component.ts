import { Component, OnInit } from '@angular/core';
import { Demo } from 'src/app/models/demo.model';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-demos-list',
  templateUrl: './demos-list.component.html',
  styleUrls: ['./demos-list.component.css']
})
export class DemosListComponent implements OnInit {
  
  demos?: Demo[];
  currentDemo: Demo = {};
  currentIndex = -1;
  title = '';

  constructor(private demoService: DemoService) { }

  ngOnInit(): void {
    this.retrieveDemos();
  }

  retrieveDemos(): void {
    this.demoService.getAll()
      .subscribe({
        next: (data) => {
          this.demos = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveDemos();
    this.currentDemo = {};
    this.currentIndex = -1;
  }

  setActiveDemo(demo: Demo, index: number): void {
    this.currentDemo = demo;
    this.currentIndex = index;
  }

  removeAllDemos(): void {
    this.demoService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchTitle(): void {
    this.currentDemo = {};
    this.currentIndex = -1;

    this.demoService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.demos = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
