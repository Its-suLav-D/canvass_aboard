import { Injectable } from '@angular/core';
import { Post } from 'src/app/post.model';
import { MockPostGerman } from './MOCKGERMAN';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GermanyService {
  public postFeedChangedEvent = new Subject<Post[]>();
  germanPosts: Post[];
  maxPostId: number;
  constructor() {
    this.germanPosts = MockPostGerman;
  }
  getPost() {
    return this.germanPosts.slice();
  }
  getMaxId(): number {
    let maxId = 0;
    this.germanPosts.forEach((post) => {
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
    this.germanPosts.push(newPost);
    this.postFeedChangedEvent.next(this.germanPosts.slice());
  }
}
