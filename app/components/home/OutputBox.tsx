import QRCode from "react-qr-code";

interface Props {
  shortURL: string;
}

export default function OutputBox({ shortURL }: Props) {
  const openLink = () => {
    window.open(shortURL, "_blank");
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shortURL);
    // Todo: instead of this alert chnage the icon of the button
    alert("Short URL copied to clipboard");
  };

  const handleDownlaod = () => {};

  return (
    <div className="custom-box gap-8">
      <div className="flex flex-col gap-3">
        <label
          htmlFor="short"
          className="text-accent font-light text-xs md:text-sm"
        >
          Short Link
        </label>
        <div className="flex flex-wrap gap-2">
          <input
            id="short"
            type="url"
            readOnly
            value={shortURL}
            className="truncate"
            onClick={openLink}
          />
          <button type="button" className="flex-1" onClick={handleCopy}>
            COPY
          </button>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-3">
        <label
          htmlFor="qr"
          className="text-accent font-light text-xs md:text-sm"
        >
          QR Code
        </label>
        <div className="flex flex-col md:flex-row gap-9">
          <div className="aspect-square max-w-60 md:w-100 bg-fore rounded-md p-4">
            <QRCode
              // todo: put domain
              value={shortURL}
              size={256}
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div className="flex flex-col gap-8">
            <h4 className="text-sm">
              Scan to open{" "}
              <a
                className="text-accent font-bold"
                href={shortURL}
                target="_blank"
              >
                {/* todo: put domain */}
                {shortURL}
              </a>{" "}
              on any device. Download as PNG to use in print or digital
              materials.
            </h4>
            <button type="button" className="Sec w-fit">
              DOWNLOAD PNG &#10515;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
