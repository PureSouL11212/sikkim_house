import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  
  availableRooms = [
    { image: 'assets/image/bg.jpg', date: '2024-02-19', day: 'Monday' },
    { image: 'path_to_image_2.jpg', date: '2024-02-20', day: 'Tuesday' },
    { image: 'path_to_image_3.jpg', date: '2024-02-21', day: 'Wednesday' },
    { image: 'path_to_image_4.jpg', date: '2024-02-22', day: 'Thursday' },
    { image: 'path_to_image_5.jpg', date: '2024-02-23', day: 'Friday' }
  ];

  proceed() {
    // Your proceed function logic here
  }
}
