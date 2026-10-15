import { existsSync, readFileSync } from "node:fs"
import { defineConfig } from "vite"

// The key names in the .env at the top of the project, read straight from the
// file so nothing from the shell's own environment is mixed in. Only names
// reach the page; values stay here. VITE_ variables are exposed by Vite itself
// (import.meta.env) and the page shows them masked.
const envKeys = () => {
  if (!existsSync(".env")) return []
  return readFileSync(".env", "utf8")
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(line => line && !line.startsWith("#") && line.includes("="))
    .map(line => line.slice(0, line.indexOf("=")).replace(/^export\s+/, "").trim())
}

export default defineConfig({
  define: {
    __ENV_FILE__: JSON.stringify(existsSync(".env")),
    __ENV_KEYS__: JSON.stringify(envKeys().sort()),
    __STARTED_AT__: JSON.stringify(new Date().toISOString()),
  },
  // Served behind *.live.dev.disent.com, which Vite's host check would refuse.
  server: { host: true, allowedHosts: true },
  preview: { host: true, allowedHosts: true },
})
