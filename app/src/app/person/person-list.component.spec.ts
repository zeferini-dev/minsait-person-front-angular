import { vi } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PersonListComponent } from './person-list.component';
import { PersonService } from './person.service';
import { API_COMMAND_URL, API_QUERY_URL } from '../core/api.config';
import { of } from 'rxjs';
import { Person } from './person.model';

describe('PersonListComponent', () => {
  let component: PersonListComponent;
  let fixture: ComponentFixture<PersonListComponent>;
  let mockPersonService: Partial<PersonService>;
  const baseUrl = 'http://localhost:3000';

  const mockPersons: Person[] = [
    {
      id: '1',
      name: 'Ada Lovelace',
      email: 'ada@example.com',
      createdAt: '2025-01-01',
      updatedAt: '2025-01-01',
    },
  ];

  beforeEach(async () => {
    mockPersonService = {
      list: vi.fn().mockReturnValue(of(mockPersons)),
      refresh$: of(undefined),
    };

    await TestBed.configureTestingModule({
      imports: [
        PersonListComponent,
        HttpClientTestingModule,
        NoopAnimationsModule,
      ],
      providers: [
        provideRouter([]),
        { provide: PersonService, useValue: mockPersonService as PersonService },
        { provide: API_COMMAND_URL, useValue: `${baseUrl}/persons` },
        { provide: API_QUERY_URL, useValue: baseUrl },
        { provide: MatDialog, useValue: { open: vi.fn() } },
        { provide: MatSnackBar, useValue: { open: vi.fn() } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load persons on init', () => {
    expect(mockPersonService.list).toHaveBeenCalled();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Ada Lovelace');
    expect(compiled.textContent).toContain('ada@example.com');
  });

  it('should display persons title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Pessoas');
  });
});
