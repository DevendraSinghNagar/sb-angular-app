import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './pages/contact/contact.component';
import { DetailsComponent } from './pages/details/details.component';
import { PostsComponent } from './pages/posts/posts.component';
import { UsersComponent } from './pages/users/users.component';

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
    RouterModule.forRoot(appRoutes, {})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
