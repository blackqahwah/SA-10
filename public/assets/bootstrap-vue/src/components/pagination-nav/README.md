# Pagination Nav

> Quick first, previous, next, last, and page buttons for navigation based pagination, supporting
> regular links or router links.

## Overview

`<b-pagination-nav>` is a custom input component that provides navigational pagination. The total
number of pages set with the `number-of-pages` prop. Page numbers are indexed from 1 through
`number-of-pages`.

`b-pagination-nav` will try and auto-detect which page link is active page button based on the
current page's URL (via either `$route` detection or, if no `$router` detected, the browser location
URL).

**Note:** `<b-pagination-nav>` is used for navigating to new page URLs. For controlling in page
component pagination (such as table or list pagination), use the
[`<b-pagination>`](/docs/components/pagination) component instead.

```html
<template>
  <div class="overflow-auto">
    <b-pagination-nav :link-gen="linkGen" :number-of-pages="10" use-router></b-pagination-nav>
  </div>
</template>

<script>
  export default {
    methods: {
      linkGen(pageNum) {
        return pageNum === 1 ? '?' : `?page=${pageNum}`
      }
    }
  }
</script>

<!-- b-pagination-nav-lead.vue -->
```

## Page link and number generation

By default, `<b-pagination-nav>` generates plain link tags, setting the HREF attribute to `base-url`
concatenated with the page number. The `base-url` prop defaults to '/'. The number of pages is
specified via the `number-of-pages` prop. Pages are numbers from `1` through to `number-of-pages`.

### Router links

