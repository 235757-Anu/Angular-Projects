import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OtherComponent } from './other/other.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path: 'about',component:AboutComponent},
  {path:'review',component:ReviewComponent},
  {path:'menu',component:MenuComponent},
  {path:'other',component:OtherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
