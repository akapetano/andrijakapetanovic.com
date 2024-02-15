import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const pageTitle = searchParams.get("page");
  const postTitle = searchParams.get("title");

  const fontData = await fetch(
    new URL("../../../../public/fonts/Montserrat-Bold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const mainTitle = postTitle
    ? postTitle
    : "Andrija Kapetanović | Frontend Developer";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          flexWrap: "nowrap",
          backgroundColor: "#1A202C",
          paddingLeft: "50px",
          paddingRight: "50px",
          gap: "50px",
          fontFamily: "Montserrat",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "flex-start",
            textAlign: "left",
            fontSize: 40,
            fontStyle: "normal",
            color: "black",
            marginTop: 10,
            lineHeight: 1.5,
            whiteSpace: "pre-wrap",
          }}
        >
          <b
            style={{
              display: "flex",
              justifyContent: "center",
              border: "5px solid #0ABDE3",
              borderRadius: "50px",
              color: "#0ABDE3",
              textAlign: "center",
              fontSize: 20,
              padding: 5,
              paddingRight: 10,
              paddingLeft: 10,
            }}
          >
            {pageTitle}
          </b>
          <b style={{ color: "white", lineHeight: 1.2, width: "700px" }}>
            {mainTitle}
          </b>
          <b style={{ color: "#0ABDE3", fontSize: 20, marginTop: "-10px" }}>
            andrijakapetanovic.com
          </b>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://www.andrijakapetanovic.com/images/logo-small.png"
            width="300px"
            height="300px"
            alt="Logo"
          />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [{ name: "Montserrat", data: fontData, style: "normal" }],
    }
  );
}
