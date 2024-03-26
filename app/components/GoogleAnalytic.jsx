import Script from "next/script";
export default function GoogleAnalytic() {
  return (
    <>
      <Script
        strategy="worker"
        async
        src={`https://www.googletagmanager.com/gtag/js? 
    id=G-J4KQVRLWEN`}
      ></Script>
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-J4KQVRLWEN');
      `,
        }}
      ></Script>
    </>
  );
}
