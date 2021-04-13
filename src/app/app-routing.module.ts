import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomizerComponent} from './customizer/customizer.component';
import {ShowComponent} from './show/show.component';

const routes: Routes = [
  {
    path: "show/:sno",
    component: ShowComponent
  },
  {
    path: "customizer",
    component: CustomizerComponent
  },
  {
    path: "",
    redirectTo: "/customizer", pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
