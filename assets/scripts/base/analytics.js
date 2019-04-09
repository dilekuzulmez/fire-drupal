// Note: Google Analytics should be initiated using a Drupal module

/**
 * @type function
 * @name trigger
 * @description
 *
 * Trigger a GA event
 *
 **/
export const trigger = function(event) {
  if (typeof window.dataLayer === 'undefined') return;
  dataLayer.push(event);
};
