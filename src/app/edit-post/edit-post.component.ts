import { Component, OnInit, ViewChild } from '@angular/core';
import { UsaService } from '../channels/usa.service';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';

@Component({
  selector: 'canvass-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit {
  @ViewChild('e') queryForm: NgForm;

  id: string;
  originalPost: Post;
  constructor(private usService: UsaService) {}

  ngOnInit() {
    this.id = this.usService.editPost;
    this.originalPost = this.usService.getSinglePost(this.id);
  }

  editForm(form: NgForm) {
    if (!form.valid) {
      return;
    }
    let value = form.value;
    const newPost = new Post(
      this.originalPost.id,
      this.originalPost.username,
      value.title,
      value.body,
      value.postUrl,
      this.originalPost.avatar,
      Number(Date.now()),
      this.originalPost.comments,
      this.originalPost.like,
      this.originalPost.votes
    );

    this.usService.updatePost(this.originalPost, newPost);
  }
}
