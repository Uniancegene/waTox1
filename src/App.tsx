/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  Menu,
  Bell,
  ChevronDown,
  PlayCircle,
  Info,
  Home,
  FlaskConical,
  Sparkles,
  Users,
} from "lucide-react";
import { useState, ReactNode } from "react";

export default function App() {
  const [reminderEnabled, setReminderEnabled] = useState(true);

  return (
    <div className="min-h-screen bg-watox-surface molecular-bg pb-32">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-2xl border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="font-headline text-3xl tracking-[0.2em] font-medium">
            WATOX
          </div>

          <div className="w-10 h-10 rounded-full border border-black/10 overflow-hidden shadow-sm hover:scale-105 transition-transform cursor-pointer">
            <img 
              id="user-profile"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2eJx2jsPZ9oO0K7K0Ic2PW3zkpji5N-GSms2rYFvw5NJGctnMSjvT-TR3RegzTulT5WJwVUyCq3vFTNaWc8GVuf3JZ39veFZhL9IPhZJr0IGrOdBMtNoSTe9vQ9PoOyUXQkkhYgk3dgL6gI90O4jD9XVroNrAaAs_zD8NDRL5VUk6ItUqCx7fa-ffAJzhbO0gdZOrpmcP3-5Ny1KsJ7-fBGqgigfNv-T0MhH7VlPpdQZAukRbsJpsLcMbiC_nDhxMpZQKgCxHLfQ" 
              alt="User"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </header>

      <main className="pt-24 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="grid lg:grid-cols-2 gap-16 items-center py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="font-label text-xs tracking-widest text-watox-cyan uppercase block mb-4">
                The Clinical Ritual
              </span>
              <h1 className="font-headline text-6xl md:text-7xl leading-[1.1] tracking-tight">
                데일리 리추얼<br />
                <span className="italic font-light">The waTox Method</span>
              </h1>
            </div>

            <p className="font-body text-lg text-watox-secondary max-w-md leading-relaxed">
              최적의 질소 에너지를 피부 깊숙이 전달하기 위한 waTox만의 3단계 가이드를 확인하세요.
            </p>

            {/* Reminder Card */}
            <div className="glass-panel p-5 rounded-2xl flex items-center justify-between group hover:border-watox-cyan/30 transition-all duration-300 max-w-md">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-watox-cyan/10 flex items-center justify-center text-watox-cyan">
                  <Bell className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-label text-xs font-bold uppercase tracking-wider text-black">Daily Reminder</div>
                  <div className="text-sm text-watox-secondary">Set your misting schedule</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 px-3 py-1.5 bg-black/5 rounded-lg border border-black/5 hover:bg-black/10 transition-colors">
                  <span className="font-label text-xs">09:00 AM</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                <button 
                  onClick={() => setReminderEnabled(!reminderEnabled)}
                  className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${reminderEnabled ? 'bg-watox-cyan' : 'bg-black/10'}`}
                >
                  <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${reminderEnabled ? 'translate-x-6' : 'translate-x-0'}`} />
                </button>
              </div>
            </div>

            <button className="flex items-center gap-3 px-8 py-4 bg-black text-white font-label text-sm uppercase tracking-widest hover:bg-black/80 transition-all energy-glow rounded-sm">
              <PlayCircle className="w-5 h-5" />
              Watch Video Guide
            </button>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-black/5 shadow-2xl">
              <img 
                id="hero-model"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-C6959ulGqQICqFwKTnMMrCvac-QKb9FeuahEo5HnuJYPzvwiSMMKrhbzf-9selyoZFYQBIypW-PcSTocTBBwp8cdwQhZufYT_DpjMqhp3gG-L9KkVxnC5yi55nWusj6f4WhTBJv9OX1BcgpSRUYZGY8Os9Ye9Fe6WWk4jK13Q3b_yRyCAJvthkQaKcr-iIi9TFuILq6o3yesZsKcwgD2HnpY7p7Ux9LVCKBwN-yH4ZHO5LkuAevzA6AGXJNlM2tjZxdqBnnlmq0" 
                alt="WATOX Method"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Stat Badge */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-8 -left-8 glass-panel p-6 rounded-2xl shadow-xl max-w-[200px]"
            >
              <div className="font-headline text-4xl text-watox-cyan mb-1 italic">98%</div>
              <div className="font-label text-xs leading-relaxed font-semibold uppercase text-black">
                분사 직후<br />피부 수분도 증가
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Steps Section */}
        <section className="py-24">
          <div className="text-center mb-20">
            <h2 className="font-headline text-4xl italic mb-4">Instructional Steps</h2>
            <div className="h-0.5 w-16 bg-watox-cyan mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                id: "01",
                title: "Prepare",
                desc: "사용 전 제품을 가볍게 흔들어 내용물이 잘 섞이도록 합니다. 약 15-20cm 거리를 두고 눈을 감은 상태에서 준비하세요.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOO3HwQjcpjJ7Y-oJhA-2hJR7megKDxwGFE4Rk7b_28MgLGAE8-OQsi6eQR695Vs4Wc1ORBs0SyGs32OLkv2xsHmu0_qOTb-jMWNtYVMNuQmBz3ALxVCJA8sKMAbf2MRMHyPyPBroZFBavMIrWmfJUfrLL91YEt7FEQl3iX-65NpZNJqQR4s9UfeUJP-67da6Gw7jEA84yVHUxEKe_zDZyLCoNxRJhCVP3rUsP11N_b5mOnH2c4E5Yl_6OwLgiKXCQFxj3bLGRZu8"
              },
              {
                id: "02",
                title: "Mist",
                desc: "얼굴 전체에 골고루 3~4회 분사합니다. 미세한 입자가 피부 표면에 부드럽게 안착하여 질소 에너지를 전달합니다.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxTTcwHpTmDz9249lgFtqqLplZwnzY4rbHG91vf_uSfpTOf1sSHYwtTnGwY_OjzRlUL0LV1tRyJ0EG_girCENXFIBznmtWz8OcLQkFzOpyt-4Ou7DQ4aXfNwXk31upf6VwySw7Ulei-jAp08Xe-DltBk5b4LBMeg0vEjpFU3e5r0KCLIB_oKZjwYismnwuEKefL_Up6udxGCqfwVB_13lFu0UYdVwU1_xUE-mwoWdVewVvYenHuiMOpddrIIZW6-tTKQJr6Xe3Z0g"
              },
              {
                id: "03",
                title: "Absorb",
                desc: "손으로 두드리지 않고 자연스럽게 흡수되도록 기다립니다. 피부 속까지 에너지가 활성화되는 과정을 느껴보세요.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuClymf7CR1WNTBXbtJ--hoLz1_iSpJMdezzUT4JyoKbFFVP0S3cpNwGhoeL7yxfAMtI2UA3YUaSpU0FdlMmYdgOnhA2bxUlppCopt53OWWsr6Xfc3KByiq8t1YtkW42LTRZFkomptsMi5IYLwTMx9VAG72xQ8JWMbzlWArbWtyByPNSVCreps6K3NKi9fCBPLQhzjRiB9B5QkcDQISx2P_EmyRl79XNUNTM2ZlmtNyddqRjv88QgnAKimza-Zs_cC_sYhC05LqVsd0"
              }
            ].map((step, i) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="group text-center"
              >
                <div className="relative mb-8 max-w-[280px] mx-auto">
                  <div className="aspect-square rounded-full overflow-hidden border border-black/5 group-hover:border-watox-cyan/50 transition-colors duration-500">
                    <img 
                      src={step.img} 
                      alt={step.title}
                      className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-label text-sm">
                    {step.id}
                  </div>
                </div>
                <h3 className="font-headline text-2xl mb-4 italic">Step {step.id}. {step.title}</h3>
                <p className="font-body text-sm text-watox-secondary leading-relaxed px-4">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Safety Notice */}
        <section className="py-12 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel p-10 rounded-3xl border-watox-cyan/10 relative overflow-hidden"
          >
            <div className="absolute -top-4 -right-4 opacity-5 rotate-12">
              <FlaskConical className="w-64 h-64 text-watox-cyan" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Info className="w-5 h-5 text-red-500" />
                <span className="font-label text-xs text-red-500 font-bold uppercase tracking-widest">Safety Notice</span>
              </div>
              <h4 className="font-headline text-3xl mb-6">피부 따가움 현상에 대하여</h4>
              <div className="space-y-6 font-body text-watox-secondary leading-relaxed">
                <p>
                  사용 직후 일시적으로 화끈거림이나 따가운 증상이 느껴질 수 있습니다. 이는 유효 성분이 피부에 작용하여 미세 혈관을 자극하고 에너지를 활성화하는 <strong className="text-black font-semibold">자연스러운 리액션</strong>입니다.
                </p>
                <p>
                  피부 타입에 따라 차이가 있을 수 있으나, 대부분 5분 이내에 사라지며 이는 제품의 효능이 올바르게 전달되고 있다는 신호입니다. 안심하고 사용하셔도 좋습니다.
                </p>
              </div>
              <div className="mt-10 p-5 border-l-2 border-watox-cyan bg-watox-cyan/5 italic text-sm text-watox-secondary">
                * 증상이 장시간 지속되거나 심한 붉은 반점이 동반될 경우 사용을 중단하고 전문의와 상담하십시오.
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-3xl border-t border-black/5 h-20 px-6 z-50">
        <div className="max-w-md mx-auto h-full flex items-center justify-between">
          <NavItem icon={<Home className="w-6 h-6" />} label="Discover" />
          <NavItem icon={<FlaskConical className="w-6 h-6" />} label="Science" />
          <NavItem icon={<Sparkles className="w-6 h-6" />} label="Routine" active />
          <NavItem icon={<Users className="w-6 h-6" />} label="Reviews" />
        </div>
      </nav>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: ReactNode, label: string, active?: boolean }) {
  return (
    <button className={`flex flex-col items-center gap-1 transition-all ${active ? 'text-watox-cyan scale-110 drop-shadow-sm' : 'text-watox-secondary opacity-60 hover:opacity-100'}`}>
      <div className="transition-transform duration-200">
        {icon}
      </div>
      <span className="font-label text-[10px] uppercase font-bold tracking-widest">{label}</span>
    </button>
  );
}
