"use client";

import Script from "next/script";

const KofiSupport = () => {
  const kofi = `
  <script>
    kofiWidgetOverlay.draw('benjaminnkem', {
      'type': 'floating-chat',
      'floating-chat.donateButton.text': 'Support Us',
      'floating-chat.donateButton.background-color': '#794bc4',
      'floating-chat.donateButton.text-color': '#fff'
    });
  </script>
  `;

  return (
    <>
      <Script src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"></Script>
      <div dangerouslySetInnerHTML={{ __html: kofi }}></div>
    </>
  );
};

export default KofiSupport;
