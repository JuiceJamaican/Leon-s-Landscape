import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Tractor } from "lucide-react";

export default function Construction() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <Link href="/" className="absolute top-8 left-8 inline-flex items-center gap-2 text-neutral-400 hover:text-black transition-colors text-sm font-medium tracking-wide">
        <ArrowLeft size={16} /> BACK TO HOME
      </Link>
      
      <div className="flex flex-col items-center max-w-md text-center">
        <motion.div
          animate={{ 
            x: [-20, 20, -20],
            rotate: [-2, 2, -2]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-8"
        >
          <Tractor className="w-24 h-24 text-yellow-500" />
        </motion.div>
        
        <h1 className="font-serif text-3xl md:text-4xl text-neutral-900 mb-4">
          Construction in progress, check back soon!
        </h1>
        <p className="text-neutral-500 font-light">
          We're working hard to bring you something new.
        </p>
      </div>
    </div>
  );
}
