import { TestBed } from '@angular/core/testing';

import { ProdutosMaisVendidosService } from './produtos-mais-vendidos.service';

describe('ProdutosMaisVendidosService', () => {
  let service: ProdutosMaisVendidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutosMaisVendidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
