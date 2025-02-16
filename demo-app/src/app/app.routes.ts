import { Routes } from '@angular/router';
import { AppLayoutComponent } from './core/layout/app-layout.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { SessionComponent } from './features/session/session.component';
import { VotingSearchComponent } from './features/voting-search/voting-search.component';
import { DummyComponent } from './shared/testing/dummy.component';

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    title: 'Layout',
    children: [
      { path: '', component: DummyComponent },
      { path: 'session', component: SessionComponent, title: 'Session Search' },
      {
        path: 'voting-search',
        component: VotingSearchComponent,
        title: 'Voting Search',
      },
    ],
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];
