// dependencies
import $ from 'jquery';

// polyfills
import '@common/polyfills';

// global
import { FireGlobal } from '@global';

// includes
import { SiteHeader } from '@include/site-header/site-header';

/**
 * @type function
 * @name onPageReady
 * @description
 *
 * Initialize scripts when page is ready
 * 
 **/
const onPageReady = () => {
  // init global scripts
  const global = new FireGlobal();
  global.init();

  // init include scripts
  const siteHeader = new SiteHeader();
  siteHeader.init();
};

// fire all scripts
$(document).ready(onPageReady);
