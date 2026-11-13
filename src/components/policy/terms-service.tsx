import PageSeo from "@/components/shared/page-seo";
import { Separator } from "@/components/ui/separator";

 const TermsOfServicePage = () => {
  return (
    <div className="w-full flex justify-center mt-20 font-outfit bg-background ">
      <PageSeo
        title="Terms of Service - Hisaab Sathi"
        description="The terms that govern your use of Hisaab Sathi billing and invoicing software."
        path="/terms-of-service"
      />
      <div className="w-full max-w-7xl mx-auto py-3 px-4 flex flex-col gap-8">
        <div>
          <h1 className="text-3xl md:text-[48px] font-bold">Terms of Service</h1>
          <p className="italic text-gray-500 mt-2">Last updated: 11/01/2026</p>
          <Separator className="bg-gray-200 mt-6" />
        </div>

        <div className="flex flex-col gap-3 ">
          <h2 className="text-xl font-semibold">Service Overview</h2>
          <p className="text-gray-700">
            Hisaab Sathi is a software platform for courier and logistics partners to manage billing, invoicing, ledgers, and reports.
          </p>
          <p className="text-gray-700">
            We do not provide accounting, tax, or legal advice.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">User Responsibilities</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Ensure correctness of invoices, rate charts, and GST data.</li>
            <li>Maintain confidentiality of login credentials.</li>
            <li>Comply with all applicable laws and regulations.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Subscription & Access</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Access is subject to an active subscription.</li>
            <li>Plan limits are strictly enforced.</li>
            <li>Non-payment may result in suspension or termination.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Limitation of Liability</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Hisaab Sathi is not liable for GST penalties or tax errors.</li>
            <li>No liability for data loss, profit loss, or business interruption.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Termination</h2>
          <p className="text-gray-700">
            We reserve the right to suspend or terminate accounts for misuse, non-payment, or violation of terms.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Governing Law</h2>
          <p className="text-gray-700">
            These terms are governed by the laws of India.
          </p>
        </div>
      </div>
    </div>
  );
};
export default TermsOfServicePage;