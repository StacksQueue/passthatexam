import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from 'src/app/components/home/home.component';
import { SliderComponent } from 'src/app/components/slider/slider.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { MaterialModule } from '../material.module';
import { ExamModule } from '../exam/exam.module';

@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    FooterComponent,
    
  ],
  imports: [CommonModule, HomeRoutingModule, MaterialModule, ExamModule],
})
export class HomeModule {}
