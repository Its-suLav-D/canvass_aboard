import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Post } from 'src/app/post.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatAccordion } from '@angular/material/expansion';
import { PinService } from 'src/app/pins-list/pin.service';
import { UsaService } from 'src/app/channels/usa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditPostComponent } from 'src/app/edit-post/edit-post.component';

export interface Vegetable {
  name: string;
}

@Component({
  selector: 'canvass-usa-post-item',
  templateUrl: './usa-post-item.component.html',
  styleUrls: ['./usa-post-item.component.css'],
})
export class UsaPostItemComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  durationInSeconds = 5;
  vegetables: Vegetable[] = [
    { name: 'studyAbroad' },
    { name: 'usa' },
    { name: 'visa' },
  ];
  date: number = Date.now();
  show: boolean = false;
  toggle: boolean = false;
  hasLiked: boolean = false;
  hasVoted: boolean = false;
  totalLike: number = 0;
  editMode: boolean = false;
  @Input() UsaPost: Post;
  constructor(
    private pinService: PinService,
    private usService: UsaService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {}

  drop(event: CdkDragDrop<Vegetable[]>) {
    moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
  }

  ngOnInit(): void {}
  toggleComment() {
    this.toggle = !this.toggle;
  }
  likePost() {
    if (this.hasLiked == false) {
      this.UsaPost.like += 1;
    }
    this.hasLiked = true;
  }
  pinPost() {
    this.pinService.pinPostFromChannel(this.UsaPost);
  }
  onDelete(id: string) {
    this.usService.deletePost(id);
  }
  votePost() {
    if (this.hasVoted == false) {
      this.UsaPost.votes += 1;
    }
    this.hasVoted = true;
  }
  openEdit(id: string) {
    const dialogRef = this.dialog.open(EditPostComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result is this: ${result}`);
    });
    this.usService.editPost = id;
  }
}
