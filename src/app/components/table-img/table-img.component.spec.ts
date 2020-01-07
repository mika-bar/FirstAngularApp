import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableImgComponent } from './table-img.component';

describe('TableImgComponent', () => {
  let component: TableImgComponent;
  let fixture: ComponentFixture<TableImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
