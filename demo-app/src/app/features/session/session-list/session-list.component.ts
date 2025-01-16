import { Component, Input } from '@angular/core';
import { Session } from '../session.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-session-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './session-list.component.html',
  styleUrl: './session-list.component.scss',
})
export class SessionListComponent {
  @Input() sessionList!: Session[];
}
