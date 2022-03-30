const webpack = require('webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    publicPath: 'http://localhost:4201/',
    uniqueName: 'daletshared',
    scriptType: 'text/javascript',
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'daletshared',
      library: { type: 'var', name: 'daletshared' },
      filename: 'remoteEntry.js',
      exposes: {
        DaletHeaderModule: './src/app/components/header/header.module.ts',
      },
      shared: {
        '@angular/core': { singleton: true, eager: true },
        '@angular/common': { singleton: true, eager: true },
        '@angular/router': { singleton: true, eager: true },
        'daletshared': { singleton: true, eager: true }
      },
    }),
  ],
};

