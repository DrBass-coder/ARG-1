import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Snowflake, Shirt, Utensils, Flame, Wind, Trash2, Bolt, Clock, Shield, DollarSign, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Snowflake,
    title: "Refrigerator Repair",
    description: "Not cooling properly? Strange noises? We fix all refrigerator issues including compressor problems, ice maker repairs, and temperature control.",
    price: "Starting at $89"
  },
  {
    icon: Shirt,
    title: "Washer & Dryer",
    description: "Won't start, drain, or spin? Our technicians repair all washing machine and dryer problems including belt replacements and motor issues.",
    price: "Starting at $95"
  },
  {
    icon: Utensils,
    title: "Dishwasher Repair",
    description: "Not cleaning dishes or won't drain? We fix all dishwasher problems including pump issues, heating element repairs, and control problems.",
    price: "Starting at $79"
  },
  {
    icon: Flame,
    title: "Oven & Range",
    description: "Not heating evenly or won't turn on? We repair all oven and range issues including heating elements, thermostat problems, and gas line issues.",
    price: "Starting at $99"
  },
  {
    icon: Wind,
    title: "Microwave Repair",
    description: "Not heating or making strange sounds? We fix all microwave problems including magnetron replacement, door repairs, and control issues.",
    price: "Starting at $69"
  },
  {
    icon: Trash2,
    title: "Garbage Disposal",
    description: "Clogged or making noise? We repair and replace garbage disposals including motor issues, jammed blades, and electrical problems.",
    price: "Starting at $59"
  }
];

const guarantees = [
  {
    icon: Bolt,
    title: "Expert Technicians",
    description: "Certified professionals with 10+ years experience"
  },
  {
    icon: Clock,
    title: "Same-Day Service",
    description: "Available 7 days a week including weekends"
  },
  {
    icon: Shield,
    title: "90-Day Warranty",
    description: "All parts and labor guaranteed"
  },
  {
    icon: DollarSign,
    title: "Upfront Pricing",
    description: "No hidden fees or surprises"
  }
];

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Repair Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert repair services for all major appliance brands with same-day availability and guaranteed workmanship.
          </p>
        </div>
        
        {/* Service Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <service.icon className="text-white h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-secondary font-semibold">{service.price}</span>
                    <Button 
                      variant="link" 
                      className="text-primary hover:text-blue-700 font-medium p-0"
                      onClick={scrollToContact}
                    >
                      Request Service <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Service Guarantees */}
        <Card className="bg-white shadow-sm">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="space-y-2">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                    <guarantee.icon className="text-secondary h-8 w-8" />
                  </div>
                  <h4 className="font-semibold text-gray-900">{guarantee.title}</h4>
                  <p className="text-sm text-gray-600">{guarantee.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
