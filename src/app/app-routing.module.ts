import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'features',component:FeaturesComponent},
  {path:'pricing',component: PricingComponent},
  {path:'blog',component:BlogComponent},
  {path:'blog-single',component:BlogSingleComponent},
  {path:'contact',component:ContactComponent},
  {path:'',redirectTo:'/home',pathMatch:"prefix"},
  {path:'**',component:PagenotfoundComponent}];

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FeaturesComponent,
    PricingComponent,
    BlogComponent,
    BlogSingleComponent,
    ContactComponent,
    PagenotfoundComponent
  ],
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,NavbarComponent,
    FooterComponent,
    HomeComponent,
    FeaturesComponent,
    PricingComponent,
    BlogComponent,
    BlogSingleComponent,
    ContactComponent,
    PagenotfoundComponent
  ]
})
export class AppRoutingModule { }
