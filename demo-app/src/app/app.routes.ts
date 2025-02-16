import { Routes } from '@angular/router';
import { AppLayoutComponent } from './core/layout/app-layout.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { TestComponent } from './features/counterparty/test/test.component';
import { SessionComponent } from './features/session/session.component';
import { VotingSearchComponent } from './features/voting-search/voting-search.component';

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', component: TestComponent },
      { path: 'session', component: SessionComponent },
      { path: 'voting-search', component: VotingSearchComponent },
    ],
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];
