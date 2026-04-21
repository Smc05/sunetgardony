import NextImage, { type ImageProps } from "next/image";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function AppImage({ src, ...props }: ImageProps) {
  const resolvedSrc =
    typeof src === "string" && src.startsWith("/") ? `${BASE}${src}` : src;
  return <NextImage src={resolvedSrc} {...props} />;
}
