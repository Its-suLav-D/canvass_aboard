import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post.model';
import { UkService } from '../uk.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'canvass-uk-post-list',
  templateUrl: './uk-post-list.component.html',
  styleUrls: ['./uk-post-list.component.css'],
})
export class UkPostListComponent implements OnInit {
  ukPosts: Post[];
  subscriptions: Subscription;

  constructor(private ukService: UkService) {}

  ngOnInit() {
    this.ukPosts = this.ukService.getPost();
    this.subscriptions = this.ukService.postFeedChangedEvent.subscribe(
      (post: Post[]) => {
        this.ukPosts = post;
        this.ukPosts.sort((a, b) =>
          a.timestamp < b.timestamp ? 1 : a.timestamp > b.timestamp ? -1 : 0
        );
      }
    );
  }
}
