"use client";
import { shortenLink } from "@/app/lib/linkEndpoints";
import { useState } from "react";

interface Props {
  setShortLink: (shortUrl: string) => void;
}

export default function URLinput({ setShortLink }: Props) {
  const [longUrl, setLongUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  const handleShorten = async () => {
    setErr(false);
    if (!longUrl) return;
    try {
      new URL(longUrl); // throws if invalid
    } catch {
      setErr(true);
      return;
    }
    try {
      setLoading(true);
      const response = await shortenLink(longUrl);
      console.log(response);
      if (response?.ok) setShortLink(response.data?.shortCode!);
      else setErr(true);
    } catch (error) {
      setErr(true);
    } finally {
      setLoading(false);
    }
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
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <button
          type="button"
          disabled={loading}
          className={`Pri flex-1 ${loading && "opacity-50"} `}
          onClick={handleShorten}
        >
          SHORTEN &#10132;
        </button>
      </div>
      {err && (
        <span className="text-red-500 text-xs">
          Something went wrong. Try again.
        </span>
      )}
    </div>
  );
}
