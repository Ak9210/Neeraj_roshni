import React from "react";
import { motion } from "framer-motion";

const ElderlySection = () => {
  return (
    <section className="relative px-6 py-20 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="
          w-full max-w-[360px]
          bg-background/80
          backdrop-blur-sm
          rounded-3xl
          px-6 py-14
          text-center
          shadow-lg
        "
      >
        {/* BLESSINGS INTRO */}
        <p className="font-sans text-sm text-muted-foreground mb-4">
          With the heavenly blessings of
        </p>

        {/* GRANDPARENTS */}
        <p className="font-serif text-base text-primary leading-relaxed mb-10">
          Smt. Kalawati Devi <br />
          and Ramswaroop Ji Goyal
        </p>

        {/* MORE SPACE HERE (as requested) */}
        <p className="font-serif text-base text-primary leading-relaxed mb-16">
          Mrs. Indu & Mr. Mahesh Kumar Agarwal
        </p>

        {/* SOFT DIVIDER */}
        <div className="w-16 h-px bg-primary/25 mx-auto mb-14" />

        {/* INVITE — BIGGER & HERO-LIKE */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl text-primary mb-6"
        >
          Invite
        </motion.h1>

        <p className="font-sans text-sm text-muted-foreground mb-14">
          you to join us in the wedding celebrations of
        </p>

        {/* COUPLE — SAME FEEL AS HERO */}
        <h1 className="font-serif text-5xl md:text-7xl text-gold mb-2">
          Neeraj
        </h1>

        <p className="text-3xl italic font-serif opacity-80 mb-2">
          And
        </p>

        <h1 className="font-serif text-5xl md:text-7xl text-gold mb-14">
          Roshni
        </h1>

        {/* PARENTS */}
        <p className="font-sans text-sm text-muted-foreground mb-3">
          Daughter of
        </p>

        <p className="font-serif text-base text-primary leading-relaxed">
          Mrs. Rekha & Mr. Jitendra Kumar Sharma
        </p>
      </motion.div>
    </section>
  );
};

export default ElderlySection;