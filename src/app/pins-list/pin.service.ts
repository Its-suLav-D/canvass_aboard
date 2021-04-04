import { Injectable } from '@angular/core';
import { Post } from '../post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PinService {
  public postChangedEvent = new Subject<Post[]>();
  private pinPosts: Post[] = [];
  constructor() {}
  getPinnedPost() {
    return this.pinPosts.slice();
  }
  pinPostFromChannel(post: Post) {
    this.pinPosts.push(post);
    this.postChangedEvent.next(this.pinPosts.slice());
  }
}
