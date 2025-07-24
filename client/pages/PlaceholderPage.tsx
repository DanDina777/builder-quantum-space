import Navigation from "@/components/Navigation";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-medical-blue-light">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h1>
          <p className="text-lg text-medical-gray mb-8 max-w-2xl mx-auto">
            {description}
          </p>

          <div className="bg-white rounded-lg p-8 shadow-sm border border-medical-gray-light">
            <div className="text-6xl mb-4">🚧</div>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Page Under Construction
            </h2>
            <p className="text-medical-gray">
              This section is coming soon! We're working hard to bring you
              comprehensive information about {title.toLowerCase()}.
            </p>
            <p className="text-sm text-medical-gray mt-4">
              Continue prompting to fill in this page's content if you'd like to
              see it developed further.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
