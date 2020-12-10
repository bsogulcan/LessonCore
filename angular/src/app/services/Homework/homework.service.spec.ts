/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HomeworkService } from './homework.service';

describe('Service: Homework', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeworkService]
    });
  });

  it('should ...', inject([HomeworkService], (service: HomeworkService) => {
    expect(service).toBeTruthy();
  }));
});
