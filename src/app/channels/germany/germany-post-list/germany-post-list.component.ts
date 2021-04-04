import { Component, OnInit } from '@angular/core';
import { GermanyService } from '../germany.service';
import { Post } from 'src/app/post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'canvass-germany-post-list',
  templateUrl: './germany-post-list.component.html',
  styleUrls: ['./germany-post-list.component.css'],
})
export class GermanyPostListComponent implements OnInit {
  germanPosts: Post[];
  subscriptions: Subscription;

  constructor(private GermanyService: GermanyService) {}

  ngOnInit() {
    this.germanPosts = this.GermanyService.getPost();
    this.subscriptions = this.GermanyService.postFeedChangedEvent.subscribe(
      (post: Post[]) => {
        this.germanPosts = post;
        this.germanPosts.sort((a, b) =>
          a.timestamp < b.timestamp ? 1 : a.timestamp > b.timestamp ? -1 : 0
        );
      }
    );
  }
}
