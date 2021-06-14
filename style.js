
AFRAME.registerComponent('delete', {
  init: function () {
    this.el.addEventListener('mouseenter', function (event) {
      var me = document.getElementById(e.target.id);
      me.parentNode.removeChild(me);
    });
  }
});
