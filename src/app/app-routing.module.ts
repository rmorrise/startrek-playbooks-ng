import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {PlaybookComponent} from './playbook/playbook/playbook.component';
import {environment} from '../environments/environment';

const routes: Route[] = [
  {path: '', redirectTo: 'playbooks/captain', pathMatch: 'full'},
  {path: 'playbooks/:file', component: PlaybookComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: !environment.production
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
