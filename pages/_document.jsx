import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="https://images-ext-2.discordapp.net/external/Vw5oASgohJBUOihvw1GVfvXaA0fnDVPqfEyAcqeNW3s/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/993587710356893816/e5a3760d2944097859d2adaf8922289b.webp?width=625&height=625" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="description"
            content="Ön ayarlı kanala katılarak siz ve arkadaşlarınız için geçici bir ses kanalı oluşturan ve kanalda kimse kalmadığında silen Discord botu."
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@TrefaxBot" />
          <meta name="twitter:creator" content="@TrefaxBot" />
          <meta property="og:url" content="https://trefax.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Trefax Bot" />
          <link
            rel="icon"
            href="https://images-ext-2.discordapp.net/external/Vw5oASgohJBUOihvw1GVfvXaA0fnDVPqfEyAcqeNW3s/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/993587710356893816/e5a3760d2944097859d2adaf8922289b.webp?width=625&height=625"
            type="image/x-icon"
          />
          <meta
            <meta property="og:image" content="/img/resim_2022-08-03_212655016.jpg" />
            property="og:description"
            content="Ön ayarlı kanala katılarak siz ve arkadaşlarınız için geçici bir ses kanalı oluşturan ve kanalda kimse kalmadığında silen Discord botu."
          />
         
          <meta property="og:image:alt" content="Trefax Bot" />
          <meta property="og:locale" content="en_GB" />
          <meta
            property="og:site_name"
            content="Trefax Bot"
          />
          <meta name="theme-color" content="#6108dd" />
          <link rel="icon" href="/img/resim_2022-08-03_212655016.jpg" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/nprogress.css" />
    
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
