import React from "react";
import QRCode from "react-qr-code";

interface Props {
  shortURL: string;
}

const handleCopy = () => {};
const handleDownlaod = () => {};
const openLink = () => {};

export default function OutputBox({ shortURL }: Props) {
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
          />
          <button type="button" className="flex-1">
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
          <div className="aspect-square max-w-60 bg-fore rounded-md p-4">
            <QRCode
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
                href={"https://" + shortURL}
                target="_blank"
              >
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
