import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { Children } from 'react';

export default class MyDocument extends Document {
  private renderFontLinks = (
    fonts: Array<string>,
    fontFormats: Array<string>,
    fontTypes: Array<string>
  ): JSX.Element => {
    const fontLinks: Array<JSX.Element> = [];

    for (const font of fonts) {
      for (const fontType of fontTypes) {
        for (const fontFormat of fontFormats) {
          fontLinks.push(
            <link
              as="font"
              crossOrigin="anonymous"
              href={`/Fonts/${font}${
                fontType ? `-${fontType}` : fontType
              }.${fontFormat}`}
              rel="preload"
              type={`font/${fontFormat}`}
            />
          );
        }
      }
    }

    return <>{Children.toArray(fontLinks)}</>;
  };

  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/UnionAlliedLogo.svg" />
          {this.renderFontLinks(
            [`Helvetica`],
            [`eot`, `ttf`, `woff`, `woff2`],
            [`Bold`, `BoldOblique`, `Light`, `LightOblique`, `Oblique`, ``]
          )}
          {this.renderFontLinks(
            [`HelveticaNeue`],
            [`eot`, `ttf`, `woff`, `woff2`],
            [
              `Bold`,
              `BoldItalic`,
              `CondensedBlack`,
              `CondesenedBold`,
              `Italic`,
              `Light`,
              `LightItalic`,
              `Medium`,
              `MediumItalic`,
              `Thin`,
              `ThinItalic`,
              `UltraLight`,
              `UltraLightItalic`,
              ``,
            ]
          )}
          {this.renderFontLinks(
            [`SaolDisplay`],
            [`eot`, `ttf`, `woff`, `woff2`],
            [`Light`, `LightItalic`, `Regular_1`, `Regular`, `SemiboldItalic`]
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
