import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryFormDialogComponent } from './query-form-dialog.component';

describe('QueryFormDialogComponent', () => {
  let component: QueryFormDialogComponent;
  let fixture: ComponentFixture<QueryFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
