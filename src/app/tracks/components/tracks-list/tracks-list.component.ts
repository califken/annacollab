import { Component, OnInit } from '@angular/core';
import { TrackDataService } from '../../services/track-data.service';
import { map } from 'rxjs/operators';
import Track from '../../models/track.model';

@Component({
  selector: 'app-tracks-list',
  templateUrl: './tracks-list.component.html',
  styleUrls: ['./tracks-list.component.scss']
})
export class TracksListComponent implements OnInit {

  tracks?: Track[];
  currentTrack?: Track;
  currentIndex = -1;
  title = '';

  constructor(private trackService: TrackDataService) { }

  ngOnInit(): void {
    this.retrieveTracks();
  }

  refreshList(): void {
    this.currentTrack = undefined;
    this.currentIndex = -1;
    this.retrieveTracks();
  }

  retrieveTracks(): void {
    this.trackService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.tracks = data;
    });
  }

  setActiveTrack(track: Track, index: number): void {
    this.currentTrack = track;
    this.currentIndex = index;
  }

}
