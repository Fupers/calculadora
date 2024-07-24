import { TestBed } from '@angular/core/testing';

import { TextoService } from './texto.service';

describe('TextoService', () => {
  let service: TextoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
