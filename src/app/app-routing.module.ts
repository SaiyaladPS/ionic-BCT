import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
 {
  path: '',
  redirectTo:'alert-page',
  pathMatch:'full',
 }
  ,
  {
    path: 'alert-page',
    loadChildren: () => import('./alert-page/alert-page.module').then( m => m.AlertPagePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
