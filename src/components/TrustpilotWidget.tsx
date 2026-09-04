import Script from 'next/script';

export default function TrustpilotWidget() {
  return (
    <>
      <div
        className="trustpilot-widget"
        data-locale="en-US"
        data-template-id="5419b6a8b0d04a076446a9ad"
        data-businessunit-id="5f31917fb01f4e00016cc533"
        data-style-height="24px"
        data-style-width="100%"
        data-theme="light"
        style={{ textAlign: 'center' }}
      >
        <b>
          <a
            href="https://www.trustpilot.com/review/mathmakesmart.com"
            target="_blank"
            rel="noopener"
          >
            Trustpilot
          </a>
        </b>
      </div>
      <Script
        src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="afterInteractive"
      />
    </>
  );
}