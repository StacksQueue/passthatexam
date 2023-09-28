import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverageBiologicalScienceComponent } from 'src/app/components/coverage-biological-science/coverage-biological-science.component';
import { CoverageEnglishComponent } from 'src/app/components/coverage-english/coverage-english.component';
import { CoverageFilipinoComponent } from 'src/app/components/coverage-filipino/coverage-filipino.component';

const routes: Routes = [
  { path: 'english', component: CoverageEnglishComponent },
  { path: 'filipino', component: CoverageFilipinoComponent },
  { path: 'biological-science', component: CoverageBiologicalScienceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoverageRoutingModule {}
