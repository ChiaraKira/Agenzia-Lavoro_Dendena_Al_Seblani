import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenziaLavoroComponent } from './agenzia-lavoro.component';

describe('AgenziaLavoroComponent', () => {
  let component: AgenziaLavoroComponent;
  let fixture: ComponentFixture<AgenziaLavoroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgenziaLavoroComponent]
    });
    fixture = TestBed.createComponent(AgenziaLavoroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
