import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post.model';
import { AustraliaService } from '../australia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'canvass-australia-post-list',
  templateUrl: './australia-post-list.component.html',
  styleUrls: ['./australia-post-list.component.css'],
})
export class AustraliaPostListComponent implements OnInit {
  australiaPosts: Post[];
  subscriptions: Subscription;
  constructor(private australiaService: AustraliaService) {}

  ngOnInit() {
    this.australiaPosts = this.australiaService.getPost();
    this.subscriptions = this.australiaService.postFeedChangedEvent.subscribe(
      (post: Post[]) => {
        this.australiaPosts = post;
        this.australiaPosts.sort((a, b) =>
          a.timestamp < b.timestamp ? 1 : a.timestamp > b.timestamp ? -1 : 0
        );
      }
    );
  }
}
