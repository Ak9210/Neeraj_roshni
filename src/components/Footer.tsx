import { motion } from "framer-motion";
import footerBg from "@/assets/footer.jpg"; // use same bg or dark blue texture

const Footer = () => {
  return (
    <footer className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img
          src={footerBg}
          alt="Footer Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 px-6 py-20 text-center max-w-md text-[#fffff] font-serif">

        {/* TOP LINE */}
        <div className="mt-16 mb-12 text-center">
  <p className="font-serif text-base leading-relaxed text-[#8B5A2B] max-w-sm mx-auto">
    With great joy and warmth, I request your gracious presence
    to join us in celebrating the wedding of my beloved granddaughter.
    <br /><br />
    Your presence will add to the happiness of our family
    and make this auspicious occasion truly memorable.
  </p>

  <div className="mt-6">
    <p className="font-serif text-lg text-[#8B5A2B]">
      — Shri Mahesh Kumar Sharma
    </p>
    <p className="font-sans text-xs text-muted-foreground mt-1">
      (Maternal GrandFather)
    </p>
  </div>
</div>

        {/* LINKS */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl mb-6"
        >
          Links
        </motion.h3>

        <div className="space-y-3 text-lg mb-16">
          <p>Venue location</p>
          <p>RSVP</p>
          <p>Instagram</p>
        </div>

        {/* NAVIGATION */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl mb-6"
        >
          Navigation
        </motion.h3>

        <div className="space-y-3 text-lg mb-16">
          <p>The invite</p>
          <p>Bride and Groom</p>
          <p>Things to know</p>
        </div>

        {/* COPYRIGHT */}
        <p className="text-sm opacity-80">
          © Coded by - Akshat
        </p>

      </div>
    </footer>
  );
};

export default Footer;