import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderShoppingCartComponent } from './header-shopping-cart.component';

describe('HeaderShoppingCartComponent', () => {
  let component: HeaderShoppingCartComponent;
  let fixture: ComponentFixture<HeaderShoppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderShoppingCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
