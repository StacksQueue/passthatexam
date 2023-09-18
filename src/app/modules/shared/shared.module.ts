import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [FooterComponent],
})
export class SharedModule {}
