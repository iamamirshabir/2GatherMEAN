import { Component, OnInit, Input } from '@angular/core';
import { Thread } from '../shared/thread';

@Component({ 
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit {

  @Input()
  thread: Thread;

  constructor() { }

  ngOnInit(): void {
  }

}
