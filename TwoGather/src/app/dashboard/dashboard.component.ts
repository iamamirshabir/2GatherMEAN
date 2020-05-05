import { Component, OnInit } from '@angular/core';
import { Thread } from '../shared/thread';
import { THREADS } from '../shared/threads';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  threads: Thread[] = THREADS;


  selectedThread: Thread;


  constructor() { }

  ngOnInit(): void {
  }

  onSelect(thread: Thread) {
    this.selectedThread = thread;
  }

}
