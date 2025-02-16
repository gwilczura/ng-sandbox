import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppSidebarComponent } from './app-sidebar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { DummyComponent } from '../../../shared/testing/dummy.component';

describe('AppSidebarComponent', () => {
  let component: AppSidebarComponent;
  let fixture: ComponentFixture<AppSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppSidebarComponent, DummyComponent],
      providers: [provideAnimationsAsync(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AppSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
