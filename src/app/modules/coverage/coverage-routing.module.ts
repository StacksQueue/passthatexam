import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverageBiologicalScienceComponent } from 'src/app/components/coverage-biological-science/coverage-biological-science.component';
import { CoverageEnglishComponent } from 'src/app/components/coverage-english/coverage-english.component';
import { CoverageFilipinoComponent } from 'src/app/components/coverage-filipino/coverage-filipino.component';
import { CoverageMathematicsComponent } from 'src/app/components/coverage-mathematics/coverage-mathematics.component';
import { CoveragePhysicalScienceComponent } from 'src/app/components/coverage-physical-science/coverage-physical-science.component';
import { CoverageSocialSciencesComponent } from 'src/app/components/coverage-social-sciences/coverage-social-sciences.component';

const routes: Routes = [
  { path: 'english', component: CoverageEnglishComponent },
  { path: 'filipino', component: CoverageFilipinoComponent },
  { path: 'biological-science', component: CoverageBiologicalScienceComponent },
  { path: 'physical-science', component: CoveragePhysicalScienceComponent },
  { path: 'mathematics', component: CoverageMathematicsComponent },
  { path: 'social-science', component: CoverageSocialSciencesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoverageRoutingModule {}
