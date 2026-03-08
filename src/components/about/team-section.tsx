"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui";
import type { TeamMember } from "@/sanity/lib/fetch";

interface TeamSectionProps {
  teamMembers: TeamMember[];
}

export function TeamSection({ teamMembers }: TeamSectionProps) {
  return (
    <section className="pt-24 lg:pt-32 bg-[#FAFAFA]">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-[#1314CC]" />
            <span className="text-xs font-bold tracking-[0.3em] text-[#070889]">OUR TEAM</span>
            <div className="w-12 h-[2px] bg-[#1314CC]" />
          </div>
          <h2 className="text-5xl lg:text-7xl font-saira font-black text-[#070889] leading-[0.85] uppercase">
            MEET THE<br />EXPERTS
          </h2>
        </div>
      </div>

      <div className="mx-auto border-t border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-3">
          {teamMembers.map((member, i) => {
            const isLastColMobile = i % 2 === 1;
            const isLastColDesktop = i % 3 === 2;
            const isLastRowMobile = i >= 4;
            const isLastRowDesktop = i >= 3;
            
            return (
              <FadeIn key={member._id} delay={i * 0.1}>
                <div className={`
                  ${!isLastColMobile ? 'border-r border-gray-200' : ''} 
                  ${isLastColMobile && !isLastColDesktop ? 'md:border-r md:border-gray-200' : ''} 
                  ${!isLastRowMobile ? 'border-b border-gray-200' : ''} 
                  ${isLastRowMobile && !isLastRowDesktop ? 'md:border-b md:border-gray-200' : ''}
                `}>
                  <div className="p-6 lg:p-8">
                    <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-4 border border-gray-200 bg-gray-100 [&>img]:!h-full">
                      {member.photo ? (
                        <Image
                          src={member.photo}
                          alt={member.name}
                          width={400}
                          height={533}
                          className="w-full h-full object-cover object-top"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          No Photo
                        </div>
                      )}
                    </div>
                    <h3 className="font-bold text-[#16215B] text-lg">{member.name}</h3>
                    <p className="text-gray-500 text-sm">{member.role}</p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