To generate page links as [`<router link>`](https://router.vuejs.org/api/#router-link) components
(or [`<nuxt-link>`](https://nuxtjs.org/api/components-nuxt-link#the-lt-nuxt-link-gt-component) if
[Nuxt.js](https://nuxtjs.org/) is detected), set the `use-router` prop. The HREF will then become
the `to` prop of the router link. Or, optionally, use a link generator function to return a
router-link [`to` location](https://router.vuejs.org/api/#to) object.

If a `$router` is not detected on your app, `<b-pagination-nav>` will fallback to regular `<a>`
elements, and any `to` location object will be converted to a standard URL (if possible).

The following router link specific props are supported:

- `active-class`
- `exact`
- `exact-active-class`
- `prefetch` (`<nuxt-link>` specific prop)
- `no-prefetch` (`<nuxt-link>` specific prop)

For details on the above props, refer to the [Router Link Support](/docs/reference/router-links)
reference section.

### Link generator function

If you need finer grained control over the generated link URLs or `<router-link>` `to` props, you
may set the `link-gen` prop to a function reference that receives two arguments: the page number,
and an object containing two fields (`link` and `page`), where `page` is the page number and `link`
is the internally generated link.

The `link-gen` function should return either a string (for HREF) or a router `to` object. If the
returned value is an object, then a router-link will always be generated (if a `$router` is
detected). If the return value is a string, a standard link is generated by default unless the
`use-router` prop is set. If a `to` location object is used, then the `base-url` prop will have no
effect.

<!-- eslint-disable no-dupe-keys -->

```js
export default {
  methods: {
    // For regular HREF (or string `to` prop if `use-router` is set)
    linkGen(pageNum) {
      return `/foo/page/${pageNum}`
    },

    // Returning a router-link `to` object
    linkGen(pageNum) {
      return { path: `/foo/page/${pageNum}` }
    },

    // Returning a router-link `to` object with query parameters
    linkGen(pageNum) {
      return {
        path: '/foo/',
        query: { page: pageNum }
      }
    },

    // Returning a router-link `to` object with named route and parameters
    linkGen(pageNum) {
      return {
        name: 'posts',
        params: { post: pageNum }
      }
    }
  }
}
```

**Note:** when falling back from a `to` location object to a standard link (when no `$router` is
available), only the following location properties are used to generate the URL:

- `path` (if not provided defaults to the page's current URL path)
- `query`
- `hash` (must include the leading `#` if used)

The conversion of `name` routes and `params` is not supported.

### Page number generation

By default, `<b-pagination-nav>` renders page numbers (1-N) in the page link buttons. You can
override this behaviour by supplying a function reference to the `page-gen` property. The function
reference should accept a single argument which is a page number (1-N). The `page-gen` function
should return a string.

**Note:** HTML content in generated page number strings is **not** supported. For basic HTML, you
can use the scoped slot `page` for finer-grained formatting.

**Example: Using an array of links to generate pagination:**

```html
<template>
  <div class="overflow-auto">
    <b-pagination-nav
      :link-gen="linkGen"
      :page-gen="pageGen"
      :number-of-pages="links.length"
    ></b-pagination-nav>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        links: ['#foo', '#bar', '#baz', '#faz']
      }
    },
    methods: {
      linkGen(pageNum) {
        return this.links[pageNum - 1]
      },
      pageGen(pageNum) {
        return this.links[pageNum - 1].slice(1)
      }
    }
  }
</script>

<!-- b-pagination-nav-links.vue -->
```

### Providing an array of pages

Rather than using `number-of-pages` to auto generate page links, you can pass an array of links via
the `pages` prop. When the `pages` prop has an array of length `1` or greater, it will be used to
generate the page links.

The array can be one of two formats:

- Array of strings, where each entry is a link. in this mode, the page button numbers will
  automatically be set to `1` through to the number of entries in the array.
- Array of objects, where each object has two fields: `link` (required) and `text` (optional). Link
  can be be either a string specifying the link, or a `to` location object. `text` will be the
  content of the page link buttons. If `text` is omitted, page button content will default to the
  page number.

When a string link is provided, `<b-pagination-nav>` will use regular `<a>` elements, unless the
`use-router` prop is set. When link (in the array of objects form) is a `to` location object, then a
router link will automatically be generated (if a `$router` is detected).

With the array format, link strings (and/or location objects) are used as-as and `base-url` prop
will be ignored.

```html
<template>
  <b-pagination-nav :pages="pages1" use-router></b-pagination-nav>
  <b-pagination-nav :pages="pages2" use-router></b-pagination-nav>
  <b-pagination-nav :pages="pages3" use-router></b-pagination-nav>
</template>

<script>
export default {
  data() {
    return {
      // Simple array of strings
      pages1: ['?page=1', '?page=2', '?page=3'],
      // Array of objects with string links
      pages2: [
        { link: '?page=1', text: 'One' },
        { link: '?page=2', text: 'Two' },
        { link: '?page=3', text: 'Three' }
      ],
      // Array of objects with router `to` locations
      pages3: [
        { link: { query: { page: 1 } }, text: 'Page 1' },
        { link: { query: { page: 2 } }, text: 'Page 2' },
        { link: { query: { page: 3 } }, text: 'Page 3' }
      ]
    }
  }
}
</script>

<!-- pagination-nav-array.vue -->
```

## Customizing appearance

### Limiting the number of displayed buttons

To restrict the number of page buttons (including the ellipsis, but excluding the first, prev, next,
and last buttons) shown, use the `limit` prop to specify the desired number of page buttons
(including the ellipsis, if shown). The default `limit` is `5`. The minimum supported value is `3`.
When `limit` is set to `3`, no ellipsis indicators will be shown for practical purposes.

The `first` and `last` buttons can be optionally hidden by setting the `hide-goto-end-buttons` prop.

The showing of the `ellipsis` can be optionally disabled by setting the `hide-ellipsis` prop.

#### Small screen support

On smaller screens (i.e. mobile), some of the `<b-pagination-nav>` buttons will be hidden to
minimize the potential of the pagination interface wrapping onto multiple lines:

- The ellipsis indicators will be hidden on screens `xs` and smaller.
- Page number buttons will be limited to a maximum of 3 visible on `xs` screens and smaller.

This ensures that no more than 3 page number buttons are visible, along with the goto _first_,
_prev_, _next_, and _last_ buttons.

### Button content

`<b-pagination-nav>` supports several props/slots that allow you to customize the appearance. All
`*-text` props are text-only and strip out HTML but you can use their equally named slot
counterparts for that.

For a full list of all available slots see the [Slots](#comp-ref-b-pagination-nav-slots) section
below.

```html
<template>
  <div class="overflow-auto">
    <!-- Use text in props -->
    <b-pagination-nav
      number-of-pages="10"
      base-url="#"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
    ></b-pagination-nav>

    <!-- Use emojis in props -->
    <b-pagination-nav
      number-of-pages="10"
      base-url="#"
      first-text="⏮"
      prev-text="⏪"
      next-text="⏩"
      last-text="⏭"
      class="mt-4"
    ></b-pagination-nav>

    <!-- Use HTML and sub-components in slots -->
    <b-pagination-nav
      number-of-pages="10"
      base-url="#"
      class="mt-4"
    >
      <template #first-text><span class="text-success">First</span></template>
      <template #prev-text><span class="text-danger">Prev</span></template>
      <template #next-text><span class="text-warning">Next</span></template>
      <template #last-text><span class="text-info">Last</span></template>
      <template #ellipsis-text>
        <b-spinner small type="grow"></b-spinner>
        <b-spinner small type="grow"></b-spinner>
        <b-spinner small type="grow"></b-spinner>
      </template>
      <template #page="{ page, active }">
        <b v-if="active">{{ page }}</b>
        <i v-else>{{ page }}</i>
      </template>
    </b-pagination-nav>
  </div>
</template>

<!-- b-pagination-nav-appearance.vue -->
```

The slot `page` is always scoped, while the slots `first-text`, `prev-text`, `next-text` and
`last-text` are optionally scoped. The `ellipsis-text` slot is not scoped.

**Scoped variables properties available to the `page` slot:**

| Property   | Type    | Description                                               |
| ---------- | ------- | --------------------------------------------------------- |
| `page`     | Number  | Page number (from `1` to `numberOfPages`)                 |
| `index`    | Number  | Page number (indexed from `0` to `numberOfPages -1`)      |
| `active`   | Boolean | If the page is the active page                            |
| `disabled` | Boolean | If the page button is disabled                            |
| `content`  | String  | default content, or the result of the `page-gen` function |

**Scoped variables properties available to the `first-text`, `prev-text`, `next-text` and
`last-text` slots:**

| Property   | Type    | Description                                          |
| ---------- | ------- | ---------------------------------------------------- |
| `page`     | Number  | Page number (from `1` to `numberOfPages`)            |
| `index`    | Number  | Page number (indexed from `0` to `numberOfPages -1`) |
| `disabled` | Boolean | If the page button is disabled                       |

### Goto first/last button type

If you prefer to have buttons with the first and last page number to go to the corresponding page,
use the `first-number` and `last-number` props.

```html
<template>
  <div class="overflow-auto">
    <div>
      <h6>Goto first button number</h6>
      <b-pagination-nav
        v-model="currentPage"
        :number-of-pages="pages"
        base-url="#"
        first-number
      ></b-pagination-nav>
    </div>

    <div class="mt-3">
      <h6>Goto last button number</h6>
      <b-pagination-nav
        v-model="currentPage"
        :number-of-pages="pages"
        base-url="#"
        last-number
      ></b-pagination-nav>
    </div>

    <div class="mt-3">
      <h6>Goto first and last button number</h6>
      <b-pagination-nav
        v-model="currentPage"
        :number-of-pages="pages"
        base-url="#"
        first-number
        last-number
      ></b-pagination-nav>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pages: 100,
        currentPage: 5
      }
    }
  }
</script>

<!-- b-pagination-nav-goto-first-last-number.vue -->
```

### Button size

Optionally change from the default button size by setting the `size` prop to either `'sm'` for
smaller buttons or `'lg'` for larger buttons.

```html
<template>
  <div class="overflow-auto">
    <div>
      <h6>Small</h6>
      <b-pagination-nav size="sm" number-of-pages="10" base-url="#"></b-pagination-nav>
    </div>

    <div class="mt-3">
      <h6>Default</h6>
      <b-pagination-nav number-of-pages="10" base-url="#"></b-pagination-nav>
    </div>

    <div class="mt-3">
      <h6>Large</h6>
      <b-pagination-nav size="lg" number-of-pages="10" base-url="#"></b-pagination-nav>
    </div>
  </div>
</template>

<!-- b-pagination-nav-size.vue -->
```

### Pill style

Easily switch to pill style buttons by setting the `pills` prop

```html
<template>
  <div class="overflow-auto">
    <div>
      <h6>Small Pills</h6>
      <b-pagination-nav pills size="sm" number-of-pages="10" base-url="#"></b-pagination-nav>
    </div>

    <div class="mt-3">
      <h6>Default Pills</h6>
      <b-pagination-nav pills number-of-pages="10" base-url="#"></b-pagination-nav>
    </div>

    <div class="mt-3">
      <h6>Large Pills</h6>
      <b-pagination-nav pills size="lg" number-of-pages="10" base-url="#"></b-pagination-nav>
    </div>
  </div>
</template>

<!-- b-pagination-nav-pills.vue -->
```

**Note:** Pill styling requires BootstrapVue's custom CSS/SCSS.

### Alignment

By default the pagination component is left aligned. Change the alignment to `center`, `right`
(`right` is an alias for `end`), or 'fill' by setting the prop `align` to the appropriate value.

```html
<template>
  <div class="overflow-auto">
    <div>
      <h6>Left alignment (default)</h6>
      <b-pagination-nav number-of-pages="10" base-url="#"></b-pagination-nav>
    </div>

    <div class="mt-3">
      <h6 class="text-center">Center alignment</h6>
      <b-pagination-nav number-of-pages="10" base-url="#" align="center"></b-pagination-nav>
    </div>

    <div class="mt-3">
      <h6 class="text-right">Right (end) alignment</h6>
      <b-pagination-nav number-of-pages="10" base-url="#" align="right"></b-pagination-nav>
    </div>

    <div class="mt-3">
      <h6 class="text-center">Fill alignment</h6>
      <b-pagination-nav number-of-pages="10" base-url="#" align="fill"></b-pagination-nav>
    </div>
  </div>
</template>

<!-- b-pagination-nav-alignment.vue -->
```

## Auto current page detection and `v-model` support

`<b-pagination-nav>` will try and automatically detect which page button should be active, based on
the page's current URL or `$route` (if a router is detected). In cases where it cannot detect the
page, no page number buttons will be in the active state, and the first, previous, next and last
buttons will be in the disabled state until a page button is clicked.

`v-model` is optionally supported (updated by the `input` event, and tied to the `value` prop).
Setting the `v-model` to `null` (the default) initially will trigger auto active page detection, and
will subsequently be updated with the current page number (indexed from `1` to number of pages). If
you initially set the `v-model` to a value of `1` or greater, auto page detection will not occur
(until after a user clicks a page button), and the page specified by the `v-model` will be set as
`active`.

To disable auto active page detection, set the `no-page-detect` prop to `true`.

**Note:** Auto page detection needs to loop through all possible page links until a match is
detected. For larger `number-of-pages`, this check can take some time so you may want to manually
control which page is the active via the `v-model` and the `no-page-detect` prop.

## Preventing a page from being selected

You can listen for the `page-click` event, which provides an option to prevent the page from being
selected. The event is emitted with two arguments:

- `bvEvent`: The `BvEvent` object. Call `bvEvent.preventDefault()` to cancel page selection
- `page`: Page number to select (starting with `1`)

For accessibility reasons, when using the `page-click` event to prevent a page from being selected,
you should provide some means of notification to the user as to why the page is not able to be
selected. It is recommended to use the `disabled` attribute on the `<b-pagination-nav>` component
instead of using the `page-click` event (as `disabled` is more intuitive for screen reader users).

## Accessibility

The `<b-pagination-nav>` component provides many features to support assistive technology users,
such as `aria-` attributes and keyboard navigation.

### ARIA labels

`<b-pagination-nav>` provides various `*-label-*` props which are used to set the `aria-label`
attributes on the various elements within the component, which will help users of assistive
technology.

| Prop               | `aria-label` content default                            |
| ------------------ | ------------------------------------------------------- |
| `label-first-page` | "Goto first page"                                       |
| `label-prev-page`  | "Goto previous page"                                    |
| `label-next-page`  | "Goto next page"                                        |
| `label-last-page`  | "Goto last page"                                        |
| `label-page`       | "Goto page", appended with the page number              |
| `aria-label`       | "Pagination", applied to the outer pagination container |

The `label-page` will optionally accept a function to generate the aria-label. The function is
passed a single argument which is the page number (indexed from 1 to number of pages).

You can remove any label by setting the prop to an empty string (`''`), although this is not
recommended unless the content of the button textually conveys its purpose.

### Keyboard navigation

`<b-pagination-nav>` supports standard <kbd>Tab</kbd> key navigation.

## See also

Refer to the [Router support](/docs/reference/router-links) reference page for router-link specific
props.

For pagination control of a component (such as `<b-table>`) or a pagination list, use the
[`<b-pagination>`](/docs/components/pagination) component instead.

<!-- Component reference added automatically from component package.json -->