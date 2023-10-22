import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverageAgriFisheryComponent } from 'src/app/components/coverage-agri-fishery/coverage-agri-fishery.component';
import { CoverageBiologicalScienceComponent } from 'src/app/components/coverage-biological-science/coverage-biological-science.component';
import { CoverageCivilServiceComponent } from 'src/app/components/coverage-civil-service/coverage-civil-service.component';
import { CoverageEnglishComponent } from 'src/app/components/coverage-english/coverage-english.component';
import { CoverageFilipinoComponent } from 'src/app/components/coverage-filipino/coverage-filipino.component';
import { CoverageGeneralEducationComponent } from 'src/app/components/coverage-general-education/coverage-general-education.component';
import { CoverageMapehComponent } from 'src/app/components/coverage-mapeh/coverage-mapeh.component';
import { CoverageMathematicsComponent } from 'src/app/components/coverage-mathematics/coverage-mathematics.component';
import { CoveragePhysicalScienceComponent } from 'src/app/components/coverage-physical-science/coverage-physical-science.component';
import { CoverageProfessionalEducationComponent } from 'src/app/components/coverage-professional-education/coverage-professional-education.component';
import { CoverageSocialSciencesComponent } from 'src/app/components/coverage-social-sciences/coverage-social-sciences.component';
import { CoverageTleComponent } from 'src/app/components/coverage-tle/coverage-tle.component';
import { CoverageValuesEducationComponent } from 'src/app/components/coverage-values-education/coverage-values-education.component';

const routes: Routes = [
  { path: 'general-education', title: 'LET General Education Coverage of Examination', component: CoverageGeneralEducationComponent },
  { path: 'professional-education', title: 'LET Professional Education Coverage of Examination', component: CoverageProfessionalEducationComponent },
  { path: 'civil-service', title: 'Civil Service Coverage of Examination', component: CoverageCivilServiceComponent },
  { path: 'english', title: 'LET English Major Coverage of Examination', component: CoverageEnglishComponent },
  { path: 'filipino', title: 'LET Filipino Major Coverage of Examination', component: CoverageFilipinoComponent },
  { path: 'biological-science', title: 'LET Biological Science Major Coverage of Examination', component: CoverageBiologicalScienceComponent },
  { path: 'physical-science', title: 'LET Physical Science Major Coverage of Examination', component: CoveragePhysicalScienceComponent },
  { path: 'mathematics', title: 'LET Mathematics Major Coverage of Examination', component: CoverageMathematicsComponent },
  { path: 'social-science', title: 'LET Social Science Major Coverage of Examination', component: CoverageSocialSciencesComponent },
  { path: 'values-education', title: 'LET Values Education Major Coverage of Examination', component: CoverageValuesEducationComponent },
  { path: 'mapeh', title: 'LET MAPEH Major Coverage of Examination', component: CoverageMapehComponent },
  { path: 'agri-fishery-arts', title: 'LET Agriculture and Fishery Arts Major Coverage of Examination', component: CoverageAgriFisheryComponent },
  { path: 'tle', title: 'LET TLE Major Coverage of Examination', component: CoverageTleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoverageRoutingModule { }
