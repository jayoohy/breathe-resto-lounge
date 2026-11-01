import { disclaimer } from "@/lib/data/disclaimer";

export function DisclaimerBanner() {
  return (
    <div role="note" className="bg-gold px-5 py-1.5 text-center text-xs leading-snug text-ink sm:px-8">
      <span className="font-semibold">{disclaimer.label}</span> {disclaimer.message}
    </div>
  );
}
