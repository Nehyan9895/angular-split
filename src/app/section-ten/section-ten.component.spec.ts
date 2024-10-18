import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTenComponent } from './section-ten.component';

describe('SectionTenComponent', () => {
  let component: SectionTenComponent;
  let fixture: ComponentFixture<SectionTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
