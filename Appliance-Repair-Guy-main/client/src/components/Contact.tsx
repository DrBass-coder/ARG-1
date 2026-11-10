import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Phone, Mail, MapPin } from "lucide-react";
import { insertServiceRequestSchema, type InsertServiceRequest } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertServiceRequest>({
    resolver: zodResolver(insertServiceRequestSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
      applianceType: "",
      preferredDate: "",
      problemDescription: ""
    }
  });

  const createServiceRequest = useMutation({
    mutationFn: async (data: InsertServiceRequest) => {
      const response = await apiRequest("POST", "/api/service-requests", data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/service-requests"] });
      toast({
        title: "Service Request Submitted!",
        description: "We'll contact you within 30 minutes to confirm your appointment.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
      });
    }
  });

  const onSubmit = (data: InsertServiceRequest) => {
    createServiceRequest.mutate(data);
  };

  const callNow = () => {
    window.location.href = 'tel:5551237372';
  };

  const callEmergency = () => {
    window.location.href = 'tel:5551237372';
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Get Your Appliance Fixed Today</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to schedule your repair? Contact us now for fast, professional service with guaranteed results.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Call Us Now</h3>
                  <p className="text-gray-300 text-lg mb-2">(555) 123-REPAIR</p>
                  <p className="text-gray-400 text-sm">Available 24/7 for emergency repairs</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-300 text-lg mb-2">service@appliancerepairguy.com</p>
                  <p className="text-gray-400 text-sm">We respond within 1 hour during business hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Visit Our Office</h3>
                  <p className="text-gray-300 text-lg mb-2">123 Service Drive<br />Metro City, ST 12345</p>
                  <p className="text-gray-400 text-sm">Mon-Fri: 8AM-6PM, Sat: 9AM-4PM</p>
                </div>
              </div>
            </div>
            
            {/* Emergency Banner */}
            <Card className="bg-red-600 border-red-600">
              <CardContent className="p-6 text-center text-white">
                <h3 className="text-xl font-bold mb-2">Emergency Service Available</h3>
                <p className="mb-4">Appliance emergency? We're here to help 24/7</p>
                <Button 
                  variant="secondary"
                  className="bg-white text-red-600 hover:bg-gray-100"
                  onClick={callEmergency}
                >
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Service Request Form */}
          <Card className="bg-white text-gray-900">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Repair</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="(555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Address</FormLabel>
                        <FormControl>
                          <Input placeholder="123 Main St, City, State 12345" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="applianceType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Appliance Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select Appliance" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="refrigerator">Refrigerator</SelectItem>
                              <SelectItem value="washer">Washer</SelectItem>
                              <SelectItem value="dryer">Dryer</SelectItem>
                              <SelectItem value="dishwasher">Dishwasher</SelectItem>
                              <SelectItem value="oven">Oven/Range</SelectItem>
                              <SelectItem value="microwave">Microwave</SelectItem>
                              <SelectItem value="disposal">Garbage Disposal</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="preferredDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="problemDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Problem Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={4}
                            placeholder="Please describe the problem with your appliance..."
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" required />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      I agree to the <a href="#" className="text-primary hover:underline">terms of service</a> and <a href="#" className="text-primary hover:underline">privacy policy</a>
                    </label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-blue-700 text-white py-4 text-lg font-semibold"
                    disabled={createServiceRequest.isPending}
                  >
                    {createServiceRequest.isPending ? "Submitting..." : "Schedule My Repair"}
                  </Button>
                  
                  <p className="text-sm text-gray-600 text-center">
                    By submitting this form, you consent to be contacted by Appliance Repair Guy regarding your service request.
                  </p>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
