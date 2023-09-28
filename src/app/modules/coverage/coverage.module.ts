import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoverageRoutingModule } from './coverage-routing.module';
import { CoverageBiologicalScienceComponent } from 'src/app/components/coverage-biological-science/coverage-biological-science.component';
import { CoverageEnglishComponent } from 'src/app/components/coverage-english/coverage-english.component';
import { CoverageFilipinoComponent } from 'src/app/components/coverage-filipino/coverage-filipino.component';

@NgModule({
  declarations: [
    CoverageBiologicalScienceComponent,
    CoverageEnglishComponent,
    CoverageFilipinoComponent,
  ],
  imports: [CommonModule, CoverageRoutingModule],
})
export class CoverageModule {}
