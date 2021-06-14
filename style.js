
AFRAME.registerComponent('delete', {
  init: function () {
    this.el.addEventListener('mouseenter', function (event) {
      var me = document.getElementById(event.target.id);
      console.log(me)
      me.remove();
    });
  }
});
