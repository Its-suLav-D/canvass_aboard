import { Injectable } from '@angular/core';

import { MockPostUk } from './MOCKUK';
import { Post } from 'src/app/post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UkService {
  public postFeedChangedEvent = new Subject<Post[]>();
  private ukPosts: Post[];
  maxPostId: number;

  constructor() {
    this.ukPosts = MockPostUk;
  }
  getPost() {
    return this.ukPosts.slice();
  }
  getMaxId(): number {
    let maxId = 0;
    this.ukPosts.forEach((post) => {
      const currentId = Number(post.id);
      if (currentId > maxId) {
        maxId = currentId;
      }
    });
    return maxId;
  }
  addPost(newPost: Post) {
    if (!newPost) {
      return;
    }
    this.maxPostId++;
    this.ukPosts.push(newPost);
    this.postFeedChangedEvent.next(this.ukPosts.slice());
  }
}
