import { ArrowRight, Scan, MessageCircle, Archive, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import arTechImage from "@/assets/ar-tech.jpg";
import aiChatbotImage from "@/assets/ai-chatbot.jpg";

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  image?: string;
  gradient: string;
  features: string[];
  badge?: string;
}

const features: FeatureCard[] = [
  {
    id: "explore-monuments",
    title: "Explore Monuments",
    description: "Discover 3D models of ancient temples with interactive hotspots and detailed information.",
    icon: Camera,
    gradient: "bg-gradient-heritage",
    features: ["Konark Sun Temple", "Jagannath Temple", "Lingaraj Temple", "360° Views"],
    badge: "Popular"
  },
  {
    id: "ar-experiences",
    title: "AR Experiences",
    description: "Immerse yourself in augmented reality tours and interactive monument experiences.",
    icon: Scan,
    image: arTechImage,
    gradient: "bg-gradient-accent",
    features: ["AR Scan & Overlay", "Interactive Tours", "Real-time Info", "3D Reconstruction"]
  },
  {
    id: "ai-chatbot",
    title: "AI Heritage Guide",
    description: "Ask questions, get stories, and explore cultural heritage with our intelligent guide.",
    icon: MessageCircle,
    image: aiChatbotImage,
    gradient: "bg-gradient-warm",
    features: ["Tourist Guide", "Storytelling", "Q&A Support", "Cultural Context"],
    badge: "New"
  },
  {
    id: "heritage-archive",
    title: "Heritage Archive",
    description: "Access comprehensive digital archives with 3D scans and photogrammetry data.",
    icon: Archive,
    gradient: "bg-gradient-heritage",
    features: ["3D Scans", "Photogrammetry", "LiDAR Assets", "Historical Data"]
  }
];

export function FeatureCards() {
  return (
    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature) => (
        <Card key={feature.id} className="group relative overflow-hidden hover:shadow-heritage transition-all duration-300 hover:-translate-y-1">
          {/* Background Image or Gradient */}
          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
            {feature.image ? (
              <img 
                src={feature.image} 
                alt={feature.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className={`w-full h-full ${feature.gradient}`} />
            )}
          </div>
          
          <CardHeader className="relative">
            <div className="flex items-center justify-between">
              <div className={`p-2 rounded-lg ${feature.gradient} text-primary-foreground w-fit`}>
                <feature.icon className="h-5 w-5" />
              </div>
              {feature.badge && (
                <Badge variant="secondary" className="text-xs">
                  {feature.badge}
                </Badge>
              )}
            </div>
            <CardTitle className="text-lg">{feature.title}</CardTitle>
            <CardDescription className="text-sm">
              {feature.description}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="relative space-y-4">
            <div className="space-y-2">
              {feature.features.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-1 w-1 rounded-full bg-primary" />
                  {item}
                </div>
              ))}
            </div>
            
            <Button 
              variant="ghost" 
              className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            >
              Explore
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}