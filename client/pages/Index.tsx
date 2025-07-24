import Navigation from "@/components/Navigation";

const articles = [
  {
    id: 1,
    title: "Summer Cold Wave: What You Need to Know",
    summary: "Despite warmer weather, summer colds are surprisingly common. Learn about the unique challenges and prevention strategies for staying healthy during the summer months.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=250&fit=crop&crop=center",
    readTime: "5 min read",
    date: "March 15, 2024"
  },
  {
    id: 2,
    title: "Cold or COVID-19: How to Tell the Difference",
    summary: "With overlapping symptoms, it can be challenging to distinguish between a common cold and COVID-19. Here's what medical experts recommend for accurate identification.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop&crop=center",
    readTime: "7 min read",
    date: "March 12, 2024"
  },
  {
    id: 3,
    title: "Home Remedies for a Runny Nose: What Really Works?",
    summary: "Separate fact from fiction with this evidence-based guide to home remedies. Discover which treatments are scientifically proven to provide relief.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&crop=center",
    readTime: "4 min read",
    date: "March 10, 2024"
  },
  {
    id: 4,
    title: "Building Immunity: Your First Line of Defense",
    summary: "Learn about practical, science-backed methods to strengthen your immune system and reduce your risk of catching a cold this season.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=250&fit=crop&crop=center",
    readTime: "6 min read",
    date: "March 8, 2024"
  },
  {
    id: 5,
    title: "When to Seek Medical Care for Cold Symptoms",
    summary: "Most colds resolve on their own, but certain symptoms warrant professional medical attention. Know when it's time to call your doctor.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop&crop=center",
    readTime: "3 min read",
    date: "March 5, 2024"
  },
  {
    id: 6,
    title: "The Science Behind Cold and Flu Season",
    summary: "Understanding why respiratory illnesses peak during certain times of the year can help you prepare and protect yourself more effectively.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=250&fit=crop&crop=center",
    readTime: "8 min read",
    date: "March 3, 2024"
  }
];

const helpfulTips = [
  {
    icon: "🛡️",
    title: "Boost Your Immune System",
    tips: [
      "Get 7-9 hours of quality sleep",
      "Eat a balanced diet rich in vitamins C and D",
      "Exercise regularly but don't overdo it",
      "Manage stress through meditation or yoga",
      "Stay hydrated with water and herbal teas"
    ]
  },
  {
    icon: "🏥",
    title: "When to See a Doctor",
    tips: [
      "Fever above 103°F (39.4°C)",
      "Symptoms lasting more than 10 days",
      "Severe headache or sinus pain",
      "Difficulty breathing or chest pain",
      "Persistent cough with blood"
    ]
  },
  {
    icon: "🏠",
    title: "Treat a Cold at Home",
    tips: [
      "Rest and avoid strenuous activity",
      "Drink plenty of warm fluids",
      "Use a humidifier or breathe steam",
      "Gargle with salt water for sore throat",
      "Try honey for cough relief (not for babies under 1 year)"
    ]
  }
];

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-medical-blue-light">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Latest News on the Common Cold
            </h1>
            <p className="text-xl text-medical-gray max-w-3xl mx-auto">
              Understand symptoms, treat early, stay healthy
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-semibold text-foreground mb-8">Recent Articles</h2>
            
            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-medical-gray-light"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center text-sm text-medical-gray mb-2">
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 hover:text-medical-blue cursor-pointer transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-medical-gray text-sm leading-relaxed">
                      {article.summary}
                    </p>
                    <button className="mt-4 text-medical-blue font-medium text-sm hover:text-medical-blue-dark transition-colors">
                      Read more →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Helpful Tips</h2>
              
              <div className="space-y-6">
                {helpfulTips.map((section, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-sm border border-medical-gray-light"
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-2xl mr-3">{section.icon}</span>
                      <h3 className="text-lg font-semibold text-foreground">
                        {section.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {section.tips.map((tip, tipIndex) => (
                        <li
                          key={tipIndex}
                          className="text-sm text-medical-gray flex items-start"
                        >
                          <span className="text-medical-blue mr-2 mt-1">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-medical-gray-light mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-medical-gray text-sm">
              © 2024 All About the Common Cold. Information provided for educational purposes only.
              Always consult with healthcare professionals for medical advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
