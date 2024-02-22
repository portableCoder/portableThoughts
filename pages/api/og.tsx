import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

export default async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  // ?title=<title>
  const title = searchParams.get("title") || "";
  const image = searchParams.get("image") || "";
  return new ImageResponse(
    (
      // Modified based on https://tailwindui.com/components/marketing/sections/cta-sections
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#131313",
        }}
      >
        <div tw="w-full text-white h-full justify-between flex flex-col p-4 ">
          <div
            style={{
              fontSize: "48px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="font-bold">{title}</div>
            <div
              style={{
                fontSize: "16px",
              }}
            >
              {"My description"}
            </div>
          </div>
          <div className=""></div>
          <img
            alt="bg"
            style={{
              height: "256px",
              width: "100%",
              objectFit: "cover",
            }}
            src={image}
          ></img>
          <div style={{ fontSize: "24px" }}>📦 | portableCoder</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
