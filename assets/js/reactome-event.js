/**
 * Created by mkoch on 10/04/2017.
 */

try {
  function onReactomeDiagramReady() {
    // window.dispatchEvent(new CustomEvent('onReactomeDiagramReady', {detail: this.Reactome}));

    // var a = document.createElement('a');
    if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
      var event = document.createEvent("CustomEvent");
      event.initCustomEvent('myCustomEvent', true, true,
        { 'param1': 1, 'param2': 2 });

      document.dispatchEvent(event);
    } else {
      window.dispatchEvent(new CustomEvent('onReactomeDiagramReady', {detail: this.Reactome}));
    }
  }
} catch (ignore) {

}

