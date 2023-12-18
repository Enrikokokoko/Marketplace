import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProductListComponent } from './our-product-list.component';

describe('OurProductListComponent', () => {
  let component: OurProductListComponent;
  let fixture: ComponentFixture<OurProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurProductListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
