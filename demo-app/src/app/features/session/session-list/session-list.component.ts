import { Component, Input } from '@angular/core';
import { Session } from '../session.model';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { Panel, PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-session-list',
  standalone: true,
  imports: [CommonModule, CardModule, MessageModule, PanelModule, TableModule],
  templateUrl: './session-list.component.html',
  styleUrl: './session-list.component.scss',
})
export class SessionListComponent {
  @Input() sessionList!: Session[];
}
