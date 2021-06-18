import React from 'react';
import Document, { Head, Main, NextScript, Html } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheets } from '@material-ui/core/styles';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
  }

  render() {
    return (
        <Html>
          <Head>
            {/* Step 5: Output the styles in the head  */}
            {this.props.styles}
          </Head>
          <body>
          <Main />
          <NextScript />
          </body>
        </Html>
    );
  }
}
