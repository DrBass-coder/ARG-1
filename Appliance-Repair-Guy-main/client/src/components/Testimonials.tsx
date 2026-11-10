import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    text: "My refrigerator stopped cooling on a Sunday morning, and ProFix had a technician at my house within 2 hours. He diagnosed the problem quickly and had it fixed the same day. Outstanding service!",
    name: "Sarah Martinez",
    location: "Downtown Resident",
    initials: "SM"
  },
  {
    rating: 5,
    text: "I've used ProFix three times now for different appliances. Each time they were professional, on time, and fixed the problem correctly the first time. Highly recommend!",
    name: "David Johnson",
    location: "Suburban Homeowner",
    initials: "DJ"
  },
  {
    rating: 5,
    text: "When our washer broke, ProFix not only fixed it quickly but also gave us tips on maintenance to prevent future issues. Great service and honest advice!",
    name: "Lisa Wilson",
    location: "Apartment Complex",
    initials: "LW"
  }
];

export default function Testimonials() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
    ));
  };

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. See what our satisfied customers have to say about our service.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">{testimonial.initials}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Review Summary */}
        <div className="mt-12 text-center">
          <Card className="max-w-md mx-auto">
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {renderStars(5)}
                  </div>
                  <span className="text-2xl font-bold text-gray-900">4.9</span>
                </div>
                <p className="text-gray-600">
                  Based on <span className="font-semibold">500+</span> customer reviews
                </p>
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                  <span>Google: 4.9/5</span>
                  <span>•</span>
                  <span>Yelp: 5/5</span>
                  <span>•</span>
                  <span>BBB: A+</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
