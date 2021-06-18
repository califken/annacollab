import { Component, OnInit } from '@angular/core';
import Track from '../../models/track.model';
import { TrackDataService } from '../../services/track-data.service';

@Component({
  selector: 'app-add-track',
  templateUrl: './add-track.component.html',
  styleUrls: ['./add-track.component.scss']
})
export class AddTrackComponent implements OnInit {

  track: Track = new Track();
  submitted = false;

  constructor(private trackService: TrackDataService) { }

  ngOnInit(): void {
  }

  saveTrack(): void {
    this.trackService.create(this.track).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newTrack(): void {
    this.submitted = false;
    this.track = new Track();
  }

}
