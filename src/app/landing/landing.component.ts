import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { ServiceService } from '../services/service.service';
import { HousingService } from '../services/housing.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule,NavbarComponent,BodyComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  housingService: HousingService = inject(HousingService);
  housingLocationList: any;

  constructor() {}
  
  ngOnInit(){
    // this.housingService.getAllHousingLocations({}).subscribe((response:any)=>{
    //   console.log("Person Details :  ",response.results);
    // })
    // console.log("Service Details : "+this.housingLocationList.name);
  }
}
