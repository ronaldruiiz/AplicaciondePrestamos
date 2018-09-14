import { NgModule } from '@angular/core';
import { LengthTitlePipe } from './length-title/length-title';
import { NoStatePipe } from './no-state/no-state';
@NgModule({
	declarations: [LengthTitlePipe,
    NoStatePipe],
	imports: [],
	exports: [LengthTitlePipe,
    NoStatePipe]
})
export class PipesModule {}
