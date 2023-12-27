const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();

  // Füge 'svg' zur Liste der unterstützten Dateierweiterungen hinzu
  const updatedSourceExts = [...sourceExts, 'svg'];

  // Füge 'db' zur Liste der unterstützten Dateierweiterungen hinzu
  const updatedAssetExts = [...assetExts, 'db'];

  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: updatedAssetExts,
      sourceExts: updatedSourceExts,
    },
  };
})();
