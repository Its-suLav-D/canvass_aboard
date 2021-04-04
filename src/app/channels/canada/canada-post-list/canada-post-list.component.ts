import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post.model';
import { CanadaService } from '../canada.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'canvass-canada-post-list',
  templateUrl: './canada-post-list.component.html',
  styleUrls: ['./canada-post-list.component.css'],
})
export class CanadaPostListComponent implements OnInit {
  canadaPosts: Post[];
  subscriptions: Subscription;
  constructor(private canadaService: CanadaService) {}

  ngOnInit() {
    this.canadaPosts = this.canadaService.getPost();
    this.subscriptions = this.canadaService.postFeedChangedEvent.subscribe(
      (post: Post[]) => {
        this.canadaPosts = post;
        this.canadaPosts.sort((a, b) =>
          a.timestamp < b.timestamp ? 1 : a.timestamp > b.timestamp ? -1 : 0
        );
      }
    );
  }
}
