// app/(auth)/signup/page.tsx
"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, Leaf, Globe } from "lucide-react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    agreeToTerms: false,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Execute account creation / database insertion logic here
  };

  return (
    <main className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Column: Editorial Heritage Banner with Embedded Copy */}
      <div className="relative hidden md:flex flex-col justify-end p-12 lg:p-16 text-white bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/signup-img.png" // Path to your shilajeet/resin image
            alt="Authentic botanical minerals and raw alchemical elements"
            fill
            priority
            sizes="50vw"
            className="object-cover opacity-50 filter brightness-90"
          />
          {/* Linear bottom dark gradient shade */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>

        {/* Floating Typography Copy */}
        <div className="relative z-10 max-w-sm">
          <h2 className="text-2xl font-serif tracking-wide mb-3">
            Heritage of Purity
          </h2>
          <p className="text-xs text-zinc-300 font-light leading-relaxed">
            Join our circle of wellness and experience the uncompromised rituals
            of ancient alchemy.
          </p>
        </div>
      </div>

      {/* Right Column: Expanded Signup Form Panel */}
      <div className="flex flex-col justify-center px-8 sm:px-16 lg:px-24 xl:px-32 bg-[#fcf9f6] py-12">
        <div className="max-w-md w-full mx-auto flex flex-col h-full justify-between">
          <div className="w-full">
            <header className="mb-8">
              <h1 className="text-3xl font-serif text-zinc-900 tracking-wide mb-2">
                Create Account
              </h1>
              <p className="text-sm text-zinc-500 font-light">
                Begin your journey to conscious vitality.
              </p>
            </header>

            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                {
                  label: "Full Name",
                  type: "text",
                  key: "fullName",
                  placeholder: "Alexander Vance",
                },
                {
                  label: "Email Address",
                  type: "email",
                  key: "email",
                  placeholder: "alex@domain.com",
                },
                {
                  label: "Phone Number",
                  type: "tel",
                  key: "phone",
                  placeholder: "+1 (555) 000-0000",
                },
                {
                  label: "Password",
                  type: "password",
                  key: "password",
                  placeholder: "••••••••",
                },
              ].map((field) => (
                <div
                  key={field.key}
                  className="flex flex-col border-b border-zinc-300 py-1.5 focus-within:border-zinc-800 transition-colors duration-200"
                >
                  <label className="text-[9px] font-bold tracking-widest text-zinc-400 uppercase mb-0.5">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    required
                    placeholder={field.placeholder}
                    value={(formData as any)[field.key]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field.key]: e.target.value })
                    }
                    className="w-full bg-transparent text-sm text-zinc-800 placeholder-zinc-300 focus:outline-none"
                  />
                </div>
              ))}

              {/* Terms and Privacy Checkbox option */}
              <label className="flex items-start gap-3 text-[11px] font-light text-zinc-500 cursor-pointer pt-2 select-none">
                <input
                  type="checkbox"
                  required
                  checked={formData.agreeToTerms}
                  onChange={(e) =>
                    setFormData({ ...formData, agreeToTerms: e.target.checked })
                  }
                  className="mt-0.5 w-3.5 h-3.5 rounded border-zinc-300 bg-white text-amber-800 accent-[#413126] focus:ring-0 cursor-pointer"
                />
                <span>
                  I agree to the{" "}
                  <Link href="/terms" className="underline hover:text-zinc-900">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="underline hover:text-zinc-900"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              {/* Submit Registration Button */}
              <button
                type="submit"
                className="w-full mt-4 py-4 bg-[#413126] text-white text-xs font-semibold uppercase tracking-widest rounded-sm hover:bg-[#534033] transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Create Account <span>→</span>
              </button>
            </form>

            <footer className="mt-8 text-center text-xs text-zinc-600 font-light">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-zinc-900 hover:underline"
              >
                Log In
              </Link>
            </footer>
          </div>

          {/* Bottom Footprint Badges matching your layout mock */}
          <div className="mt-12 pt-6 border-t border-zinc-200/60 grid grid-cols-3 gap-2">
            {[
              { icon: <Award className="w-3.5 h-3.5" />, text: "Lab Tested" },
              { icon: <Leaf className="w-3.5 h-3.5" />, text: "100% Organic" },
              {
                icon: <Globe className="w-3.5 h-3.5" />,
                text: "Ethically Sourced",
              },
            ].map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1.5 text-zinc-400 text-[9px] font-bold uppercase tracking-wider justify-center md:justify-start"
              >
                {badge.icon}
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
