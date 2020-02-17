const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  startBtn: document.querySelector('button[data-action="start"'),
  stopBtn: document.querySelector('button[data-action="stop"'),
  body: document.querySelector('body'),
};

const changeColor = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.timerId = setInterval(() => {
      refs.body.style.background =
        colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
  },
  stop() {
    clearInterval(this.timerId);
    this.isActive = false;
    clearInterval(this.timerId);
  },
};
refs.startBtn.addEventListener('click', changeColor.start.bind(changeColor));
refs.stopBtn.addEventListener('click', changeColor.stop.bind(changeColor));
