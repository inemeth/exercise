import {MediaType} from './media-type';

export class MediaItem {
  id: number;
  name: string;
  mediaType: MediaType;
  uploadDate: Date;

  constructor(id: number, name: string, mediaType: MediaType, uploadDate: Date) {
    this.id = id;
    this.name = name;
    this.mediaType = mediaType;
    this.uploadDate = uploadDate;
  }
}
