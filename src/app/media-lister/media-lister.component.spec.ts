import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaListerComponent } from './media-lister.component';

describe('MediaListerComponent', () => {
  let component: MediaListerComponent;
  let fixture: ComponentFixture<MediaListerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaListerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaListerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
