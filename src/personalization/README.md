# Personalization

This folder should contain a file with all the strings for personalization.

This file should _not_ be commited to git.

The file should be named `strings.ts` and follow this structure:

```typescript
import { PersonalizationStrings } from "../interfaces/PersonalizationStrings";

const strings: PersonalizationStrings = {};

export default strings;
```
