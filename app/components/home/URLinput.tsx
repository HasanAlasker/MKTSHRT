import React from "react";

export default function URLinput() {
  return (
    <div className="custom-box ">
      <label htmlFor="long" className="text-accent font-light text-xs md:text-sm">
        Long URL
      </label>
      <div className="flex flex-wrap gap-2">
        <input  id="long" type="text" placeholder="https://long-url.com/some/long/path" className="truncate" />
        <button type="button" className="Pri flex-1">SHORTEN</button>
      </div>
    </div>
  );
}
