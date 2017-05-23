'use strict';

/* Endpoints configuration imports here */

// Backend data fetching configuration
import Backend from './../libs/backend';

export default {
  getData: () => {
    // return '';
    return Backend(ACServices('DEV'),'/data');
  }
}