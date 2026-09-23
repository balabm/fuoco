import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Fuoco — Wood-Fired Italian Kitchen";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#EBE6DB",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 340,
            height: 480,
            borderRadius: "170px 170px 0 0",
            background:
              "linear-gradient(180deg, #B8C4B1 0%, #8FA089 45%, #6F8269 100%)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 250,
              height: 400,
              borderRadius: "125px 125px 0 0",
              background:
                "radial-gradient(ellipse 80% 60% at 50% 20%, #FFE0B2 0%, #D9A05B 45%, #8F5A32 80%, #343425 100%)",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 110,
            left: 90,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span
            style={{
              fontSize: 88,
              fontWeight: 700,
              color: "#343425",
              letterSpacing: 2,
            }}
          >
            Fuoco
          </span>
          <span
            style={{
              fontSize: 26,
              color: "#934A22",
              letterSpacing: 6,
              marginTop: 8,
            }}
          >
            WOOD-FIRED ITALIAN KITCHEN
          </span>
        </div>
      </div>
    ),
    size
  );
}
