import Label from "./Label";

export default function Hero() {
  return (
    <div className="flex flex-col text-center gap-8 justify-center items-center mt-15">
      <Label />
      <div className="font-black md:mt-5">
        <h1>MAKE IT</h1>
        <h1 className="text-accent">SHORT.</h1>
      </div>

      <p className="text-sec">Paste a long url → get a short link + QR code</p>
    </div>
  );
}
