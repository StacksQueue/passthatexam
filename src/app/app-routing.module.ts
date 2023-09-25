import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/exam/exam.module').then((m) => m.ExamModule),
  },
  {
    path: 'coverage',
    loadChildren: () =>
      import('./modules/coverage/coverage.module').then((m) => m.CoverageModule),
  },
  {
    path: 'copyright-policy',
    title: 'Pass That Board - Copyright Policy And Disclaimer',
    loadChildren: () =>
      import('./modules/policy/policy.module').then((m) => m.PolicyModule),
  },
  {
    path: 'privacy-policy',
    title: 'Pass That Board - Privacy Policy',
    loadChildren: () =>
      import('./modules/privacy/privacy.module').then((m) => m.PrivacyModule),
  },
  {
    path: 'advertising-policy',
    title: 'Pass That Board - Advertising Policy',
    loadChildren: () =>
      import('./modules/advertising/advertising.module').then(
        (m) => m.AdvertisingModule
      ),
  },
  {
    path: 'donate',
    title: 'Pass That Board - Donate to Us',
    loadChildren: () =>
      import('./modules/donate/donate.module').then((m) => m.DonateModule),
  },
  {
    path: 'questions',
    title: 'Pass That Board - CSE & LET Questions',
    loadChildren: () =>
      import('./modules/question/question.module').then(
        (m) => m.QuestionModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      scrollOffset: [0, 50],
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
