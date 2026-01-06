import { company } from "@/data/content";

type Props = {
  phone?: string;
  quoteUrl?: string;
};

export default function PostCTA({ phone = company.phone, quoteUrl = company.quoteUrl }: Props) {
  return (
    <section className="mt-10 rounded-neu-lg bg-white shadow-neu-raised-lg border border-brand-green/20 p-6">
      <h3 className="text-lg font-bold text-brand-black mb-2">
        Need help now?
      </h3>
      <p className="text-sm text-[#4B5563] mb-4">
        If you’re dealing with bed bugs or roaches, we can inspect, treat, and help prevent it from coming back.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="tel:+18044897465"
          className="inline-flex justify-center items-center rounded-neu-md px-4 py-2 text-sm font-semibold bg-brand-green text-white hover:opacity-90"
        >
          Call {phone}
        </a>

        <a
          href={quoteUrl}
          className="inline-flex justify-center items-center rounded-neu-md px-4 py-2 text-sm font-semibold border border-brand-green text-brand-green hover:bg-brand-gray-light"
        >
          Get a Free Inspection
        </a>
      </div>
    </section>
  );
}
