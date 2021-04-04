import { Injectable } from '@angular/core';
import { Post } from '../post.model';
import { MockPostUsa } from './MOCKUSA';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsaService {
  public postFeedChangedEvent = new Subject<Post[]>();
  public editPost: string;
  private usPosts: Post[] = [];
  maxPostId: number;

  constructor(private http: HttpClient) {}
  // getPost() {
  //   return this.usPosts.slice();
  // }

  // addPost(newPost: Post) {
  //   if (!newPost) {
  //     return;
  //   }
  //   this.maxPostId++;
  //   this.usPosts.push(newPost);
  //   this.postFeedChangedEvent.next(this.usPosts.slice());
  // }
  getSinglePost(id: string): Post {
    return this.usPosts.find((post) => post.id == id);
  }
  SortandSend() {
    this.usPosts.sort((a, b) => {
      if (a.timestamp < b.timestamp) {
        return 1;
      }
      if (a.timestamp > b.timestamp) {
        return -1;
      }
      return 0;
    });
    this.postFeedChangedEvent.next(this.usPosts.slice());
  }

  getPost() {
    this.http
      .get('http://localhost:3000/posts')
      .pipe(
        map((postData: any) => {
          return postData.posts.map((post) => {
            return {
              id: post._id,
              username: post.username,
              title: post.title,
              subtitle: post.subtitle,
              postUrl: post.postUrl,
              avatar: post.avatar,
              timestamp: post.timestamp,
              like: post.likes,
              comments: post.comments,
              votes: post.votes,
            };
          });
        })
      )
      .subscribe(
        (posts: any) => {
          console.log(posts);
          this.usPosts = posts;
          this.SortandSend();
        },
        (error: any) => {
          console.log(error);
          error: error;
        }
      );
  }

  getPostUpdateListener() {
    return this.postFeedChangedEvent.asObservable();
  }

  addPost(newPost: Post) {
    if (!newPost) {
      return;
    }
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const post: Post = {
      id: null,
      username: newPost.username,
      title: newPost.title,
      subtitle: newPost.subtitle,
      postUrl: newPost.postUrl,
      avatar: newPost.avatar,
      timestamp: newPost.timestamp,
    };

    this.http
      .post<{ message: string; postId: string }>(
        'http://localhost:3000/posts',
        newPost,
        {
          headers: headers,
        }
      )
      .subscribe((response) => {
        const id = response.postId;
        post.id = id;
        this.usPosts.push(post);
        this.SortandSend();
      });
  }
  deletePost(postId: string) {
    this.http.delete('http://localhost:3000/posts/' + postId).subscribe(() => {
      const updatedPosts = this.usPosts.filter((post) => post.id !== postId);
      this.usPosts = updatedPosts;
      this.postFeedChangedEvent.next([...this.usPosts]);
    });
  }
  updatePost(originalPost: Post, newPost: Post) {
    if (!originalPost || !newPost) {
      return;
    }

    //get position in list of contacts
    const pos = this.usPosts.findIndex((d) => d.id == originalPost.id);
    //if position is not in array
    if (pos < 0) {
      //exit
      return;
    }

    //set headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.http
      .put('http://localhost:3000/posts/' + originalPost.id, newPost, {
        headers,
      })
      .subscribe((response) => {
        //assign contacts list
        this.usPosts[pos] = newPost;
        //emit changes
        this.SortandSend();
      });
  }
}
