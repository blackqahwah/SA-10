import { extend } from '../../vue';
import { NAME_TH } from '../../constants/components';
import { makePropsConfigurable } from '../../utils/props';
import { BTd, props as BTdProps } from './td'; // --- Props ---

export var props = makePropsConfigurable(BTdProps, NAME_TH); // --- Main component ---
// TODO:
//   In Bootstrap v5, we won't need "sniffing" as table element variants properly inherit
//   to the child elements, so this can be converted to a functional component
// @vue/component

export var BTh = /*#__PURE__*/extend({
  name: NAME_TH,
  extends: BTd,
  props: props,
  computed: {
    tag: function tag() {
      return 'th';
    }
  }
});