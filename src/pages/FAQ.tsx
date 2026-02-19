import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-black transition-colors text-sm font-medium tracking-wide mb-12">
          <ArrowLeft size={16} /> BACK TO HOME
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-4">Frequently Asked Questions</h1>
          <div className="w-12 h-1 bg-black mb-12" />

          <div className="space-y-16">
            {/* General FAQ */}
            <section>
              <h2 className="font-serif text-2xl mb-6">General Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-medium">Do you have a physical location to visit?</AccordionTrigger>
                  <AccordionContent className="text-neutral-600 font-light leading-relaxed">
                    Yes! We store our materials on site. Find our location <Link href="/contact" className="text-black font-medium underline underline-offset-4 hover:opacity-70 transition-opacity">here</Link> on the contact page.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-medium">What areas do you deliver to?</AccordionTrigger>
                  <AccordionContent className="text-neutral-600 font-light leading-relaxed">
                    We're based in Georgetown and deliver up to 55 miles!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-medium">How do I place an order?</AccordionTrigger>
                  <AccordionContent className="text-neutral-600 font-light leading-relaxed">
                    Contact us via phone or email! We're here to help you get exactly what you need.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-medium">How do I get a quote?</AccordionTrigger>
                  <AccordionContent className="text-neutral-600 font-light leading-relaxed">
                    Contact us via phone or email! We provide direct quotes based on your specific requirements and delivery location.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Materials FAQ */}
            <section>
              <h2 className="font-serif text-2xl mb-6">FAQ about Materials</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-medium">Is there a minimum required to place an order?</AccordionTrigger>
                  <AccordionContent className="text-neutral-600 font-light leading-relaxed">
                    Yes, only for delivery (1/2 yard minimum). Contact us for details on minimums for your specific situation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-medium">Do you deliver?</AccordionTrigger>
                  <AccordionContent className="text-neutral-600 font-light leading-relaxed">
                    Yes, contact us for a quote! We deliver bulk landscape materials across the region.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-medium">How do I know how much material I need?</AccordionTrigger>
                  <AccordionContent className="text-neutral-600 font-light leading-relaxed">
                    Use our built-in gravel calculator or call us for assistance in determining the right amount!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-medium">Do you assist in unloading or spreading material?</AccordionTrigger>
                  <AccordionContent className="text-neutral-600 font-light leading-relaxed">
                    We unload the material but do not assist in spreading.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left font-medium">Can I get a quote before ordering?</AccordionTrigger>
                  <AccordionContent className="text-neutral-600 font-light leading-relaxed">
                    Yes! Contact us at 512-635-3857.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left font-medium">Can I pick up?</AccordionTrigger>
                  <AccordionContent className="text-neutral-600 font-light leading-relaxed">
                    Yes! Contact us to set up the details and we'll have it ready for you!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <p className="mt-6 text-sm text-neutral-500 font-light italic">
                For more detailed questions, we ask that you call or email us directly so that we can assure you get the right answer to your question!
              </p>
            </section>

            {/* Firewood FAQ */}
            <section>
              <h2 className="font-serif text-2xl mb-6">FAQ about Firewood</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-medium">Do you deliver? How far?</AccordionTrigger>
                  <AccordionContent className="text-neutral-600 font-light leading-relaxed">
                    Yes! Our rates vary so contact us for a direct quote.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-medium">Do you stack the firewood on delivery?</AccordionTrigger>
                  <AccordionContent className="text-neutral-600 font-light leading-relaxed">
                    Yes! For an extra charge, we will neatly stack your firewood in your area of choice.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-medium">Is your firewood seasoned?</AccordionTrigger>
                  <AccordionContent className="text-neutral-600 font-light leading-relaxed">
                    Yes, all our firewood is seasoned and ready to burn upon delivery.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-medium">Do you deliver in winter?</AccordionTrigger>
                  <AccordionContent className="text-neutral-600 font-light leading-relaxed">
                    Rain, sleet, or snow, as long as the roads are safe, our trucks are moving!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Still have questions? */}
            <section className="bg-neutral-50 p-12 rounded-xl text-center">
              <h2 className="font-serif text-2xl mb-4">Still have questions?</h2>
              <p className="text-neutral-600 font-light mb-8">
                We're here to help you with your next landscape project.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-8">
                <a href="tel:512-635-3857" className="flex items-center justify-center gap-2 text-black font-medium hover:opacity-70 transition-opacity">
                  <Phone size={18} /> 512-635-3857
                </a>
                <a href="mailto:leonslandscapesupplies@gmail.com" className="flex items-center justify-center gap-2 text-black font-medium hover:opacity-70 transition-opacity">
                  <Mail size={18} /> EMAIL US
                </a>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
