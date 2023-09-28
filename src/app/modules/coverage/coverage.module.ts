import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoverageRoutingModule } from './coverage-routing.module';
import { CoverageBiologicalScienceComponent } from 'src/app/components/coverage-biological-science/coverage-biological-science.component';
import { CoverageEnglishComponent } from 'src/app/components/coverage-english/coverage-english.component';

@NgModule({
  declarations: [CoverageBiologicalScienceComponent, CoverageEnglishComponent],
  imports: [CommonModule, CoverageRoutingModule],
})
export class CoverageModule {}
