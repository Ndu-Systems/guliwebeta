/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ViewArticleService } from './view-article.service';

describe('Service: ViewArticle', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewArticleService]
    });
  });

  it('should ...', inject([ViewArticleService], (service: ViewArticleService) => {
    expect(service).toBeTruthy();
  }));
});
