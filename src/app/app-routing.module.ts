import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { SearchComponent} from './search/search.component'
import { RepositoriesComponent} from './repositories/repositories.component';
import { from } from 'rxjs';


const routes: Routes = [
    {path: 'users', component: SearchComponent},
    {path: 'repository', component: RepositoriesComponent},
    {path: '', redirectTo: '/users', pathMatch: 'full'},



];

@NgModule({
  imports: [
    CommonModule,
      RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class RoutingModule { }
