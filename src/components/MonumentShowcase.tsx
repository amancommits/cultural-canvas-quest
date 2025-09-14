import { Play, Eye, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import konarkHero from "@/assets/konark-hero.jpg";
import jagannathTemple from "@/assets/jagannath-temple.jpg";
import lingarajTemple from "@/assets/lingaraj-temple.jpg";

const monuments = [
  {
    id: "konark",
    name: "Konark Sun Temple",
    location: "Odisha, India",
    type: "UNESCO World Heritage Site",
    views: "12.5K",
    likes: "3.2K",
    image: konarkHero,
    featured: true
  },
  {
    id: "jagannath",
    name: "Jagannath Temple",
    location: "Puri, Odisha",
    type: "Sacred Temple",
    views: "8.7K",
    likes: "2.1K",
    image: jagannathTemple,
    featured: false
  },
  {
    id: "lingaraj",
    name: "Lingaraj Temple",
    location: "Bhubaneswar, Odisha",
    type: "Ancient Temple",
    views: "6.3K",
    likes: "1.8K",
    image: lingarajTemple,
    featured: false
  }
];

export function MonumentShowcase() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Featured Monuments</h2>
          <p className="text-muted-foreground">Explore ancient heritage in stunning detail</p>
        </div>
        <Button variant="outline">View All</Button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        {monuments.map((monument, index) => (
          <Card key={monument.id} className={`group overflow-hidden hover:shadow-heritage transition-all duration-300 ${
            index === 0 ? 'md:col-span-2 md:row-span-2' : ''
          }`}>
            <div className="relative aspect-video overflow-hidden">
              <img
                src={monument.image || "/placeholder.svg"}
                alt={monument.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Overlay Controls */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2">
                    <Button 
                      size="sm" 
                      variant="heritage" 
                      className="backdrop-blur-sm"
                      onClick={() => {
                        if (monument.id === 'konark') {
                          window.location.href = 'https://www.3ds.com/progress-is-human/heritage-and-future/konark-sun-temple';
                        }
                      }}
                    >
                      <Play className="h-4 w-4 mr-1" />
                      3D Tour
                    </Button>
                    <Button size="sm" variant="glow" className="backdrop-blur-sm">
                      <Eye className="h-4 w-4 mr-1" />
                      AR View
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Featured Badge */}
              {monument.featured && (
                <Badge className="absolute top-3 left-3 bg-gradient-heritage border-0">
                  Featured
                </Badge>
              )}
              
              {/* Quick Actions */}
              <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button size="icon" variant="glow" className="h-8 w-8 backdrop-blur-sm">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="glow" className="h-8 w-8 backdrop-blur-sm">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <CardContent className="p-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {monument.type}
                  </Badge>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {monument.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="h-3 w-3" />
                      {monument.likes}
                    </span>
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg">{monument.name}</h3>
                <p className="text-sm text-muted-foreground">{monument.location}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}