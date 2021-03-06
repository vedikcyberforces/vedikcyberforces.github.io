import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContributorComponent } from './components/contributor/contributor.component';
import { HomeComponent } from './components/home/home.component';
import { MemberComponent } from './components/member/member.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { NewsComponent } from './components/news/news.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { JoinComponent } from './components/join/join.component';
import { FormsModule } from '@angular/forms';
import { JoinrequestsComponent } from './components/joinrelated/joinrequests/joinrequests.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ALLProjectsComponent } from './components/allprojects/allprojects.component';
import { WebProjectsComponent } from './components/web-projects/web-projects.component';
import { MobileComponent } from './components/mobile/mobile.component';
import { DesktopComponent } from './components/desktop/desktop.component';
import { ProjectmodelComponent } from './components/projectmodel/projectmodel.component';
import { ProfileComponent } from './components/login/profile/profile.component';
import { ArtComponent } from './components/art/art.component';
import { OpenroomComponent } from './communication/openroom/openroom.component';
import { TaskComponent } from './page/task/task.component';



@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    NavbarComponent,
    HomeComponent,
    ContributorComponent,
    NewsComponent,
    FooterComponent,
    LoginComponent,
    AboutComponent,
    JoinComponent,
    JoinrequestsComponent,
    ProjectsComponent,
    ALLProjectsComponent,
    WebProjectsComponent,
    MobileComponent,
    DesktopComponent,
    ProjectmodelComponent,
    ProfileComponent,
    ArtComponent,
    OpenroomComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 