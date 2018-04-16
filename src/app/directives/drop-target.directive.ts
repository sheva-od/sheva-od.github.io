import { Directive, Output, Input, HostListener, EventEmitter } from '@angular/core';
import { DragService } from './../services/drag.service';

@Directive({
  selector: '[appDropTarget]'
})
export class DropTargetDirective {

  private square;

  constructor(
    private dragService: DragService
  ) {}

  @Input()
  set appDropTarget(square) {
    if (square) {
      this.square = square;
    }
  }

  @Output()
  private drop: EventEmitter<any> = new EventEmitter();

  @HostListener('dragenter', ['$event'])
  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent) {

    if (this.dragService.accepts(this.square)) {
      event.preventDefault();
    }
  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    if (event.dataTransfer) {
      const figure = JSON.parse(event.dataTransfer.getData('Figure'));
      figure.coords = { i: this.square.i, j: this.square.j };
      this.drop.emit(figure);
    }
  }
}
