import React from "react";

export default function OutputBox() {
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
            defaultValue={"https://alasker.dev"}
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
        <div className="flex gap-9">
          <div className="aspect-square h-45 bg-fore rounded-sm"></div>
          <div className="flex flex-col gap-8">
            <h4 className="text-sm">
              Scan to open sho.rt/a3h5yp on any device. Download as PNG to use
              in print or digital materials.
            </h4>
            <button type="button" className="Sec w-fit">
              DOWNLOAD PNG
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
