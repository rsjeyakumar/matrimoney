import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../../../shared/shared.module';
import { ActivatedRoute } from '@angular/router';
import { LandingComponent } from './landing.component';

fdescribe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingComponent],
      imports: [SharedModule],
      providers: [ActivatedRoute]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
