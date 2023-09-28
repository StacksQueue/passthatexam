import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverageBiologicalScienceComponent } from 'src/app/components/coverage-biological-science/coverage-biological-science.component';
import { CoverageEnglishComponent } from 'src/app/components/coverage-english/coverage-english.component';

const routes: Routes = [
  { path: 'biological-science', component: CoverageBiologicalScienceComponent },
  { path: 'english', component: CoverageEnglishComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoverageRoutingModule {}
