import { Component, OnInit } from '@angular/core';
import { SessionService } from './session.service';
import { Session } from './session.model';
import { SessionListComponent } from './session-list/session-list.component';
import { SessionFilterComponent } from './session-filter/session-filter.component';

@Component({
  selector: 'app-session',
  standalone: true,
  imports: [SessionListComponent, SessionFilterComponent],
  template: `<div>
    <app-session-filter />
    <app-session-list [sessionList]="sessionList" />
  </div>`,
})
export class SessionComponent implements OnInit {
  sessionList: Session[];
  constructor(private sessionService: SessionService) {
    this.sessionList = [];
  }

  async ngOnInit(): Promise<void> {
    this.sessionList = (await this.sessionService.getSessionsAsync()) ?? [];
  }
}
