import * as $ from 'jquery';

function createAnalytics(): object {
  let counter: number = 0;
  let isDestroyed: boolean = false;

  const listener = (): number => counter++;

  $(document).on('click', listener);

  return {
    destroy() {
      $(document).off('click', listener);
      isDestroyed = true;
    },

    getClicks() {
      if (isDestroyed) return `analytics is destroyed.. clicks = ${counter}`;
      return counter;
    }
  }
}

window['analytics'] = createAnalytics();