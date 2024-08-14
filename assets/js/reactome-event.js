/**
 * Created by mkoch on 10/04/2017.
 */

try {
  function onReactomeDiagramReady() {
    window.dispatchEvent(new CustomEvent('onReactomeDiagramReady', {detail: this.Reactome}));
  }
} catch (ignore) {

}

