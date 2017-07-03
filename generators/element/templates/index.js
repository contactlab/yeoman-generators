'use strict';
<% if (npmWrapper) { %>
import {Polymer} from 'polymer-npm-wrapper';
<% } %>
<% if (wcloader) { %>
import './template.html';
<% } %>

class <%= elementNameCamel %> {

  /**
  * Behaviors required by the component
  */
  get behaviors() {
    return [];
  }

  /**
  * Component name, propertiers, behaviors and declared listeners
  */
  beforeRegister(){
    this.is = '<%= elementName %>';
    this.properties = {

    }
  }

  /**
  * When the component is attached into the DOM.
  *
  * @return {null}
  */
  attached(){

  }

}

Polymer(<%= elementNameCamel %>);