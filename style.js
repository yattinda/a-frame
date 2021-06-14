
AFRAME.registerComponent('delete', {
  init: function () {
    this.el.addEventListener('mouseenter', function (event) {
      target.style.opacity = "0";
    }, false);
  }
});
