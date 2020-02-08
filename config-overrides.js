const { useBabelRc, override } = require('customize-cra');

/*
  Used to allow babel plug-ins without having to eject create-react-app
 */

module.exports = override(useBabelRc());
