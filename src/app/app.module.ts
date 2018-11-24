import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { CharactersComponent } from './characters/characters.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { CommentsComponent } from './characters/comments/comments.component';
import { EpisodesComponent } from './episodes/episodes.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    NewsletterComponent,
    CommentsComponent,
    EpisodesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
