import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LANGUAGE_ENG, LANGUAGE_UK } from '../../../shared/constants/header/icon';

@Component({
  selector: 'app-header-language',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-language.component.html',
  styleUrl: './header-language.component.scss'
})
export class HeaderLanguageComponent {
  public uk: string = LANGUAGE_UK;
  public eng: string = LANGUAGE_ENG;

  public isLanguage: boolean = false;

  public switchLanguage(): void {
    this.isLanguage = !this.isLanguage;
  }
}
