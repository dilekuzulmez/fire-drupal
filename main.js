import $ from 'jquery';
import '@base/polyfills';
import { FireDetect, FireComponentRecord, FireLazyLoader, FireHelpers } from '@base';

const detect = new FireDetect();
const componentRecord = new FireComponentRecord();
const lazyLoader = new FireLazyLoader();

/**
 * @type function
 * @name onPageReady
 * @description
 *
 * Initialize scripts when page is ready
 *
 **/
const onPageReady = () => {
  detect.setHtmlClasses();
  detect.detectTrueViewHeight();
  lazyLoader.init();
  lazyLoader.observer.observe();
  componentRecord.registerAllComponents();

  if (detect.touch && (detect.platform === 'iPhone' || detect.platform === 'iPad')) {
    FireHelpers.iOSFixDoubleTap();
  }

  // display page
  $('body').addClass('has-loaded');

  // global Drupal behaviors
  Drupal.behaviors.fireGlobal = {
    attach: (context, settings) => {
      componentRecord.registerAllComponents(true);
      lazyLoader.observer.observe();
    },
  };
};

// fire all scripts
$(document).ready(onPageReady);
