import { Component, OnInit } from '@angular/core';
import { Demo } from 'src/app/models/demo.model';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-add-demo',
  templateUrl: './add-demo.component.html',
  styleUrls: ['./add-demo.component.css']
})
export class AddDemoComponent implements OnInit{

  ngOnInit(): void {
  }

  constructor(private demoService: DemoService) { }

  demo: Demo = {
    title: '',
    description: '',
    isLive: false
  };

  submitted = false;

  saveDemo(): void {
    const data = {
      title: this.demo.title,
      description: this.demo.description
    };

    this.demoService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newDemo(): void {
    this.submitted = false;
    this.demo = {
      title: '',
      description: '',
      isLive: false
    };
  }
}

