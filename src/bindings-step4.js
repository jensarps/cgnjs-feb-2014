define(function () {

  var KEYBOARD = 'keyboard',
      MOUSE = 'mouse',
      GAMEPAD = 'gamepad';

  var bindings = {

    forward: [
      {
        device: KEYBOARD,
        inputId: 'w',
        down: true,
        up: true
      },
      {
        device: GAMEPAD,
        inputId: 'button-3', // 'Y'
        down: true,
        up: true
      }
    ],

    backward: [
      {
        device: KEYBOARD,
        inputId: 's',
        down: true,
        up: true
      },
      {
        device: GAMEPAD,
        inputId: 'button-0', // 'A'
        down: true,
        up: true
      }
    ],

    strafeLeft: [
      {
        device: GAMEPAD,
        inputId: 'button-2',
        down: true,
        up: true
      },
      {
        device: KEYBOARD,
        inputId: 'a',
        down: true,
        up: true
      }
    ],

    strafeRight: [
      {
        device: GAMEPAD,
        inputId: 'button-1',
        down: true,
        up: true
      },
      {
        device: KEYBOARD,
        inputId: 'd',
        down: true,
        up: true
      }
    ],

    turn: [
      {
        device: MOUSE,
        inputId: 'x'
      },
      {
        device: GAMEPAD,
        inputId: 'axis-0',
        invert: true
      }
    ],

    pause: {
      device: KEYBOARD,
      inputId: 'p',
      down: true,
      up: true
    }
  };

  return bindings;
});
