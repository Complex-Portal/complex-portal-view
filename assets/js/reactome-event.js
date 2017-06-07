/**
 * Created by mkoch on 10/04/2017.
 */

try {
  function onReactomeDiagramReady() {
    if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
      var event = document.createEvent("CustomEvent");
      event.initCustomEvent('onReactomeDiagramReadyIE', true, true, {});
        // {detail: this.Reactome});
      document.dispatchEvent(event);
    } else {
      window.dispatchEvent(new CustomEvent('onReactomeDiagramReady', {detail: this.Reactome}));
    }
  }
} catch (ignore) {

}

