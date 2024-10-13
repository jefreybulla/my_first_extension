import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ICommandPalette } from '@jupyterlab/apputils'

/**
 * Initialization data for the jupyterlab_apod extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-apod',
  description: 'Show a random NASA Astronomy Picture of the Day in a JupyterLab panel',
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterFrontEnd, palette: ICommandPalette) => {
    console.log('Hello world: JupyterLab extension jupyterlab_apod is activated!')
    console.log('ICommandPalette:', palette)
    console.log('Hi Jef')
    console.log('New console out')
  }
}

export default plugin;
