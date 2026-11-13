import PageSeo from "@/components/shared/page-seo";
import { Separator } from "@/components/ui/separator";

const RefundPolicyPage = () => {
  return (
    <div className="w-full flex justify-center mt-20 font-outfit bg-background ">
      <PageSeo
        title="Refund Policy - Hisaab Sathi"
        description="Hisaab Sathi's refund and cancellation policy for subscription plans."
        path="/refund-policy"
      />
      <div className="w-full max-w-7xl mx-auto py-3 px-4 flex flex-col gap-8">
        <div>
          <h1 className="text-3xl md:text-[48px]  font-bold">Refund Policy</h1>
          <p className="italic text-gray-500 mt-2">Last updated: 11/01/2026</p>
          <Separator className="bg-gray-200 mt-6" />
        </div>

        <div className="flex flex-col gap-3 ">
          <h2 className="text-xl font-semibold">Subscription Payments</h2>
          <p className="text-gray-700">
            Hisaab Sathi operates on a subscription-based SaaS model.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>All plans are billed in advance.</li>
            <li>Subscriptions renew automatically unless cancelled.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">No Refund Policy</h2>
          <p className="text-gray-700">All payments are non-refundable.</p>
          <p className="text-gray-700">
            Partial usage, non-usage, early cancellation, or plan downgrade does
            not qualify for refunds.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Exceptions</h2>
          <p className="text-gray-700">
            Refunds may be issued only in the following cases:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Duplicate payment charged due to a technical error.</li>
            <li>Incorrect amount charged due to system failure.</li>
          </ul>
          <p className="text-gray-700">
            All refund decisions are final and at the sole discretion of Hisaab
            Sathi.
          </p>
        </div>
      </div>
    </div>
  );
};
export default RefundPolicyPage;