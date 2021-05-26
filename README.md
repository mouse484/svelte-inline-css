# svelte-inline-css

Easy to use inline style system like [Vue.js inline style](https://v3.vuejs.org/guide/class-and-style.html#binding-inline-styles) in Svelte(Use [use:action](https://svelte.dev/docs#use_action))

Try it -> [REPL](https://svelte.dev/repl/04705a80122e4e4ba8ffd3db1cc3f49e?version=3.38.2)


# Installation

```
yarn add svelte-inline-css
```

# Usage

```svelte
<script lang="ts">
  import style from 'svelte-inline-css';
  export let height: `${number}px` = '0px';
</script>

<div use:style={{ height }} />
<div use:style={{ color: 'red' }}>red</div>
```
