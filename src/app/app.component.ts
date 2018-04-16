import { Component, OnInit } from '@angular/core';
import * as boardData from './board-data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public draggedFigure: any;
  public board: any;
  private colorPalettes: string[] = ['brown', 'black', 'red', 'blue'];

  ngOnInit(): void {
    this.board = JSON.parse(localStorage.getItem('savedState')) || boardData;
    localStorage.setItem('initialState', JSON.stringify(boardData));
  }

  public resetBoard() {
    this.board = JSON.parse(localStorage.getItem('initialState'));
  }

  public saveBoard() {
    localStorage.setItem('savedState', JSON.stringify(this.board));
  }

  public loadBoard() {
    this.board = JSON.parse(localStorage.getItem('savedState'));
  }

  public changeColorPalette() {
    this.board.colorPalette = this.colorPalettes[Math.floor(Math.random() * this.colorPalettes.length)];
  }

  public onDrop(data: any, i) {
    if (data.data) {
      this.board.data[data.i][data.j] = {};
      this.board.data[data.coords.i][data.coords.j] = data.data;

      this.board.data = this.board.data.map((row: any) => {
        return row.map(square => {
          square.disabled = !square.disabled;
          square.canDrop = false;
          return square;
        });
      });
    }
  }

  public onDragStart(data) {
    if (data.data) {
      this.draggedFigure = data;
      this.highlightSquare(data);
    }
  }

  public onDragEnd(data) {
    if (data) {
      this.clearHighlightSquares();
    }
  }

  private clearHighlightSquares() {
    this.board.data.map((row: any) => {
      return row.map(square => {
        square.canDrop = false;
        return square;
      });
    });
  }

  private highlightSquare(data) {
    this.clearHighlightSquares();

    switch (data.data.figure) {
      case 'pawn':
        switch (data.data.color) {
          case 'white':
            if (this.board.data[data.i - 1][data.j].color !== 'white' && this.board.data[data.i - 1][data.j].color !== 'black') {
              this.board.data[data.i - 1][data.j].canDrop = true;
            }
            if (data.i === 6 && this.board.data[data.i - 2][data.j].color !== 'white'
              && this.board.data[data.i - 1][data.j].color !== 'white') {
              this.board.data[data.i - 2][data.j].canDrop = true;
            }
            if (this.board.data[data.i - 1][data.j - 1] && this.board.data[data.i - 1][data.j - 1].color === 'black') {
              this.board.data[data.i - 1][data.j - 1].canDrop = true;
            }
            if (this.board.data[data.i - 1][data.j + 1] && this.board.data[data.i - 1][data.j + 1].color === 'black') {
              this.board.data[data.i - 1][data.j + 1].canDrop = true;
            }
            break;
          case 'black':
            if (this.board.data[data.i + 1][data.j].color !== 'black' && this.board.data[data.i + 1][data.j].color !== 'white') {
              this.board.data[data.i + 1][data.j].canDrop = true;
            }
            if (data.i === 1 && this.board.data[data.i + 2][data.j].color !== 'black'
              && this.board.data[data.i + 1][data.j].color !== 'black') {
              this.board.data[data.i + 2][data.j].canDrop = true;
            }
            if (this.board.data[data.i + 1][data.j - 1] && this.board.data[data.i + 1][data.j - 1].color === 'white') {
              this.board.data[data.i + 1][data.j - 1].canDrop = true;
            }
            if (this.board.data[data.i + 1][data.j + 1] && this.board.data[data.i + 1][data.j + 1].color === 'white') {
              this.board.data[data.i + 1][data.j + 1].canDrop = true;
            }
            break;
          }
        break;

      case 'knight':
        if (this.board.data[data.i - 2] && this.board.data[data.i - 2][data.j - 1]
          && this.board.data[data.i - 2][data.j - 1].color !== data.data.color) {
          this.board.data[data.i - 2][data.j - 1].canDrop = true;
        }
        if (this.board.data[data.i - 2] && this.board.data[data.i - 2][data.j + 1]
          && this.board.data[data.i - 2][data.j + 1].color !== data.data.color) {
          this.board.data[data.i - 2][data.j + 1].canDrop = true;
        }
        if (this.board.data[data.i + 2] && this.board.data[data.i + 2][data.j - 1]
          && this.board.data[data.i + 2][data.j - 1].color !== data.data.color) {
          this.board.data[data.i + 2][data.j - 1].canDrop = true;
        }
        if (this.board.data[data.i + 2] && this.board.data[data.i + 2][data.j + 1]
          && this.board.data[data.i + 2][data.j + 1].color !== data.data.color) {
          this.board.data[data.i + 2][data.j + 1].canDrop = true;
        }
        if (this.board.data[data.i - 1] && this.board.data[data.i - 1][data.j + 2]
          && this.board.data[data.i - 1][data.j + 2].color !== data.data.color) {
          this.board.data[data.i - 1][data.j + 2].canDrop = true;
        }
        if (this.board.data[data.i + 1] && this.board.data[data.i + 1][data.j - 2]
          && this.board.data[data.i + 1][data.j - 2].color !== data.data.color) {
          this.board.data[data.i + 1][data.j - 2].canDrop = true;
        }
        if (this.board.data[data.i - 1] && this.board.data[data.i - 1][data.j - 2]
          && this.board.data[data.i - 1][data.j - 2].color !== data.data.color) {
          this.board.data[data.i - 1][data.j - 2].canDrop = true;
        }
        if (this.board.data[data.i + 1] && this.board.data[data.i + 1][data.j + 2]
          && this.board.data[data.i + 1][data.j + 2].color !== data.data.color) {
          this.board.data[data.i + 1][data.j + 2].canDrop = true;
        }
        break;

      default:

        this.board.data.map((row: any) => {
          return row.map(square => {
            if (square.color !== 'white') {
              square.canDrop = true;
            }
            return square;
          });
        });
        break;

    }
  }
}
