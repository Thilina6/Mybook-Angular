import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
// import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LandingComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  dataService = inject(DataService);
  data: any;

  ngOnInit(){
      console.log('ngOnInit func is running...!');
      // this.dataService.getData().subscribe({
      //   next: (data) =>{
      //     this.data = (data);
      //     console.log('Data Fetched Successfully!', data);
      //   },
      //   error: (err) => 
      //   console.error('Error Fetching Data:', err),
      // })
  }
  title = 'fakebook';
}
