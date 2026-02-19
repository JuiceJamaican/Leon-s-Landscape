import { useSiteContent } from "@/hooks/use-site-content";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Firewood() {
  const { data: content, isLoading } = useSiteContent();

  const woodTypes = [
    { id: 'Oak', title: 'Oak', desc: 'Premium oak firewood, fully seasoned and ready to burn.' },
    { id: 'Mesquite', title: 'Mesquite', desc: 'Authentic Mesquite firewood, known for its intense heat and signature aroma.' },
    { id: 'Pecan', title: 'Pecan', desc: 'Sweet-smelling Pecan wood, perfect for smoking and long-lasting fires.' },
  ];

  const pricing = [
    { label: 'Bundle', detail: '5 pieces', price: '$7' },
    { label: 'Wheelbarrow', detail: '~30-32 pieces', price: '$40' },
    { label: '1/4 Cord', detail: '4FT x 4FT', price: '$100' },
    { label: '1/2 Cord', detail: '4FT x 8FT', price: '$200' },
    { label: 'Full Cord', detail: '16FT x 8FT', price: '$400' },
  ];

  if (isLoading) return <div className="h-screen flex items-center justify-center"><Loader2 className="animate-spin" /></div>;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-black transition-colors text-sm font-medium tracking-wide mb-8">
          <ArrowLeft size={16} /> BACK TO HOME
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-8 items-start mb-12"
        >
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-neutral-100 shadow-xl">
             <img 
               src={content?.firewoodImgUrl || ""} 
               alt="Firewood"
               className="w-full h-full object-cover"
             />
          </div>
          
          <div className="pt-2">
            <h1 className="font-serif text-3xl md:text-4xl text-neutral-900 mb-4">Firewood</h1>
            <div className="w-12 h-1 bg-black mb-4" />
            <p className="text-base text-neutral-600 font-light leading-relaxed mb-6">
              Premium seasoned firewood available for pickup or delivery. We offer high-quality Oak, Mesquite, and Pecan wood for all your heating and cooking needs.
            </p>
            
            <div className="bg-neutral-50 p-6 rounded-lg mb-6 border border-neutral-100">
              <h3 className="font-serif text-xl mb-4">Pricing Guide</h3>
              <div className="space-y-2">
                {pricing.map((p, i) => (
                  <div key={i} className="flex justify-between items-center text-sm border-b border-neutral-200 pb-2 last:border-0">
                    <span className="font-medium">{p.label} <span className="text-neutral-500 font-light">({p.detail})</span></span>
                    <span className="font-bold">{p.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/contact" className="w-full inline-flex justify-center items-center gap-3 px-8 py-4 bg-black text-white text-sm font-medium tracking-widest hover:bg-neutral-800 transition-all rounded-sm shadow-lg mb-4">
              CONTACT FOR DELIVERY QUOTE <ArrowRight size={16} />
            </Link>
            
            <p className="text-xs text-red-600 font-bold tracking-widest mt-2">
              * = OUT OF STOCK
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {woodTypes.map((item, i) => {
            const isOutOfStock = content?.woodStock && content.woodStock[item.id] === false;
            const customImage = content?.woodImages?.[item.id];
            
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative border border-neutral-100 rounded-lg hover:border-neutral-200 hover:shadow-lg transition-all bg-neutral-50/50 overflow-hidden"
              >
                {isOutOfStock && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="text-3xl text-red-600 font-bold leading-none select-none">*</span>
                  </div>
                )}
                <div className="aspect-square w-full overflow-hidden bg-neutral-200">
                  <img 
                    src={customImage || `/attached_assets/wood_${item.id.toLowerCase()}.jpg`} 
                    alt={item.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${isOutOfStock ? 'grayscale opacity-60' : 'group-hover:scale-105'}`}
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-serif text-xl mb-1">{item.title} {isOutOfStock && <span className="text-red-600 ml-1">*</span>}</h3>
                  <p className="text-neutral-500 text-xs font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
