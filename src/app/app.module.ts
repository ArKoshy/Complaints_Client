//import system Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RouterModule,Routes} from '@angular/router'

//import user defined variables
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { TrackComponent } from './track/track.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SubmitComponent } from './submit/submit.component';

//define Routes
const appRoutes:Routes = [
  { path:'home',component:HomeComponent },   //load if /home is given in path
  { path:'track', component:TrackComponent} , // load if /track is given in the path.
  { path:'submit', component:SubmitComponent} , // load if /submit is given in the path.
  { path: ' ' , redirectTo: '/home',pathMatch:'full'}, //default redirection
  { path: '**' , component:PageNotFoundComponent} //Wild card route to take when non-of the above route exists.
  ];
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent, 
    HomeComponent,
    TrackComponent,
    PageNotFoundComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)  // for routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }