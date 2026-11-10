import { Button } from "@/components/ui/button";
import { Shield, Clock, Star, Phone } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const callNow = () => {
    window.location.href = 'tel:5551237372';
  };

  return (
    <section id="home" className="bg-gradient-to-br from-primary to-blue-700 text-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Fast & Reliable{" "}
                <span className="text-yellow-300">Appliance Repair</span>
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Professional repair services for all major home appliances. Same-day service available with certified technicians and guaranteed work.
              </p>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="text-yellow-300 h-4 w-4" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-yellow-300 h-4 w-4" />
                <span>Same-Day Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="text-yellow-300 h-4 w-4" />
                <span>5-Star Reviews</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-accent hover:bg-amber-500 text-white font-semibold text-lg"
                onClick={callNow}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: (555) 123-REPAIR
              </Button>
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white hover:bg-gray-100 text-primary font-semibold text-lg"
                onClick={scrollToContact}
              >
                Schedule Online
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional appliance repair technician" 
              className="rounded-xl shadow-2xl w-full h-auto object-cover" 
            />
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">15,000+</p>
                <p className="text-sm text-gray-600">Repairs Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
