import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChenComponent } from './add-chen.component';

describe('AddChenComponent', () => {
  let component: AddChenComponent;
  let fixture: ComponentFixture<AddChenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddChenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddChenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
