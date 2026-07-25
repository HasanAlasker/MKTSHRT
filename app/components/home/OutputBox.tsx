"use client";
import { DOMAIN } from "@/app/constants/Domain";
import { ArrowDownToLine, Check, Clipboard } from "lucide-react";
import { useState } from "react";
import QRCode from "react-qr-code";

interface Props {
  shortCode: string;
}

export default function OutputBox({ shortCode: shortURL }: Props) {
  const [justCopied, setCopied] = useState(false);

  const openLink = () => {
    window.open(shortURL, "_blank");
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(DOMAIN + shortURL);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 700);
  };

  const handleDownload = () => {
    const svg = document.getElementById("qr-code-svg");
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const blob = new Blob([svgData], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${shortURL}-qr.svg`;
    link.click();

    URL.revokeObjectURL(url);
  };

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
            value={DOMAIN + shortURL}
            className="truncate"
            onClick={openLink}
          />
          <button type="button" className="flex-1" onClick={handleCopy}>
            COPY {justCopied ? <Check size={18} /> : <Clipboard size={17} />}
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
              id="qr-code-svg"
              value={DOMAIN + shortURL}
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
                {DOMAIN + shortURL}
              </a>{" "}
              on any device. Download as PNG to use in print or digital
              materials.
            </h4>
            <button
              type="button"
              className="Sec w-fit"
              onClick={handleDownload}
            >
              DOWNLOAD SVG <ArrowDownToLine size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
