import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from '../postPane/home/home.component';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: 
    [
      CommonModule, 
      RouterOutlet, 
      MatIconModule, 
      HomeComponent, 
      MatExpansionModule  
    ],
    
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  panelOpenState=false;
  users = [
    // {pic:"../../../assets/img/dp/dp_01.jpg",name:"Thilina De Silva"},
    {pic:"../../../assets/img/dp/dp_02.jpg",name:"Dennis Han"},
    {pic:"../../../assets/img/dp/dp_03.jpg",name:"Eric Jones"},
    {pic:"../../../assets/img/dp/dp_04.jpg",name:"Cynthia Lopez"},
    {pic:"../../../assets/img/dp/dp_05.jpg",name:"Butler Chen"},
    {pic:"../../../assets/img/dp/dp_06.jpg",name:"Denis Tesla"},
    {pic:"../../../assets/img/dp/dp_07.jpg",name:"Kevin Wilson"}
  ];
  
  isExpanded= false;
  expand(){
    this.isExpanded=!this.isExpanded;
  }
}
