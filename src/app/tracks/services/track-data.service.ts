import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import Track from '../models/track.model';

@Injectable({
  providedIn: 'root'
})
export class TrackDataService {
  private dbPath = '/tracks';

  tracksRef: AngularFirestoreCollection<Track>;

  constructor(private db: AngularFirestore) {
    this.tracksRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Track> {
    return this.tracksRef;
  }

  create(track: Track): any {
    console.log(track);
    return this.tracksRef.add({ ...track });
  }

  update(id: string, data: any): Promise<void> {
    return this.tracksRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.tracksRef.doc(id).delete();
  }
}
