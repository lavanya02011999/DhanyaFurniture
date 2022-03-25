import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
{path:'',component:HomeComponent},
{path:'menu',component:MenuComponent},
{path:'menupage/:id',component:MenupageComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{path:'cart/:id',component:CartComponent},
{path:'login',component:LoginComponent},
{path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
