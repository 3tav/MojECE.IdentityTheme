import * as React from "react"
import { Global, css } from "@emotion/react"

const Fonts = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "proxima-nova";
        src: url("https://use.typekit.net/af/71f83c/00000000000000003b9b093b/27/l?primer=303ead5937c251484fa6af42166416d05dd12411b3fbfc9ae336ce2de69ae5e5&fvd=n7&v=3")
            format("woff2"),
          url("https://use.typekit.net/af/71f83c/00000000000000003b9b093b/27/d?primer=303ead5937c251484fa6af42166416d05dd12411b3fbfc9ae336ce2de69ae5e5&fvd=n7&v=3")
            format("woff"),
          url("https://use.typekit.net/af/71f83c/00000000000000003b9b093b/27/a?primer=303ead5937c251484fa6af42166416d05dd12411b3fbfc9ae336ce2de69ae5e5&fvd=n7&v=3")
            format("opentype");
        font-display: auto;
        font-style: normal;
        font-weight: 700;
      }

      @font-face {
        font-family: "proxima-nova";
        src: url("https://use.typekit.net/af/86b539/00000000000000003b9b093a/27/l?primer=303ead5937c251484fa6af42166416d05dd12411b3fbfc9ae336ce2de69ae5e5&fvd=i7&v=3")
            format("woff2"),
          url("https://use.typekit.net/af/86b539/00000000000000003b9b093a/27/d?primer=303ead5937c251484fa6af42166416d05dd12411b3fbfc9ae336ce2de69ae5e5&fvd=i7&v=3")
            format("woff"),
          url("https://use.typekit.net/af/86b539/00000000000000003b9b093a/27/a?primer=303ead5937c251484fa6af42166416d05dd12411b3fbfc9ae336ce2de69ae5e5&fvd=i7&v=3")
            format("opentype");
        font-display: auto;
        font-style: italic;
        font-weight: 700;
      }
      @font-face {
        font-family: "proxima-nova";
        src: url("https://use.typekit.net/af/4838bd/00000000000000003b9b0934/27/l?primer=303ead5937c251484fa6af42166416d05dd12411b3fbfc9ae336ce2de69ae5e5&fvd=n4&v=3")
            format("woff2"),
          url("https://use.typekit.net/af/4838bd/00000000000000003b9b0934/27/d?primer=303ead5937c251484fa6af42166416d05dd12411b3fbfc9ae336ce2de69ae5e5&fvd=n4&v=3")
            format("woff"),
          url("https://use.typekit.net/af/4838bd/00000000000000003b9b0934/27/a?primer=303ead5937c251484fa6af42166416d05dd12411b3fbfc9ae336ce2de69ae5e5&fvd=n4&v=3")
            format("opentype");
        font-display: auto;
        font-style: normal;
        font-weight: 400;
      }

      @font-face {
        font-family: "proxima-nova";
        src: url("https://use.typekit.net/af/6aec08/00000000000000003b9b0935/27/l?primer=303ead5937c251484fa6af42166416d05dd12411b3fbfc9ae336ce2de69ae5e5&fvd=i4&v=3")
            format("woff2"),
          url("https://use.typekit.net/af/6aec08/00000000000000003b9b0935/27/d?primer=303ead5937c251484fa6af42166416d05dd12411b3fbfc9ae336ce2de69ae5e5&fvd=i4&v=3")
            format("woff"),
          url("https://use.typekit.net/af/6aec08/00000000000000003b9b0935/27/a?primer=303ead5937c251484fa6af42166416d05dd12411b3fbfc9ae336ce2de69ae5e5&fvd=i4&v=3")
            format("opentype");
        font-display: auto;
        font-style: italic;
        font-weight: 400;
      }

      @font-face {
        font-family: "proxima-nova";
        src: url("https://use.typekit.net/af/437c3d/00000000000000003b9b0932/27/l?primer=303ead5937c251484fa6af42166416d05dd12411b3fbfc9ae336ce2de69ae5e5&fvd=n3&v=3")
            format("woff2"),
          url("https://use.typekit.net/af/437c3d/00000000000000003b9b0932/27/d?primer=303ead5937c251484fa6af42166416d05dd12411b3fbfc9ae336ce2de69ae5e5&fvd=n3&v=3")
            format("woff"),
          url("https://use.typekit.net/af/437c3d/00000000000000003b9b0932/27/a?primer=303ead5937c251484fa6af42166416d05dd12411b3fbfc9ae336ce2de69ae5e5&fvd=n3&v=3")
            format("opentype");
        font-display: auto;
        font-style: normal;
        font-weight: 300;
      }

      @font-face {
        font-family: "proxima-nova";
        src: url("https://use.typekit.net/af/f02b29/00000000000000003b9b0933/27/l?primer=303ead5937c251484fa6af42166416d05dd12411b3fbfc9ae336ce2de69ae5e5&fvd=i3&v=3")
            format("woff2"),
          url("https://use.typekit.net/af/f02b29/00000000000000003b9b0933/27/d?primer=303ead5937c251484fa6af42166416d05dd12411b3fbfc9ae336ce2de69ae5e5&fvd=i3&v=3")
            format("woff"),
          url("https://use.typekit.net/af/f02b29/00000000000000003b9b0933/27/a?primer=303ead5937c251484fa6af42166416d05dd12411b3fbfc9ae336ce2de69ae5e5&fvd=i3&v=3")
            format("opentype");
        font-display: auto;
        font-style: italic;
        font-weight: 300;
      }

      .tk-proxima-nova {
        font-family: "proxima-nova", sans-serif;
      }
    `}
  />
)

export default Fonts
