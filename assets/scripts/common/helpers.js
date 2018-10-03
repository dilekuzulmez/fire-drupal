import $ from 'jquery';

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

  $body.attr('data-fire-lock-body', lock);
}

/**
 * @type public
 * @name lockBodyToggle
 * @requires jQuery
 * @description
 *
 * Toggles the body lock
 *
 * @return {Void}
 *
 **/
export function lockBodyToggle() {
  const status = $('body').attr('data-fire-lock-body');

  if (status === undefined || status === 'false') {
    lockBody(true);
  } else {
    lockBody(false);
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

/**
 * @type public
 * @name shuffle
 * @description
 *
 * Fisher-Yates (aka Knuth) Shuffle.
 *
 * @param {Array} array
 * @return {Array}
 *
 **/
export function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

/**
 * @type public
 * @name generateUniqueId
 * @description
 *
 * Generates a unique string
 *
 * @param {Array} array
 * @return {Array}
 *
 **/
export function generateUniqueId() {
  return shuffle(btoa(Math.random()).toLowerCase().replace(/=/, '').split('')).join('')
}
