<script lang="ts">
  import style from 'svelte-inline-css';

  const fontSize = 30;
  const styleObject = {
    color: 'red',
    fontSize: '13px',
  };
  const baseStyles = styleObject;
  const overridingStyles = {
    color: 'blue',
  };
</script>

<!-- https://v3.vuejs.org/guide/class-and-style.html#object-syntax-2 -->
<div use:style={{ color: 'red', fontSize: fontSize + 'px' }}>Object Syntax</div>

<div use:style={styleObject}>Object directly</div>

<!-- https://v3.vuejs.org/guide/class-and-style.html#array-syntax-2 -->
<div use:style={[baseStyles, overridingStyles]}>Array Syntax</div>
