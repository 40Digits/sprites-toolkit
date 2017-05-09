// ===============================
// Sprites Config
// ===============================

// -------------------------------
// Options
// -------------------------------

// Default Sprite Options
// https://github.com/sprity/sprity#options
//
// NOTE: Style is determined by the out directory
//
exports.defaults = {
    src: './!(node_modules)/**/*.png',
    out: '../../assets/images/sprites',
    style: '../../../_src/sass/app/_generated/_sprites.scss',
    template: './template.hbs',
    processor: 'sass',
    split: true,
    prefix: 'sprite',
    name: 'sprite',
    margin: 5,
    dimension: [
      {
        ratio: 1,
        dpi: 72,
      }, {
        ratio: 2,
        dpi: 192,
      },
    ],
  };

// Color Options
exports.colorTheme = {
  error: 'white',
  errorBg: 'bgRed',
  success: 'white',
  successBg: 'bgGreen',
  filename: 'cyan',
  errorMessage: 'red',
};

// Receive render errors in Notification Center
exports.errorNotifications = true;
