import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { ItemComponent } from './components/item/item.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  { path: 'item', component: ItemComponent },
  {
    path: 'item/:id/:name/:date/:price/:desc/:image',
    component: InfoComponent,
  },
  { path: 'list', component: ListComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
