import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DraggableDirective } from './directives/draggable.directive';
import { DropTargetDirective } from './directives/drop-target.directive';

import { DragService } from './services/drag.service';

@NgModule({
  declarations: [
    AppComponent,
    DraggableDirective,
    DropTargetDirective
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    DragService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
