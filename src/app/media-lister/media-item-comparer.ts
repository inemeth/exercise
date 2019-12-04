import {MediaItem} from '../common/media-item';
import {SorterField} from '../common/sorter-field';

export class MediaItemComparer {

  constructor(
    private sorterField: SorterField,
    private ascending: boolean
  ) { }

  public compare(mediaItemA: MediaItem, mediaItemB: MediaItem): number {
    switch (this.sorterField) {
      case SorterField.Alphabetical: { return this.sortByName(mediaItemA, mediaItemB); }
      case SorterField.DateUploaded: { return this.sortByUploadDate(mediaItemA, mediaItemB); }
    }
  }

  private sortByName(mediaItemA: MediaItem, mediaItemB: MediaItem): number {
    if (this.ascending) {
      return mediaItemA.name < mediaItemB.name ? -1 : 1;
    } else {
      return mediaItemA.name < mediaItemB.name ? 1 : -1;
    }
  }

  private sortByUploadDate(mediaItemA: MediaItem, mediaItemB: MediaItem): number {
    if (this.ascending) {
      return mediaItemA.uploadDate < mediaItemB.uploadDate ? -1 : 1;
    } else {
      return mediaItemA.uploadDate < mediaItemB.uploadDate ? 1 : -1;
    }
  }
}
