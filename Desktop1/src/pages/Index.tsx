import {
  FileText,
  Edit,
  Download,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="w-full h-16 bg-white border-b border-gray-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl lg:text-3xl font-medium text-black">
                DocGenie
              </span>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
              <a
                href="#"
                className="text-lg lg:text-xl text-black hover:text-gray-700 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-lg lg:text-xl text-black hover:text-gray-700 transition-colors"
              >
                Services
              </a>
              <a
                href="#"
                className="text-lg lg:text-xl text-black hover:text-gray-700 transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden p-2">
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-black"></div>
                <div className="w-full h-0.5 bg-black"></div>
                <div className="w-full h-0.5 bg-black"></div>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
            Create Legal Documents in Seconds
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-black max-w-2xl mx-auto">
            Upload your template once. Automate forever.
          </p>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-docgenie-blue rounded-[22px] shadow-lg px-6 md:px-12 lg:px-16 py-12">
            <h2 className="text-xl md:text-2xl font-bold text-black text-center mb-12">
              How it works?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="max-w-xs mx-auto">
                  <h3 className="text-lg md:text-xl font-bold text-black mb-2">
                    Step 1
                  </h3>
                  <p className="text-lg md:text-xl text-black leading-relaxed">
                    Select a document template from our extensive library.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <Edit className="w-6 h-6 text-white" />
                </div>
                <div className="max-w-xs mx-auto">
                  <h3 className="text-lg md:text-xl font-bold text-black mb-2">
                    Step 2
                  </h3>
                  <p className="text-lg md:text-xl text-black leading-relaxed">
                    Enter your specific information and details.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <div className="max-w-xs mx-auto">
                  <h3 className="text-lg md:text-xl font-bold text-black mb-2">
                    Step 3
                  </h3>
                  <p className="text-lg md:text-xl text-black leading-relaxed">
                    Generate your document and download instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-docgenie-blue rounded-[22px] shadow-lg px-6 md:px-12 lg:px-16 py-12">
            <h2 className="text-xl md:text-2xl font-bold text-black text-center mb-12">
              Testimonials
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-[22px] shadow-lg p-6">
                <p className="text-lg md:text-xl text-black mb-4 leading-relaxed">
                  "DocGenie has streamlined our document creation process. It's
                  efficient and easy to use."
                </p>
                <p className="text-lg md:text-xl text-docgenie-gray">
                  By Priya Sharma, lawyer.
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white rounded-[22px] shadow-lg p-6">
                <p className="text-lg md:text-xl text-black mb-4 leading-relaxed">
                  "An indispensable tool for any professional needing quick
                  document solutions."
                </p>
                <p className="text-lg md:text-xl text-docgenie-gray">
                  Rahul Verma, business consultant
                </p>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white rounded-[22px] shadow-lg p-6">
                <p className="text-lg md:text-xl text-black mb-4 leading-relaxed">
                  "I love how easy it is to automate my document templates with
                  DocGenie."
                </p>
                <p className="text-lg md:text-xl text-docgenie-gray">
                  Anjali Mehta, freelancer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-docgenie-blue border-t border-gray-200 shadow-inner mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-center md:justify-end items-center space-x-4">
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <Facebook className="w-8 h-8" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <Twitter className="w-8 h-8" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
