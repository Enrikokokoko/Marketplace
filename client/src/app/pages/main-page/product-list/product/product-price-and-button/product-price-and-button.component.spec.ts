import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPriceAndButtonComponent } from './product-price-and-button.component';

describe('ProductPriceAndButtonComponent', () => {
  let component: ProductPriceAndButtonComponent;
  let fixture: ComponentFixture<ProductPriceAndButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPriceAndButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductPriceAndButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
