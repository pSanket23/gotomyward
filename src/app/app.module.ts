import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {RouterModule } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core'; 
/*import {FileUploadModule} from 'primeng/primeng';*/


import { AppComponent } from './app.component';
import { MyLoginComponent } from './my-login/my-login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TimelineComponent } from './timeline/timeline.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { SubTimelineComponent } from './sub-timeline/sub-timeline.component';
import { EventComponent } from './event/event.component';
import { FriendComponent } from './friend/friend.component';
import { MemberLoginComponent } from './member-login/member-login.component';
import { JobDisplayComponent } from './job-display/job-display.component';
import { AddAdsComponent } from './add-ads/add-ads.component';
import { SearchResultComponent } from './search-result/search-result.component';


@NgModule({
  declarations: [
    AppComponent,
    MyLoginComponent,
    HeaderComponent,
    FooterComponent,
    TimelineComponent,
    LandingPageComponent,
    UserInfoComponent,
    SubTimelineComponent,
    EventComponent,
    FriendComponent,
    MemberLoginComponent,
    JobDisplayComponent,
    AddAdsComponent,
    SearchResultComponent,
    /*FileUploadModule*/
    ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'',
        component:MyLoginComponent
      },
      {
        path:'member-login',
        component:MemberLoginComponent
      },
      {
        path:'user-profile',
        component:TimelineComponent,
        children:[
          {
            path:'',
            component:SubTimelineComponent
          },
          {
            path:'user-info',
            component:UserInfoComponent
          },
          {
            path:'event',
            component:EventComponent
          },
          {
            path:'followers',
            component:FriendComponent
          },
          {
            path:'job-display',
            component:JobDisplayComponent
          },
          {
            path:'add-ads',
            component:AddAdsComponent
          }
        ]
      },
      {
        path:'landing-page',
        component:LandingPageComponent
      },
      {
        path:'search-result',
        component:SearchResultComponent
      }
    ]),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
