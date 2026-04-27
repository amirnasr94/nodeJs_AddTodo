import { fileURLToPath } from "url";
import { dirname } from "path";

export function fileAddress() {
  const url = import.meta.url;
  const fileUrl = fileURLToPath(url);
  const filePath = dirname(fileUrl);

  return filePath;
}
