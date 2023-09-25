import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverageBiologicalScienceComponent } from 'src/app/components/coverage-biological-science/coverage-biological-science.component';

const routes: Routes = [{path: 'biological-science', component: CoverageBiologicalScienceComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoverageRoutingModule { }
