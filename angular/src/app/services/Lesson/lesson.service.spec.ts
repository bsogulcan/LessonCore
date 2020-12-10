/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LessonService } from './lesson.service';

describe('Service: Lesson', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LessonService]
    });
  });

  it('should ...', inject([LessonService], (service: LessonService) => {
    expect(service).toBeTruthy();
  }));
});
