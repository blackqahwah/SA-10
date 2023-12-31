function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { extend, mergeData } from '../../vue';
import { omit } from '../../utils/object';
import { kebabCase, pascalCase, trim } from '../../utils/string';
import { BVIconBase, props as BVIconBaseProps } from './icon-base';
var iconProps = omit(BVIconBaseProps, ['content']);
/**
 * Icon component generator function
 *
 * @param {string} icon name (minus the leading `BIcon`)
 * @param {string} raw `innerHTML` for SVG
 * @return {VueComponent}
 */

export var makeIcon = function makeIcon(name, content) {
  // For performance reason we pre-compute some values, so that
  // they are not computed on each render of the icon component
  var kebabName = kebabCase(name);
  var iconName = "BIcon".concat(pascalCase(name));
  var iconNameClass = "bi-".concat(kebabName);
  var iconTitle = kebabName.replace(/-/g, ' ');
  var svgContent = trim(content || '');
  return /*#__PURE__*/extend({
    name: iconName,
    functional: true,
    props: iconProps,
    render: function render(h, _ref) {
      var data = _ref.data,
          props = _ref.props;
      return h(BVIconBase, mergeData( // Defaults
      {
        props: {
          title: iconTitle
        },
        attrs: {
          'aria-label': iconTitle
        }
      }, // User data
      data, // Required data
      {
        staticClass: iconNameClass,
        props: _objectSpread(_objectSpread({}, props), {}, {
          content: svgContent
        })
      }));
    }
  });
};