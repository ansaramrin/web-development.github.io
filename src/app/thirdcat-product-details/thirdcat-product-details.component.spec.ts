import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdcatProductDetailsComponent } from './thirdcat-product-details.component';

describe('ThirdcatProductDetailsComponent', () => {
  let component: ThirdcatProductDetailsComponent;
  let fixture: ComponentFixture<ThirdcatProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdcatProductDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdcatProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
