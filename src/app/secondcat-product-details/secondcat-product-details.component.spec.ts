import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondcatProductDetailsComponent } from './secondcat-product-details.component';

describe('SecondcatProductDetailsComponent', () => {
  let component: SecondcatProductDetailsComponent;
  let fixture: ComponentFixture<SecondcatProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondcatProductDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondcatProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
