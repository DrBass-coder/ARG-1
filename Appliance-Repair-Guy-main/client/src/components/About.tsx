import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Trusted Appliance Experts Since 2010
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 15,000 successful repairs completed, Appliance Repair Guy has built a reputation as the most trusted appliance repair service in the metro area. Our certified technicians are equipped with the latest tools and genuine parts to get your appliances running like new.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">13+</p>
                <p className="text-sm text-gray-600">Years in Business</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">15,000+</p>
                <p className="text-sm text-gray-600">Repairs Completed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">4.9</p>
                <p className="text-sm text-gray-600">Average Rating</p>
              </div>
            </div>
            
            {/* Certifications */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Certifications & Partnerships</h3>
              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="bg-gray-100 text-gray-700 font-medium">
                  EPA Certified
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700 font-medium">
                  Licensed & Insured
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700 font-medium">
                  BBB Accredited
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700 font-medium">
                  Factory Authorized
                </Badge>
              </div>
            </div>
          </div>
          
          {/* Team Images */}
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500" 
              alt="Professional service team" 
              className="rounded-xl shadow-lg w-full h-80 object-cover" 
            />
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=180" 
                alt="Modern kitchen appliances" 
                className="rounded-xl shadow-lg w-full h-36 object-cover" 
              />
              <img 
                src="https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=180" 
                alt="Professional repair tools" 
                className="rounded-xl shadow-lg w-full h-36 object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
