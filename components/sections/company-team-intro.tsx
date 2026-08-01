"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function CompanyTeamIntro() {
  return (
    <section className="py-20 bg-bg-dark">
      <Container wide className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-2xl font-heading font-bold text-text">About GLS Finvest</h3>
          <p className="mt-4 text-text-secondary leading-relaxed">
            GLS Finvest Pvt Ltd has operated in Visakhapatnam since 2009, delivering residential,
            commercial, and plotted developments alongside investment advisory services — built on
            a single standard of legal transparency applied to every transaction.
          </p>
          <Button href="/about" variant="outline" size="sm" className="mt-6 border-primary/30 text-text hover:border-gold hover:text-gold">
            Learn More
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h3 className="text-2xl font-heading font-bold text-text">About Our Team</h3>
          <p className="mt-4 text-text-secondary leading-relaxed">
            Our advisory team brings together real estate, legal, and financial expertise under
            one roof — so every client works with specialists who review titles, structure
            financing, and plan portfolios as a single coordinated process, not separate handoffs.
          </p>
          <Button href="/about" variant="outline" size="sm" className="mt-6 border-primary/30 text-text hover:border-gold hover:text-gold">
            Meet the Team
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
