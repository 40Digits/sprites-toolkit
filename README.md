# Sprite Toolkit

The sprite toolkit generates image sprites.

## Overview

The toolkit creates a sprite image for each any subfolder (excluding node_modules) with the PNG images found in it.

## Advanced

The sprite system uses `sprity` to generate the sprites. By default, the `_build.js` file uses the `_config.js` defaults. These options can be overwritten by sending in command line arguments.

For example to override the prefix a command line argument could be sent from NPM scripts:
` -- --prefix="image-sprite"`

For More Info on what options can be passed in: https://github.com/sprity/sprity#options
