/**
 * @type public
 * @name screenSizes
 * @description
 *
 * Defines screen sizes
 *
 **/
export const breakpoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
};

/**
 * @type public
 * @name unsetTabIndex
 * @requires jQuery
 * @description
 *
 * Remove tabindex from element
 *
 * @param {Element}
 * @return {Void}
 *
 **/
export function unsetTabIndex(element) {
  $(element).attr('tabindex', '');
}

/**
 * @type public
 * @name setTabIndex
 * @requires jQuery
 * @description
 *
 * Set tabindex on element
 *
 * @param {Element}
 * @param {Number}
 * @return {Void}
 *
 **/
export function setTabIndex(element, index) {
  $(element).attr('tabindex', index);
}

/**
 * @type public
 * @name getPageType
 * @description
 *
 * Checks body class for page type
 *
 * @return {String} page type
 *
 **/
export function getPageType() {
  const prefix = 'fire-page-type--';
  const bodyClasses = Array.from(document.body.classList);
  const [type] = bodyClasses.filter((item) => item.includes(prefix));
  const cleanType = type.replace(prefix, '');
  return cleanType;
}

/**
 * @type public
 * @name lockBody
 * @requires jQuery
 * @description
 *
 * Locks/unlocks body element where it currently is
 *
 * @param {Boolean}
 * @return {Void}
 *
 **/
export function lockBody(lock) {
  const $body = $('body');
  const $document = $(document);
  let pageOffset = 0;

  if (lock === true) {
    pageOffset = $document.scrollTop();
    $body.css({ overflow: 'hidden' });
  } else if (lock === false) {
    $body.css({ overflow: '' });
    $document.scrollTop(pageOffset);
  }
}

/**
 * @type public
 * @name capitalizeFirstLetter
 * @description
 *
 * Captilizes the first letter of a string
 *
 * @param {Boolean}
 * @return {Void}
 *
 **/
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * @type public
 * @name clearFragment
 * @description
 *
 * Removes everything after and including # from URL
 *
 * @return {Void}
 *
 **/
export function clearFragment() {
  history.pushState('', document.title, window.location.pathname + window.location.search);
}