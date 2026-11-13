import PageSeo from "@/components/shared/page-seo";
import { Separator } from "@/components/ui/separator";

 const ReferEarnPage = () => {
  return (
    <div className="w-full flex justify-center mt-20 font-outfit bg-background ">
      <PageSeo
        title="Refer & Earn - Hisaab Sathi"
        description="Refer courier and logistics businesses to Hisaab Sathi and earn rewards. Read the referral programme terms."
        path="/refer-and-earn"
      />
      <div className="w-full max-w-7xl mx-auto py-3 px-4 flex flex-col gap-8">
        <div>
          <h1 className="text-3xl md:text-[48px] font-bold">Refer & Earn Policy</h1>
          <p className="italic text-gray-500 mt-2">Last updated: 11/01/2026</p>
          <Separator className="bg-gray-200 mt-6" />
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Eligibility</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Only registered Hisaab Sathi users can refer.</li>
            <li>Referred users must be new customers.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3 ">
          <h2 className="text-xl font-semibold">Referral Rewards</h2>
          <p className="text-gray-700">
            Rewards are credited only after the referred user completes a paid subscription.
          </p>
          <p className="text-gray-700">
            Rewards may be discounts, credits, or benefits decided by Hisaab Sathi.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Restrictions</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Self-referrals are not allowed.</li>
            <li>Fake accounts or abuse will lead to disqualification.</li>
            <li>Rewards are non-transferable and non-cashable.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Program Changes</h2>
          <p className="text-gray-700">
            Hisaab Sathi reserves the right to modify or terminate the referral program at any time without prior notice.
          </p>
        </div>
      </div>
    </div>
  );
};
export default ReferEarnPage;