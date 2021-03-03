import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondcatProductListComponent } from './secondcat-product-list.component';

describe('SecondcatProductListComponent', () => {
  let component: SecondcatProductListComponent;
  let fixture: ComponentFixture<SecondcatProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondcatProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondcatProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
