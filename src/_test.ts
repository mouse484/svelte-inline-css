import preprocessor from './preprocess';
import { Processed } from 'svelte/types/compiler/preprocess';

const content = `
<script>
  import style from 'svelte-inline-css';
</script>

<div class="kurasu" use:style={{ color: 'red', backgroundColor: 'pink' }}>example</div>
<p>Pだぞ</p>
`;

const isProcessed = (arg: unknown): arg is Processed =>
  !!(arg as Processed).code;

const proces = preprocessor().markup;
if (proces) {
  const processed = proces({ content, filename: 'test.svelte' });
  if (isProcessed(processed)) {
    console.log(processed.code);
  }
}
