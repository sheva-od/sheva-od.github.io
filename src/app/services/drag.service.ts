import { Injectable } from '@angular/core';

@Injectable()
export class DragService {
  private figure;

  public startDrag(figure) {
    this.figure = figure;
  }

  public accepts(square): boolean {
    return square.data.canDrop ? true : false;
  }
}
