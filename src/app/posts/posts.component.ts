import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatAccordion } from '@angular/material/expansion';

export interface Vegetable {
  name: string;
}

@Component({
  selector: 'canvass-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  vegetables: Vegetable[] = [
    { name: 'studyAbroad' },
    { name: 'usa' },
    { name: 'visa' },
  ];
  date: number = Date.now();
  show: boolean = false;
  toggle: boolean = false;

  drop(event: CdkDragDrop<Vegetable[]>) {
    moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
  }

  constructor() {}

  ngOnInit(): void {}
  toggleComment() {
    this.toggle = !this.toggle;
  }
}
