import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayreslutComponent } from './routes/displayreslut/displayreslut.component';
import { PickyourchooseComponent } from './routes/pickyourchoose/pickyourchoose.component';

const routes: Routes = [
  { path: "pick" , component: PickyourchooseComponent},
  { path: "Display" , component: DisplayreslutComponent},
  { path: "**", redirectTo: "pick"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
