var CuddlyWoof = function() {
  this.$ = this;
  datamode = false;
  persistentDatamode = false;
  this ._ = function() {
    if (persistentDatamode == true) {
      persistentDatamode = datamode = false;
    } else if (datamode == true) {
      persistentDatamode = datamode = true;
    } else {
      datamode = true;
    }
    return this;
  }
  this.layer = {
    add: function() {
      this.layers.push(document.createElement("canvas"));
      if (datamode) {
        if (!persistentDatamode) {
          datamode = false;
        }
        return [this, this.layers[this.layers.length - 1]];
      } else {
        return this;
      }
    }
  };
  this.layers = [];
  this.layerSet = (function() {
    var layer = 0;
    return function(n) {
      if (typeof n == "number") {
        layer = n;
        this.canvas = this.layers[layer];
        this.ctx = this.layers[layer].getContext("2d");
      }
      if (datamode) {
        if (!persistentDatamode) {
          datamode = false;
        }
        return [this, layer];
      } else {
        return this;
      }
    }
  })();
  this.layer.add();
  this.layerSet(0);
  
  this.color = function(color) {
    oldColor = this.ctx.fillStyle;
    if (color) {
      this.ctx.fillStyle = color;
    }
    if (datamode) {
      if (!persistentDatamode) {
        datamode = false;
      }
      return [this, oldColor];
    } else {
      return this;
    }
  }
  
  this.clear = function(c) {
    if (c) {
      var oldColor = this._color(c)[1];
      this.$
       .rect.fill(0, 0, this.canvas.width, this.canvas.height)
       ._. color(oldColor); // cuddly-woof adds a whole new operator to JavaScript, the pokerface operator.
    } else {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    if (datamode) {
      if (!persistentDatamode) {
        datamode = false;
      }
      return [this, c];
    } else {
      return this;
    }
  }
  this.rect = {
    fill: function(x, y, w, h, c) {
      if (c) {
        var oldColor = this ._. color(c)[1];
        this.ctx.fillRect(x, y, w, h);
        this.color(oldColor);
      } else {
        this.ctx.fillRect(x, y, w, h);
      }
      if (datamode) {
        if (!persistentDatamode) {
          datamode = false;
        }
        return [this, c];
      } else {
        return this;
      }
    }
  };
  
  this.append = function(elem) {
    if (elem.constructor = String) {
      document.getElementById(elem).appendChild(this.canvas);
    } else if (elem instanceof HTMLElement) {
      elem.appendChild(this.canvas);
    }
    if (datamode) {
      if (!persistentDatamode) {
        datamode = false;
      }
      return [this, elems];
    } else {
      return this;
    }
  }
  
  return this;
};
