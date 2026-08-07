"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo: string;
};

export function TeamSpotlight({ team }: { team: TeamMember[] }) {
  const [active, setActive] = useState(0);

  if (team.length === 0) return null;

  return (
    <section className="py-16 bg-bg-section">
      <Container wide>
        <SectionTitle
          eyebrow="Leadership"
          title="The People Behind Every Decision"
          description="The judgment that reviews every title, structures every portfolio, and signs off on every recommendation — meet the team."
        />

        <div className="mt-12 hidden md:flex gap-3 h-[460px]">
          {team.map((member, i) => {
            const isActive = active === i;
            return (
              <motion.div
                key={member.name}
                onMouseEnter={() => setActive(i)}
                animate={{ flex: isActive ? 3.4 : 1 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-card overflow-hidden cursor-pointer border border-border"
              >
                <Image
                  src={`${member.photo}?w=900&q=80&auto=format&fit=crop`}
                  alt={member.name}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/50 to-[#0B1220]/10" />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />

                {!isActive && (
                  <div className="absolute inset-0 flex items-end p-5">
                    <span
                      className="text-sm font-heading font-semibold text-white whitespace-nowrap"
                      style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                    >
                      {member.name}
                    </span>
                  </div>
                )}

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                      className="absolute inset-0 flex flex-col justify-end p-7"
                    >
                      <span className="text-xs font-heading font-semibold uppercase tracking-widest text-gold">
                        {member.role}
                      </span>
                      <h3 className="mt-2 text-2xl lg:text-3xl font-heading font-bold text-white">
                        {member.name}
                      </h3>
                      <p className="mt-3 text-sm text-white/75 leading-relaxed max-w-sm">
                        {member.bio}
                      </p>
                      <span className="mt-4 inline-flex w-9 h-9 rounded-full border border-white/25 items-center justify-center text-white/75 hover:text-gold hover:border-gold transition-colors">
                        <Linkedin size={15} />
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 md:hidden space-y-5">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative rounded-card overflow-hidden border border-border h-72"
            >
              <Image
                src={`${member.photo}?w=800&q=80&auto=format&fit=crop`}
                alt={member.name}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/60 to-[#0B1220]/10" />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-xs font-heading font-semibold uppercase tracking-widest text-gold">
                  {member.role}
                </span>
                <h3 className="mt-1.5 text-xl font-heading font-bold text-white">{member.name}</h3>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
