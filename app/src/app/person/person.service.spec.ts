import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PersonService } from './person.service';
import { API_COMMAND_URL, API_QUERY_URL } from '../core/api.config';
import { Person } from './person.model';

describe('PersonService', () => {
  let service: PersonService;
  let httpMock: HttpTestingController;
  const baseUrl = 'http://localhost:3000';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PersonService,
        { provide: API_COMMAND_URL, useValue: `${baseUrl}/persons` },
        { provide: API_QUERY_URL, useValue: baseUrl },
      ],
    });
    service = TestBed.inject(PersonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should list persons', () => {
    const mockPersons: Person[] = [
      { id: '1', name: 'Ada', email: 'ada@test.com', createdAt: '', updatedAt: '' },
    ];

    service.list().subscribe((persons) => {
      expect(persons).toEqual(mockPersons);
    });

    const req = httpMock.expectOne(`${baseUrl}/persons`);
    expect(req.request.method).toBe('GET');
    req.flush(mockPersons);
  });

  it('should get person by id', () => {
    const mockPerson: Person = {
      id: '1',
      name: 'Ada',
      email: 'ada@test.com',
      createdAt: '2025-01-01',
      updatedAt: '2025-01-01',
    };

    service.get('1').subscribe((person) => {
      expect(person).toEqual(mockPerson);
    });

    const req = httpMock.expectOne(`${baseUrl}/persons/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockPerson);
  });

  it('should create person', () => {
    const newPerson = { name: 'Ada', email: 'ada@test.com' };
    const mockResponse: Person = {
      id: '1',
      ...newPerson,
      createdAt: '2025-01-01',
      updatedAt: '2025-01-01',
    };

    service.create(newPerson).subscribe((person) => {
      expect(person).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${baseUrl}/persons`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newPerson);
    req.flush(mockResponse);
  });

  it('should update person', () => {
    const update = { name: 'Ada King' };
    const mockResponse: Person = {
      id: '1',
      name: 'Ada King',
      email: 'ada@test.com',
      createdAt: '2025-01-01',
      updatedAt: '2025-01-02',
    };

    service.update('1', update).subscribe((person) => {
      expect(person.name).toBe('Ada King');
    });

    const req = httpMock.expectOne(`${baseUrl}/persons/1`);
    expect(req.request.method).toBe('PATCH');
    req.flush(mockResponse);
  });

  it('should remove person', () => {
    const mockPerson: Person = {
      id: '1',
      name: 'Ada',
      email: 'ada@test.com',
      createdAt: '2025-01-01',
      updatedAt: '2025-01-01',
    };

    service.remove('1').subscribe((person) => {
      expect(person).toEqual(mockPerson);
    });

    const req = httpMock.expectOne(`${baseUrl}/persons/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(mockPerson);
  });
});
