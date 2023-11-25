import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LOGO } from '../../shared/constants/header/icon';
import { COMPANY_INFO, HELP, PARTNERS, STAY_WITH_US } from '../../shared/constants/footer/info';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public logo: string = LOGO;
  public partnerInfo = PARTNERS; 
  public helpInfo = HELP; 
  public companyInfo = COMPANY_INFO; 
  public iconInfo = STAY_WITH_US; 
}
