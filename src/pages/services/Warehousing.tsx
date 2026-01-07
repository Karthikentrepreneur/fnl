import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { Warehouse, Package, Box, Globe, FileCheck, Shield, Truck, MapPin, Timer, Gauge } from "lucide-react";
import { Link } from 'react-router-dom';
import { AspectRatio } from "@/components/ui/aspect-ratio";
const Warehousing = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-green-100 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
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
                  Warehousing Solutions
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
                  Premier supply chain solutions for efficient storage and distribution
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
                    <img alt="Warehousing Service" className="w-full h-full object-cover" src="/lovable-uploads/f1470500-0713-40b7-85ec-9de41b116f2f.png" />
                  </AspectRatio>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
                Warehousing & Logistics
              </h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
              <p className="text-gray-700 mb-6 text-justify">Future Net Logistics LLC is well equipped to handle the warehousing of various commodities.</p>
              <p className="text-gray-700 mb-6 text-justify">Warehouse management is a key part of the supply chain and primarily aims to control the movement and storage of materials within a warehouse and process the associated transactions including shipping, receiving, put away and picking. With visibility in to processes that proceed and follow the supply chain link, your warehouse will become an accelerator and not a road block to drive greater profitability and customer satisfaction.</p>
              <p className="text-gray-700 mb-6 text-justify">The objective of WM is to handle the receipts of stock and manage supplies. WM today is part of supply chain management and also demand management. It also covers the container storage, loading and unloading.</p>
              <p className="text-gray-700 mb-6 text-justify">An efficient WM gives a cutting edge to retail chain distribution.</p>
              <p className="text-gray-700 mb-6 text-justify">The company identifies the customer needs and assist to handle in the best possible manner.</p>
              <p className="text-gray-700 mb-6 text-justify">The company has expertise in handling vanning and devanning of consolidation cargo and arranges to distribute/deliver to respective parties from the warehouse which delivers full satisfaction to its customers.</p>
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
              <h3 className="text-2xl font-bold mb-4 text-slate-50">Ready to Optimize Your Storage?</h3>
              <p className="mb-6 text-green-50">
                Contact our team today for tailored warehousing solutions.
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
export default Warehousing;
