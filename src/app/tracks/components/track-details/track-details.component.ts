import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import Track from '../../models/track.model';
import { TrackDataService } from '../../services/track-data.service';

@Component({
  selector: 'app-track-details',
  templateUrl: './track-details.component.html',
  styleUrls: ['./track-details.component.scss']
})
export class TrackDetailsComponent implements OnInit, OnChanges {

  @Input() track?: Track;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentTrack: Track = {
    title: '',
    description: '',
    published: false
  };
  message = '';

  constructor(private trackService: TrackDataService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentTrack = { ...this.track };
  }

  updatePublished(status: boolean): void {
    if (this.currentTrack.id) {
      this.trackService.update(this.currentTrack.id, { published: status })
      .then(() => {
        this.currentTrack.published = status;
        this.message = 'The status was updated successfully!';
      })
      .catch(err => console.log(err));
    }
  }

  updateTrack(): void {
    const data = {
      title: this.currentTrack.title,
      description: this.currentTrack.description
    };

    if (this.currentTrack.id) {
      this.trackService.update(this.currentTrack.id, data)
        .then(() => this.message = 'The track was updated successfully!')
        .catch(err => console.log(err));
    }
  }

  deleteTrack(): void {
    if (this.currentTrack.id) {
      this.trackService.delete(this.currentTrack.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The track was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }

}
