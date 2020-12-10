/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClassRoomServiceService } from './ClassRoomService.service';

describe('Service: ClassRoomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClassRoomServiceService]
    });
  });

  it('should ...', inject([ClassRoomServiceService], (service: ClassRoomServiceService) => {
    expect(service).toBeTruthy();
  }));
});
