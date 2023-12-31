var _objectSpread2;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { extend } from '../../vue';
import { NAME_FORM_CHECKBOX_GROUP } from '../../constants/components';
import { PROP_TYPE_ARRAY, PROP_TYPE_BOOLEAN } from '../../constants/props';
import { sortKeys } from '../../utils/object';
import { makeProp, makePropsConfigurable } from '../../utils/props';
import { MODEL_PROP_NAME, formRadioCheckGroupMixin, props as formRadioCheckGroupProps } from '../../mixins/form-radio-check-group'; // --- Props ---

export var props = makePropsConfigurable(sortKeys(_objectSpread(_objectSpread({}, formRadioCheckGroupProps), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, MODEL_PROP_NAME, makeProp(PROP_TYPE_ARRAY, [])), _defineProperty(_objectSpread2, "switches", makeProp(PROP_TYPE_BOOLEAN, false)), _objectSpread2))), NAME_FORM_CHECKBOX_GROUP); // --- Main component ---
// @vue/component

export var BFormCheckboxGroup = /*#__PURE__*/extend({
  name: NAME_FORM_CHECKBOX_GROUP,
  // Includes render function
  mixins: [formRadioCheckGroupMixin],
  provide: function provide() {
    var _this = this;

    return {
      getBvCheckGroup: function getBvCheckGroup() {
        return _this;
      }
    };
  },
  props: props,
  computed: {
    isRadioGroup: function isRadioGroup() {
      return false;
    }
  }
});