import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthcatProductDetailsComponent } from './fourthcat-product-details.component';

describe('FourthcatProductDetailsComponent', () => {
  let component: FourthcatProductDetailsComponent;
  let fixture: ComponentFixture<FourthcatProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthcatProductDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthcatProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
