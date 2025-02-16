import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLayoutComponent } from './app-layout.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';

describe('AppLayoutComponent', () => {
  let component: AppLayoutComponent;
  let fixture: ComponentFixture<AppLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppLayoutComponent],
      providers: [provideAnimationsAsync(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AppLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
