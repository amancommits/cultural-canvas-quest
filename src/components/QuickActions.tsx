import { Compass, Bookmark, History, Settings, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const quickActions = [
  { icon: Compass, label: "Virtual Tour", count: "3 active", variant: "heritage" as const },
  { icon: Bookmark, label: "Bookmarks", count: "12 saved", variant: "accent" as const },
  { icon: History, label: "Recent", count: "5 visited", variant: "glow" as const },
  { icon: Globe, label: "Discover", count: "New sites", variant: "heritage" as const },
];

const stats = [
  { label: "Monuments Explored", value: "24", change: "+3 this week" },
  { label: "AR Sessions", value: "156", change: "+12 this week" },
  { label: "Stories Unlocked", value: "89", change: "+7 this week" },
  { label: "Heritage Points", value: "2,340", change: "+180 this week" },
];

export function QuickActions() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant}
              className="w-full justify-between h-auto p-4"
            >
              <div className="flex items-center gap-3">
                <action.icon className="h-5 w-5" />
                <div className="text-left">
                  <p className="font-medium">{action.label}</p>
                  <p className="text-xs opacity-80">{action.count}</p>
                </div>
              </div>
            </Button>
          ))}
        </CardContent>
      </Card>

      {/* Activity Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Your Progress
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-secondary/50 to-transparent border">
              <div>
                <p className="font-semibold text-lg">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-primary font-medium">{stat.change}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}