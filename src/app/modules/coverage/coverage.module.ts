import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoverageRoutingModule } from './coverage-routing.module';
import { CoverageBiologicalScienceComponent } from 'src/app/components/coverage-biological-science/coverage-biological-science.component';
import { CoverageEnglishComponent } from 'src/app/components/coverage-english/coverage-english.component';
import { CoverageFilipinoComponent } from 'src/app/components/coverage-filipino/coverage-filipino.component';
import { CoveragePhysicalScienceComponent } from '../../components/coverage-physical-science/coverage-physical-science.component';
import { CoverageMathematicsComponent } from '../../components/coverage-mathematics/coverage-mathematics.component';

@NgModule({
  declarations: [
    CoverageBiologicalScienceComponent,
    CoverageEnglishComponent,
    CoverageFilipinoComponent,
    CoveragePhysicalScienceComponent,
    CoverageMathematicsComponent,
  ],
  imports: [CommonModule, CoverageRoutingModule],
})
export class CoverageModule {}
