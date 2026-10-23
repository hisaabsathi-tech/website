import { Separator } from "@/components/ui/separator";

const PrivacyPolicyPage = () => {
  return (
    <div className="w-full flex justify-center mt-20 font-outfit bg-background">
      <div className="w-full max-w-7xl mx-auto py-3 px-4 flex flex-col gap-8 pb-10">
        <div>
          <h1 className="text-3xl md:text-[48px] font-bold">Privacy Policy</h1>
          <p className="text-gray-700 text-sm md:text-lg font-medium mt-4">
            Hisaab Sathi Connect ("the App") is an application designed to help
            courier and logistics businesses manage orders, Delivery Run Sheets
            (DRS), delivery activities, and employee attendance. This Privacy
            Policy explains how the App collects, uses, stores, and shares
            information when you use it.
          </p>
          <p className="italic text-gray-500 mt-4">Last updated: 21.10.2026</p>
          <Separator className="bg-gray-200 mt-6" />
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p className="text-gray-700">Developer: Hisaab Sathi</p>
          <p className="text-gray-700">
            Contact: <a className="underline" href="mailto:tech.hisaabsathi@gmail.com">tech.hisaabsathi@gmail.com</a>
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">2. Information We May Collect</h2>
          <p className="text-gray-700">
            Depending on the features enabled and the permissions granted, the
            App may process the following information:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Personal information: Name, phone number, email address, employee or account identifiers, and organization details.</li>
            <li>Location information: Device location, if location-based delivery tracking or attendance features are enabled and the required permission is granted.</li>
            <li>Photos and files: Images, documents, or other files that you choose to upload or capture through the App.</li>
            <li>Camera information: Camera access for barcode scanning or other supported operational features.</li>
            <li>Operational information: Order details, delivery status, DRS records, attendance records, and related business information.</li>
            <li>Technical information: App diagnostics, device information, and usage information where collected by the App or its integrated services.</li>
          </ul>
          <p className="text-gray-700">
            The information actually collected depends on the features you use
            and the App&apos;s technical configuration.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">3. How We Use Information</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Authenticate users and manage account access.</li>
            <li>Display and manage orders, DRS records, and delivery activities.</li>
            <li>Support employee attendance and authorized location-based functions.</li>
            <li>Process uploaded documents, images, and barcode scans.</li>
            <li>Maintain operational records and synchronize data with the associated business platform.</li>
            <li>Protect the App, troubleshoot errors, and improve reliability.</li>
            <li>Respond to support requests and comply with applicable legal obligations.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">4. Location Permissions</h2>
          <p className="text-gray-700">
            If location access is implemented, location information may be used
            for delivery tracking or attendance functions. Location collection,
            including whether it occurs in the background, will depend on the
            specific feature, device permissions, and App configuration. Location
            access will not be used for purposes unrelated to the disclosed
            functionality.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">5. Data Sharing</h2>
          <p className="text-gray-700">
            Hisaab Sathi Connect may share or make information accessible to
            authorized parties as necessary to provide and maintain the App&apos;s
            functionality.
          </p>
          <p className="text-gray-700">
            <strong>Sharing with Your Organization:</strong> Your account
            information, order details, delivery records, DRS information,
            attendance records, and other relevant business data may be
            accessible to your organization and its authorized administrators or
            employees according to their assigned roles and permissions.
          </p>
          <p className="text-gray-700">
            <strong>Service Providers:</strong> We may use third-party service
            providers for application hosting, database management, data
            storage, infrastructure, security, technical support, and
            application performance monitoring. These providers may process
            account details, business records, uploaded files, technical logs,
            and other data necessary to provide their services.
          </p>
          <p className="text-gray-700">
            <strong>Communication Services:</strong> If email, messaging, or
            notification services are integrated into the App, relevant
            information, such as contact details and message content, may be
            processed by those providers to deliver the requested communications.
          </p>
          <p className="text-gray-700">
            <strong>Legal Requirements:</strong> We may disclose information
            when required by applicable law, a valid legal request, or when
            necessary to protect the rights, safety, and security of users,
            organizations, or the App.
          </p>
          <p className="text-gray-700">
            We take reasonable steps to ensure that service providers process
            information only for authorized purposes and apply appropriate
            safeguards, subject to the agreements and obligations applicable to
            those providers.
          </p>
          <p className="text-gray-700">
            We do not sell users&apos; personal information. We do not claim that
            information is never shared with third parties; the actual sharing
            of information depends on the features used, the services integrated
            into the App, and applicable legal requirements.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">6. Data Security</h2>
          <p className="text-gray-700">
            We use appropriate technical and organizational safeguards intended
            to protect information against unauthorized access, loss, misuse,
            and disclosure. No method of electronic storage or transmission can
            be guaranteed to be completely secure.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">7. Data Retention and Deletion</h2>
          <p className="text-gray-700">
            We retain personal information and business records for as long as
            necessary to provide Hisaab Sathi Connect, support business
            operations, maintain security, resolve disputes, and comply with
            applicable legal obligations.
          </p>
          <p className="text-gray-700">
            Account information is retained while the account is active and for
            the period necessary to process account closure and deletion. Order
            details, delivery records, Delivery Run Sheet (DRS) information,
            attendance records, and uploaded documents may be retained according
            to the operational requirements of the relevant organization and
            applicable legal obligations. Technical logs and diagnostic
            information are retained only for as long as reasonably necessary
            for security, troubleshooting, and service maintenance.
          </p>
          <p className="text-gray-700">
            Users may request assistance with account deletion or the deletion
            of their personal information by contacting{" "}
            <a className="underline" href="mailto:tech.hisaabsathi@gmail.com">tech.hisaabsathi@gmail.com</a>.
            We will review and process valid requests in accordance with
            applicable laws and our data deletion procedures.
          </p>
          <p className="text-gray-700">
            Where deletion is applicable, we will delete or anonymize the
            relevant personal information from active systems, subject to legal
            obligations and legitimate retention requirements. Information
            stored in backup systems may remain for a limited period until it is
            deleted or overwritten through the normal backup retention process.
          </p>
          <p className="text-gray-700">
            Certain business records may need to be retained where required by
            law or necessary for legitimate business purposes, such as resolving
            disputes, maintaining required records, or preventing fraud. Where
            information must be retained, access will be limited to the extent
            reasonably necessary for the relevant purpose.
          </p>
          <p className="text-gray-700">
            Deleting an account may not automatically remove business records
            that an organization is required to retain. Users may need to
            contact their organization&apos;s administrator for assistance with
            organization-managed information.
          </p>
          <p className="text-gray-700">
            For privacy questions or deletion requests, contact{" "}
            <a className="underline" href="mailto:tech.hisaabsathi@gmail.com">tech.hisaabsathi@gmail.com</a>.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">8. Children&apos;s Privacy</h2>
          <p className="text-gray-700">
            Hisaab Sathi Connect is designed for business owners, courier and
            logistics operators, delivery personnel, and other authorized
            employees who use the App for professional purposes. The App is not
            intended for children and is not directed toward children.
          </p>
          <p className="text-gray-700">
            We do not knowingly collect personal information from children as a
            target audience. Access to the App is intended for users authorized
            by their organization.
          </p>
          <p className="text-gray-700">
            If we become aware that personal information has been collected from
            a child in violation of applicable laws, we will take appropriate
            steps to review the situation and delete the information where
            required by law.
          </p>
          <p className="text-gray-700">
            If you believe that a child has provided personal information through
            the App, please contact us at{" "}
            <a className="underline" href="mailto:tech.hisaabsathi@gmail.com">tech.hisaabsathi@gmail.com</a>{" "}
            so that we can investigate and take appropriate action.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">9. Changes to This Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy when our practices or features
            change. The updated version will be published at the privacy policy
            URL with a revised effective date.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">10. Contact Us</h2>
          <p className="text-gray-700">
            For questions about this Privacy Policy or requests concerning your
            information, contact:
          </p>
          <p className="text-gray-700">
            Email: <a className="underline" href="mailto:tech.hisaabsathi@gmail.com">tech.hisaabsathi@gmail.com</a>
            <br />
            App: Hisaab Sathi Connect
            <br />
            Developer: Hisaab Sathi
          </p>
        </div>
      </div>
    </div>
  );
};
export default PrivacyPolicyPage;