import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AspectRatio } from "@/components/ui/aspect-ratio";
const OceanFreight = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-green-100 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Text Section */}
              <div className="md:w-1/2">
                <motion.h1 initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5
              }} className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Ocean Freight Solutions
                </motion.h1>
                <motion.p initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.1
              }} className="text-lg text-gray-700 mb-6">
                  Connecting you globally with comprehensive ocean freight services
                </motion.p>
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.2
              }}>
                  <Link to="/contact" className="px-6 py-3 bg-amber-400 hover:bg-amber-400 text-brand-navy font-medium rounded-md shadow-md transition-all opacity-100\n">
                    Get a Quote
                  </Link>
                </motion.div>
              </div>

              {/* Image Section */}
              <div className="md:w-1/2">
                <motion.div initial={{
                opacity: 0,
                scale: 0.95
              }} animate={{
                opacity: 1,
                scale: 1
              }} transition={{
                duration: 0.5
              }} className="rounded-xl overflow-hidden shadow-xl">
                  <AspectRatio ratio={16 / 9}>
                    <img alt="Ocean Freight Service" className="w-full h-full object-cover" src="/lovable-uploads/017c0382-1cde-4d08-9edf-c97fb93d7812.png" />
                  </AspectRatio>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            {/* FCL Services */}
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
                FCL Services
              </h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto mb-8" />
              <p className="text-gray-700 mb-6 text-justify">FCL is the most optimized container shipping way regarding cost, volume and weight of the cargo. We take special care at each step of the process which involves fixing contract pricing with carriers, reserving space, make booking, picking up empty container at the container depot, loading at shipper facility, transporting by truck / rail to the port and vessel loading, monitor vessel schedule till final delivery to consignee. For import bookings we engage our overseas partners in the absence of our own network and monitor each steps and keep our customers / consignees informed at all stages.</p>
            </div>

            {/* LCL Services */}
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
                LCL Services
              </h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto mb-8" />
              <p className="text-gray-700 mb-6 text-justify">Future Net Logistics LLC operate own consolidation service on many trade routes. With its vast network of consolidators, the company is able to provide competitive price with multiple options of sailing. With regular consolidation boxes to important trade lanes, the company has the advantage of accommodating cargo which requires timely deliveries.</p>
              <p className="text-gray-700 mb-6 text-justify">Future Net Logistics LLC Provide complete transparency of all the pricing at the origin, destination and ocean freight charges.</p>
            </div>

            {/* CTA Section */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }} className="bg-gradient-to-r from-primary to-green-700 rounded-xl text-white p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-slate-50">Ready to Ship Your Cargo?</h3>
              <p className="mb-6 text-green-50">
                Contact our team today for tailored ocean freight solutions.
              </p>
              <Link to="/contact" className="inline-block bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors">
                Get a Quote
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default OceanFreight;
