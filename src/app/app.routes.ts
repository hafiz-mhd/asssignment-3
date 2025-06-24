import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbsoluteSourceSpan } from '@angular/compiler';


import { About } from './page/about/about';
import { HOST_TAG_NAME } from '@angular/core';
import { Home } from './page/home/home';
import { Services } from './page/services/services';
import { Career } from './page/career/career';
import { Contact } from './page/contact/contact';
import { Cloud } from './page/cloud/cloud';
import { Cyber } from './page/cyber/cyber';
import { Dataeng } from './page/dataeng/dataeng';
import { Consulting } from './page/consulting/consulting';

    export const routes: Routes = [{ path:'', component: Home},{ path:'about' , component: About},{ path:'home' , component: Home},{ path:'services' , component: Services},{ path:'career' , component: Career},{ path:'contact' , component: Contact},
      { path:'cloud' , component: Cloud},{ path:'cyber' , component: Cyber},{ path:'dataeng' , component: Dataeng},{ path:'consulting' , component: Consulting},
    ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }