import { extend } from '../../vue';
import { NAME_FORM_RADIO } from '../../constants/components';
import { makePropsConfigurable } from '../../utils/props';
import { formRadioCheckMixin, props as formRadioCheckProps } from '../../mixins/form-radio-check'; // --- Props ---

export var props = makePropsConfigurable(formRadioCheckProps, NAME_FORM_RADIO); // --- Main component ---
// @vue/component

export var BFormRadio = /*#__PURE__*/extend({
  name: NAME_FORM_RADIO,
  mixins: [formRadioCheckMixin],
  inject: {
    getBvGroup: {
      from: 'getBvRadioGroup',
      default: function _default() {
        return function () {
          return null;
        };
      }
    }
  },
  props: props,
  computed: {
    bvGroup: function bvGroup() {
      return this.getBvGroup();
    }
  }
});