function Piece(shape, color) {
  this.shape = shape;
  switch(shape) {
    case "L":
      this.shapeCoords = [[0,0], [1,0], [2,0], [0,1]]
      break;
    case "J":
      this.shapeCoords = [[0,0], [1,0], [2,0], [0,-1]]
      break;
    case "T":
      this.shapeCoords = [[0,0], [1,0], [0,-1], [0,-1]]
      break;
    case "LINE":
      this.shapeCoords = [[0,0], [1,0], [2,0], [-1,0]]
      break;
    case "Z":
      this.shapeCoords = [[0,0], [1,0], [1,-1], [0,1]]
      break;
    case "S":
      this.shapeCoords = [[0,0], [1,0], [1,1], [0,-1]]
      break;
    case "BOX":
      this.shapeCoords = [[0,0], [1,0], [0,1], [1,1]]
      break;
  };
  this.color = color;
  this.isActive = true;
  this.indexCoord = [2, 5];
  this.buildSquares();
  this.footprint = this.setFootprint();
}

Piece.prototype.buildSquares = function() {
  var color = this.color
  this.squares = this.shapeCoords.map(function(coord) {
    return new Square(coord, color)
  });
};

Piece.prototype.setFootprint = function() {
  return [this.indexCoord, this.squares[1].boardCoord(this.indexCoord), this.squares[2].boardCoord(this.indexCoord), this.squares[3].boardCoord(this.indexCoord)];
};

Piece.prototype.moveLeft = function() {
  this.indexCoord[0]--;
  this.footprint = this.setFootprint();
};

Piece.prototype.moveRight = function() {
  this.indexCoord[0]++;
  this.footprint = this.setFootprint();
};

Piece.prototype.moveDown = function() {
  this.indexCoord[0]++;
  this.footprint = this.setFootprint();
}

Piece.prototype.rotate = function() {
  this.squares.forEach(function(square) {
    square.rotate();
  });
  this.footprint = this.setFootprint();
};

Board.prototype.canMoveDown = function(activePiece) {
  for (i = 0, i < activePiece.footprint.length, i++) {
    if ((this.grid[activePiece[i][0] + 1][activePiece[i][1]] === undefined) ||
        (this.grid[activePiece[i][0] + 1][activePiece[i][1]] ==="C")) {
      return false;
    };
  };
  return true;
}

Board.prototype.canMoveLeft = function(activePiece) {
  for (i = 0, i < activePiece.footprint.length, i++) {
    if ((this.grid[activePiece[i][0]][activePiece[i][1] - 1] === undefined) ||
        (this.grid[activePiece[i][0]][activePiece[i][1] - 1] ==="C")) {
      return false;
    };
  };
  return true;
}

Board.prototype.canMoveRight = function(activePiece) {
  for (i = 0, i < activePiece.footprint.length, i++) {
    if ((this.grid[activePiece[i][0]][activePiece[i][1] + 1] === undefined) ||
        (this.grid[activePiece[i][0]][activePiece[i][1] + 1] ==="C")) {
      return false;
    };
  };
  return true;
}
