console.log("Linux support has been discontinued since version 0.1, if you are building it yourself be weary of errors.\nTo cancel, terminate the script within the next 5 seconds")
setTimeout(() => {
  console.log("Building Galaxypedia Desktop App for Linux...")
  var nativefier = require('nativefier').default;

  var options = {
    name: 'Galaxypedia',
    targetUrl: 'https://robloxgalaxy.wiki',
    platform: 'linux',
    arch: 'x64',
    out: '.',
  };

  nativefier(options, function (error, appPath) {
    if (error) {
      console.error(error);
      return;
    }
    console.log('GalaxypediaDesktop Linux has been nativefied to', appPath);
  });

}, 5000);