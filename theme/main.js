import $ from 'jquery';
import '@component/polyfills';
import 'alpinejs/dist/alpine-ie11';
import balanceText from 'balance-text';
import { FireLazyLoader, FireDetect, FireComponentRecord } from '@component';
import { moveBootstrapModalsToBody, iOSFixDoubleTap, ignoreContext } from '@utility';

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
  moveBootstrapModalsToBody();

  if (detect.touch && (detect.platform === 'iPhone' || detect.platform === 'iPad')) {
    iOSFixDoubleTap();
  }

  balanceText();

  // display page
  $('body').removeClass('opacity-0');

  // global Drupal behaviors
  Drupal.behaviors.fireGlobal = {
    attach: (context, settings) => {
      if (ignoreContext(context, ['.toolbar-menu', '.status-messages'])) return;
      componentRecord.registerAllComponents(true);
      lazyLoader.observer.observe();
    },
  };
};

// fire all scripts
$(document).ready(onPageReady);
