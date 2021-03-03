import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthcatProductListComponent } from './fourthcat-product-list.component';

describe('FourthcatProductListComponent', () => {
  let component: FourthcatProductListComponent;
  let fixture: ComponentFixture<FourthcatProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthcatProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthcatProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
