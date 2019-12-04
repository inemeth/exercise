import {Component, OnDestroy, OnInit} from '@angular/core';
import {MediaService} from '../client/media-service';
import {MediaItem} from '../common/media-item';
import {BehaviorSubject, Observable} from 'rxjs';
import {MediaType} from '../common/media-type';
import {SubscriptionHandler} from '../common/subscription-handler';
import {SorterField} from '../common/sorter-field';
import {MediaItemComparer} from './media-item-comparer';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-media-lister',
  templateUrl: './media-lister.component.html',
  styleUrls: ['./media-lister.component.css']
})
export class MediaListerComponent implements OnInit, OnDestroy {
  filteredMediaItems: Observable<MediaItem[]>;
  filteredAndSortedMediaItems: MediaItem[];

  searchExpression = '';
  typeFilter: BehaviorSubject<MediaType> = new BehaviorSubject<MediaType>(null);
  typeSorter: BehaviorSubject<SorterField> = new BehaviorSubject<SorterField>(SorterField.DateUploaded);
  ascendingOrder: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  MediaType = MediaType;
  SorterField = SorterField;

  private subscriptionHandler = new SubscriptionHandler();

  constructor(
    private mediaService: MediaService
  ) { }

  ngOnInit() {
    this.initMediaList();
    this.initSubscriptions();
  }

  ngOnDestroy() {
    this.subscriptionHandler.unsubscribeAll();
  }

  private initSubscriptions() {
    this.subscriptionHandler.add(this.typeFilter.subscribe(value => this.refreshMediaList()));
    this.subscriptionHandler.add(this.typeSorter.subscribe(value => this.sortMediaList()));
    this.subscriptionHandler.add(this.ascendingOrder.subscribe(value => this.sortMediaList()));
  }

  private initMediaList() {
    this.refreshMediaList();
  }

  private refreshMediaList() {
    this.filteredMediaItems = this.mediaService.getMediaItems()
      .pipe(map(items => items
        .filter(mediaItem => mediaItem.name.toLowerCase().startsWith(this.searchExpression.toLowerCase()))
      ));
    if (this.typeFilter.getValue() !== null) {
      this.filteredMediaItems = this.filteredMediaItems
        .pipe(map(items => items
          .filter(mediaItem => mediaItem.mediaType === this.typeFilter.getValue())
        ));
    }
    this.sortMediaList();
  }

  private sortMediaList() {
    const comparer = new MediaItemComparer(this.typeSorter.getValue(), this.ascendingOrder.getValue());
    this.subscriptionHandler.add(this.filteredMediaItems
      .subscribe(
        result => {
          this.filteredAndSortedMediaItems = result.sort((a, b) => comparer.compare(a, b));
        })
      );

    // sorterField and ascending fields of MediaItemComparer cannot be accessed inside the class during the comparison, it throws
    // "this is undefined" error while trying to access this.sorterField in MediaItemComparer.compare
    // const comparer = new MediaItemComparer(this.typeSorter.getValue(), this.ascendingOrder.getValue());
    // this.filteredMediaItems = this.filteredMediaItems.pipe(map(items => items.sort(comparer.compare)));
  }

  searchExpressionChanged($event) {
    this.searchExpression = $event;
    this.refreshMediaList();
  }

  typeFilterChanged(value: MediaType) {
    this.typeFilter.next(value);
  }

  clearFilters() {
    this.searchExpression = '';
    this.typeFilter.next(null);
  }

  typeSorterChanged(value: SorterField) {
    this.typeSorter.next(value);
  }

  reverseOrder() {
    this.ascendingOrder.next(!this.ascendingOrder.getValue());
  }

}
