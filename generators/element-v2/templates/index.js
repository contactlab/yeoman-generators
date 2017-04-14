'use strict';

class <%= elementNameCamel %> extends Polymer.Element {
  /**
  * Component name definition
  */
  static get is() { return '<%= elementName %>' }
  
  /**
  * Component delcared propertiers
  */
  static get properties() {
    return {

    }
  }

  /**
  * When the component is attached into the DOM.
  *
  * @return {null}
  */
  connectedCallback(){
    super.connectedCallback();
  }

}

/**
* Registering the new component tag
*/
customElements.define(<%= elementNameCamel %>.is, <%= elementNameCamel %>);