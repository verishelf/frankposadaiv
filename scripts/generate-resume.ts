import { renderToBuffer } from "@react-pdf/renderer";
import { mkdir, writeFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { ResumePDFDocument } from "../lib/resume-pdf";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = join(
  __dirname,
  "..",
  "public",
  "resume",
  "Frank_Posada_Resume.pdf",
);

async function generate() {
  const buffer = await renderToBuffer(ResumePDFDocument());
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, buffer);
  console.log(`Resume PDF generated at ${outputPath}`);
}

generate().catch((err) => {
  console.error("Failed to generate resume PDF:", err);
  process.exit(1);
});
