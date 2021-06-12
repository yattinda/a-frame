AFRAME.registerComponent('rand_position_num', {
  var min = 10;
  var xmin = -50;
  var max = 50;
  init: function () {
    this.el.addEventListener('click', function (evt) {
      var x = Math.floor( Math.random() * (max + 1 - xmin) ) + xmin ;
      var y = Math.floor( Math.random() * (max + 1 - min) ) + min ;
      var z = Math.floor( Math.random() * (max + 1 - min) ) + min ;
      this.setAttribute('material', 'position', 'x y z');
    });
  }
});
