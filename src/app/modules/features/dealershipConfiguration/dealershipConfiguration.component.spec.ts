import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealershipConfigurationComponent } from './dealershipConfiguration.component';

describe('AboutComponent', () => {
  let component: DealershipConfigurationComponent;
  let fixture: ComponentFixture<DealershipConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealershipConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealershipConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
