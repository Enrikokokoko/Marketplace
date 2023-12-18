import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-order-register',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './order-register.component.html',
  styleUrl: './order-register.component.scss'
})
export class OrderRegisterComponent {

}
