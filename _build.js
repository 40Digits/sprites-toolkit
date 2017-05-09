// ===============================
// Sprite Toolkit Builder
// ===============================

// -------------------------------
// Imports
// -------------------------------

const sprity = require('sprity');
const notifier = require('node-notifier');
const colors = require('colors');
const config = require('./_config.js');

colors.setTheme(config.colorTheme);

// -------------------------------
// Functions
// -------------------------------

/**
 * Get a prettified error message
 * @param  {[type]} error [description]
 * @return {[type]}       [description]
 */
function getError(error) {
  const errorObj = (typeof error === 'string') ? { message: error } : error;
  let renderedMessage = ' ERROR '.error.errorBg;

  renderedMessage += ` ${colors.errorMessage(errorObj.message)}\n`;

  if (errorObj.file) {
    renderedMessage += `  in ${colors.filename(errorObj.file)}`;
  }

  if (errorObj.line) {
    renderedMessage += `:${colors.filename(errorObj.line)}`;
  }

  if (errorObj.column) {
    renderedMessage += `:${colors.filename(errorObj.column)}`;
  }

  if (errorObj.srcFile) {
    renderedMessage += `\n  from ${colors.filename(errorObj.srcFile)}`;
  }

  renderedMessage += '\n';

  return renderedMessage;
}

/**
 * Notification that Sprity has completed
 * @param  {object} err An optional error if an error occurred
 */
function completeNotification(err) {
  if (!!err) {
    const error = getError(err);

    notifier.notify({
      title: 'Sass Compile Error',
      message: error.message,
    });

    return;
  }

  const prefix = ' SUCCESS '.success.successBg;
  console.log(`${prefix} sprites rendered successfully`);
}

/**
 * Process the Node Arguments
 * @return {object} The Process Arguments
 */
function processArguments() {
  const flags = process.argv;
  const args = {};

  flags.forEach(flag => {
    if (flag.indexOf('=') === -1) {
      return;
    }

    const arg = flag.replace('--', '').split('=');
    args[arg[0]] = arg[1];
  });

  return args;
}

/**
 * Create Sprity object
 *
 * Using the defaults and the arguments from the command line it create an
 * object that can be used with Sprity.
 *
 * @return {object} The Sprity Config Object
 */
function createSprityObject() {
  return Object.assign({}, config.defaults, processArguments());
}

// -------------------------------
// Main Logic Flow
// -------------------------------

sprity.create(createSprityObject(), completeNotification);
