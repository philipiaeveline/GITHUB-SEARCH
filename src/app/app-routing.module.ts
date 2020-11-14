import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { SearchComponent} from './search/search.component'
import { RepositoriesComponent} from './repositories/repositories.component';
import { from } from 'rxjs';


const routes: Routes = [
    {path: 'search', component: SearchComponent},
    {path: 'repository', component: RepositoriesComponent},
    {path: '', redirectTo: '/search', pathMatch: 'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
