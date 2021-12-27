import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelGroupComponent } from './channel-group.component';

describe('ChannelGroupComponent', () => {
  let component: ChannelGroupComponent;
  let fixture: ComponentFixture<ChannelGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChannelGroupComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
