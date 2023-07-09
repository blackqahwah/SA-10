import { Vue, extend, isVue3 } from '../../vue';
import { NAME_TRANSPORTER, NAME_TRANSPORTER_TARGET } from '../../constants/components';
import { IS_BROWSER } from '../../constants/env';
import { PROP_TYPE_ARRAY_FUNCTION, PROP_TYPE_BOOLEAN, PROP_TYPE_STRING } from '../../constants/props';
import { HTMLElement } from '../../constants/safe-types';
import { concat } from '../../utils/array';
import { removeNode, select } from '../../utils/dom';
import { identity } from '../../utils/identity';
import { isFunction, isString } from '../../utils/inspect';
import { normalizeSlotMixin } from '../../mixins/normalize-slot';
import { makeProp } from '../../utils/props';
import { createNewChildComponent } from '../../utils/create-new-child-component'; // --- Helper components ---
// BVTransporter/BVTransporterTarget:
//
// Single root node portaling of content, which retains parent/child hierarchy
// Unlike Portal-Vue where portaled content is no longer a descendent of its
// intended parent components
//
// Private components for use by Tooltips, Popovers and Modals
//
// Based on vue-simple-portal
// https://github.com/LinusBorg/vue-simple-portal
// Transporter target used by BVTransporter
// Supports only a single root element
// @vue/component

var BVTransporterTarget = /*#__PURE__*/extend({
  // As an abstract component, it doesn't appear in the $parent chain of
  // components, which means the next parent of any component rendered inside
  // of this one will be the parent from which is was portal'd
  abstract: true,
  name: NAME_TRANSPORTER_TARGET,
  props: {
    // Even though we only support a single root element,
    // VNodes are always passed as an array
    nodes: makeProp(PROP_TYPE_ARRAY_FUNCTION)
  },
  data: function data(vm) {
    return {
      updatedNodes: vm.nodes
    };
  },
  destroyed: function destroyed() {
    removeNode(this.$el);
  },
  render: function render(h) {
    var updatedNodes = this.updatedNodes;
    var $nodes = isFunction(updatedNodes) ? updatedNodes({}) : updatedNodes;
    $nodes = concat($nodes).filter(identity);

    if ($nodes && $nodes.length > 0 && !$nodes[0].text) {
      return $nodes[0];
    }
    /* istanbul ignore next */


    return h();
  }
}); // --- Props ---

export var props = {
  // String: CSS selector,
  // HTMLElement: Element reference
  // Mainly needed for tooltips/popovers inside modals
  container: makeProp([HTMLElement, PROP_TYPE_STRING], 'body'),
  disabled: makeProp(PROP_TYPE_BOOLEAN, false),
  // This should be set to match the root element type
  tag: makeProp(PROP_TYPE_STRING, 'div')
}; // --- Main component ---
// @vue/component

var BVTransporterVue2 = /*#__PURE__*/extend({
  name: NAME_TRANSPORTER,
  mixins: [normalizeSlotMixin],
  props: props,
  watch: {
    disabled: {
      immediate: true,
      handler: function handler(disabled) {
        disabled ? this.unmountTarget() : this.$nextTick(this.mountTarget);
      }
    }
  },
  created: function created() {
    // Create private non-reactive props
    this.$_defaultFn = null;
    this.$_target = null;
  },
  beforeMount: function beforeMount() {
    this.mountTarget();
  },
  updated: function updated() {
    // We need to make sure that all children have completed updating
    // before rendering in the target
    // `vue-simple-portal` has the this in a `$nextTick()`,
    // while `portal-vue` doesn't
    // Just trying to see if the `$nextTick()` delay is required or not
    // Since all slots in Vue 2.6.x are always functions
    this.updateTarget();
  },
  beforeDestroy: function beforeDestroy() {
    this.unmountTarget();
    this.$_defaultFn = null;
  },
  methods: {
    // Get the element which the target should be appended to
    getContainer: function getContainer() {
      /* istanbul ignore else */
      if (IS_BROWSER) {
        var container = this.container;
        return isString(container) ? select(container) : container;
      } else {
        return null;
      }
    },
    // Mount the target
    mountTarget: function mountTarget() {
      if (!this.$_target) {
        var $container = this.getContainer();

        if ($container) {
          var $el = document.createElement('div');
          $container.appendChild($el);
          this.$_target = createNewChildComponent(this, BVTransporterTarget, {
            el: $el,
            propsData: {
              // Initial nodes to be rendered
              nodes: concat(this.normalizeSlot())
            }
          });
        }
      }
    },
    // Update the content of the target
    updateTarget: function updateTarget() {
      if (IS_BROWSER && this.$_target) {
        var defaultFn = this.$scopedSlots.default;

        if (!this.disabled) {
          /* istanbul ignore else: only applicable in Vue 2.5.x */
          if (defaultFn && this.$_defaultFn !== defaultFn) {
            // We only update the target component if the scoped slot
            // function is a fresh one. The new slot syntax (since Vue 2.6)
            // can cache unchanged slot functions and we want to respect that here
            this.$_target.updatedNodes = defaultFn;
          } else if (!defaultFn) {
            // We also need to be back compatible with non-scoped default slot (i.e. 2.5.x)
            this.$_target.updatedNodes = this.$slots.default;
          }
        } // Update the scoped slot function cache


        this.$_defaultFn = defaultFn;
      }
    },
    // Unmount the target
    unmountTarget: function unmountTarget() {
      this.$_target && this.$_target.$destroy();
      this.$_target = null;
    }
  },
  render: function render(h) {
    // This component has no root element, so only a single VNode is allowed
    if (this.disabled) {
      var $nodes = concat(this.normalizeSlot()).filter(identity);

      if ($nodes.length > 0 && !$nodes[0].text) {
        return $nodes[0];
      }
    }

    return h();
  }
});
var BVTransporterVue3 = /*#__PURE__*/extend({
  name: NAME_TRANSPORTER,
  mixins: [normalizeSlotMixin],
  props: props,
  render: function render(h) {
    if (this.disabled) {
      var $nodes = concat(this.normalizeSlot()).filter(identity);

      if ($nodes.length > 0) {
        return $nodes[0];
      }
    }

    return h(Vue.Teleport, {
      to: this.container
    }, this.normalizeSlot());
  }
});
export var BVTransporter = isVue3 ? BVTransporterVue3 : BVTransporterVue2;