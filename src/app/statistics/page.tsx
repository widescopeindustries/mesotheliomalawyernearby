import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  BarChart3, Users, DollarSign, Clock, AlertTriangle, Shield,
  Building, Anchor, Factory, Phone, TrendingUp, Calendar,
  MapPin, Heart, Scale
} from 'lucide-react'
import { CallButton } from '@/components/CallButton'

export const metadata: Metadata = {
  title: 'Mesothelioma Statistics 2026 | Facts, Data & Trends',
  description: 'Comprehensive mesothelioma statistics for 2026: incidence rates, survival data, compensation averages, veteran impact, and asbestos exposure facts. Regularly updated.',
  keywords: [
    'mesothelioma statistics', 'mesothelioma facts', 'asbestos statistics',
    'mesothelioma survival rate', 'mesothelioma cases per year',
    'mesothelioma compensation statistics', 'veteran mesothelioma statistics'
  ],
  openGraph: {
    title: 'Mesothelioma Statistics 2026 | Comprehensive Data & Facts',
    description: 'The most comprehensive mesothelioma statistics resource. Incidence, survival, compensation, and veteran data.',
    type: 'article',
  }
}

export default function StatisticsPage() {
  // Schema markup for the statistics page
  const statisticsSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Mesothelioma Statistics 2026: Comprehensive Facts & Data",
    "description": "Complete mesothelioma statistics including incidence rates, survival data, compensation averages, and veteran impact.",
    "author": {
      "@type": "Organization",
      "name": "Mesothelioma Lawyer Nearby"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mesothelioma Lawyer Nearby"
    },
    "datePublished": "2026-01-27",
    "dateModified": "2026-01-27"
  }

  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "Mesothelioma Statistics 2026",
    "description": "Comprehensive dataset of mesothelioma incidence, survival, and compensation statistics",
    "keywords": ["mesothelioma", "asbestos", "cancer statistics", "compensation data"],
    "creator": {
      "@type": "Organization",
      "name": "Mesothelioma Lawyer Nearby"
    },
    "license": "https://creativecommons.org/licenses/by/4.0/",
    "temporalCoverage": "1999-2026",
    "spatialCoverage": "United States"
  }

  return (
    <div className="min-h-screen">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(statisticsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/20 text-primary">
              <BarChart3 className="h-4 w-4 mr-1" />
              Updated January 2026
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Mesothelioma Statistics 2026
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive data on mesothelioma incidence, survival rates, compensation,
              and the impact on veterans. Sources include CDC, NIH, and court records.
            </p>
          </div>
        </div>
      </section>

      {/* Key Stats Overview */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="text-center p-6 border-2 border-primary/20">
                <div className="text-4xl font-bold text-primary mb-2">~3,000</div>
                <div className="text-sm text-muted-foreground">New Cases Per Year (US)</div>
              </Card>
              <Card className="text-center p-6 border-2 border-red-200">
                <div className="text-4xl font-bold text-red-600 mb-2">30%</div>
                <div className="text-sm text-muted-foreground">Cases Are Veterans</div>
              </Card>
              <Card className="text-center p-6 border-2 border-green-200">
                <div className="text-4xl font-bold text-green-600 mb-2">$1.4M</div>
                <div className="text-sm text-muted-foreground">Avg. Settlement</div>
              </Card>
              <Card className="text-center p-6 border-2 border-amber-200">
                <div className="text-4xl font-bold text-amber-600 mb-2">$30B+</div>
                <div className="text-sm text-muted-foreground">Trust Fund Money</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Incidence Statistics */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Incidence & Diagnosis Statistics</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Annual Cases in the United States</h3>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Metric</th>
                        <th className="text-right py-2">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2">New diagnoses per year</td>
                        <td className="text-right font-semibold">~3,000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Deaths per year</td>
                        <td className="text-right font-semibold">~2,500</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Male cases</td>
                        <td className="text-right font-semibold">~80%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Average age at diagnosis</td>
                        <td className="text-right font-semibold">72 years</td>
                      </tr>
                      <tr>
                        <td className="py-2">Latency period</td>
                        <td className="text-right font-semibold">20-50 years</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground mt-4">Source: CDC WONDER, American Cancer Society</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Mesothelioma Types Distribution</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Pleural (lung lining)</span>
                        <span className="font-semibold">75%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3">
                        <div className="bg-primary h-3 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Peritoneal (abdominal)</span>
                        <span className="font-semibold">20%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3">
                        <div className="bg-secondary h-3 rounded-full" style={{ width: '20%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Pericardial (heart)</span>
                        <span className="font-semibold">1%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3">
                        <div className="bg-accent h-3 rounded-full" style={{ width: '5%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Testicular & Other</span>
                        <span className="font-semibold">&lt;1%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3">
                        <div className="bg-muted-foreground h-3 rounded-full" style={{ width: '4%' }}></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">Source: National Cancer Institute</p>
                </CardContent>
              </Card>
            </div>

            {/* States with Highest Rates */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  States with Highest Mesothelioma Death Rates (per million)
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {[
                    { state: 'Maine', rate: 18.5 },
                    { state: 'West Virginia', rate: 17.2 },
                    { state: 'Wyoming', rate: 16.8 },
                    { state: 'Pennsylvania', rate: 16.1 },
                    { state: 'Washington', rate: 15.9 },
                    { state: 'Montana', rate: 15.4 },
                    { state: 'Louisiana', rate: 14.8 },
                    { state: 'New Jersey', rate: 14.5 },
                    { state: 'Minnesota', rate: 14.2 },
                    { state: 'Ohio', rate: 13.9 },
                  ].map((item, i) => (
                    <div key={i} className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="font-semibold">{item.state}</div>
                      <div className="text-sm text-primary">{item.rate}</div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4">Source: CDC National Center for Health Statistics, age-adjusted rates</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Survival Statistics */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Heart className="h-8 w-8 text-red-500" />
              <h2 className="text-3xl font-bold">Survival Statistics</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-5xl font-bold text-primary mb-2">12-21</div>
                  <div className="text-lg font-medium mb-1">Months</div>
                  <div className="text-sm text-muted-foreground">Median Survival (Overall)</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-5xl font-bold text-green-600 mb-2">10%</div>
                  <div className="text-lg font-medium mb-1">5-Year</div>
                  <div className="text-sm text-muted-foreground">Survival Rate</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-5xl font-bold text-secondary mb-2">40%</div>
                  <div className="text-lg font-medium mb-1">1-Year</div>
                  <div className="text-sm text-muted-foreground">Survival Rate</div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Survival by Stage at Diagnosis</h3>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Stage</th>
                      <th className="text-center py-2">% of Cases</th>
                      <th className="text-center py-2">Median Survival</th>
                      <th className="text-right py-2">5-Year Survival</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3">Stage I (Localized)</td>
                      <td className="text-center">16%</td>
                      <td className="text-center">22.2 months</td>
                      <td className="text-right font-semibold text-green-600">20%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Stage II</td>
                      <td className="text-center">9%</td>
                      <td className="text-center">20 months</td>
                      <td className="text-right font-semibold text-green-600">16%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Stage III</td>
                      <td className="text-center">28%</td>
                      <td className="text-center">17.9 months</td>
                      <td className="text-right font-semibold text-amber-600">10%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Stage IV (Distant)</td>
                      <td className="text-center">47%</td>
                      <td className="text-center">14.9 months</td>
                      <td className="text-right font-semibold text-red-600">7%</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-muted-foreground mt-4">Source: SEER Database, National Cancer Institute</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Veteran Statistics */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Veteran Mesothelioma Statistics</h2>
            </div>

            <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-6 mb-8">
              <p className="text-lg text-center">
                <strong className="text-primary">Veterans account for approximately 30% of all mesothelioma cases</strong> in the United States,
                despite making up only about 7% of the population.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Anchor className="h-5 w-5 text-primary" />
                    Military Branch Breakdown
                  </h3>
                  <div className="space-y-3">
                    {[
                      { branch: 'Navy', percent: 33, note: 'Highest risk - shipboard exposure' },
                      { branch: 'Army', percent: 24, note: 'Barracks, vehicles, buildings' },
                      { branch: 'Air Force', percent: 19, note: 'Aircraft, hangars, bases' },
                      { branch: 'Marine Corps', percent: 15, note: 'Ships, bases, equipment' },
                      { branch: 'Coast Guard', percent: 9, note: 'Ships, shore facilities' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded">
                        <div>
                          <div className="font-medium">{item.branch}</div>
                          <div className="text-xs text-muted-foreground">{item.note}</div>
                        </div>
                        <div className="text-lg font-bold text-primary">{item.percent}%</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">VA Disability Compensation</h3>
                  <table className="w-full text-sm">
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3">Mesothelioma VA Rating</td>
                        <td className="text-right font-semibold text-primary">100%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Monthly Compensation (2026)</td>
                        <td className="text-right font-semibold">$3,621.95</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">With Spouse</td>
                        <td className="text-right font-semibold">$3,823.89</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">DIC for Survivors (monthly)</td>
                        <td className="text-right font-semibold">$1,612.75</td>
                      </tr>
                      <tr>
                        <td className="py-3">Avg. processing time</td>
                        <td className="text-right font-semibold">125 days</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground mt-4">Source: VA Benefits Administration, 2026 rates</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Navy Ships with Known Asbestos Exposure</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Virtually all Navy ships built before 1980 contained asbestos. Below are some with documented high exposure levels:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    'USS Kitty Hawk (CV-63)',
                    'USS Enterprise (CVN-65)',
                    'USS Midway (CVB-41)',
                    'USS Missouri (BB-63)',
                    'USS New Jersey (BB-62)',
                    'USS America (CV-66)',
                    'USS Constellation (CV-64)',
                    'USS Ranger (CV-61)',
                    'USS Independence (CV-62)',
                    'USS Saratoga (CV-60)',
                    'USS Long Beach (CGN-9)',
                    'USS Los Angeles (CA-135)',
                  ].map((ship, i) => (
                    <div key={i} className="text-sm p-2 bg-muted/50 rounded text-center">
                      {ship}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compensation Statistics */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <DollarSign className="h-8 w-8 text-green-600" />
              <h2 className="text-3xl font-bold">Compensation & Legal Statistics</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <Card className="border-2 border-green-200">
                <CardContent className="p-6 text-center">
                  <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-green-600 mb-2">$1-1.4M</div>
                  <div className="font-medium mb-1">Average Settlement</div>
                  <div className="text-sm text-muted-foreground">Out-of-court resolution</div>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20">
                <CardContent className="p-6 text-center">
                  <Scale className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">$2.4M+</div>
                  <div className="font-medium mb-1">Average Trial Verdict</div>
                  <div className="text-sm text-muted-foreground">When cases go to trial</div>
                </CardContent>
              </Card>
              <Card className="border-2 border-amber-200">
                <CardContent className="p-6 text-center">
                  <Building className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-amber-600 mb-2">$30B+</div>
                  <div className="font-medium mb-1">Trust Fund Reserves</div>
                  <div className="text-sm text-muted-foreground">Available for claims</div>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Largest Asbestos Trust Funds</h3>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Trust Fund</th>
                      <th className="text-right py-2">Total Assets</th>
                      <th className="text-right py-2">Payment %</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'Manville Personal Injury Trust', assets: '$4.3B', payment: '5.2%' },
                      { name: 'Owens Corning/Fibreboard Trust', assets: '$3.4B', payment: '9.7%' },
                      { name: 'USG Corporation Trust', assets: '$3.9B', payment: '25%' },
                      { name: 'W.R. Grace Trust', assets: '$2.9B', payment: '40%' },
                      { name: 'Armstrong World Industries Trust', assets: '$2.1B', payment: '21.5%' },
                      { name: 'Federal-Mogul Trust', assets: '$1.8B', payment: '7.5%' },
                    ].map((trust, i) => (
                      <tr key={i} className="border-b">
                        <td className="py-3">{trust.name}</td>
                        <td className="text-right font-semibold">{trust.assets}</td>
                        <td className="text-right">{trust.payment}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-xs text-muted-foreground mt-4">
                  Note: Payment percentages vary and are adjusted periodically based on fund assets and projected claims.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Statute of Limitations by State
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                  {[
                    { state: 'Kentucky', years: '1 year', color: 'text-red-600' },
                    { state: 'Louisiana', years: '1 year', color: 'text-red-600' },
                    { state: 'Tennessee', years: '1 year', color: 'text-red-600' },
                    { state: 'California', years: '2 years', color: 'text-amber-600' },
                    { state: 'Texas', years: '2 years', color: 'text-amber-600' },
                    { state: 'Florida', years: '4 years', color: 'text-green-600' },
                    { state: 'Missouri', years: '5 years', color: 'text-green-600' },
                    { state: 'Maine', years: '6 years', color: 'text-green-600' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between p-2 bg-muted/50 rounded">
                      <span>{item.state}</span>
                      <span className={`font-semibold ${item.color}`}>{item.years}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  * Discovery rule may extend deadlines in many states. Consult an attorney for your specific situation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Occupational Statistics */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Factory className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Occupational Exposure Statistics</h2>
            </div>

            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Highest-Risk Occupations</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    {[
                      { job: 'Shipyard Workers', risk: 'Very High', percent: '18%' },
                      { job: 'Construction Workers', risk: 'Very High', percent: '15%' },
                      { job: 'Power Plant Workers', risk: 'High', percent: '12%' },
                      { job: 'Insulators', risk: 'Very High', percent: '10%' },
                      { job: 'Plumbers/Pipefitters', risk: 'High', percent: '8%' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 border rounded">
                        <div>
                          <div className="font-medium">{item.job}</div>
                          <div className="text-xs text-muted-foreground">Risk: {item.risk}</div>
                        </div>
                        <div className="text-lg font-bold text-primary">{item.percent}</div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {[
                      { job: 'Electricians', risk: 'High', percent: '7%' },
                      { job: 'Auto Mechanics', risk: 'Medium', percent: '6%' },
                      { job: 'Boilermakers', risk: 'Very High', percent: '5%' },
                      { job: 'Firefighters', risk: 'Medium', percent: '4%' },
                      { job: 'HVAC Technicians', risk: 'Medium', percent: '3%' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 border rounded">
                        <div>
                          <div className="font-medium">{item.job}</div>
                          <div className="text-xs text-muted-foreground">Risk: {item.risk}</div>
                        </div>
                        <div className="text-lg font-bold text-primary">{item.percent}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Percentages represent share of mesothelioma cases attributable to each occupation.
                  Source: Published epidemiological studies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sources & Methodology */}
      <section className="py-12 bg-muted/40 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-4">Sources & Methodology</h2>
            <div className="text-sm text-muted-foreground space-y-2">
              <p><strong>Incidence Data:</strong> CDC WONDER Database, American Cancer Society Cancer Facts & Figures 2026</p>
              <p><strong>Survival Data:</strong> National Cancer Institute SEER Database (1975-2021 data)</p>
              <p><strong>Veteran Statistics:</strong> VA Benefits Administration, Department of Defense historical records</p>
              <p><strong>Compensation Data:</strong> RAND Corporation studies, published court records, trust fund filings</p>
              <p><strong>Occupational Data:</strong> NIOSH, peer-reviewed epidemiological studies</p>
              <p className="pt-2"><em>This page is updated regularly as new data becomes available. Last updated: January 2026.</em></p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Were You or a Loved One Exposed to Asbestos?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              If you&apos;ve been diagnosed with mesothelioma, you may be entitled to compensation.
              Our veteran-owned service can connect you with experienced attorneys.
            </p>
            <CallButton
              phoneNumber="214-699-4543"
              location="Statistics Page Footer"
              label="Call (214) 699-4543 - Free Consultation"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
