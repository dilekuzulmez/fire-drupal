import $ from 'jquery';
import '@base/polyfills';
import 'alpinejs';
import balanceText from 'balance-text';
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
  FireHelpers.moveBootstrapModalsToBody();

  if (detect.touch && (detect.platform === 'iPhone' || detect.platform === 'iPad')) {
    FireHelpers.iOSFixDoubleTap();
  }

  balanceText();

  // display page
  $('body').removeClass('opacity-0');

  // global Drupal behaviors
  Drupal.behaviors.fireGlobal = {
    attach: (context, settings) => {
      if (FireHelpers.ignoreContext(context, ['.toolbar-menu', '.status-messages'])) return;
      componentRecord.registerAllComponents(true);
      lazyLoader.observer.observe();
    },
  };
};

// fire all scripts
$(document).ready(onPageReady);
