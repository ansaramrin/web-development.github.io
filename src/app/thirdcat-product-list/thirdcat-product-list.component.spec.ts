import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdcatProductListComponent } from './thirdcat-product-list.component';

describe('ThirdcatProductListComponent', () => {
  let component: ThirdcatProductListComponent;
  let fixture: ComponentFixture<ThirdcatProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdcatProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdcatProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
