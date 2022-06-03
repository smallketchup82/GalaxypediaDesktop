var nativefier = require('nativefier').default;

// possible options, defaults unless specified otherwise
var options = {
  name: 'Galaxypedia', // will be inferred if not specified
  targetUrl: 'https://robloxgalaxy.wiki', // required
  platform: 'linux', // defaults to the current system
  arch: 'x64',
  out: '.',
  overwrite: false,
};

nativefier(options, function (error, appPath) {
  if (error) {
    console.error(error);
    return;
  }
  console.log('GalaxypediaDesktop Linux has been nativefied to', appPath);
});
