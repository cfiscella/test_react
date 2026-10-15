const mask = v => (v.length <= 4 ? "•".repeat(v.length) : v.slice(0, 2) + "•".repeat(Math.min(v.length - 4, 12)) + v.slice(-2))

const keys = __ENV_KEYS__
const vite = Object.entries(import.meta.env).filter(([k]) => k.startsWith("VITE_"))

const title = !__ENV_FILE__ ? "❌ no .env file" : keys.length ? "✅ .env found" : "⚠️ .env is empty"

document.querySelector("#app").innerHTML = `
  <h1>${title}abc123456789</h1>
  <p>${keys.length} variable${keys.length === 1 ? "" : "s"} in the project's <code>.env</code>, read when the server started (${__STARTED_AT__}).</p>
  <h2>Keys in .env</h2>
  <ul>${keys.map(k => `<li><code>${k}</code></li>`).join("") || "<li><em>none</em></li>"}</ul>
  <h2>VITE_ values the page can see (masked)</h2>
  <ul>${vite.map(([k, v]) => `<li><code>${k}</code> = <code>${mask(String(v))}</code></li>`).join("") || "<li><em>none</em></li>"}</ul>
  <p style="color:#666">Only <code>VITE_</code> variables reach browser code; the rest are listed by name only.</p>
`
