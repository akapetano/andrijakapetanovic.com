import { ImageResponse } from "next/og";
import { SITE_TITLE, BLOG_POST_TITLES } from "@/constants";
import { BlogPostSlug } from "@/types/blog";

export const runtime = "edge";

export const alt = SITE_TITLE;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: { slug: BlogPostSlug };
}) {
  const { slug } = params;
  const title = BLOG_POST_TITLES[slug];

  return (
    new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            background: "#1A202C",
            width: "100%",
            height: "100%",
            padding: "50px",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "50px",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "25px" }}
          >
            <p
              style={{
                border: "5px solid",
                paddingInline: "20px",
                width: "fit-content",
                borderRadius: "50px",
                color: "#0ABDE3",
                fontSize: 36,
                fontWeight: "bold",
                textAlign: "center",
                margin: 0,
              }}
            >
              Blog
            </p>
            <h1
              style={{
                color: "white",
                fontSize: 64,
                fontWeight: "bold",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              {title}
            </h1>
            <h2
              style={{
                width: "fit-content",
                borderRadius: "50px",
                color: "#0ABDE3",
                fontSize: 36,
                fontWeight: "bold",
                textAlign: "center",
                margin: 0,
              }}
            >
              andrijakapetanovic.com
            </h2>
          </div>
          <div style={{ width: 300, height: 300 }}>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 824 824"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_11_52)">
                <mask id="path-1-inside-1_11_52" fill="white">
                  <path d="M412 8C305.913 8 204.172 50.1427 129.157 125.157C54.1427 200.172 12 301.913 12 408C12 514.087 54.1427 615.828 129.157 690.843C204.172 765.857 305.913 808 412 808L412 408V8Z" />
                </mask>
                <path
                  d="M412 8C305.913 8 204.172 50.1427 129.157 125.157C54.1427 200.172 12 301.913 12 408C12 514.087 54.1427 615.828 129.157 690.843C204.172 765.857 305.913 808 412 808L412 408V8Z"
                  fill="white"
                />
                <path
                  d="M412 8C305.913 8 204.172 50.1427 129.157 125.157C54.1427 200.172 12 301.913 12 408C12 514.087 54.1427 615.828 129.157 690.843C204.172 765.857 305.913 808 412 808L412 408V8Z"
                  stroke="#0984E3"
                  stroke-width="70"
                  mask="url(#path-1-inside-1_11_52)"
                />
              </g>
              <g filter="url(#filter1_d_11_52)">
                <mask id="path-2-inside-2_11_52" fill="white">
                  <path d="M412 808C518.087 808 619.828 765.857 694.843 690.843C769.857 615.828 812 514.087 812 408C812 301.913 769.857 200.172 694.843 125.157C619.828 50.1428 518.087 8.00002 412 8L412 408L412 808Z" />
                </mask>
                <path
                  d="M412 808C518.087 808 619.828 765.857 694.843 690.843C769.857 615.828 812 514.087 812 408C812 301.913 769.857 200.172 694.843 125.157C619.828 50.1428 518.087 8.00002 412 8L412 408L412 808Z"
                  fill="#1A202C"
                />
                <path
                  d="M412 808C518.087 808 619.828 765.857 694.843 690.843C769.857 615.828 812 514.087 812 408C812 301.913 769.857 200.172 694.843 125.157C619.828 50.1428 518.087 8.00002 412 8L412 408L412 808Z"
                  stroke="#0ABDE3"
                  stroke-width="70"
                  mask="url(#path-2-inside-2_11_52)"
                />
              </g>
              <path
                d="M256.52 567C253.853 567 251.52 566 249.52 564C247.52 562 246.52 559.667 246.52 557C246.52 555.333 246.686 553.5 247.02 551.5L371.02 228C372.353 224.667 374.186 222 376.52 220C378.853 218 382.353 217 387.02 217H421.02C425.353 217 428.686 218 431.02 220C433.686 222 435.686 224.667 437.02 228L560.52 551.5C561.186 553.5 561.52 555.333 561.52 557C561.52 559.667 560.52 562 558.52 564C556.52 566 554.186 567 551.52 567H526.02C522.02 567 519.02 566 517.02 564C515.353 562 514.186 560.167 513.52 558.5L486.02 487.5H322.02L294.52 558.5C294.186 560.167 293.02 562 291.02 564C289.02 566 286.02 567 282.02 567H256.52ZM336.52 444.5H471.52L404.02 267L336.52 444.5Z"
                fill="url(#paint0_linear_11_52)"
              />
              <path
                d="M398.854 567C395.187 567 392.354 566 390.354 564C388.354 561.667 387.354 558.833 387.354 555.5V229C387.354 225.333 388.354 222.5 390.354 220.5C392.354 218.167 395.187 217 398.854 217H423.854C427.52 217 430.354 218.167 432.354 220.5C434.687 222.5 435.854 225.333 435.854 229V353L569.354 225C570.687 223.667 572.854 222 575.854 220C579.187 218 583.52 217 588.854 217H615.854C618.52 217 620.854 218 622.854 220C624.854 222 625.854 224.333 625.854 227C625.854 229.667 625.187 231.833 623.854 233.5L469.354 384.5L633.854 550C635.52 552 636.354 554.333 636.354 557C636.354 559.667 635.354 562 633.354 564C631.354 566 629.02 567 626.354 567H598.354C592.687 567 588.354 566 585.354 564C582.354 561.667 580.187 560 578.854 559L435.854 418V555.5C435.854 558.833 434.687 561.667 432.354 564C430.354 566 427.52 567 423.854 567H398.854Z"
                fill="url(#paint1_linear_11_52)"
              />
              <line
                x1="413"
                y1="188"
                x2="413"
                y2="645"
                stroke="#0ABDE3"
                stroke-width="2"
              />
              <line
                x1="399.5"
                y1="567"
                x2="399.5"
                y2="217"
                stroke="url(#paint2_linear_11_52)"
                stroke-width="25"
              />
              <line
                x1="370.654"
                y1="236.136"
                x2="379.988"
                y2="210.8"
                stroke="#0984E3"
                stroke-width="5"
              />
              <defs>
                <filter
                  id="filter0_d_11_52"
                  x="0"
                  y="0"
                  width="424"
                  height="824"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="4"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_11_52"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_11_52"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_11_52"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_d_11_52"
                  x="400"
                  y="0"
                  width="424"
                  height="824"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="4"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_11_52"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_11_52"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_11_52"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_11_52"
                  x1="9.83617"
                  y1="408"
                  x2="552.497"
                  y2="408"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#0984E3" />
                  <stop offset="0.736622" stop-color="#0984E3" />
                  <stop
                    offset="0.740132"
                    stop-color="#0984E3"
                    stop-opacity="0"
                  />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_11_52"
                  x1="714.752"
                  y1="366.5"
                  x2="257.302"
                  y2="364.513"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#0ABDE3" />
                  <stop offset="0.659283" stop-color="#0ABDE3" />
                  <stop
                    offset="0.659653"
                    stop-color="#0C2461"
                    stop-opacity="0.7"
                  />
                  <stop offset="0.659921" stop-color="#0984E3" />
                  <stop offset="0.692608" stop-color="#0984E3" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_11_52"
                  x1="407.5"
                  y1="392"
                  x2="412"
                  y2="392"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.15625" stop-color="#0984E3" />
                  <stop
                    offset="0.484375"
                    stop-color="#087AD3"
                    stop-opacity="0.917809"
                  />
                  <stop
                    offset="0.723958"
                    stop-color="#0872C3"
                    stop-opacity="0.840314"
                  />
                  <stop
                    offset="0.838542"
                    stop-color="#0767B1"
                    stop-opacity="0.627312"
                  />
                  <stop offset="1" stop-color="#054A7F" stop-opacity="0.02" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      )
    ),
    {
      ...size,
    }
  );
}
