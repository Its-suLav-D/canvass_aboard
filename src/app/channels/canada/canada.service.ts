import { Injectable } from '@angular/core';
import { Post } from 'src/app/post.model';
import { MockPostCanada } from './MOCKCANADA';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CanadaService {
  canadaPosts: Post[];
  public postFeedChangedEvent = new Subject<Post[]>();
  maxPostId: number;

  constructor() {
    this.canadaPosts = MockPostCanada;
  }
  getPost() {
    return this.canadaPosts.slice();
  }
  getMaxId(): number {
    let maxId = 0;
    this.canadaPosts.forEach((post) => {
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
    this.canadaPosts.push(newPost);
    this.postFeedChangedEvent.next(this.canadaPosts.slice());
  }
}
