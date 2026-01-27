import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Clock, DollarSign, Scale, Shield, Users, Heart, Building, FileText, Award } from "lucide-react"

export const MesotheliomaInfo = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Understanding Mesothelioma & Your Legal Rights
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Mesothelioma is a devastating cancer caused by asbestos exposure. If you or a loved one has been diagnosed, 
              you may be entitled to significant compensation. Here&apos;s what you need to know.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - What is Mesothelioma */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-foreground flex items-center gap-3">
                <Heart className="h-7 w-7 text-primary" />
                What is Mesothelioma?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Mesothelioma is a rare and aggressive form of cancer that develops in the mesothelium, the thin layer 
                of tissue that covers most of your internal organs. The primary cause of mesothelioma is exposure to 
                asbestos, a naturally occurring mineral that was widely used in construction, manufacturing, and 
                military applications throughout the 20th century.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                There are several types of mesothelioma, classified by where the cancer develops:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm font-bold">1</span>
                  </span>
                  <span><strong className="text-foreground">Pleural Mesothelioma</strong> - Affects the lining around the lungs (most common, ~75% of cases)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm font-bold">2</span>
                  </span>
                  <span><strong className="text-foreground">Peritoneal Mesothelioma</strong> - Affects the lining of the abdomen (~20% of cases)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm font-bold">3</span>
                  </span>
                  <span><strong className="text-foreground">Pericardial Mesothelioma</strong> - Affects the lining around the heart (rare, ~1% of cases)</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                The latency period for mesothelioma is typically 20-50 years, meaning symptoms may not appear until 
                decades after the initial asbestos exposure. This is why many people diagnosed today were exposed 
                in the 1960s, 70s, or 80s when asbestos use was at its peak.
              </p>
            </div>

            {/* Right Column - Who is at Risk */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-foreground flex items-center gap-3">
                <AlertTriangle className="h-7 w-7 text-accent" />
                Who is at Risk for Mesothelioma?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Millions of Americans were exposed to asbestos in their workplaces, homes, and during military service. 
                The following occupations and groups have the highest risk:
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Building, label: "Construction Workers" },
                  { icon: Shield, label: "Military Veterans" },
                  { icon: Users, label: "Shipyard Workers" },
                  { icon: Building, label: "Factory Workers" },
                  { icon: FileText, label: "Firefighters" },
                  { icon: Building, label: "Miners" },
                  { icon: Users, label: "Electricians" },
                  { icon: Building, label: "Plumbers" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <item.icon className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-accent/10 border border-accent/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-accent" />
                  Veterans at High Risk
                </h4>
                <p className="text-sm text-muted-foreground">
                  Veterans, especially those who served in the Navy, are at particularly high risk for mesothelioma. 
                  Asbestos was used extensively in ships, shipyards, military vehicles, and barracks. 
                  Veterans account for approximately 30% of all mesothelioma diagnoses.
                </p>
              </div>
            </div>
          </div>

          {/* Compensation Section */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-bold text-foreground text-center mb-8 flex items-center justify-center gap-3">
              <DollarSign className="h-7 w-7 text-secondary" />
              Mesothelioma Compensation: What You Could Receive
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all duration-200">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">$1M - $1.4M</div>
                  <div className="text-lg font-semibold text-foreground mb-2">Average Settlement</div>
                  <p className="text-sm text-muted-foreground">
                    Most mesothelioma cases settle out of court. Settlements provide faster compensation 
                    without the uncertainty of a trial.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/20 hover:border-secondary/50 transition-all duration-200">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">$2.4M+</div>
                  <div className="text-lg font-semibold text-foreground mb-2">Average Trial Verdict</div>
                  <p className="text-sm text-muted-foreground">
                    Cases that go to trial often result in higher compensation, including punitive damages 
                    against negligent companies.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent/20 hover:border-accent/50 transition-all duration-200">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">$30B+</div>
                  <div className="text-lg font-semibold text-foreground mb-2">Trust Fund Money</div>
                  <p className="text-sm text-muted-foreground">
                    Over $30 billion has been set aside in asbestos trust funds by companies that filed for 
                    bankruptcy due to asbestos liabilities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Why Act Now Section */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Clock className="h-7 w-7 text-primary" />
                  Why Time is Critical in Mesothelioma Cases
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Every state has a statute of limitations for filing mesothelioma lawsuits. These deadlines 
                  typically range from 1 to 6 years from the date of diagnosis. Once the deadline passes, 
                  you may lose your right to compensation forever.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Additionally, evidence can be lost, witnesses may become unavailable, and companies may 
                  deplete their assets or trust funds. Acting quickly ensures the best possible outcome for your case.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-foreground">
                    <span className="h-2 w-2 bg-accent rounded-full"></span>
                    <strong>Kentucky & Louisiana:</strong> Only 1 year to file
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <span className="h-2 w-2 bg-accent rounded-full"></span>
                    <strong>Tennessee:</strong> Only 1 year to file
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <span className="h-2 w-2 bg-accent rounded-full"></span>
                    <strong>Most states:</strong> 2-3 years to file
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="inline-block p-8 bg-background rounded-2xl shadow-xl">
                  <Scale className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h4 className="font-serif text-xl font-bold text-foreground mb-2">
                    Free Case Evaluation
                  </h4>
                  <p className="text-muted-foreground mb-6">
                    Find out if you qualify for compensation. No cost, no obligation.
                  </p>
                  <a 
                    href="tel:214-699-4543"
                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-lg"
                  >
                    Call (214) 699-4543 Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mt-16">
            <h3 className="font-serif text-2xl font-bold text-foreground text-center mb-8 flex items-center justify-center gap-3">
              <Award className="h-7 w-7 text-accent" />
              Why Choose Our Veteran-Owned Service?
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Specialized Attorneys Only",
                  description: "We only connect you with lawyers who focus exclusively on mesothelioma and asbestos cases - not general practice attorneys."
                },
                {
                  title: "No Upfront Costs Ever",
                  description: "Our attorney network works on contingency. You pay nothing unless you win compensation. Free consultations, no hidden fees."
                },
                {
                  title: "Veteran-Owned & Operated",
                  description: "As a Service-Disabled Veteran-Owned Small Business (SDVOSB), we understand the unique asbestos exposure risks veterans face."
                },
                {
                  title: "Nationwide Coverage",
                  description: "No matter where you live, we can connect you with experienced mesothelioma attorneys who are licensed in your state."
                }
              ].map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-200 hover:border-primary/50">
                  <CardContent className="p-6">
                    <h4 className="font-serif font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
