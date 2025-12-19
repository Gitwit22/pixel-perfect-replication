import { Phone } from "lucide-react";
import { company, footer } from "@/data/content";

export const Footer = () => {
  const handlePhoneClick = async () => {
    if (window.gtag) {
      window.gtag("event", "phone_click", {
        event_category: "lead",
        event_label: "footer_phone",
        value: 1,
      });
    }
    try {
      await fetch("/api/event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: "phone_click",
          page: window.location.href,
          ts: Date.now(),
        }),
      });
    } catch {}
  };

  return (
    <footer className="bg-neu-surface text-text-primary py-12 border-t border-neu-inset shadow-neu-inset ring-1 ring-white/60 ring-inset">
      <div className="container-narrow text-center">
        <img src="/aa-pest-logo-horizontal.svg" alt="AA Pest Control Logo" className="mx-auto mb-2 w-48 h-auto" />
        <h3 className="text-2xl font-bold mb-2">{company.name}</h3>
        <p className="text-text-muted text-base mb-6">{footer.tagline}</p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-0 sm:gap-0 mb-6 w-full max-w-lg mx-auto">
          <a
            href={`tel:${company.phoneTel}`}
            onClick={handlePhoneClick}
            className="inline-flex items-center gap-2 bg-neu-accent text-neu-accent-foreground font-bold px-8 py-4 rounded-neu-md shadow-neu-raised-lg ring-1 ring-white/60 ring-inset transition-all hover:opacity-90 active:scale-95 text-lg border-r-2 border-[#2F6B4F]"
            style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
          >
            <Phone className="h-5 w-5" />
            {company.phone}
          </a>
          <a
            href="#inspection-form"
            className="inline-block font-bold px-8 py-4 rounded-neu-md border-2 border-[#2F6B4F] text-[#2F6B4F] bg-white shadow-neu-raised-lg transition-all hover:bg-[#E3E3E3] hover:text-[#4A5D6B]"
            style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, boxShadow: '0 4px 16px #2F6B4F22' }}
          >
            Request Inspection
          </a>
        </div>

        <p className="text-text-muted text-sm mb-4">{footer.license}</p>


        <div className="flex justify-center gap-4 text-sm text-text-muted mb-8">
          <button
            type="button"
            className="hover:text-text-primary transition-colors underline"
            onClick={() => {
              const modal = document.getElementById('privacy-modal');
              if (modal) modal.style.display = 'block';
            }}
          >
            Privacy Policy
          </button>
          <span>|</span>
          <a href="/terms" className="hover:text-text-primary transition-colors">
            Terms of Service
          </a>
        </div>

        {/* Privacy Policy Modal */}
        <div
          id="privacy-modal"
          style={{ display: 'none' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        >
          <div className="bg-white text-left max-w-2xl w-full rounded-neu-lg shadow-neu-raised-lg p-8 relative overflow-y-auto max-h-[90vh]">
            <button
              className="absolute top-3 right-3 text-xl font-bold text-gray-500 hover:text-gray-800"
              onClick={() => {
                const modal = document.getElementById('privacy-modal');
                if (modal) modal.style.display = 'none';
              }}
              aria-label="Close Privacy Policy"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
            <div className="space-y-4 text-sm text-gray-800">
              <p><strong>All American Pest Control</strong> ("we", "us", or "our") operates www.AAPestpro.com (the "Site"). This page informs you of our policies regarding the collection, use, and disclosure of Personal Information we receive from users of the Site.</p>
              <h3 className="font-semibold mt-4">Information Collection and Use</h3>
              <p>While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include but is not limited to your name, email address, phone number, and postal address ("Personal Information").</p>
              <h3 className="font-semibold mt-4">Log Data</h3>
              <p>Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages, and other statistics.</p>
              <h3 className="font-semibold mt-4">Communications</h3>
              <p>We may use your Personal Information to contact you with newsletters, marketing, or promotional materials and other information that pertains to our services. You may opt-out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.</p>
              <h3 className="font-semibold mt-4">Cookies</h3>
              <p>Cookies are files with small amounts of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive. Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.</p>
              <h3 className="font-semibold mt-4">Security</h3>
              <p>The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>
              <h3 className="font-semibold mt-4">Changes to This Privacy Policy</h3>
              <p>This Privacy Policy is effective as of [Effective Date] and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page. We reserve the right to update or change our Privacy Policy at any time, and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.</p>
              <h3 className="font-semibold mt-4">Contact Us</h3>
              <p>If you have any questions about this Privacy Policy, please contact us at 804-489-7465</p>
            </div>
          </div>
        </div>

        <p className="text-text-muted text-xs">
          © {new Date().getFullYear()} {company.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
