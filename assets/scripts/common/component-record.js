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
  // register correct component
  _registerComponent(component, name, id) {
    // mark as registered
    $(component).attr('data-registered', id);

    switch (name) {
      case 'site-header':
        new SiteHeader(id).init();
        break;
      default:
        break;
    }
  }

  registerAllComponents() {
    // loop through all components on the page
    $('[data-fire-component]').each((index, component) => {
      // get name of component
      let names = $(component).data('fire-component');
      names = names.split(', ');

      // generate a unique ID
      const id = FireHelpers.generateUniqueId();

      for (const name of names) {
        this._registerComponent(component, name, id);
      }
    });
  }
}
