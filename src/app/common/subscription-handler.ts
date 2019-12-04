import {Subscription} from 'rxjs';

export class SubscriptionHandler {

  private subscriptions: Subscription[] = [];

  public add(subscription: Subscription) {
    this.subscriptions.push(subscription);
  }

  public unsubscribeAll() {
    this.subscriptions.forEach(s => this.unsubscribeOne(s));
    this.subscriptions = [];
  }

  public unsubscribeOne(subscription: Subscription) {
    if (subscription != null) {
      subscription.unsubscribe();
    }
  }
}
