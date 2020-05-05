import { Component, OnInit } from '@angular/core';
import { Channel } from '../shared/channel';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {

  channels: Channel[] = [{
    id:"0",
    title: "Deep Learning",
    logo: "/assets/images/dl.jpg",
    description: "Huge amount of training data is fed to...",
    created_by: "Aamir"
  },
    {
      id: "1",
      title: "Data Structures and Algos",
      logo: "/assets/images/dsa.jpg",
      description: "Comparative Analysis of algorithmic efficient...",
    created_by: "Robot"
    },
    {
      id: "3",
      title: "Object Oriented Programming",
      logo: "/assets/images/oop.jpg",
      description: "The usage of object-oriented approach towards...",
      created_by: "Dickey"
    }]

  constructor() { }

  ngOnInit(): void {
  }

}
