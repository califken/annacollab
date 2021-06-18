import { environment } from './../../environments/environment.prod';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTrackComponent } from './components/add-track/add-track.component';
import { TracksListComponent } from './components/tracks-list/tracks-list.component';
import { TrackDetailsComponent } from './components/track-details/track-details.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';
import { TracksListitemComponent } from './components/tracks-listitem/tracks-listitem.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp (environment.firebase),
    AngularFirestoreModule, // for firestore
  ],
  declarations: [AddTrackComponent, TracksListComponent, TrackDetailsComponent, TracksListitemComponent],
  exports: [AddTrackComponent, TracksListComponent, TrackDetailsComponent]
})
export class TracksModule { }
