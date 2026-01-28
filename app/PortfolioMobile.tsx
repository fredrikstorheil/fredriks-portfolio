import React from "react";

export function PortfolioMobile() {
  return (
    <div className="min-h-screen bg-[#F3F3F3] text-black">
      <div className="mx-auto max-w-[412px] px-4 pt-6 pb-10 font-sans">
        {/* Name */}
        <header className="mb-5">
          <h1 className="text-[22px] font-semibold tracking-tight">
            Fredrik Storheil
          </h1>
        </header>

        {/* Tabs */}
        <nav className="mb-7">
          <div className="inline-flex gap-1 rounded-full bg-[#E5E5E5] p-1">
            <button className="rounded-full bg-black px-4 py-1.5 text-[13px] font-semibold leading-none text-white">
              Hjem
            </button>
            <button className="rounded-full px-4 py-1.5 text-[13px] font-medium leading-none text-[#444]">
              RedQ
            </button>
            <button className="rounded-full px-4 py-1.5 text-[13px] font-medium leading-none text-[#444]">
              Chall
            </button>
            <button className="rounded-full px-4 py-1.5 text-[13px] font-medium leading-none text-[#444]">
              IKEA
            </button>
            <button className="rounded-full px-4 py-1.5 text-[13px] font-medium leading-none text-[#444]">
              Sense
            </button>
          </div>
        </nav>

        {/* Product designer section */}
        <section className="mb-8 rounded-2xl bg-white px-4 pb-5 pt-4 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <h2 className="mb-3 text-[17px] font-semibold leading-snug">
                Produktdesigner
              </h2>
              <p className="mb-3 text-[13px] leading-[1.45] text-[#333]">
                Produktene jeg lager formes med forståelse for mennesker,
                forretning og hvordan løsninger må fungere når de vokser og
                endrer seg.
              </p>
              <p className="text-[13px] leading-[1.45] text-[#333]">
                Erfaring med å forbedre onboarding, struktur, navigasjon og
                kjerneflyter i komplekse produkter innen finans, offentlig
                sektor og datatunge B2B-løsninger.
              </p>
            </div>

            <div className="flex-shrink-0">
              <div className="h-[108px] w-[108px] overflow-hidden rounded-2xl bg-[#F5F5F5]">
                <img
                  src="/images/fredrik-portrait.png"
                  alt="Fredrik Storheil"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects header */}
        <section>
          <h3 className="mb-4 text-[17px] font-semibold leading-snug">
            Prosjekter
          </h3>

          <div className="space-y-3">
            {/* RedQ card */}
            <article className="flex items-stretch gap-3 rounded-2xl bg-white px-3 py-3 shadow-sm">
              <div className="flex-1">
                <h4 className="mb-1 text-[15px] font-semibold leading-tight">
                  RedQ
                </h4>
                <p className="mb-3 text-[12px] leading-snug text-[#333]">
                  Datasikkerhet for SMB-markedet
                </p>
                <button className="text-[12px] font-medium leading-none text-black underline underline-offset-4">
                  Se case →
                </button>
              </div>
              <div className="h-[72px] w-[112px] overflow-hidden rounded-xl bg-[#E6E6E6]">
                <img
                  src="/images/redq-thumb.jpg"
                  alt="RedQ prosjekt"
                  className="h-full w-full object-cover"
                />
              </div>
            </article>

            {/* Chall card */}
            <article className="flex items-stretch gap-3 rounded-2xl bg-white px-3 py-3 shadow-sm">
              <div className="flex-1">
                <h4 className="mb-1 text-[15px] font-semibold leading-tight">
                  Chall
                </h4>
                <p className="mb-3 text-[12px] leading-snug text-[#333]">
                  Gamification i appdesign
                </p>
                <button className="text-[12px] font-medium leading-none text-black underline underline-offset-4">
                  Se case →
                </button>
              </div>
              <div className="h-[72px] w-[112px] overflow-hidden rounded-xl bg-[#E6E6E6]">
                <img
                  src="/images/chall-thumb.jpg"
                  alt="Chall prosjekt"
                  className="h-full w-full object-cover"
                />
              </div>
            </article>

            {/* IKEA card */}
            <article className="flex items-stretch gap-3 rounded-2xl bg-white px-3 py-3 shadow-sm">
              <div className="flex-1">
                <h4 className="mb-1 text-[15px] font-semibold leading-tight">
                  IKEA
                </h4>
                <p className="mb-3 text-[12px] leading-snug text-[#333]">
                  Digital kommunikasjon i varehus
                </p>
                <button className="text-[12px] font-medium leading-none text-black underline underline-offset-4">
                  Se case →
                </button>
              </div>
              <div className="h-[72px] w-[112px] overflow-hidden rounded-xl bg-[#E6E6E6]">
                <img
                  src="/images/ikea-thumb.jpg"
                  alt="IKEA prosjekt"
                  className="h-full w-full object-cover"
                />
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}

