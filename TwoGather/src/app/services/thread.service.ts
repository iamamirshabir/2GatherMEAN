import { Injectable } from '@angular/core';
import { Thread } from '../shared/thread';
import { THREADS } from '../shared/threads';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {

  constructor() { }

  getThreads(): Thread[]{
  return THREADS;
}
}
