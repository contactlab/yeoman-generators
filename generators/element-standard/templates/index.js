'use strict';

class <%= elementNameCamel %> extends HTMLElement {

  /**
  * Element initialization
  *
  * @return {null}
  */
  constructor(){
    super();
    this.SD = this.attachShadow({ mode: 'open' });
  }

  /**
  * When the component is attached into the DOM.
  *
  * @return {null}
  */
  connectedCallback(){
    console.log('<<%= elementName %>> added to the DOM');
  }

}

customElements.define('<%= elementName %>', <%= elementNameCamel %>);