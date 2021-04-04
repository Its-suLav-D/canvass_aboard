import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/post.model';

@Component({
  selector: 'canvass-pins-list-item',
  templateUrl: './pins-list-item.component.html',
  styleUrls: ['./pins-list-item.component.css'],
})
export class PinsListItemComponent implements OnInit {
  @Input() pPost: Post;
  durationInSeconds = 5;
  date: number = Date.now();
  show: boolean = false;
  toggle: boolean = false;
  hasLiked: boolean = false;
  totalLike: number = 40;
  constructor() {}

  ngOnInit(): void {}

  toggleComment() {
    this.toggle = !this.toggle;
  }
  likePost() {
    if (this.hasLiked == false) {
      this.totalLike += 1;
    }
    this.hasLiked = true;
  }
}
