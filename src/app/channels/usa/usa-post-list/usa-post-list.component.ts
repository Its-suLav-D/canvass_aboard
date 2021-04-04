import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsaService } from '../../usa.service';
import { Post } from 'src/app/post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'canvass-usa-post-list',
  templateUrl: './usa-post-list.component.html',
  styleUrls: ['./usa-post-list.component.css'],
})
export class UsaPostListComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription;
  usaPosts: Post[];

  constructor(private usService: UsaService) {}

  ngOnInit() {
    this.subscriptions = this.usService.postFeedChangedEvent.subscribe(
      (post: Post[]) => {
        this.usaPosts = post;
      }
    );
    this.usService.getPost();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
