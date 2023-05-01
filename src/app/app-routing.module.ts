import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'job-detail',
    loadChildren: () => import('./job-detail/job-detail.module').then( m => m.JobDetailPageModule)
  },
  {
    path: 'application',
    loadChildren: () => import('./application/application.module').then( m => m.ApplicationPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
