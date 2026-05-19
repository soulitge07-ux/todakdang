/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { useState, useRef, ReactNode } from "react";
import { ChevronRight, Instagram, ShoppingBag, Menu, Heart, Sparkles, Leaf, Zap, Bike, Store, Phone, Gift, MessageSquare, PartyPopper, Baby, Calendar, CheckCircle2, Clock, Users, Plus, Minus, HelpCircle, Info } from "lucide-react";

const FAQItem = ({ question, answer }: { question: string, answer: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-white rounded-3xl border border-black/5 overflow-hidden transition-all duration-300 hover:shadow-md">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 sm:p-8 flex items-center justify-between text-left group"
      >
        <div className="flex items-center gap-4">
          <HelpCircle className={`w-6 h-6 transition-colors ${isOpen ? 'text-ms-pink' : 'text-black/20'}`} />
          <span className="text-base sm:text-lg font-display">{question}</span>
        </div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-ms-pink text-white rotate-180' : 'bg-black/5 text-black/40'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="p-6 sm:p-8 pt-0 font-heading text-base opacity-60 leading-relaxed border-t border-black/5 bg-black/[0.01]">
          {answer}
        </div>
      </motion.div>
    </div>
  );
};

const MochiIllustration = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 70 Q20 40 50 40 Q80 40 80 70 Q80 85 50 85 Q20 85 20 70 Z" />
    <path d="M35 55 Q40 50 45 55" strokeWidth="1.5" />
    <path d="M55 55 Q60 50 65 55" strokeWidth="1.5" />
    <circle cx="50" cy="70" r="2" fill="currentColor" />
  </svg>
);

const BambooBasket = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="50" cy="60" rx="40" ry="20" />
    <ellipse cx="50" cy="50" rx="40" ry="20" />
    <path d="M10 50 L10 60 M90 50 L90 60" />
    <path d="M25 45 Q50 35 75 45" strokeDasharray="4 2" />
    <circle cx="35" cy="50" r="5" />
    <circle cx="50" cy="55" r="5" />
    <circle cx="65" cy="50" r="5" />
  </svg>
);

const Marquee = ({ text, className }: { text: string; className?: string }) => (
  <div className={`overflow-hidden whitespace-nowrap border-y border-black py-4 ${className}`}>
    <motion.div
      animate={{ x: [0, -1000] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="inline-block"
    >
      <span className="text-2xl md:text-4xl lg:text-5xl font-display mr-12">{text}</span>
      <span className="text-2xl md:text-4xl lg:text-5xl font-display mr-12">{text}</span>
      <span className="text-2xl md:text-4xl lg:text-5xl font-display mr-12">{text}</span>
      <span className="text-2xl md:text-4xl lg:text-5xl font-display mr-12">{text}</span>
    </motion.div>
  </div>
);

const WatercolorSplash = ({ className, color }: { className?: string; color: string }) => (
  <div className={`absolute pointer-events-none opacity-20 blur-3xl rounded-full ${color} ${className}`} />
);

const MochiCharacter = ({ className, type = "default" }: { className?: string; type?: "default" | "rabbit" | "bear" | "sparkle" }) => (
  <motion.div 
    animate={{ 
      y: [0, -10, 0],
      rotate: type === "sparkle" ? [0, 5, -5, 0] : [-1, 1, -1]
    }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className={`relative ${className}`}
  >
    <svg viewBox="0 0 100 80" className="w-full h-full drop-shadow-md">
      {/* Body */}
      <path d="M10 60 Q10 20 50 20 Q90 20 90 60 Q90 75 50 75 Q10 75 10 60 Z" fill="white" stroke="#5D4037" strokeWidth="1.5" />
      
      {/* Ears for variations */}
      {type === "rabbit" && (
        <>
          <path d="M30 25 Q25 5 35 5 Q45 5 40 25" fill="white" stroke="#5D4037" strokeWidth="1.5" />
          <path d="M60 25 Q55 5 65 5 Q75 5 70 25" fill="white" stroke="#5D4037" strokeWidth="1.5" />
        </>
      )}
      {type === "bear" && (
        <>
          <circle cx="25" cy="25" r="8" fill="white" stroke="#5D4037" strokeWidth="1.5" />
          <circle cx="75" cy="25" r="8" fill="white" stroke="#5D4037" strokeWidth="1.5" />
        </>
      )}

      {/* Face */}
      <path d="M42 48 Q45 45 48 48" stroke="#5D4037" strokeWidth="1" fill="none" />
      <path d="M52 48 Q55 45 58 48" stroke="#5D4037" strokeWidth="1" fill="none" />
      <circle cx="38" cy="43" r="1.2" fill="#5D4037" />
      <circle cx="62" cy="43" r="1.2" fill="#5D4037" />
      <path d="M49 55 Q50 58 51 55" stroke="#5D4037" strokeWidth="1.5" fill="none" />
      
      {/* Blushed Cheeks */}
      <circle cx="30" cy="50" r="4" fill="#FCE4EC" opacity="0.6" />
      <circle cx="70" cy="50" r="4" fill="#FCE4EC" opacity="0.6" />

      {/* Sparkles / Elements */}
      {(type === "default" || type === "sparkle") && (
        <>
          <motion.path 
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            d="M15 15 L20 25 L25 15 L20 5 Z" fill="#FFD54F" 
          />
          <motion.path 
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            d="M85 10 L90 20 L95 10 L90 0 Z" fill="#FFD54F" 
          />
        </>
      )}
    </svg>
  </motion.div>
);

const SpeechBubble = ({ text, className }: { text: string; className?: string }) => (
  <div className={`relative bg-watercolor-yellow/80 backdrop-blur-sm p-4 rounded-2xl border border-brand-brown/10 shadow-sm ${className}`}>
    <p className="text-sm font-bold text-brand-brown whitespace-nowrap">{text}</p>
    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-watercolor-yellow/80 border-r border-b border-brand-brown/10 rotate-45" />
  </div>
);

const FloatingElements = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ 
          x: Math.random() * 100 + "%", 
          y: Math.random() * 100 + "%",
          opacity: 0 
        }}
        animate={{ 
          y: [null, Math.random() * -100 - 50],
          opacity: [0, 0.4, 0],
          rotate: [0, 360]
        }}
        transition={{ 
          duration: Math.random() * 10 + 10, 
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute"
      >
        <div className={`w-4 h-4 rounded-full blur-xl ${
          ["bg-watercolor-pink", "bg-watercolor-blue", "bg-watercolor-purple", "bg-watercolor-yellow"][i % 4]
        }`} />
      </motion.div>
    ))}
  </div>
);

