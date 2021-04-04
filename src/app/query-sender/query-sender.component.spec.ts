import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuerySenderComponent } from './query-sender.component';

describe('QuerySenderComponent', () => {
  let component: QuerySenderComponent;
  let fixture: ComponentFixture<QuerySenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuerySenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuerySenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
