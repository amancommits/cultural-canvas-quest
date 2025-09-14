import { DashboardHeader } from "@/components/DashboardHeader";
import { FeatureCards } from "@/components/FeatureCards";
import { MonumentShowcase } from "@/components/MonumentShowcase";
import { QuickActions } from "@/components/QuickActions";
import konarkHero from "@/assets/konark-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-warm">
      <DashboardHeader />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={konarkHero} 
            alt="Konark Sun Temple" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        
        <div className="relative container px-4 py-16 lg:py-24">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Explore India's 
              <span className="bg-gradient-heritage bg-clip-text text-transparent"> Heritage</span> 
              <br />with Modern Technology
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Discover ancient monuments through immersive 3D models, augmented reality experiences, 
              and AI-powered cultural storytelling.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-heritage text-primary-foreground px-8 py-3 rounded-md font-semibold hover:shadow-heritage hover:scale-105 transition-all duration-300 shadow-soft">
                Start Exploring
              </button>
              <button className="bg-gradient-accent text-accent-foreground px-8 py-3 rounded-md font-semibold hover:shadow-glow hover:scale-105 transition-all duration-300">
                Try AR Experience
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container px-4 py-12 space-y-12">
        <FeatureCards />
        <MonumentShowcase />
        <QuickActions />
      </main>
    </div>
  );
};

export default Index;
