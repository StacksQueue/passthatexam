import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoverageRoutingModule } from './coverage-routing.module';
import { CoverageBiologicalScienceComponent } from 'src/app/components/coverage-biological-science/coverage-biological-science.component';

@NgModule({
  declarations: [CoverageBiologicalScienceComponent],
  imports: [CommonModule, CoverageRoutingModule],
})
export class CoverageModule {}
