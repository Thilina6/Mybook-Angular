import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,MatIconModule,MatGridListModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  post: any;

  users = [
    {pic:"../../../assets/img/dp/dp_02.jpg",name:"Dennis Han"},
    {pic:"../../../assets/img/dp/dp_03.jpg",name:"Eric Jones"},
    {pic:"../../../assets/img/dp/dp_04.jpg",name:"Cynthia Lopez"},
    {pic:"../../../assets/img/dp/dp_05.jpg",name:"Butler Chen"},
    {pic:"../../../assets/img/dp/dp_06.jpg",name:"Denis Tesla"}
  ];

  posts = [
    {
      postDP:"../../../../assets/img/posts/dp/dp_01.jpg",
      userName:"Kasun Kalhara",
      postTime:"5 mins",
      postHeading:"Hello Tom",
      postPic:"../../../../assets/img/posts/post01.jpg",
      reactCount:500
    },
    {
      postDP:"../../../../assets/img/posts/dp/dp_02.jpg",
      userName:"Denis han",
      postTime:"15 mins",
      postHeading:"Hello Eagle",
      postPic:"../../../../assets/img/posts/post02.jpg",
      reactCount:44
    },
    {
      postDP:"../../../../assets/img/posts/dp/dp_03.jpg",
      userName:"Eric Johns",
      postTime:"5 mins",
      postHeading:"Beauty of Water?",
      postPic:"../../../../assets/img/posts/post03.jpg",
      reactCount:70
    },
    {
      postDP:"../../../../assets/img/posts/dp/dp_04.jpg",
      userName:"Timmy Hanseen",
      postTime:"1 hour",
      postHeading:"Gold Star",
      postPic:"../../../../assets/img/posts/post04.jpg",
      reactCount:88
    },
    {
      postDP:"../../../../assets/img/posts/dp/dp_05.jpg",
      userName:"John snow",
      postTime:"3 hours",
      postHeading:"Winter is Coming",
      postPic:"../../../../assets/img/posts/post05.jpg",
      reactCount:1+"k"
    },
    {
      postDP:"../../../../assets/img/posts/dp/dp_06.jpg",
      userName:"Luwis Hamilton",
      postTime:"2 days",
      postHeading:"4X4",
      postPic:"../../../../assets/img/posts/post06.jpg",
      reactCount:5+"K"
    },
  ];
}
