import $ from 'jquery';

import { FireHelpers } from '@common';
import { SiteHeader } from '@include/site-header/site-header';

/**
 * @type class
 * @name FireComponentRecord
 * @description
 *
 * Component record class
 *
 **/
export class FireComponentRecord {
  registerAll() {
    // loop through all components on the page
    $('[data-fire-component]').each((index, component) => {
      // get name of component
      const name = $(component).data('fire-component');

      // generate a unique ID
      const id = FireHelpers.generateUniqueId();

      // mark as registered
      $(component).attr('data-registered', id);

      // register correct component
      switch (name) {
        case 'site-header':
          new SiteHeader(id).init();
          break;

        default:
          break;
      }
    });
  }
}
