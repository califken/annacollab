import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracksListitemComponent } from './tracks-listitem.component';

describe('TracksListitemComponent', () => {
  let component: TracksListitemComponent;
  let fixture: ComponentFixture<TracksListitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TracksListitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TracksListitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
