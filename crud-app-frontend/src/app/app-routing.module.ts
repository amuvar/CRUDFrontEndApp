import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemCreateComponent } from './components/item-create/item-create.component';
// import { ItemUpdateComponent } from './components/item-update/item-update.component';
import { ItemDeleteComponent } from './components/item-delete/item-delete.component';

const routes: Routes = [
  { path: 'items', component: ItemListComponent },
  { path: 'items/create', component: ItemCreateComponent },
  // { path: 'items/update/:id', component: ItemUpdateComponent },
  { path: 'items/delete/:id', component: ItemDeleteComponent },
  { path: '', redirectTo: '/items', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }