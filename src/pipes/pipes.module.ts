import { NgModule } from '@angular/core';
import { AsyncNoZonePipe } from './async-no-zone.pipe';

@NgModule({
  declarations: [AsyncNoZonePipe],
  exports: [AsyncNoZonePipe],
})
export class PipesModule {}
