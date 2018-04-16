import { Directive, HostBinding, Input, Output, HostListener, EventEmitter } from '@angular/core';
import { DragService } from './../services/drag.service';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {

  private figure;

  constructor(
    private dragService: DragService
  ) {}

  @Input()
  set appDraggable(figure) {
    if (figure) {
      this.figure = figure;
    }
  }

  @Output()
  private dragStart: EventEmitter<any> = new EventEmitter();

  @Output()
  private dragEnd: EventEmitter<any> = new EventEmitter();

  @HostListener('dragstart', ['$event'])
  onDragStart(event) {
    this.dragStart.emit(this.figure);
    event.dataTransfer.setData('Figure', JSON.stringify(this.figure));
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(event) {
    this.dragEnd.emit(true);
  }
}
