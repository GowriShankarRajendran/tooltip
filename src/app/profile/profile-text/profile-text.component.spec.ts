import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTextComponent } from './profile-text.component';

describe('ProfileTextComponent', () => {
  let component: ProfileTextComponent;
  let fixture: ComponentFixture<ProfileTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProfileTextComponent]
    });
    fixture = TestBed.createComponent(ProfileTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
