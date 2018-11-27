// dependencies
import $ from 'jquery';

/**
 * @type class
 * @name FireComponent
 * @description
 *
 * Component class
 *
 * @param {String} key - a unique identifier for the component
 *
 **/
export class FireComponent {
  constructor(id) {
    // grab component HTML element and assign to a variable,
    // this is now usable anywhere this Class is extended
    this.$component = $(`[data-registered="${id}"]`);

    // helper variable to check if the component exists
    this.componentExists = this.$component.length !== 0;
  }
}
