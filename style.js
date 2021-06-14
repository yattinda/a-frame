AFRAME.registerComponent('rand_position', {
  var min = 10;
  var xmin = -50;
  var max = 50;
  init: function () {
    this.el.addEventListener('click', function (evt) {
      var x = (Math.floor( Math.random() * (max + 1 - xmin) ) + xmin).toString() ;
      var y = (Math.floor( Math.random() * (max + 1 - min) ) + min).toString() ;
      var z = (Math.floor( Math.random() * (max + 1 - min) ) + min).toString() ;
      console.log(x + " " + y + " " + z)
      this.setAttribute('material', 'position', x + " " + y + " " + z);
    });
  }
});
