import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomizerComponent } from './customizer/customizer.component';
import { LeaveComponent } from './leave/leave.component';
import { LeaveshellComponent } from './leaveshell/leaveshell.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { ShowComponent } from './show/show.component';

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
    component: LeaveshellComponent,
    children: [
      { path: "show/:sno", component: LeaveComponent },
      { path: "qrcode/:sno", component: QrcodeComponent },
      { path: "**", redirectTo: "show" }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
