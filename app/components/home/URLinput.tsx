"use client";
import { useState } from "react";

interface Props {
  setShortLink: (shortUrl: string) => void;
}

export default function URLinput({ setShortLink }: Props) {
  const [longUrl, setLongUrl] = useState<string>();

  const generateCode = () => {
    setShortLink(longUrl!)
  };

  return (
    <div className="custom-box ">
      <label
        htmlFor="long"
        className="text-accent font-light text-xs md:text-sm"
      >
        Long URL
      </label>
      <div className="flex flex-wrap gap-2">
        <input
          id="long"
          type="text"
          placeholder="https://long-url.com/some/long/path"
          className="truncate"
          value={longUrl ?? ""}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <button type="button" className="Pri flex-1" onClick={generateCode}>
          SHORTEN &#10132;
        </button>
      </div>
    </div>
  );
}
