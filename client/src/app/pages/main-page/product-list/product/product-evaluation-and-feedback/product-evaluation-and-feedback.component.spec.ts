import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEvaluationAndFeedbackComponent } from './product-evaluation-and-feedback.component';

describe('ProductEvaluationAndFeedbackComponent', () => {
  let component: ProductEvaluationAndFeedbackComponent;
  let fixture: ComponentFixture<ProductEvaluationAndFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductEvaluationAndFeedbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductEvaluationAndFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
