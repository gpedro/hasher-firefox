'use strict';

var { ToggleButton } = require('sdk/ui/button/toggle');
var clipboard        = require('sdk/clipboard');
var panels           = require('sdk/panel');
var tabs             = require('sdk/tabs');
var self             = require('sdk/self');
var worker           = require('sdk/content/worker');

var scripts = [self.data.url('lib/vendor.min.js'), self.data.url('hasher.js'), self.data.url('popup.js')];

var button = ToggleButton({
  id: 'hasher-toggle',
  label: 'Hasher',
  icon: {
    '16'  : './images/icon-16.png',
    '32'  : './images/icon-32.png',
    '48'  : './images/icon-48.png',
    '64'  : './images/icon-64.png',
    '128' : './images/icon-128.png'
  },
  onChange: handleChange
});

var panel = panels.Panel({
  contentURL: self.data.url('popup.html'),
  width: 700,
  height: 650,
  onHide: handleHide,
  contentScriptFile: scripts
});

function handleChange(state) {
  if (state.checked) {
    panel.show({
      position: button
    });
  }
}

function handleHide() {
  button.state('window', {checked: false});
}

panel.port.on('sendToClip', function (message) {
  clipboard.set(message);
});

panel.port.on('openTab', function (link) {
    panel.hide();
    tabs.open(link);
});
