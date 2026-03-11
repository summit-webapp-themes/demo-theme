import fs from "fs"
import path from "path"
import type { RegistryFile } from "../types.js"

export function writeFiles(
  files: RegistryFile[],
  componentName: string,
  outputDir: string
): string[] {
  const written: string[] = []

  for (const file of files) {
    const destPath = path.join(
      process.cwd(),
      outputDir,
      componentName,
      file.path
    )
    fs.mkdirSync(path.dirname(destPath), { recursive: true })
    fs.writeFileSync(destPath, file.content, "utf-8")
    written.push(destPath)
  }

  return written
}