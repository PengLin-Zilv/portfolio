import { ImageResponse } from "next/og";
import { COLORS } from "@/lib/colors";

export const runtime = "edge";

export const alt =
  "Peng Lin — AI Research · CS at Syracuse University";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const geistBold = await fetch(
    new URL("./Geist-Bold.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: COLORS.background,
          padding: "90px",
          fontFamily: "Geist",
          fontWeight: 700,
        }}
      >
        <div
          style={{
            fontSize: 96,
            color: COLORS.foreground,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          Peng Lin
        </div>
        <div
          style={{
            fontSize: 36,
            color: COLORS.muted,
            marginTop: 28,
            letterSpacing: "-0.01em",
          }}
        >
          AI Research @ Syracuse University
        </div>
        <div
          style={{
            fontSize: 24,
            color: COLORS.accent.DEFAULT,
            marginTop: 18,
          }}
        >
          CS · Syracuse University
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Geist",
          data: geistBold,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}