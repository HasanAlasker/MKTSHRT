"use client";
import { useState } from "react";

interface Props {
  setShortLink: (shortUrl: string) => void;
}

export default function URLinput({ setShortLink }: Props) {
  const [longUrl, setLongUrl] = useState<string>();

  const generateCode = () => {
    if (!longUrl) return;
    // generate a random 6 digit code here
    // check the db if it exists
    // if yes regenerate a new one
    // save it to the db
    // show it to the user
    const length = 6;
    const allowedChars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const charsLength = allowedChars.length;

    let code = "";

    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * charsLength);
      code += allowedChars[randomIndex];
    }
    setShortLink(code);
  };

  // TODO: when you now what the website domain is add it before the short link
  // example: shorter/9We4EM.netlify.app
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
