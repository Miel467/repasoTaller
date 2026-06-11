import { TestBed } from '@angular/core/testing';
import { AppAlumno} from './app';

describe('AppAlumno', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppAlumno],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(AppAlumno);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, input-output');
  });
});
