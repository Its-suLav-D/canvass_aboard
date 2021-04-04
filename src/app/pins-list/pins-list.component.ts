import { Component, OnInit, OnDestroy } from '@angular/core';
import { PinService } from './pin.service';
import { Post } from '../post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'canvass-pins-list',
  templateUrl: './pins-list.component.html',
  styleUrls: ['./pins-list.component.css'],
})
export class PinsListComponent implements OnInit, OnDestroy {
  pinnedPosts: Post[];
  subscriptions: Subscription;
  constructor(private pinService: PinService) {}

  ngOnInit() {
    this.pinnedPosts = this.pinService.getPinnedPost();
    this.subscriptions = this.pinService.postChangedEvent.subscribe(
      (post: Post[]) => {
        this.pinnedPosts = post;
      }
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
