import { TestBed } from '@angular/core/testing';

import { TodosServicesService } from './todos-services.service';

describe('TodosServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodosServicesService = TestBed.get(TodosServicesService);
    expect(service).toBeTruthy();
  });
});
