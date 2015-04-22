'use strict';
var { ToggleButton } = require('sdk/ui/button/toggle');
var clipboard = require('sdk/clipboard');
var panels = require('sdk/panel');
var self = require('sdk/self');
//
var button = ToggleButton({
  id: 'hasher-toggle',
  label: 'Hasher',
  icon: {
    '16':  './images/icon-16.png',
    '32':  './images/icon-32.png',
    '48':  './images/icon-48.png',
    '64':  './images/icon-64.png',
    '128': './images/icon-128.png'
  },
  onChange: handleChange
});

var panel = panels.Panel({
  contentURL: self.data.url('popup.html'),
  width: 700,
  height: 650,
  onHide: handleHide
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
