import { Component, Input, OnInit } from '@angular/core';
import { DemoService } from 'src/app/services/demo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Demo } from 'src/app/models/demo.model';


@Component({
  selector: 'app-demo-details',
  templateUrl: './demo-details.component.html',
  styleUrls: ['./demo-details.component.css']
})
export class DemoDetailsComponent {

  @Input() viewMode = false;
  @Input() currentDemo: Demo = {
    title: '',
    description: '',
    isLive: false
  };
  message = '';

  constructor(
    private demoService: DemoService,
    private route: ActivatedRoute,
    private router: Router) { }
  
    ngOnInit(): void {
      if (!this.viewMode) {
        this.message = '';
        this.getDemo(this.route.snapshot.params["id"]);
      }
    }
  
    getDemo(id: string): void {
      this.demoService.get(id)
        .subscribe({
          next: (data) => {
            this.currentDemo = data;
            console.log(data);
          },
          error: (e) => console.error(e)
        });
    }
  
    updatePublished(status: boolean): void {
      const data = {
        title: this.currentDemo.title,
        description: this.currentDemo.description,
        published: status
      };
  
      this.message = '';
  
      this.demoService.update(this.currentDemo.id, data)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.currentDemo.isLive = status;
            this.message = res.message ? res.message : 'The status was updated successfully!';
          },
          error: (e) => console.error(e)
        });
    }
  
    updateDemo(): void {
      this.message = '';
  
      this.demoService.update(this.currentDemo.id, this.currentDemo)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.message = res.message ? res.message : 'This Demo was updated successfully!';
          },
          error: (e) => console.error(e)
        });
    }
  
    deleteDemo(): void {
      this.demoService.delete(this.currentDemo.id)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.router.navigate(['/demos']);
          },
          error: (e) => console.error(e)
        });
    }
  
  

}
