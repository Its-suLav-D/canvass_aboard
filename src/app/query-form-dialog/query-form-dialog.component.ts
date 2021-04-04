import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';
import { UsaService } from '../channels/usa.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UkService } from '../channels/uk/uk.service';
import { GermanyService } from '../channels/germany/germany.service';
import { CanadaService } from '../channels/canada/canada.service';
import { AustraliaService } from '../channels/australia/australia.service';

@Component({
  selector: 'canvass-query-form-dialog',
  templateUrl: './query-form-dialog.component.html',
  styleUrls: ['./query-form-dialog.component.css'],
})
export class QueryFormDialogComponent implements OnInit {
  @ViewChild('f') queryForm: NgForm;
  public postRoute: string;

  constructor(
    private usService: UsaService,
    private ukService: UkService,
    private germanyService: GermanyService,
    private canadaService: CanadaService,
    private australiaService: AustraliaService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.activeRoute.url.subscribe((params: Params) => {
    //   if (params['australia']) {
    //     this.postRoute = 'australia';
    //   } else if (params['uk']) {
    //     this.postRoute = 'uk';
    //   } else if (params['canada']) {
    //     this.postRoute = 'canada';
    //   } else if (params['germany']) {
    //     this.postRoute = 'germany';
    //   } else if (params['usa']) {
    //     this.postRoute = 'usa';
    //   }
    //   console.log(params);
    // });
    if (this.router.url == '/australia') {
      this.postRoute = 'australia';
    } else if (this.router.url == '/uk') {
      this.postRoute = 'uk';
    } else if (this.router.url == '/canada') {
      this.postRoute = 'canada';
    } else if (this.router.url == '/germany') {
      this.postRoute = 'germany';
    } else {
      this.postRoute = 'usa';
    }
    console.log(this.postRoute);
  }

  querySenderForm(form: NgForm) {
    const value = form.value;
    const username = 'Siba Inu';
    const title = value.title;
    const subtitle = value.body;
    const postUrl = value.postUrl;
    const avatar = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
    const timestamp = Number(Date.now());
    const newPost = new Post(
      null,
      username,
      title,
      subtitle,
      postUrl,
      avatar,
      timestamp
    );
    switch (this.postRoute) {
      case 'uk':
        this.ukService.addPost(newPost);
        break;
      case 'australia':
        this.australiaService.addPost(newPost);
        break;
      case 'germany':
        this.germanyService.addPost(newPost);
        break;
      case 'canada':
        this.canadaService.addPost(newPost);
        break;
      default:
        this.usService.addPost(newPost);
    }
    // this.usService.addPost(newPost);
    console.log(title, subtitle, postUrl, timestamp, avatar, username);
  }
}
