const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

// Get the default Metro configuration from Expo
const config = getDefaultConfig(__dirname);

// Add support for `.ttf` font files
config.resolver.assetExts = config.resolver.assetExts || [];
config.resolver.assetExts.push("ttf");

// Add NativeWind support and specify the global CSS input file
module.exports = withNativeWind(config, {
  input: "./global.css",
});
