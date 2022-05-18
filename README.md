# chakra-prose

A prose component for Chakra UI

This library is a modified version of [chakra-ui-prose](https://github.com/nikolovlazar/chakra-ui-prose).

## Usage

yarn

```bash
yarn add @iwatakeshi/chakra-prose
```

npm

```bash
npm add @iwatakeshi/chakra-prose
```

Add prose to your theme configuration:

```tsx
import { withProse } from "@iwatakeshi/chakra-prose";
import { extendTheme } from "@charka-ui/react";

const theme = extendTheme({}, withProse());

// ...
```

Use the component:

```tsx
import { Prose } from "@iwatakeshi/chakra-prose";
function Example() {
  return (
    <Prose variant="short">
      <h1>Hello world</h1>
    </Prose>
  );
}
```
