import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Post } from 'src/app/post.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatAccordion } from '@angular/material/expansion';

export interface Vegetable {
  name: string;
}

@Component({
  selector: 'canvass-germany-post-item',
  templateUrl: './germany-post-item.component.html',
  styleUrls: ['./germany-post-item.component.css'],
})
export class GermanyPostItemComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  vegetables: Vegetable[] = [
    { name: 'studyAbroad' },
    { name: 'usa' },
    { name: 'visa' },
  ];
  date: number = Date.now();
  show: boolean = false;
  toggle: boolean = false;
  @Input() germanPost: Post;

  constructor() {}
  drop(event: CdkDragDrop<Vegetable[]>) {
    moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
  }

  ngOnInit(): void {}
  toggleComment() {
    this.toggle = !this.toggle;
  }
}
