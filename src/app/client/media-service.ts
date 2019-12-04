import {Injectable} from '@angular/core';
import {MediaItem} from '../common/media-item';
import {Observable, of} from 'rxjs';
import {MediaType} from '../common/media-type';

@Injectable()
export class MediaService {

  /*
  * In a real-world situation here would be some backend call, for example a REST call to a Spring endpoint or similar,
  * maybe with server-side pagination, especially if the objects are large, completed with authentication data (eg. JWT)
  * supplied by a lower abstraction layer.
  * */
  public getMediaItems(): Observable<MediaItem[]> {
    const mediaItems: MediaItem[] = [];

    mediaItems.push(new MediaItem(0, 'An audio', MediaType.Audio, new Date('1972-10-11')));
    mediaItems.push(new MediaItem(1, 'A document', MediaType.Document, new Date('2010-07-15')));
    mediaItems.push(new MediaItem(2, 'An image', MediaType.Image, new Date('2019-11-23')));
    mediaItems.push(new MediaItem(3, 'A video', MediaType.Video, new Date('1972-11-12')));
    mediaItems.push(new MediaItem(4, 'An interactive video', MediaType.InteractiveVideo, new Date('2019-08-23')));
    mediaItems.push(new MediaItem(5, 'Another audio', MediaType.Audio, new Date('2019-11-22')));
    mediaItems.push(new MediaItem(6, 'Another document', MediaType.Document, new Date('2019-03-21')));
    mediaItems.push(new MediaItem(7, 'Another image', MediaType.Image, new Date('1972-11-22')));
    mediaItems.push(new MediaItem(8, 'Another video', MediaType.Video, new Date('2010-05-10')));
    mediaItems.push(new MediaItem(9, 'Another interactive video', MediaType.InteractiveVideo, new Date('2019-02-15')));
    mediaItems.push(new MediaItem(10, 'The third audio', MediaType.Audio, new Date('2019-11-20')));
    mediaItems.push(new MediaItem(11, 'The third document', MediaType.Document, new Date('2019-01-21')));
    mediaItems.push(new MediaItem(12, 'The third image', MediaType.Image, new Date('1972-11-22')));
    mediaItems.push(new MediaItem(13, 'The third video', MediaType.Video, new Date('2010-11-20')));
    mediaItems.push(new MediaItem(14, 'The third interactive video', MediaType.InteractiveVideo, new Date('2010-12-21')));

    return of(mediaItems);
  }
}
