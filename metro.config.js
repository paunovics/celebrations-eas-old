const { getDefaultConfig } = require('@expo/metro-config');
const exclusionList = require('metro-config/src/defaults/exclusionList');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.blacklistRE = exclusionList([/web\/.*/, /admin\/.*/]);
defaultConfig.transformer.minifierConfig.compress.drop_console = true;
defaultConfig.resolver.sourceExts = ['jsx', 'js', 'json', 'ts', 'tsx', 'mjs'];
defaultConfig.resolver.assetExts.push("cjs");

module.exports = defaultConfig;