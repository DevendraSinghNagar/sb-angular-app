import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  { 
    path: '', 
    component: UsersComponent 
  },
  { 
    path: 'posts', 
    component: PostsComponent 
  },
  { 
    path: 'details/:id', 
    component: DetailsComponent 
  },
  { 
    path: 'contact', 
    component: ContactComponent 
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
