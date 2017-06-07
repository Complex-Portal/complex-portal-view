/**
 * Created by mkoch on 10/04/2017.
 */

try {
  function onReactomeDiagramReady() {
    // window.dispatchEvent(new CustomEvent('onReactomeDiagramReady', {detail: this.Reactome}));
    console.log(this.Reactome);
    // var a = document.createElement('a');
    if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
      var event = document.createEvent("CustomEvent");
      event.initCustomEvent('onReactomeDiagramReady', true, true,
        {detail: this.Reactome});
      document.dispatchEvent(event);
    } else {
      window.dispatchEvent(new CustomEvent('onReactomeDiagramReady', {detail: this.Reactome}));
    }
  }
} catch (ignore) {

}

