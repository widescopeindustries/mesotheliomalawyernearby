import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TCPAConsentForm } from '@/components/TCPAConsentForm'
import { TARGET_KEYWORDS } from '@/data/keywords'
import { BarChart3, TrendingUp, Users, Clock, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

export function AdminDashboard() {
  const statsCards = [
    {
      title: "Monthly Searches",
      value: TARGET_KEYWORDS.reduce((sum, k) => sum + k.volume, 0).toLocaleString(),
      subtitle: "Total high-intent searches",
      icon: <BarChart3 className="h-6 w-6" />
    },
    {
      title: "Avg Keyword Difficulty", 
      value: Math.round(TARGET_KEYWORDS.reduce((sum, k) => sum + k.kd, 0) / TARGET_KEYWORDS.length).toString(),
      subtitle: "Low competition = Easy ranking",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: "Avg CPC Value",
      value: `$${Math.round(TARGET_KEYWORDS.reduce((sum, k) => sum + k.cpc, 0) / TARGET_KEYWORDS.length)}`,
      subtitle: "High commercial value",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Revenue Potential",
      value: `$15K-60K`,
      subtitle: "Monthly at 25% conversion",
      icon: <BarChart3 className="h-6 w-6" />
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Stats Dashboard */}
      <section className="py-8 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">"Sniper" Strategy Performance Dashboard</h2>
              <p className="text-muted-foreground">Targeting high-value, low-competition local keywords</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {statsCards.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-center mb-2 text-primary">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.title}</div>
                    <div className="text-xs text-muted-foreground">{stat.subtitle}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Target Keywords Overview */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">High-Value Target Markets</h3>
                <div className="space-y-3">
                  {TARGET_KEYWORDS.map((keyword, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-background rounded-lg">
                      <div className="flex items-center gap-3">
                        <Badge className={`text-xs ${
                          keyword.kd <= 0 ? 'bg-green-100 text-green-800' :
                          keyword.kd <= 3 ? 'bg-green-100 text-green-800' :
                          keyword.kd <= 5 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          KD {keyword.kd}
                        </Badge>
                        <span className="font-medium">{keyword.keyword}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary">${keyword.cpc}</div>
                        <div className="text-xs text-muted-foreground">CPC</div>
                        <div className="text-sm text-muted-foreground">{keyword.volume}/mo</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Pages Preview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Programmatic Location Pages
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Each targeting "unicorn" keywords with KD &lt; 10 and CPC &gt; $30
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TARGET_KEYWORDS.slice(0, 6).map((keyword, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <Badge className="mb-2 bg-green-100 text-green-800">
                        {keyword.kd === 0 ? '🦄 UNICORN' : `KD ${keyword.kd}`}
                      </Badge>
                    </div>
                    <h3 className="font-bold text-lg mb-2">
                      {keyword.city}, {keyword.state}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {keyword.keyword}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Monthly Volume:</span>
                        <span className="font-medium">{keyword.volume}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cost Per Click:</span>
                        <span className="font-medium text-primary">${keyword.cpc}</span>
                      </div>
                    </div>
                    <Link href={`/location/${keyword.slug}`}>
                      <Button className="w-full mt-4">
                        View Live Page
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/veteran-resources">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
                  Veteran Resources Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Funnel */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Pay Per Call Conversion Funnel</h3>
                
                <div className="grid md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-2">1. Organic Traffic</h4>
                    <p className="text-sm text-muted-foreground">
                      Rank for KD &lt; 10 keywords
                    </p>
                    <Badge className="bg-green-100 text-green-800">$0 Ad Cost</Badge>
                  </div>

                  <div className="text-center">
                    <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold mb-2">2. Lead Capture</h4>
                    <p className="text-sm text-muted-foreground">
                      TCPA-compliant forms
                    </p>
                    <Badge className="bg-blue-100 text-blue-800">$200-500 Payout</Badge>
                  </div>

                  <div className="text-center">
                    <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold mb-2">3. Qualified Call</h4>
                    <p className="text-sm text-muted-foreground">
                      90+ second duration
                    </p>
                    <Badge className="bg-purple-100 text-purple-800">25% Conv Rate</Badge>
                  </div>

                  <div className="text-center">
                    <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h4 className="font-semibold mb-2">4. Law Firm Match</h4>
                    <p className="text-sm text-muted-foreground">
                      Direct to qualified attorney
                    </p>
                    <Badge className="bg-yellow-100 text-yellow-800">$630-745 CPA</Badge>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                  <h4 className="text-lg font-semibold text-green-900 mb-3">
                    🎯 Total Monthly Revenue Potential
                  </h4>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    $15,000 - $80,000
                  </div>
                  <p className="text-green-800">
                    Based on 50-200 qualified calls/month at $300-400 average payout
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <AlertTriangle className="h-5 w-5" />
              <span className="text-sm font-semibold">Action Required: Deploy & Monetize</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Dominate Local Mesothelioma Markets
            </h2>
            
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Your "Sniper" strategy site is built and ready to capture high-value, low-competition keywords. 
              <span className="font-bold">Connect with Pay Per Call networks and launch your lead-gen empire.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 h-auto bg-background text-foreground hover:bg-background/90"
              >
                Apply to Ringba Network
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 h-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                View Revenue Dashboard
              </Button>
            </div>

            <div className="mt-8 text-sm opacity-90">
              <p>🚀 Site Ready • Built for Scale • TCPA Compliant</p>
              <p className="mt-2">© 2026 Widescope Industries LLC - Service-Disabled Veteran-Owned Small Business</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}