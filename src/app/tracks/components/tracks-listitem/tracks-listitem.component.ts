import { Component, OnInit, Input } from '@angular/core';
import WebAudio from 'wavesurfer.js/src/webaudio.js';
import WaveSurfer from 'wavesurfer.js';
import TimelinePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js';
import RegionsPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.regions.min.js';
import MarkersPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.markers.js';
import SpectrogramPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.spectrogram.js';
import Track from '../../models/track.model';

@Component({
  selector: 'app-tracks-listitem',
  templateUrl: './tracks-listitem.component.html',
  styleUrls: ['./tracks-listitem.component.scss']
})
export class TracksListitemComponent implements OnInit {
  @Input() track: Track;
  public wave: WaveSurfer = null;
  constructor() { }

  ngOnInit(): void {
  }
  generateWaveform(trackurl, trackkey) {
    this.wave = WaveSurfer.create({
      container: '#waveform',
      plugins: [
        TimelinePlugin.create({
          container: '#wave-timeline',
        }),
        RegionsPlugin.create({
        }),
      ],
    });
    this.wave.load(trackurl);
  }
}
