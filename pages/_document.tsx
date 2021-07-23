/* eslint-disable @typescript-eslint/ban-ts-comment */
import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'
// @ts-ignore
import outputcss from '!raw-loader!../styles/output.css'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            dangerouslySetInnerHTML={{
              __html: outputcss,
            }}
          />
        </>
      ),
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
