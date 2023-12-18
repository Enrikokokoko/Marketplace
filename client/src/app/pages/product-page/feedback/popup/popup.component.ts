import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {

  @Output() closePopupEmit = new EventEmitter<boolean>()

  public closePopup(): void {
    this.closePopupEmit.emit(false)
  }
}
