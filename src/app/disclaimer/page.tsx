import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Legal Disclaimer - Mesothelioma Lawyer Nearby',
    description: 'Legal disclaimer for Mesothelioma Lawyer Nearby. Important information about our legal referral services.',
    alternates: {
        canonical: 'https://mesotheliomalawyernearby.com/disclaimer',
    },
}

export default function DisclaimerPage() {
    return (
        <main className="min-h-screen bg-background py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto prose prose-gray">
                    <h1 className="text-4xl font-bold mb-8">Legal Disclaimer</h1>
                    <p className="text-muted-foreground mb-8">Last updated: January 24, 2026</p>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                        <p className="font-semibold text-yellow-800">
                            IMPORTANT: Please read this disclaimer carefully before using our services.
                        </p>
                    </div>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Not a Law Firm</h2>
                        <p>
                            Mesothelioma Lawyer Nearby is a legal referral service operated by Widescope Industries LLC.
                            <strong> We are NOT a law firm and do NOT provide legal advice.</strong> We connect potential
                            clients with attorneys who may be able to assist with their mesothelioma and asbestos-related cases.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">No Attorney-Client Relationship</h2>
                        <p>
                            Viewing this website, filling out a contact form, or communicating with our team does NOT create
                            an attorney-client relationship. An attorney-client relationship is only established when you
                            formally engage an attorney and sign a retainer agreement with that specific attorney or law firm.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">No Guarantee of Results</h2>
                        <p>
                            Every mesothelioma case is unique. The outcome of any legal matter depends on many factors, including:
                        </p>
                        <ul className="list-disc pl-6 mb-4">
                            <li>The specific facts and circumstances of your case</li>
                            <li>The evidence available</li>
                            <li>Applicable state and federal laws</li>
                            <li>The defendants involved</li>
                            <li>Many other variables</li>
                        </ul>
                        <p>
                            <strong>We make no guarantees or promises about the outcome of your case.</strong> Prior results
                            obtained by attorneys in our network do not guarantee or predict similar results in future cases.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Informational Purposes Only</h2>
                        <p>
                            All information on this website is provided for general informational purposes only. This information:
                        </p>
                        <ul className="list-disc pl-6 mb-4">
                            <li>Is not intended as legal advice</li>
                            <li>Should not be relied upon as legal advice</li>
                            <li>May not apply to your specific situation</li>
                            <li>Is not a substitute for professional legal counsel</li>
                        </ul>
                        <p>
                            If you need legal advice, please consult with a qualified attorney who can evaluate your
                            specific circumstances.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Medical Information Disclaimer</h2>
                        <p>
                            Any medical information on this website is for general educational purposes only and should
                            not be considered medical advice. We are not medical professionals. If you have health concerns
                            related to asbestos exposure, please consult with a qualified healthcare provider.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Statute of Limitations Warning</h2>
                        <p className="text-red-700 font-semibold">
                            IMPORTANT: Every state has time limits (statutes of limitations) for filing mesothelioma and
                            asbestos-related lawsuits. These deadlines vary by state and typically begin when you are
                            diagnosed or should have known about your illness.
                        </p>
                        <p className="mt-4">
                            If you believe you have a potential claim, you should consult with an attorney as soon as
                            possible to ensure you do not miss any applicable deadlines.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
                        <p>
                            Our website may contain links to third-party websites. We are not responsible for the content,
                            accuracy, or privacy practices of these external sites. Inclusion of any link does not imply
                            endorsement by Mesothelioma Lawyer Nearby.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Accuracy of Information</h2>
                        <p>
                            While we strive to provide accurate and up-to-date information, we make no warranties or
                            representations about the accuracy, completeness, or reliability of any information on this
                            website. Laws change frequently, and information may become outdated.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                        <p>
                            To the fullest extent permitted by law, Mesothelioma Lawyer Nearby, Widescope Industries LLC,
                            and our officers, directors, employees, and agents disclaim all liability for any damages
                            arising from your use of this website or reliance on any information provided herein.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Veteran-Owned Business</h2>
                        <p>
                            Widescope Industries LLC is a Service-Disabled Veteran-Owned Small Business (SDVOSB) certified
                            by the U.S. Small Business Administration. Our certification can be verified through the SBA
                            Veteran Small Business Certification program.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                        <p>If you have questions about this Legal Disclaimer, please contact us:</p>
                        <ul className="list-none pl-0 mt-4">
                            <li><strong>Widescope Industries LLC</strong></li>
                            <li>316 Brandywine Ave, Streetman, TX 75859</li>
                            <li>Email: info@mesotheliomalawyernearby.com</li>
                            <li>Phone: (214) 699-4543</li>
                        </ul>
                    </section>
                </div>
            </div>
        </main>
    )
}
