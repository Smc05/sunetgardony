import type { ImageLoaderProps } from "next/image";

export default function imageLoader({ src }: ImageLoaderProps): string {
  const basePath =
    process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${basePath}${src}`;
}
