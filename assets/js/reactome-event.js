/**
 * Created by mkoch on 10/04/2017.
 */

try {
  function onReactomeDiagramReady() {
    // window.dispatchEvent(new CustomEvent('onReactomeDiagramReady', {detail: this.Reactome}));

    // var a = document.createElement('a');
    if (navigator.userAgent.indexOf('MSIE') !== -1
      || navigator.appVersion.indexOf('Trident/') > 0) {
      var evt = document.createEvent('onReactomeDiagramReady');
      evt.initEvent({detail: this.Reactome});
      window.dispatchEvent(evt)
    } else {
      window.dispatchEvent(new CustomEvent('onReactomeDiagramReady', {detail: this.Reactome}));
    }
  }
} catch (ignore) {

}

