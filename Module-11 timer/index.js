function CountdownTimer(selector, targetDate) {
  this.selector = selector;
  this.targetDate = targetDate;
  const refs = {
    timer: document.querySelector('selector'),
    days: document.querySelector('span[data-value="days"'),
    hours: document.querySelector('span[data-value="hours"'),
    mins: document.querySelector('span[data-value="mins"'),
    secs: document.querySelector('span[data-value="secs"'),
  };

  function start() {
    this.timerId = setInterval(() => {
      const currentTime = Date.now();
      this.time = targetDate - currentTime;
      updateClockface(this.time);
    }, 1000);
  }
  function updateClockface(time) {
    const daysValue = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hoursValue = pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const minsValue = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secsValue = pad(Math.floor((time % (1000 * 60)) / 1000));

    updateTextContent(refs.days, daysValue);
    updateTextContent(refs.hours, hoursValue);
    updateTextContent(refs.mins, minsValue);
    updateTextContent(refs.secs, secsValue);
  }
  function updateTextContent(elem, value) {
    elem.textContent = `${value}`;
  }
  function pad(value) {
    return String(value).padStart(2, '0');
  }
  start();
}

const timer1 = new CountdownTimer('#timer-1', new Date('Jul 17, 2020'));
