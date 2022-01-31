import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

let playerSeconds;
const currentTimeStart = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(currentTimeStart);

player.on(
  'timeupdate',
  throttle(function (data) {
    playerSeconds = data.seconds;
    localStorage.setItem('videoplayer-current-time', playerSeconds);
    console.log(playerSeconds);
  }, 1000),
);
