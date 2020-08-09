import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopProjectComponent } from './desktop-project.component';

describe('DesktopProjectComponent', () => {
  let component: DesktopProjectComponent;
  let fixture: ComponentFixture<DesktopProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
