import {Injectable} from '@angular/core';
import {AngularFireMessaging} from '@angular/fire/messaging';
import {BehaviorSubject} from 'rxjs';
import {mergeMapTo} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  currentMessage: BehaviorSubject<{}> = new BehaviorSubject({});

  constructor(private afMessaging: AngularFireMessaging) {
    this.afMessaging.messages.subscribe((message) => {
      console.log(message);
    });
  }

  requestPermission(): void {
    this.afMessaging.requestToken
      .subscribe(
        (token) => {
          console.log('Permission granted! Save to the server!', token);
        },
        (error) => {
          console.error(error);
        },
      );
  }

  listen(): void {
    this.afMessaging.messages
      .subscribe((message) => {
        console.log('mes receive: ', message);
        this.currentMessage.next(message);
      }, error => console.log(error));
  }
}
