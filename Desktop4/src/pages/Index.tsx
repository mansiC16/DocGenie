import {
  Upload,
  Settings,
  Download,
  FolderOpen,
  Users,
  FileText,
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-docgenie-blue rounded-[22px] p-6 shadow-lg h-48 flex flex-col justify-center">
      <div className="mb-4">{icon}</div>
      <h3 className="font-bold text-2xl text-black mb-2">{title}</h3>
      <p className="text-black text-xl font-normal">{description}</p>
    </div>
  );
};

export default function Index() {
  const features = [
    {
      icon: <Upload className="w-7 h-7 text-black" />,
      title: "Upload Format Once",
      description: "Upload Documents and tag variable fields.",
    },
    {
      icon: <Settings className="w-7 h-7 text-black" />,
      title: "Auto Form Generation",
      description: "Dynamic forms are auto created from tagged fields.",
    },
    {
      icon: <Download className="w-7 h-7 text-black" />,
      title: "One Click Document Output",
      description: "Download or print Word / PDF documents instantly.",
    },
    {
      icon: <FolderOpen className="w-7 h-7 text-black" />,
      title: "Template Library",
      description: "Save templates and reuse them - no repeated uploads.",
    },
    {
      icon: <Users className="w-7 h-7 text-black" />,
      title: "Client Data Management",
      description: "Save previous client details for future reuse.",
    },
    {
      icon: <FileText className="w-7 h-7 text-black" />,
      title: "Smart Templates",
      description: "Intelligent document generation with advanced features.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full h-[65px] bg-white border-b border-docgenie-gray shadow-lg relative">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-docgenie-primary" />
            </div>
            <h1 className="text-4xl font-medium text-black">DocGenie</h1>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            <button className="px-6 py-2 bg-docgenie-primary text-white font-bold text-xl rounded-[10px] hover:bg-blue-600 transition-colors">
              Login
            </button>
            <button className="px-6 py-2 bg-white border-2 border-docgenie-primary text-docgenie-primary font-bold text-xl rounded-[10px] hover:bg-blue-50 transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center py-8">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Create Legal Documents in Seconds
          </h2>
          <p className="text-2xl text-black font-normal">
            Upload your template once. Automate forever.
          </p>
        </section>

        {/* Features Grid */}
        <section className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-docgenie-blue border-t border-docgenie-gray shadow-inner mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start">
            {/* Contact Information */}
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-black mb-2">Contact</h3>
              <div className="text-xl text-black">
                <p>Email: support@docgenie.com</p>
                <p>Phone: +91 8567676276</p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-black">Follow Us</h3>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
