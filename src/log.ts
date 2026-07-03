export function log(level: "info" | "warn" | "error", message: string): void {
  const ts = new Date().toISOString();
  console.log(`[${ts}] [${level}] ${message}`);
}
