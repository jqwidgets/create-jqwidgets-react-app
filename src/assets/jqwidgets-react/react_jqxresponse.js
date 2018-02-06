/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxResponse = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['browser','device','document','destroyProperty','resize','os'];
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
    JQX('#' +this.componentSelector).jqxResponse(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    JQX('#' +this.componentSelector).jqxResponse('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = JQX('#' +this.componentSelector).jqxResponse(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    JQX('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    JQX('#' +this.componentSelector).off(name);
  },
  browser: function (arg) {
    if (arg !== undefined) {
      JQX("#" +this.componentSelector).jqxResponse("browser", arg)
    } else {
      return JQX("#" +this.componentSelector).jqxResponse("browser");
    }
  },
  device: function (arg) {
    if (arg !== undefined) {
      JQX("#" +this.componentSelector).jqxResponse("device", arg)
    } else {
      return JQX("#" +this.componentSelector).jqxResponse("device");
    }
  },
  document: function (arg) {
    if (arg !== undefined) {
      JQX("#" +this.componentSelector).jqxResponse("document", arg)
    } else {
      return JQX("#" +this.componentSelector).jqxResponse("document");
    }
  },
  destroyProperty: function (arg) {
    if (arg !== undefined) {
      JQX("#" +this.componentSelector).jqxResponse("destroyProperty", arg)
    } else {
      return JQX("#" +this.componentSelector).jqxResponse("destroyProperty");
    }
  },
  resize: function (arg) {
    if (arg !== undefined) {
      JQX("#" +this.componentSelector).jqxResponse("resize", arg)
    } else {
      return JQX("#" +this.componentSelector).jqxResponse("resize");
    }
  },
  os: function (arg) {
    if (arg !== undefined) {
      JQX("#" +this.componentSelector).jqxResponse("os", arg)
    } else {
      return JQX("#" +this.componentSelector).jqxResponse("os");
    }
  },
  refresh: function () {
    JQX("#" +this.componentSelector).jqxResponse("refresh");  
  },
  responsive: function (container, colWidths, colOffsets, colClass, deviceTypes, margin, padding, breakpoints) {
    JQX("#" +this.componentSelector).jqxResponse("responsive", container, colWidths, colOffsets, colClass, deviceTypes, margin, padding, breakpoints);  
  },
  isHidden: function (element) {
    return JQX("#" +this.componentSelector).jqxResponse("isHidden", element);  
  },
  inViewPort: function (element) {
    return JQX("#" +this.componentSelector).jqxResponse("inViewPort", element);  
  },
  pointerDown: function (element, callback) {
    JQX("#" +this.componentSelector).jqxResponse("pointerDown", element, callback);  
  },
  pointerMove: function (element, callback) {
    JQX("#" +this.componentSelector).jqxResponse("pointerMove", element, callback);  
  },
  pointerUp: function (element, callback) {
    JQX("#" +this.componentSelector).jqxResponse("pointerUp", element, callback);  
  },
  scroll: function () {
    return JQX("#" +this.componentSelector).jqxResponse("scroll");  
  },
  viewPort: function () {
    return JQX("#" +this.componentSelector).jqxResponse("viewPort");  
  },
  render: function () {
    let id = 'jqxResponse' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

window["JqxResponse"] = jqxResponse;

module.exports = jqxResponse;

