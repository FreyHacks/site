import splitbee from '@splitbee/web';

const trackEvent = (event, details) => splitbee.track(event, details);

export { trackEvent }