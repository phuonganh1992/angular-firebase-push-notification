import {Component, OnInit} from '@angular/core';
import {AngularFireMessaging} from '@angular/fire/messaging';
import {mergeMapTo} from 'rxjs/operators';
import {MessagingService} from './messaging.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'AngularFireMessaging';
  message: BehaviorSubject<{}> = new BehaviorSubject({});

  constructor(private messageService: MessagingService) {
  }

  ngOnInit(): void {
    this.message = this.messageService.currentMessage;
  }

  requestPermission(): void {
    this.messageService.requestPermission();
  }

  listen(): void {
    this.messageService.listen();
  }
}
