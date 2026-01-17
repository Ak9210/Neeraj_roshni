import { motion } from "framer-motion";

const BlessingsSection = () => {
  return (
    <section className="bg-[#F9E6E6] px-6 py-24 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="
          w-full max-w-[360px]
          text-center
          bg-white/80
          backdrop-blur-sm
          rounded-3xl
          px-6 py-16
          shadow-lg
        "
      >
        {/* TITLE */}
        <h2 className="font-serif text-3xl text-[#8B5A2B] mb-10 tracking-wide">
          With Blessings
        </h2>

        {/* MESSAGE */}
        <p className="font-serif text-base leading-relaxed text-primary mb-12">
          May the bond you are about to form be filled with love,
          understanding, and lifelong companionship.
          <br /><br />
          May your journey together be blessed with harmony,
          good health, and happiness always.
        </p>

        {/* SIGNATURE */}
        <div className="mt-6">
          <p className="font-serif text-lg text-[#8B5A2B]">
            — Shri Mahesh Chand Sharma
          </p>
          <p className="font-sans text-xs text-muted-foreground mt-1">
            (Maternal Grand Father)
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default BlessingsSection;