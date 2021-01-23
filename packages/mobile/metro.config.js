const path = require('path');
const watchFolders = [
  //Relative path to packages directory
  path.resolve(__dirname + '/..') 
];

module.exports = {
  transformer: {
    assetPlugins: ['expo-asset/tools/hashAssetFiles'],
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  watchFolders
};