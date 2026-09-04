import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // The ported content is copywriting-heavy JSX text with plain quotes/apostrophes;
      // escaping every one would hurt readability without fixing a real bug.
      "react/no-unescaped-entities": "off",
      // Marketing imagery is served from external CDNs (Google-hosted asset URLs);
      // swapping to next/image is a follow-up optimization, not a correctness issue.
      "@next/next/no-img-element": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
