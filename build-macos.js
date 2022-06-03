var nativefier = require('nativefier').default;

// possible options, defaults unless specified otherwise
var options = {
  name: 'Galaxypedia', // will be inferred if not specified
  targetUrl: 'https://robloxgalaxy.wiki', // required
  platform: 'darwin', // defaults to the current system
  out: '.',
  overwrite: true,
  fastQuit: true,
};

nativefier(options, function (error, appPath) {
  if (error) {
    console.error(error);
    return;
  }
  console.log('Galaxypedia has been nativefied to', appPath);
});
