var Board = function() {
  this.grid = [
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1]]
}

Board.prototype.placeActivePiece = function(activePiece) {
  for (var i = 0; i < activePiece.footprint.length; i++) {
    this.grid[activePiece.footprint[i][0]][activePiece.footprint[i][1]] = "X";
  }
};

Board.prototype.clearActivePiece = function() {
  for (var r = 0; r < this.grid.length; r++) {
    for (var c = 0; c < 10; c++) {
      if (this.grid[r][c] === "X") {
        this.grid[r][c] = 1
      }
    }
  }
};

Board.prototype.settle = function(activePiece) {
  for (var r = 0; r < this.grid.length; r++) {
    for (var c = 0; c < 10; c++) {
      if (this.grid[r][c] === "X") {
        this.grid[r][c] = "C"
      }
    }
  }
};

Board.prototype.canMoveDown = function(activePiece) {
  for (i = 0; i < activePiece.footprint.length; i++) {
    if (!this.grid[activePiece.footprint[i][0] + 1] ||
        this.grid[activePiece.footprint[i][0] + 1][activePiece.footprint[i][1]] ==="C") {
      return false;
    };
  };
  return true;
}

Board.prototype.canMoveLeft = function(activePiece) {
  for (i = 0; i < activePiece.footprint.length; i++) {
    if (!this.grid[activePiece.footprint[i][0]][activePiece.footprint[i][1] - 1] ||
        this.grid[activePiece.footprint[i][0]][activePiece.footprint[i][1] - 1] ==="C") {
      return false;
    };
  };
  return true;
}

Board.prototype.canMoveRight = function(activePiece) {
  for (i = 0; i < activePiece.footprint.length; i++) {
    if (!this.grid[activePiece.footprint[i][0]][activePiece.footprint[i][1] + 1] ||
        this.grid[activePiece.footprint[i][0]][activePiece.footprint[i][1] + 1] ==="C") {
      return false;
    };
  };
  return true;
}

Board.prototype.deadSquareAtTop = function(board) {
  for (var r = 0; r < 4; r++) {
    for (var c = 0; c < 10; c++) {
      if (this.grid[r][c] === "C") {
        return true
      }
    }
  }
  return false
}

Board.prototype.deleteCompleteRows = function(board) {
  var completeRows = []
  for (var r = 4; r < 24; r++) {
    if (this.grid[r][0] === "C" && this.grid[r][1] === "C" && this.grid[r][2] === "C" && this.grid[r][3] === "C" && this.grid[r][4] === "C" && this.grid[r][5] === "C" && this.grid[r][6] === "C" && this.grid[r][7] === "C" && this.grid[r][8] === "C" && this.grid[r][9] === "C") {
      completeRows.push(r)
    }
  }
  this.clearCompleteRows(board, completeRows)
}

Board.prototype.clearCompleteRows = function(board, completeRows) {
  for (var r = 0; r < completeRows.length; r++) {
    for (var c = 0; c < 10; c++) {
      this.grid[completeRows[r]][c] = 1
    }
  }
  this.dropDeadSquares(board)
}

Board.prototype.dropDeadSquares = function(board) {

}
