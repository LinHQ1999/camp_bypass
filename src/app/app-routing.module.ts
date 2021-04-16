import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomizerComponent} from './customizer/customizer.component';
import {LeaveComponent} from './leave/leave.component';
import {ShowComponent} from './show/show.component';

const routes: Routes = [
{
    path: "",
    redirectTo: "/customizer", pathMatch: 'full'
  },
  {
    path: "show/:sno",
    component: ShowComponent
  },
  {
    path: "customizer",
    component: CustomizerComponent
  },
  {
    path: "leave/:sno",
    component: LeaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
