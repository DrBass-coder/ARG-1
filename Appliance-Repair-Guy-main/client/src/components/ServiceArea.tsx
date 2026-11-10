import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Car, Phone, Calendar, Map } from "lucide-react";

const primaryAreas = [
  "Downtown Metro",
  "North Hills", 
  "Eastside",
  "Westfield",
  "Southgate"
];

const extendedAreas = [
  "Oak Valley",
  "Pine Ridge",
  "Cedar Park", 
  "Riverside",
  "Highland"
];

const serviceDetails = [
  { icon: Clock, text: "Same-day service in primary areas" },
  { icon: Car, text: "No travel charges within 15 miles" },
  { icon: Phone, text: "24/7 emergency service available" },
  { icon: Calendar, text: "Weekend & holiday service" }
];

export default function ServiceArea() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Service Areas</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We proudly serve the entire metropolitan area with fast, reliable appliance repair services.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Service Areas List */}
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 text-lg">Primary Service Areas</h3>
                <ul className="space-y-2 text-gray-600">
                  {primaryAreas.map((area, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <MapPin className="text-primary h-4 w-4" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 text-lg">Extended Areas</h3>
                <ul className="space-y-2 text-gray-600">
                  {extendedAreas.map((area, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <MapPin className="text-secondary h-4 w-4" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Service Details */}
            <Card className="bg-gray-50">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-gray-900">Service Details</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  {serviceDetails.map((detail, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <detail.icon className="text-primary h-4 w-4" />
                      <span className="text-gray-600">{detail.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Map Placeholder */}
          <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center space-y-2">
              <Map className="h-16 w-16 text-gray-400 mx-auto" />
              <p className="text-gray-600">Interactive Service Area Map</p>
              <p className="text-sm text-gray-500">Call to check if we service your area</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
