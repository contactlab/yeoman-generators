'use strict';

const <%= elementNameCamel %> = Object.create(HTMLElement.prototype, {
  
  /**
  * When the component is attached into the DOM.
  *
  * @return {null}
  */
  attachedCallback: {
    value: function() {
      console.log('<<%= elementName %>> added to the DOM');
    }
  }

});

/**
  * Element registration
  */
document.registerElement('<%= elementName %>', {prototype: <%= elementNameCamel %>});