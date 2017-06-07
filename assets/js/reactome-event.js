/**
 * Created by mkoch on 10/04/2017.
 */

try {
  function onReactomeDiagramReady() {
    // window.dispatchEvent(new CustomEvent('onReactomeDiagramReady', {detail: this.Reactome}));

    // var a = document.createElement('a');
    if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
      event = document.createEventObject();
      event.eventType = "onReactomeDiagramReady";
      form.fireEvent("onReactomeDiagramReady", {detail: this.Reactome});
    } else {
      window.dispatchEvent(new CustomEvent('onReactomeDiagramReady', {detail: this.Reactome}));
    }
  }
} catch (ignore) {

}