const RedStamp = ({ className }: { className?: string }) => (
  <div className={`bg-brand-red text-white p-2 font-display text-lg leading-none flex flex-col items-center justify-center rounded-sm shadow-sm rotate-[-5deg] ${className}`}>
    <span className="tracking-tighter">토닥</span>
    <span className="tracking-tighter">당</span>
  </div>
);

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["rgba(255, 249, 245, 0)", "rgba(252, 228, 236, 0.3)", "rgba(225, 245, 254, 0.3)"]
  );

  const menuCategories = [
    {
      name: "Todak Signature",
      title: "토닥당 생과일 모찌 컬렉션",
      items: [
        { title: "딸기 모찌", price: "3,800원", description: "상큼한 딸기와 달콤한 팥의 완벽한 밸런스, 실패 없는 베스트셀러", image: "/모찌_분리/딸기모찌.png", color: "bg-pink-100" },
        { title: "두바이초콜렛 모찌", price: "6,300원", description: "바삭한 카다이프와 진한 피스타치오의 만남, 나를 위한 가장 핫한 보상", image: "/모찌_분리/두바이초콜렛모찌.png", color: "bg-amber-100" },
        { title: "샤인머스캣 모찌", price: "4,000원", description: "탱글한 과즙이 통째로!", image: "/모찌_분리/샤인머스켓모찌.png", color: "bg-green-100" },
        { title: "샤인 페레로로쉐", price: "4,000원", description: "샤인머스캣과 진한 초코의 이색 조화", image: "/모찌_분리/샤인페레로로셰모찌.png", color: "bg-green-50" },
        { title: "통귤 모찌", price: "4,000원", description: "비타민이 팡팡 터지는 시원한 맛", image: "/모찌_분리/통귤모찌.png", color: "bg-orange-100" },
        { title: "무화과 모찌", price: "3,800원", description: "가을의 깊은 단맛과 독보적인 식감", image: "/모찌_분리/무화과모찌.png", color: "bg-purple-100" },
        { title: "골드키위 모찌", price: "4,000원", description: "새콤달콤 기분 좋은 에너지", image: "/모찌_분리/골드키위모찌.png", color: "bg-yellow-50" },
        { title: "키위 모찌", price: "3,500원", description: "뒷맛까지 깔끔한 상큼함", image: "/모찌_분리/키위모찌.png", color: "bg-emerald-50" },
        { title: "파인애플 모찌", price: "3,500원", description: "시원 청량 과즙 듬뿍", image: "/모찌_분리/파인애플모찌.png", color: "bg-yellow-100" },
        { title: "멜론 모찌", price: "4,000원", description: "부드러운 향긋함이 사르르", image: "/모찌_분리/멜론모찌.png", color: "bg-lime-50" },
        { title: "아이스 홍시 모찌", price: "4,300원", description: "시원하고 진한 달콤함, 어르신 추천!", image: "/모찌_분리/아이스홍시모찌.png", color: "bg-orange-50" },
        { title: "통곶감 모찌", price: "4,000원", description: "명품 곶감 한 알이 통째로! 입안 가득 터지는 진득한 달콤함과 쫀득함의 정점", image: "/모찌_분리/통곶감모찌.png", color: "bg-orange-100" },
      ]
    },
    {
      name: "Package",
      title: "소중한 마음을 전하는 선물세트",
      items: [
        { title: "[포장특가] 오늘도 수고한 나를 위한 '토닥 5구'", price: "17,000원", description: "구성 고민 없이 알차게! 퇴근길 나에게 주는 작은 사치", image: "/모찌_분리/7구세트.png", color: "bg-rose-50" },
        { title: "[선물 1위] 마음을 전하는 '보자기 힐링 7구'", price: "24,000원", description: "품격 있는 보자기 포장 포함, 감사와 응원을 전하는 최고의 선택", image: "/모찌_분리/7구 보자기.png", color: "bg-indigo-50" },
      ]
    },
    {
      name: "Fruit Box",
      title: "신선함을 담은 과일 간식",
      subtitle: "모찌뿐만 아니라 신선한 생과일 그 자체도 즐겨보세요.",
      items: [
        { title: "컵 과일", price: "5,500원", description: "과일 소믈리에 엄선, 6가지 프리미엄 제철 과일로 신선한 하루 비타민을 채우세요", image: "/모찌_분리/컵과일.png", color: "bg-orange-50" },
      ]
    },
    {
      name: "Fresh Juice",
      title: "토닥 생과일 주스",
      subtitle: "토닥당에서 엄선한 신선한 프리미엄 생과일을 그대로 갈아 보틀에 담아드립니다 · 1보틀 500ml",
      items: [
        { title: "딸기 주스", price: "5,500원", description: "새빨간 제철 딸기를 통째로 갈아 만든 진한 한 잔", image: "/토닥생과일주스/A딸기주스.png", color: "bg-pink-100" },
        { title: "딸기 바나나 주스", price: "5,500원", description: "상큼한 딸기와 부드러운 바나나의 황금 조합", image: "/토닥생과일주스/A딸기바나나주스.png", color: "bg-rose-100" },
        { title: "망고 주스", price: "5,500원", description: "잘 익은 애플망고의 진득한 단맛이 그대로", image: "/토닥생과일주스/A망고주스.png", color: "bg-yellow-100" },
        { title: "바나나 주스", price: "5,500원", description: "부드럽고 든든한 한 잔, 아침 식사 대용으로 추천", image: "/토닥생과일주스/A바나나주스.png", color: "bg-yellow-50" },
        { title: "수박 주스", price: "5,500원", description: "한여름 갈증을 시원하게 풀어주는 청량 한 잔", image: "/토닥생과일주스/A수박주스.png", color: "bg-red-100" },
        { title: "오렌지 주스", price: "5,500원", description: "매일 아침 직접 짜낸 비타민 가득한 상큼함", image: "/토닥생과일주스/A오렌지주스.png", color: "bg-orange-100" },
        { title: "청포도 주스", price: "5,500원", description: "향긋하고 깔끔한 단맛, 여운까지 우아한 한 잔", image: "/토닥생과일주스/A청포도주스.png", color: "bg-lime-100" },
        { title: "키위 주스", price: "5,500원", description: "새콤달콤 톡 쏘는 그린 비타민 충전", image: "/토닥생과일주스/A키위주스.png", color: "bg-emerald-100" },
        { title: "토마토 주스", price: "5,500원", description: "100% 완숙 토마토만 담은 건강한 진한 맛", image: "/토닥생과일주스/A토마토주스.png", color: "bg-red-50" },
      ]
    }
  ];

  return (
    <motion.div ref={containerRef} style={{ backgroundColor: bgColor }} className="transition-colors duration-500 relative">
      <FloatingElements />
      
      {/* Background Splashes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <WatercolorSplash color="bg-watercolor-pink" className="w-[800px] h-[800px] -top-40 -left-40" />
        <WatercolorSplash color="bg-watercolor-blue" className="w-[600px] h-[600px] top-1/4 -right-20" />
        <WatercolorSplash color="bg-watercolor-purple" className="w-[700px] h-[700px] bottom-1/4 -left-20" />
        <WatercolorSplash color="bg-watercolor-yellow" className="w-[500px] h-[500px] -bottom-20 right-1/4" />
      </div>

      {/* Madame Sum Style Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md border-b border-black/5">
        <div className="max-w-[1800px] mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <RedStamp />
            <div className="flex flex-col">
              <span className="text-xl font-display tracking-tighter leading-none">ToDAK DANG</span>
              <span className="text-[10px] font-heading tracking-widest opacity-60">FRUITs & MOCHI</span>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-8 text-sm font-heading tracking-wider">
              <a href="#brand-story" className="hover:text-ms-pink transition-colors">브랜드 스토리</a>
              <a href="#menu" className="hover:text-ms-pink transition-colors">메뉴 소개</a>
              <a href="#catering" className="hover:text-ms-pink transition-colors">단체/답례품 문의</a>
              <a href="https://map.naver.com/p/entry/place/1247655917?lng=129.0902071&lat=35.1266143&placePath=%2Fhome%3ForderRedirectUrl%3Dhttps%3A%2F%2Fm.booking.naver.com%2Forder%2Fbizes%2F1333296%2Fitems%2F6478004%3Ftheme%3Dplace%26lang%3Dko%26entry%3Dpll%26service-target%3Dmap-pc%26pcmap%3D1&c=15.00,0,0,0,dh" target="_blank" rel="noopener noreferrer" className="bg-brand-red text-white px-5 py-2.5 rounded-full hover:scale-105 transition-all shadow-sm shadow-brand-red/20">네이버 포장예약</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6">
          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              <div className="inline-block bg-ms-pink/10 text-ms-pink px-4 py-2 rounded-full text-sm font-bold mb-6">
                오늘도 수고했어 토닥토닥 ✨
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl mb-8 leading-[1.2] font-display tracking-tighter text-brand-brown">
                오늘도 수고한 당신을 위해,<br />달콤한 위로 한 입.
              </h1>
              <p className="text-base sm:text-lg lg:text-xl font-heading mb-12 max-w-md leading-relaxed opacity-80">
                지친 당신의 하루 끝에 찾아오는 작은 위로. 15Brix의 달콤함으로 나를 위한 선물을 완성하세요.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://map.naver.com/p/entry/place/1247655917?lng=129.0902071&lat=35.1266143&placePath=%2Fhome%3ForderRedirectUrl%3Dhttps%3A%2F%2Fm.booking.naver.com%2Forder%2Fbizes%2F1333296%2Fitems%2F6478004%3Ftheme%3Dplace%26lang%3Dko%26entry%3Dpll%26service-target%3Dmap-pc%26pcmap%3D1&c=15.00,0,0,0,dh" target="_blank" rel="noopener noreferrer" className="bg-brand-red text-white px-10 py-5 rounded-full text-sm font-heading tracking-wide hover:scale-105 transition-transform shadow-lg shadow-brand-red/20">
                  네이버로 포장 예약하고 혜택 받기
                </a>
                <a href="#brand-story" className="bg-white text-black border border-black/10 px-10 py-5 rounded-full text-sm font-heading tracking-wide hover:bg-black hover:text-white transition-all">
                  브랜드 스토리
                </a>
              </div>
            </motion.div>
            
            <div className="relative flex justify-center items-center">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-20">
                <SpeechBubble text="오늘도 수고했어 토닥토닥 ✨" />
              </div>
              <motion.img
                src="/todak_characters/fruity.png"
                alt="토닥당 캐릭터 fruity"
                animate={{ y: [0, -12, 0], rotate: [-3, 3, -3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-64 h-64 sm:w-96 sm:h-96 object-contain relative z-10"
              />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-ms-pink/20 rounded-full scale-110"
              />
            </div>
          </div>
        </section>

        <Marquee text="오늘도 수고한 당신을 위해, 달콤한 위로 한 입 • 토닥당 과일모찌 • " className="bg-white/50 backdrop-blur-sm border-y border-black/5" />

        {/* Character Introduction Section */}
        <section id="characters" className="py-32 px-6 sm:px-8 bg-white/40 backdrop-blur-sm overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <div className="text-ms-pink font-bold tracking-widest mb-4">MEET OUR FRIENDS</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display leading-tight text-brand-brown">
                토닥당의 작은 친구들
              </h2>
              <p className="mt-6 text-base sm:text-lg font-heading opacity-70 max-w-xl mx-auto leading-relaxed">
                지친 마음에 위로가 필요했던<br />
                작은 친구의 이야기입니다.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
              {/* Fruity */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center text-center"
              >
                <motion.img
                  src="/todak_characters/fruity.png"
                  alt="프루티"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-56 h-56 sm:w-72 sm:h-72 object-contain mb-8 drop-shadow-xl"
                />
                <span className="text-xs font-bold tracking-[0.3em] text-ms-pink mb-3">CHARACTER 01</span>
                <h3 className="text-2xl sm:text-3xl font-display text-brand-brown mb-4">프루티 Fruity</h3>
                <p className="text-base italic font-display text-ms-pink mb-6 leading-relaxed">
                  "오늘 하루도, 너무 애썼지…"
                </p>
                <p className="text-sm sm:text-base font-heading opacity-75 leading-relaxed max-w-sm">
                  매일 작은 일들에 마음을 다 써버리는 프루티.
                  웃으면서도 속으로는 자주 지치고, 누군가 따뜻하게
                  토닥여 주기를 가만히 기다리는 여린 친구입니다.
                </p>
              </motion.div>

              {/* Mozzicat */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <motion.img
                  src="/todak_characters/mozzicat.png"
                  alt="모찌캣"
                  animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-56 h-56 sm:w-72 sm:h-72 object-contain mb-8 drop-shadow-xl"
                />
                <span className="text-xs font-bold tracking-[0.3em] text-ms-pink mb-3">CHARACTER 02</span>
                <h3 className="text-2xl sm:text-3xl font-display text-brand-brown mb-4">모찌캣 Mozzicat</h3>
                <p className="text-base italic font-display text-ms-pink mb-6 leading-relaxed">
                  "괜찮아, 토닥토닥. 한 입이면 충분해."
                </p>
                <p className="text-sm sm:text-base font-heading opacity-75 leading-relaxed max-w-sm">
                  말없이 옆에 머무는 따스한 친구, 모찌캣.
                  프루티가 힘들어 보일 때면 가장 달콤한 모찌 한 알을
                  슬며시 건네며, 작지만 진심 어린 위로를 전합니다.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center bg-white/60 backdrop-blur-sm rounded-[2.5rem] px-8 sm:px-12 py-12 border border-black/5 shadow-sm"
            >
              <img
                src="/todak_characters/Todak_characters.png"
                alt="모찌캣과 프루티"
                className="w-full max-w-sm mx-auto object-contain mb-8"
              />
              <p className="text-lg sm:text-xl font-display text-brand-brown leading-relaxed mb-3">
                혼자 버텨내던 프루티에게 모찌캣이 다가와<br />
                달콤한 한 입을 건넨 순간,
              </p>
              <p className="text-base sm:text-lg font-heading opacity-70 leading-relaxed">
                두 친구의 작은 위로가 시작되었습니다.<br />
                오늘도 토닥당은, 그 마음을 닮은 한 입을 빚어냅니다.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-32 px-6 sm:px-8">
          <div className="max-w-[1800px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 sm:mb-24 gap-8">
              <div>
                <div className="text-sm font-heading tracking-widest mb-4 opacity-40">OUR LINEUP</div>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl leading-[1.1] font-display">마음을 채우는<br />달콤한 라인업</h2>
              </div>
              <p className="font-heading text-sm sm:text-base lg:text-lg max-w-sm opacity-60 leading-snug">
                매일 새벽 공수하는 15Brix 이상의 최상급 과일로만 정성껏 빚어냅니다.
              </p>
            </div>
            
            <div className="space-y-32">
              {menuCategories.map((category, catIndex) => (
                <div key={catIndex}>
                  <div className="mb-12 border-b border-black/5 pb-8">
                    <div className="flex items-baseline gap-4 mb-2">
                      <span className="text-ms-pink font-bold tracking-widest text-sm uppercase">[{category.name}]</span>
                      <h3 className="text-2xl sm:text-3xl font-display text-brand-brown">{category.title}</h3>
                    </div>
                    {category.subtitle && (
                      <p className="text-base opacity-60 font-heading">{category.subtitle}</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                    {category.items.map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`group relative p-8 rounded-[2.5rem] ${item.color} border border-black/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer flex flex-col h-full`}
                      >
                        <div className="aspect-square rounded-3xl overflow-hidden mb-8 bg-white/50 shadow-inner p-6">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="flex flex-col flex-grow">
                          <div className="flex justify-between items-start mb-4">
                            <h4 className="text-lg sm:text-xl font-bold tracking-tight text-brand-brown leading-tight">{item.title}</h4>
                          </div>
                          <p className="text-xs sm:text-sm font-heading opacity-70 mb-6 leading-relaxed flex-grow">
                            {item.description}
                          </p>
                          <div className="flex items-center justify-between pt-6 border-t border-black/5">
                            <span className="text-base font-bold text-brand-red">{item.price}</span>
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md group-hover:bg-brand-red group-hover:text-white transition-colors">
                              <ShoppingBag className="w-5 h-5" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Enjoy - Illustration Section */}
        <section className="py-20 sm:py-32 bg-watercolor-yellow/30 border-b border-black/5">
          <div className="max-w-[1800px] mx-auto px-6 sm:px-8">
            <div className="text-center mb-16 sm:mb-32">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl mb-8 leading-[1.2] tracking-tighter">How to enjoy<br />your mochi</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/60 backdrop-blur-sm p-10 sm:p-16 rounded-[3rem] border border-brand-brown/5 text-center group hover:bg-ms-blue hover:text-white transition-all duration-500">
                <MochiCharacter className="w-32 h-32 sm:w-48 sm:h-48 mx-auto mb-8 sm:mb-12" type="bear" />
                <h3 className="text-xl sm:text-2xl mb-4 sm:mb-6 font-display">Step 01</h3>
                <p className="font-heading text-base sm:text-lg leading-relaxed opacity-80 group-hover:opacity-100">
                  상온에서 10분 정도<br />자연 해동해주세요.
                </p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-10 sm:p-16 rounded-[3rem] border border-brand-brown/5 text-center group hover:bg-ms-pink hover:text-white transition-all duration-500">
                <MochiCharacter className="w-32 h-32 sm:w-48 sm:h-48 mx-auto mb-8 sm:mb-12" type="rabbit" />
                <h3 className="text-xl sm:text-2xl mb-4 sm:mb-6 font-display">Step 02</h3>
                <p className="font-heading text-base sm:text-lg leading-relaxed opacity-80 group-hover:opacity-100">
                  반으로 갈라 과일의<br />단면을 감상하세요.
                </p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-10 sm:p-16 rounded-[3rem] border border-brand-brown/5 text-center group hover:bg-ms-purple hover:text-white transition-all duration-500">
                <div className="w-32 h-32 sm:w-48 sm:h-48 mx-auto mb-8 sm:mb-12 flex items-center justify-center">
                  <Heart className="w-16 h-16 sm:w-24 sm:h-24 text-brand-red fill-brand-red group-hover:text-white group-hover:fill-white transition-all duration-300" />
                </div>
                <h3 className="text-xl sm:text-2xl mb-4 sm:mb-6 font-display">Step 03</h3>
                <p className="font-heading text-base sm:text-lg leading-relaxed opacity-80 group-hover:opacity-100">
                  한 입 가득 베어 물어<br />달콤함을 만끽하세요.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Brand & Taste - Secret Section */}
        <section className="py-32 px-6 sm:px-8 bg-white overflow-hidden">
          <div className="max-w-[1800px] mx-auto">
            <div className="text-center mb-24">
              <div className="text-sm font-heading tracking-widest mb-4 text-ms-pink font-bold">BRAND & TASTE</div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display leading-tight">토닥당이 유독 맛있는<br />3가지 고집</h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 relative">
              {/* Decorative Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-black/5 -translate-y-1/2 z-0"></div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 bg-white p-12 rounded-[3rem] border border-black/5 shadow-sm hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-ms-pink group-hover:text-white transition-colors duration-500">
                  <Sparkles className="w-8 h-8" />
                </div>
                <div className="mb-6">
                  <span className="text-ms-pink font-bold text-sm tracking-wider block mb-2">[과일 전문가의 안목]</span>
                  <h3 className="text-xl sm:text-2xl font-display leading-tight">"공판장 직송,<br />1%의 프리미엄"</h3>
                </div>
                <p className="font-heading text-base opacity-60 leading-relaxed">
                  과일 가게 운영 경험을 바탕으로 매일 아침 공판장에서 가장 신선하고 당도가 높은 최상급 과일만을 직접 검수하여 가져옵니다. 타협하지 않는 원재료가 토닥당 맛의 시작입니다.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative z-10 bg-white p-12 rounded-[3rem] border border-black/5 shadow-sm hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-ms-blue group-hover:text-white transition-colors duration-500">
                  <Leaf className="w-8 h-8" />
                </div>
                <div className="mb-6">
                  <span className="text-ms-blue font-bold text-sm tracking-wider block mb-2">[당일 생산의 쫄깃함]</span>
                  <h3 className="text-xl sm:text-2xl font-display leading-tight">"공장 떡과는<br />비교할 수 없는 정성"</h3>
                </div>
                <p className="font-heading text-base opacity-60 leading-relaxed">
                  기성품 떡이 아닌, 방앗간에서 갓 만든 떡만을 사용합니다. 아침마다 준비한 찰기 있는 떡으로 주문 즉시 빚어내어, 입안에 달라붙지 않는 기분 좋은 쫄깃함을 선사합니다.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative z-10 bg-white p-12 rounded-[3rem] border border-black/5 shadow-sm hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-ms-purple group-hover:text-white transition-colors duration-500">
                  <Zap className="w-8 h-8" />
                </div>
                <div className="mb-6">
                  <span className="text-ms-purple font-bold text-sm tracking-wider block mb-2">[황금 비율의 얇은 피]</span>
                  <h3 className="text-xl sm:text-2xl font-display leading-tight">"과즙을 극대화하는<br />0.1mm의 기술"</h3>
                </div>
                <p className="font-heading text-base opacity-60 leading-relaxed">
                  과일 본연의 맛을 가리지 않도록 얇게 편 떡 피와 저당 앙금의 황금 비율을 찾았습니다. 한 입 베어 무는 순간 터져 나오는 풍부한 과즙과 부드러운 조화를 느껴보세요.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Order & Nudge - Order Guide Section */}
        <section className="py-32 px-6 sm:px-8 bg-watercolor-yellow/10 border-b border-black/5">
          <div className="max-w-[1800px] mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
              <div className="max-w-2xl">
                <div className="text-sm font-heading tracking-widest mb-4 text-brand-red font-bold">ORDER GUIDE</div>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display leading-tight">가장 편하게 토닥당을<br />만나는 방법</h2>
              </div>
              <p className="text-lg sm:text-xl font-heading opacity-60 max-w-md lg:text-right">
                정성과 혜택을 가득 채웠습니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white p-12 sm:p-16 rounded-[4rem] border border-black/5 shadow-sm flex flex-col h-full group"
              >
                <div className="w-20 h-20 bg-green-50 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-green-500 group-hover:text-white transition-all duration-500">
                  <Store className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold tracking-wider">PICKUP</span>
                    <h3 className="text-xl sm:text-2xl font-display">[네이버 포장 예약]</h3>
                  </div>
                  <h4 className="text-lg sm:text-xl font-heading mb-6">"가장 현명한 선택"</h4>
                  <p className="text-base sm:text-lg font-heading opacity-60 leading-relaxed">
                    기다림 없는 바로 픽업 + 포장 전용 특가 + 네이버 포인트 적립까지! 매장에서 바로 가져가실 수 있도록 정성껏 준비해둡니다.
                  </p>
                </div>
                <a href="https://naver.me/5vcEL0bV" target="_blank" rel="noopener noreferrer" className="mt-12 pt-12 border-t border-black/5 flex items-center justify-between">
                  <span className="font-bold text-green-600">네이버 플레이스 바로가기</span>
                  <ChevronRight className="w-6 h-6 text-green-600" />
                </a>
              </motion.div>

              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white p-12 sm:p-16 rounded-[4rem] border border-black/5 shadow-sm flex flex-col h-full group"
              >
                <div className="w-20 h-20 bg-brand-red/5 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-brand-red group-hover:text-white transition-all duration-500">
                  <Bike className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-4 py-1 bg-brand-red/10 text-brand-red rounded-full text-xs font-bold tracking-wider">DELIVERY</span>
                    <h3 className="text-xl sm:text-2xl font-display">[배달 및 퀵서비스]</h3>
                  </div>
                  <h4 className="text-lg sm:text-xl font-heading mb-6">"집에서 즐기는 힐링"</h4>
                  <p className="text-base sm:text-lg font-heading opacity-60 leading-relaxed">
                    배달의민족, 쿠팡이츠에서 '토닥당'을 검색하세요. <br />
                    <span className="text-sm mt-4 block text-brand-brown/60 italic">
                      * 장거리 퀵 주문은 매장으로 전화 문의 부탁드립니다.
                    </span>
                  </p>
                </div>
                <div className="mt-12 pt-12 border-t border-black/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-brand-red font-bold">
                    <Phone className="w-5 h-5" />
                    <div className="flex flex-col">
                      <span>매장 전화 문의</span>
                      <span className="text-lg tracking-wider">051-626-0359</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Packaging Privileges - Visitor Benefits Section */}
        <section className="py-32 px-6 sm:px-8 bg-white overflow-hidden">
          <div className="max-w-[1800px] mx-auto">
            <div className="text-center mb-24">
              <div className="text-sm font-heading tracking-widest mb-4 text-ms-blue font-bold">VISITOR PRIVILEGES</div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display leading-tight mb-8">포장 특전: 오직 방문 고객님께만<br />드리는 3가지 선물</h2>
              <p className="text-lg sm:text-xl font-heading opacity-60">"귀한 발걸음, 감사한 마음을 담아 보답합니다."</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-ms-pink/5 p-12 rounded-[3.5rem] border border-ms-pink/10 flex flex-col group hover:bg-ms-pink hover:text-white transition-all duration-500"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-8 h-8 text-ms-pink" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-sm font-bold tracking-widest mb-2 opacity-60">[리뷰 이벤트]</h3>
                  <h4 className="text-xl sm:text-2xl font-display mb-6">"맛있게 드셨다면,<br />한 입 더!"</h4>
                  <p className="font-heading text-base leading-relaxed mb-8 opacity-80">
                    네이버 영수증 리뷰 작성 시, 과일모찌 1구(원하는 맛 선택 가능)를 선물로 드립니다.
                  </p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl group-hover:bg-white/20 transition-colors">
                  <p className="text-sm font-heading italic leading-relaxed">
                    "여러분의 따뜻한 리뷰 한 줄이 지친 저에게도 큰 힘이 됩니다."
                  </p>
                  <span className="text-xs font-bold mt-2 block opacity-60">- 사장님 한마디</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-ms-blue/5 p-12 rounded-[3.5rem] border border-ms-blue/10 flex flex-col group hover:bg-ms-blue hover:text-white transition-all duration-500"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  <PartyPopper className="w-8 h-8 text-ms-blue" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-sm font-bold tracking-widest mb-2 opacity-60">[홈파티 지원]</h3>
                  <h4 className="text-xl sm:text-2xl font-display mb-6">"가족과 함께라면<br />컵과일은 서비스"</h4>
                  <p className="font-heading text-base leading-relaxed opacity-80">
                    모찌 5구 세트 이상 구매 시, 신선함이 톡톡 터지는 <strong className="group-hover:text-yellow-300 transition-colors">'미니 컵과일'</strong>을 함께 담아드립니다. 온 가족이 함께 풍성한 과일 파티를 즐겨보세요!
                  </p>
                </div>
                <div className="mt-8">
                  <Gift className="w-12 h-12 opacity-20 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-ms-purple/5 p-12 rounded-[3.5rem] border border-ms-purple/10 flex flex-col group hover:bg-ms-purple hover:text-white transition-all duration-500"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  <Baby className="w-8 h-8 text-ms-purple" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-sm font-bold tracking-widest mb-2 opacity-60">[키즈 케어]</h3>
                  <h4 className="text-xl sm:text-2xl font-display mb-6">"우리 아이 첫<br />과일 디저트"</h4>
                  <p className="font-heading text-base leading-relaxed opacity-80">
                    어린이용 모찌 구매 시, 한 입에 쏙 들어가는 '샤인머스캣 한입모찌'를 드립니다. 아이들도 안심하고 먹는 건강한 간식, 토닥당이 응원합니다.
                  </p>
                </div>
                <div className="mt-8 flex justify-end">
                  <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center font-bold text-xs">KIDS</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Catering & Group Orders Section */}
        <section id="catering" className="py-32 px-6 sm:px-8 bg-brand-brown text-white overflow-hidden">
          <div className="max-w-[1800px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <div className="text-sm font-heading tracking-[0.3em] mb-6 text-ms-pink font-bold uppercase">Catering & Gift</div>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display leading-[1.1] mb-12 tracking-tighter">
                  단체 및 답례품:<br />마음을 전하는 가장<br />달콤한 방법
                </h2>
                <div className="space-y-8 max-w-xl">
                  <p className="text-xl sm:text-2xl font-display leading-tight text-white/90">
                    소중한 순간, '토닥당'의 온기를 선물하세요.
                  </p>
                  <p className="text-base sm:text-lg font-heading opacity-60 leading-relaxed">
                    비즈니스 미팅, 결혼식 답례품, 아이들의 소중한 파티까지. 받는 분의 하루를 응원하는 정성을 담아 정갈하게 준비해 드립니다.
                  </p>
                </div>

                <div className="mt-16 space-y-12">
                  <div className="flex gap-8 group">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-ms-pink group-hover:border-ms-pink transition-all">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-display mb-2">맞춤형 큐레이션</h4>
                      <p className="font-heading opacity-50 leading-relaxed">행사 성격에 맞춰 모찌캣 추천 라인업이나 원하는 과일 구성을 자유롭게 선택하실 수 있습니다.</p>
                    </div>
                  </div>
                  <div className="flex gap-8 group">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-ms-blue group-hover:border-ms-blue transition-all">
                      <Gift className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-display mb-2">고품격 패키징</h4>
                      <p className="font-heading opacity-50 leading-relaxed">품격을 높여주는 보자기 포장과 감사의 마음을 담은 커스텀 메시지 카드 서비스를 제공합니다.</p>
                    </div>
                  </div>
                  <div className="flex gap-8 group">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-ms-purple group-hover:border-ms-purple transition-all">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-display mb-2">당일 제조 원칙</h4>
                      <p className="font-heading opacity-50 leading-relaxed">가장 맛있는 순간을 선물하실 수 있도록, 행사 시간에 맞춰 당일 아침 정성껏 빚어 전달합니다.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/5 backdrop-blur-xl p-12 sm:p-20 rounded-[4rem] border border-white/10">
                  <h3 className="text-2xl font-display mb-12 flex items-center gap-4">
                    <Users className="w-8 h-8 text-ms-pink" />
                    단체 주문 안내
                  </h3>
                  
                  <div className="space-y-12">
                    <div className="relative pl-12">
                      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-ms-pink/20 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-ms-pink" />
                      </div>
                      <h5 className="text-base font-bold mb-3 text-ms-pink">최소 수량</h5>
                      <p className="font-heading opacity-60 leading-relaxed">단체 주문은 50구 이상부터 가능하며, 최대 4가지 맛까지 구성하실 수 있습니다.</p>
                    </div>

                    <div className="relative pl-12">
                      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-ms-blue/20 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-ms-blue" />
                      </div>
                      <h5 className="text-base font-bold mb-3 text-ms-blue">추가 옵션</h5>
                      <p className="font-heading opacity-60 leading-relaxed">4가지 이상의 맛 추가나 특별한 과일 지정 시 소정의 추가 비용이 발생할 수 있습니다.</p>
                    </div>

                    <div className="relative pl-12">
                      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-ms-purple/20 flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-ms-purple" />
                      </div>
                      <h5 className="text-base font-bold mb-3 text-ms-purple">예약 방법</h5>
                      <p className="font-heading opacity-60 leading-relaxed">원활한 재료 수급과 정성스러운 준비를 위해 최소 3~5일 전 매장으로 문의 부탁드립니다.</p>
                    </div>
                  </div>

                  <a href="tel:051-626-0359" className="w-full mt-16 py-8 bg-white text-brand-brown rounded-3xl font-bold text-lg hover:bg-ms-pink hover:text-white transition-all duration-500 flex items-center justify-center gap-4 group">
                    <Phone className="w-6 h-6 group-hover:animate-bounce" />
                    케이터링 문의하기 (051-626-0359)
                  </a>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-ms-pink/20 blur-[100px] rounded-full"></div>
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-ms-purple/20 blur-[100px] rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Story Section */}
        <section id="brand-story" className="py-32 px-6 sm:px-8 bg-white/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="/owner.png"
                alt="Brand Story"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/20 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="text-ms-pink font-bold tracking-widest mb-4">BRAND STORY</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display mb-8 leading-tight text-brand-brown">
                당신의 하루를<br />토닥이는 한 입
              </h2>
              <p className="text-lg sm:text-xl italic font-display text-ms-pink mb-10 leading-relaxed">
                "내가 사라지는 기분이 들 때,<br />저를 살려준 건 과일 한 조각이었습니다."
              </p>

              <div className="space-y-8 text-sm sm:text-base leading-relaxed opacity-80 font-heading text-brand-brown">
                <p>
                  감정 노동에 지쳐 퇴근하던 길, <br />
                  내가 사라지는 기분이 들 때, 저를 다시 숨 쉬게 했던 건, 의외로 아주 사소한 '신선한 과일 한 조각'이었습니다.
                  그 따뜻한 위로의 기억을 담아 토닥당을 열었습니다.
                </p>

                <p>
                  우리는 화려함보다 '진짜 좋은 재료'가 주는 힘을 믿습니다. <br />
                  과일 가게를 운영했던 안목으로 매일 공판장에서 직접 최상급 과일만을 엄선하며,
                  주문 즉시 가장 신선한 상태로 정성껏 빚어냅니다.
                </p>

                <p>
                  입안 가득 터지는 싱그러운 과즙이 <br />
                  당신의 고단한 하루를 부드럽게 토닥여주길 바랍니다.
                </p>

                <p className="text-xl font-display pt-4">
                  토닥토닥, 토닥당
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section - Enjoy Todak-Dang 200% */}
        <section className="py-32 px-6 sm:px-8 bg-watercolor-yellow/5 overflow-hidden">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-24">
              <div className="text-sm font-heading tracking-widest mb-4 text-brand-brown font-bold uppercase">FAQ & Guide</div>
              <h2 className="text-3xl sm:text-5xl font-display leading-tight mb-8">토닥당 200% 즐기기<br />(자주 묻는 질문)</h2>
              <p className="text-lg sm:text-xl font-heading opacity-60">"궁금한 점을 미리 확인하고, 토닥당의 맛을 완벽하게 즐겨보세요!"</p>
            </div>

            <div className="space-y-16">
              {/* Category: Brand & Taste */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 pb-4 border-b border-black/10">
                  <div className="w-10 h-10 bg-ms-pink/10 rounded-xl flex items-center justify-center text-ms-pink">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-display">🛵 토닥당이 맛있는 이유 (Brand & Taste)</h3>
                </div>
                
                <div className="bg-white p-8 sm:p-12 rounded-[3rem] border border-black/5 shadow-sm">
                  <h4 className="text-lg sm:text-xl font-display mb-6">기계가 흉내 낼 수 없는 손맛, 과즙을 감싸는 부드러움</h4>
                  <p className="font-heading text-base opacity-60 leading-relaxed mb-8">
                    토닥당의 모찌는 일본식 디저트에서 영감을 받았지만, 한국인의 입맛에 가장 잘 맞는 '황금 비율'로 재탄생했습니다.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-8">
                    <div className="space-y-3">
                      <div className="font-bold text-ms-pink">최상급 찹쌀 가루</div>
                      <p className="text-sm opacity-60 leading-relaxed">엄선된 국내산 찹쌀을 정성껏 찌고, 수천 번 치대어 입안에서 녹아내리는 듯 부드러우면서도 찰진 식감을 완성했습니다.</p>
                    </div>
                    <div className="space-y-3">
                      <div className="font-bold text-ms-blue">얇고 쫄깃한 피</div>
                      <p className="text-sm opacity-60 leading-relaxed">과일 본연의 맛을 가리지 않도록, 투명할 정도로 얇으면서도 탄력 있는 모찌피를 만듭니다.</p>
                    </div>
                    <div className="space-y-3">
                      <div className="font-bold text-ms-purple">생과일과의 조화</div>
                      <p className="text-sm opacity-60 leading-relaxed">인공적인 아이스크림 대신, 갓 수확한 생과일과 직접 만든 저당 팥소를 감쌌습니다.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <FAQItem 
                    question="'토닥당'은 어떤 곳인가요?" 
                    answer="대기업 CS 부서에서 감정 노동으로 지쳤던 사장님이 직접 겪은 '디저트의 위로'를 나누고 싶어 만든 공간입니다. '토닥토닥' 마음을 위로하는 달콤한 당(糖)이라는 의미를 담아, 내 가족에게 먹일 수 있는 가장 신선한 과일 디저트를 만듭니다."
                  />
                  <FAQItem 
                    question="토닥당 모찌는 무엇이 다른가요?" 
                    answer="저희는 냉동이 아닌 '생과일'만을 고집합니다. 매일 아침 직접 선별한 특상급 과일을 쫄깃하고 얇은 찹쌀떡과 저당 팥소로 감싸, 과일 본연의 과즙과 단맛을 극대화했습니다."
                  />
                  <FAQItem 
                    question="메뉴는 어떤 것들이 있나요?" 
                    answer="대표 메뉴인 생딸기모찌를 비롯해 통귤, 키위, 멜론, 샤인머스켓 등 제철 과일 모찌가 준비되어 있습니다. 또한 MZ 세대에게 인기 있는 두바이초콜렛, 신선함을 한 번에 즐기는 과일도시락도 만나보실 수 있습니다."
                  />
                  <FAQItem 
                    question="모찌의 모양과 크기가 조금씩 다른 것 같아요." 
                    answer={
                      <div className="space-y-4">
                        <p className="font-bold text-ms-pink">"세상에 단 하나뿐인, 당신을 위한 손맛입니다."</p>
                        <p>토닥당의 모든 모찌는 기계로 찍어내지 않습니다. 매일 아침 공판장에서 들여온 과일의 크기와 모양이 저마다 다르기에, 그 개성을 가장 잘 살릴 수 있도록 사장님이 주문 즉시 하나하나 손으로 빚어냅니다.</p>
                        <p>모양은 조금씩 다를 수 있지만, 그 속에 담긴 '위로의 마음'과 '신선함'의 무게는 모두 동일합니다. 정형화된 공산품에서는 느낄 수 없는 수제 모찌만의 따뜻한 온기와 풍성한 과즙을 즐겨보세요!</p>
                      </div>
                    }
                  />
                </div>
              </div>

              {/* Category: Order & Delivery */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 pb-4 border-b border-black/10">
                  <div className="w-10 h-10 bg-ms-blue/10 rounded-xl flex items-center justify-center text-ms-blue">
                    <Bike className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-display">🛵 주문 및 배송 안내 ( Order & Delivery )</h3>
                </div>
                
                <div className="space-y-4">
                  <FAQItem 
                    question="토닥당의 디저, 어떻게 주문하는게 가장 좋나요?" 
                    answer="네이버 플레이스 포장 예약을 가장 추천드려요! 기다림 없이 바로 픽업할 수 있고, 무엇보다 배달 수수료를 아껴 고객님께 세트 할인과 '덤' 서비스로 돌려드릴 수 있기 때문입니다."
                  />
                  <FAQItem 
                    question="네이버로 포장 예약하면 어떤 혜택이 있나요?" 
                    answer={
                      <div className="space-y-6">
                        <p className="font-bold text-ms-blue">오직 포장 고객님께만 드리는 ‘ 3대 특전' 을 운영하고 있습니다.</p>
                        <div className="grid gap-4">
                          <div className="bg-white/50 p-4 rounded-2xl border border-black/5">
                            <span className="font-bold text-ms-pink">[리뷰 이벤트]</span> "맛있게 드셨다면, 모찌 1구 더!"
                          </div>
                          <div className="bg-white/50 p-4 rounded-2xl border border-black/5">
                            <span className="font-bold text-ms-blue">[세트 증정]</span> "5구 이상 구매 시 상큼함이 2배"
                          </div>
                          <div className="bg-white/50 p-4 rounded-2xl border border-black/5">
                            <span className="font-bold text-ms-purple">[키즈 서비스]</span> "아이들과 함께라면 한입의 행복"
                          </div>
                        </div>
                      </div>
                    }
                  />
                  <FAQItem 
                    question="배달이나 퀵서비스도 가능한가요?" 
                    answer={
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-ms-pink shrink-0">포장(추천):</span> 네이버 플레이스 예약 (할인 혜택 & 포인트 적립)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-ms-blue shrink-0">배달:</span> 배달의민족, 쿠팡이츠에서 '토닥당' 검색
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-ms-purple shrink-0">퀵서비스:</span> 단체 주문 및 장거리 배송 시 매장 전화 문의
                        </li>
                      </ul>
                    }
                  />
                </div>
              </div>

              {/* Category: Catering & Events */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 pb-4 border-b border-black/10">
                  <div className="w-10 h-10 bg-ms-purple/10 rounded-xl flex items-center justify-center text-ms-purple">
                    <PartyPopper className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-display">🎁 케이터링 및 단체 주문 (CATERING & EVENTS)</h3>
                </div>
                
                <div className="space-y-4">
                  <FAQItem 
                    question="단체 주문이나 행사용 케이터링이 가능한가요?" 
                    answer={
                      <div className="space-y-4">
                        <p>네! 소중한 분들과 함께하는 자리에 토닥당의 위로를 더해 보세요. 학교 간식, 사내 행사, 답례품 등 성격에 맞춰 정성껏 준비해 드립니다.</p>
                        <div className="grid sm:grid-cols-3 gap-4">
                          <div className="p-4 bg-white rounded-2xl border border-black/5 text-center">
                            <div className="font-bold mb-1">맞춤 구성</div>
                            <div className="text-xs opacity-60">예산과 인원에 맞춘 제안</div>
                          </div>
                          <div className="p-4 bg-white rounded-2xl border border-black/5 text-center">
                            <div className="font-bold mb-1">특별 패키징</div>
                            <div className="text-xs opacity-60">메시지 스티커 무료 제작</div>
                          </div>
                          <div className="p-4 bg-white rounded-2xl border border-black/5 text-center">
                            <div className="font-bold mb-1">신선도 유지</div>
                            <div className="text-xs opacity-60">배송 직전 제작 원칙</div>
                          </div>
                        </div>
                      </div>
                    }
                  />
                  <FAQItem 
                    question="신청은 어떻게 하나요?" 
                    answer={
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        <p className="opacity-60">최소 3~5일 전, 네이버 톡톡이나 매장 전화를 통해 문의해 주세요. 상담 시 [날짜 / 예상 인원 / 선호 메뉴]를 알려주시면 더 빠른 상담이 가능합니다.</p>
                        <div className="shrink-0 flex items-center gap-2 px-8 py-4 bg-brand-brown text-white rounded-2xl font-bold">
                          <Phone className="w-4 h-4" />
                          <div className="flex flex-col text-left">
                            <span>단체 주문 문의하기</span>
                            <span className="text-base tracking-wider">051-626-0359</span>
                          </div>
                        </div>
                      </div>
                    }
                  />
                </div>
              </div>

              {/* Category: Storage & Tip */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 pb-4 border-b border-black/10">
                  <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600">
                    <Info className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-display">🍯 토닥당 더 맛있게 즐기기 (Storage & Tip)</h3>
                </div>
                
                <div className="space-y-4">
                  <FAQItem 
                    question="토닥당 모찌, 왜 이렇게 맛있는 건가요?" 
                    answer="과일가게 운영 경험을 바탕으로 매일 아침 공판장에서 직접 검수한 최상급 과일만을 사용하기 때문입니다. 주문 즉시 얇은 피로 빚어내어, 입안에서 과즙과 떡, 앙금이 완벽하게 어우러지는 조화를 느끼실 수 있습니다."
                  />
                  <FAQItem 
                    question="어떻게 보관해야 가장 맛있나요?" 
                    answer={
                      <div className="space-y-4">
                        <p className="text-sm font-bold text-brand-brown/40">공장에서 찍어낸 떡이 아닌, 방앗간에서 갓 만든 떡을 사용합니다.</p>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <span className="font-bold text-ms-pink shrink-0">가장 추천:</span> 받으신 직후 바로 드시는 것이 과즙과 떡의 탄력을 느끼기에 가장 좋습니다.
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="font-bold text-ms-blue shrink-0">상온 보관:</span> 5~6시간 정도는 실온 보관이 가능합니다. 이때 비닐을 살짝 덮어두시면 떡이 마르지 않고 더 촉촉합니다.
                          </li>
                          <li className="flex items-start gap-2 text-red-500">
                            <span className="font-bold shrink-0">주의사항:</span> 냉장 보관은 떡을 딱딱하게 만드니 가급적 피해주세요!
                          </li>
                        </ul>
                      </div>
                    }
                  />
                  <FAQItem 
                    question="다음날 먹어야 하는데 어쩌죠?" 
                    answer="당일 드시지 못할 경우 '냉동 보관'이 정답입니다. 드시기 1시간 전쯤 꺼내어 자연 해동하시면 셔벗처럼 시원하고 쫄깃한 식감으로 맛있게 즐기실 수 있습니다."
                  />
                </div>
              </div>

              {/* Category: Ingredients & Safety */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 pb-4 border-b border-black/10">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-display">🍯 성분 및 안심 가이드 (Ingredients & Safety)</h3>
                </div>
                
                <div className="space-y-4">
                  <FAQItem 
                    question="알레르기 성분이 포함되어 있나요?" 
                    answer={
                      <div className="space-y-4">
                        <p>토닥당의 모든 제품은 국산 찹쌀, 생과일, 팥을 주재료로 합니다.</p>
                        <p><span className="font-bold text-ms-pink">주의 성분:</span> 특정 메뉴(두바이초콜렛 등)에는 견과류(피스타치오, 땅콩), 밀, 유제품이 포함되어 있습니다.</p>
                        <p className="text-sm opacity-60">알림: 토닥당은 청결한 제조 환경을 유지하지만, 견과류, 밀가루, 우유, 계란을 사용하는 시설에서 함께 조리되고 있습니다. 알레르기에 민감하신 분은 구매 전 꼭 확인 부탁드립니다.</p>
                      </div>
                    }
                  />
                  <FAQItem 
                    question="아이들이나 채식주의자가 먹어도 괜찮나요? (Vegan & Kids)" 
                    answer={
                      <ul className="space-y-3">
                        <li><span className="font-bold text-green-600">Vegan-Friendly:</span> 과일 모찌는 기본적으로 순수 식물성 재료(찹쌀, 과일, 팥)로 만들어져 비건 고객님들도 즐기실 수 있습니다. (단, 초콜렛 함유 제품 제외)</li>
                        <li><span className="font-bold text-ms-blue">Gluten-Free:</span> 밀가루 대신 쫀득한 찹쌀을 사용하여 대부분의 제품이 글루텐 프리입니다.</li>
                        <li><span className="font-bold text-ms-pink">Safe for Kids:</span> 인공 색소나 방부제를 쓰지 않아 아이들 간식으로도 안심하고 먹일 수 있습니다.</li>
                      </ul>
                    }
                  />
                </div>
              </div>
            </div>

            <div className="mt-24 p-12 bg-white rounded-[3rem] border border-black/5 text-center">
              <p className="text-lg font-heading opacity-60 mb-8">제품 관련 궁금한 점, 프랜차이즈 및 협업 문의는 매장으로 전화 주시면 사장님이 직접 답변해 드립니다!</p>
              <a href="tel:051-626-0359" className="px-12 py-6 bg-brand-red text-white rounded-2xl font-bold text-lg hover:bg-brand-red/80 transition-colors inline-flex items-center gap-4">
                <Phone className="w-6 h-6" />
                전화 문의하기 (051-626-0359)
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-32 px-8">
          <div className="max-w-[1800px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-32">
              <div className="col-span-1 md:col-span-2">
                <div className="text-5xl font-display mb-12">토닥당</div>
                <p className="text-lg font-heading opacity-60 max-w-md leading-relaxed">
                  당신의 지친 하루 끝에 작은 위로가 되고 싶습니다. 
                  15Brix 이상의 고당도 생과일과 부드러운 찹쌀떡의 조화.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-12 opacity-40">Navigation</h4>
                <ul className="space-y-6 font-heading text-base">
                  <li><a href="#" className="hover:opacity-60 transition-opacity">Shop</a></li>
                  <li><a href="#" className="hover:opacity-60 transition-opacity">Our Story</a></li>
                  <li><a href="#" className="hover:opacity-60 transition-opacity">Locations</a></li>
                  <li><a href="#" className="hover:opacity-60 transition-opacity">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-12 opacity-40">Social</h4>
                <ul className="space-y-6 font-heading text-base">
                  <li><a href="#" className="flex items-center gap-3 hover:opacity-60 transition-opacity"><Instagram className="w-5 h-5" /> Instagram</a></li>
                  <li><a href="https://naver.me/5vcEL0bV" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">Naver Place</a></li>
                  <li><a href="#" className="hover:opacity-60 transition-opacity">Kakao Talk</a></li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">
              <span>&copy; 2026 Todak-Dang Boutique</span>
              <div className="flex gap-12 mt-8 md:mt-0">
                <a href="#">Terms</a>
                <a href="#">Privacy</a>
                <a href="#">Cookies</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </motion.div>
  );
}
