import { extend } from '../../../vue';
import { PROP_TYPE_NUMBER_STRING } from '../../../constants/props';
import { mathMax } from '../../../utils/math';
import { toInteger } from '../../../utils/number';
import { makeProp } from '../../../utils/props';
import { safeVueInstance } from '../../../utils/safe-vue-instance'; // --- Props ---

export var props = {
  currentPage: makeProp(PROP_TYPE_NUMBER_STRING, 1),
  perPage: makeProp(PROP_TYPE_NUMBER_STRING, 0)
}; // --- Mixin ---
// @vue/component

export var paginationMixin = extend({
  props: props,
  computed: {
    localPaging: function localPaging() {
      return this.hasProvider ? !!this.noProviderPaging : true;
    },
    paginatedItems: function paginatedItems() {
      var _safeVueInstance = safeVueInstance(this),
          sortedItems = _safeVueInstance.sortedItems,
          filteredItems = _safeVueInstance.filteredItems,
          localItems = _safeVueInstance.localItems;

      var items = sortedItems || filteredItems || localItems || [];
      var currentPage = mathMax(toInteger(this.currentPage, 1), 1);
      var perPage = mathMax(toInteger(this.perPage, 0), 0); // Apply local pagination

      if (this.localPaging && perPage) {
        // Grab the current page of data (which may be past filtered items limit)
        items = items.slice((currentPage - 1) * perPage, currentPage * perPage);
      } // Return the items to display in the table


      return items;
    }
  }
});