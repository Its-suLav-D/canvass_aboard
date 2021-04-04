import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FormsModule } from '@angular/forms';

import { HeadersComponent } from './headers/headers.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { AvatarModule } from 'ngx-avatar';
import { NgxFlagsModule } from 'ngx-flags';
import { PostsComponent } from './posts/posts.component';
import { QuerySenderComponent } from './query-sender/query-sender.component';
import { QueryFormDialogComponent } from './query-form-dialog/query-form-dialog.component';
import { AustraliaPostListComponent } from './channels/australia/australia-post-list/australia-post-list.component';
import { AustraliaPostItemComponent } from './channels/australia/australia-post-list/australia-post-item/australia-post-item.component';
import { UkPostListComponent } from './channels/uk/uk-post-list/uk-post-list.component';
import { UkPostItemComponent } from './channels/uk/uk-post-list/uk-post-item/uk-post-item.component';
import { GermanyPostListComponent } from './channels/germany/germany-post-list/germany-post-list.component';
import { GermanyPostItemComponent } from './channels/germany/germany-post-list/germany-post-item/germany-post-item.component';
import { CanadaPostListComponent } from './channels/canada/canada-post-list/canada-post-list.component';
import { CanadaPostItemComponent } from './channels/canada/canada-post-list/canada-post-item/canada-post-item.component';
import { UsaPostListComponent } from './channels/usa/usa-post-list/usa-post-list.component';
import { UsaPostItemComponent } from './channels/usa/usa-post-list/usa-post-item/usa-post-item.component';
import { OrderbyPipe } from './shared/orderby.pipe';
import { PinsListComponent } from './pins-list/pins-list.component';
import { PinsListItemComponent } from './pins-list/pins-list-item/pins-list-item.component';
import { HomeComponent } from './home/home/home.component';
import { SnbarComponent } from './shared/snbar/snbar.component';
import { EditPostComponent } from './edit-post/edit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    LeftSideBarComponent,
    PostsComponent,
    QuerySenderComponent,
    QueryFormDialogComponent,
    AustraliaPostListComponent,
    AustraliaPostItemComponent,
    UkPostListComponent,
    UkPostItemComponent,
    GermanyPostListComponent,
    GermanyPostItemComponent,
    CanadaPostListComponent,
    CanadaPostItemComponent,
    UsaPostListComponent,
    UsaPostItemComponent,
    OrderbyPipe,
    PinsListComponent,
    PinsListItemComponent,
    HomeComponent,
    SnbarComponent,
    EditPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    AvatarModule,
    HttpClientModule,
    NgxFlagsModule,
    BrowserAnimationsModule,
    NgxSkeletonLoaderModule,
    FormsModule,
  ],
  entryComponents: [QueryFormDialogComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
