import { Injectable } from '@angular/core';
import { Post } from 'src/app/post.model';
import { MockPostAustralia } from './MOCKAUSTRALIA';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AustraliaService {
  australiaPosts: Post[];
  public postFeedChangedEvent = new Subject<Post[]>();
  maxPostId: number;

  constructor() {
    this.australiaPosts = MockPostAustralia;
  }
  getPost() {
    return this.australiaPosts.slice();
  }
  getMaxId(): number {
    let maxId = 0;
    this.australiaPosts.forEach((post) => {
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
    this.australiaPosts.push(newPost);
    this.postFeedChangedEvent.next(this.australiaPosts.slice());
  }
}
