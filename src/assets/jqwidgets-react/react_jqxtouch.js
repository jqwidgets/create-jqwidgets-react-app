/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxTouch = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['orientationChangeEnabled','swipeMin','swipeMax','swipeDelay','tapHoldDelay'];
      let options = {};
    for(let item in this.props) {
        if(item === 'settings') {
          for(let itemTwo in this.props[item]) {
            options[itemTwo] = this.props[item][itemTwo];
              }
          } else {
              if(properties.indexOf(item) !== -1) {
              options[item] = this.props[item];
              }
          }
      }
      return options;
    },
  createComponent : function (options) {
    if(!this.style) {
        for (let style in this.props.style) {
          JQX('#' +this.componentSelector).css(style, this.props.style[style]);
        }
    }
    if(this.props.className !== undefined) {
      let classes = this.props.className.split(' ');
      for (let i = 0; i < classes.length; i++ ) {
        JQX('#' +this.componentSelector).addClass(classes[i]);
      }
    }
    if(!this.template) {
        JQX('#' +this.componentSelector).html(this.props.template);
    }
    JQX('#' +this.componentSelector).jqxTouch(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    JQX('#' +this.componentSelector).jqxTouch('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = JQX('#' +this.componentSelector).jqxTouch(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    JQX('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    JQX('#' +this.componentSelector).off(name);
  },
  orientationChangeEnabled: function (arg) {
    if (arg !== undefined) {
      JQX("#" +this.componentSelector).jqxTouch("orientationChangeEnabled", arg)
    } else {
      return JQX("#" +this.componentSelector).jqxTouch("orientationChangeEnabled");
    }
  },
  swipeMin: function (arg) {
    if (arg !== undefined) {
      JQX("#" +this.componentSelector).jqxTouch("swipeMin", arg)
    } else {
      return JQX("#" +this.componentSelector).jqxTouch("swipeMin");
    }
  },
  swipeMax: function (arg) {
    if (arg !== undefined) {
      JQX("#" +this.componentSelector).jqxTouch("swipeMax", arg)
    } else {
      return JQX("#" +this.componentSelector).jqxTouch("swipeMax");
    }
  },
  swipeDelay: function (arg) {
    if (arg !== undefined) {
      JQX("#" +this.componentSelector).jqxTouch("swipeDelay", arg)
    } else {
      return JQX("#" +this.componentSelector).jqxTouch("swipeDelay");
    }
  },
  tapHoldDelay: function (arg) {
    if (arg !== undefined) {
      JQX("#" +this.componentSelector).jqxTouch("tapHoldDelay", arg)
    } else {
      return JQX("#" +this.componentSelector).jqxTouch("tapHoldDelay");
    }
  },

  render: function () {
    let id = 'jqxTouch' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

window["JqxTouch"] = jqxTouch;

module.exports = jqxTouch;

