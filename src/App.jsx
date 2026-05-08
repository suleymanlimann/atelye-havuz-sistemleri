import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
    PhoneCall, Mail, MapPin, Wrench, Layers3, Droplets, Star,
    Instagram, Facebook, MessageSquareHeart, Construction, Hammer,
    Youtube, ChevronDown, CheckCircle2, ArrowRight, Menu, X, Shield, Clock, Award
} from "lucide-react";

const COMPANY = {
    name: "Atelye Havuz Sistemleri",
    slogan: "Prefabrik Havuz – Malzeme – Profesyonel Bakım",
    phone: "+90 505 348 88 31",
    whatsapp: "+90 505 348 88 31",
    email: "info@atelyehavuz.com",
    address: "Akhisar, Manisa",
    instagram: "https://www.instagram.com/atelyehavuz",
    facebook: "https://www.facebook.com/share/1BDAkxaLfX/?mibextid=wwXIfr",
    youtube: "https://www.youtube.com/channel/UCYjbwObs_rUD9jlh4kGP0-A",
    googlePlaceShare: "https://share.google/tcbKywZ7ifc0rqayv",
};

const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(COMPANY.name + " " + COMPANY.address)}&output=embed`;

const reviews = [
    { author: "P. Su", rating: 5, text: "Göstermiş olduğunuz ilgi ve alakadan dolayı çok teşekkür ederim. İşinizi severek yaptığınızı, havuzumuzu gördüğüm anda anlamış oldum. Elinize sağlık 👏👏" },
    { author: "D. Özçelik", rating: 5, text: "Profesyonel ekip. İstediğim gibi kusursuz bir iş çıkardılar ve hiç zaman almadılar. Zeytinliova havuzum harika görünüyor. Her birine minnettarım." },
    { author: "S. Yeşildağ", rating: 5, text: "İşlerini titizlikle yaptılar. Az bir bütçe ile büyük konfor sunmaktalar." },
];

const faqItems = [
    { q: "Prefabrik havuz ne kadar sürede kurulur?", a: "Yer hazırlığı tamamlandıktan sonra prefabrik havuz montajı genellikle 1-3 gün içinde tamamlanır. Toplam proje süresi (kazı, zemin, montaj, filtreleme) 1-2 haftayı bulmaktadır." },
    { q: "Akhisar dışına hizmet veriyor musunuz?", a: "Evet. Manisa'nın tüm ilçelerine — Turgutlu, Salihli, Soma, Kırkağaç, Alaşehir ve daha fazlasına — hizmet vermekteyiz." },
    { q: "Prefabrik havuzun garantisi var mı?", a: "Kullandığımız malzemelerin üretici garantisi ve işçilik garantimiz mevcuttur. Detaylar için bizimle iletişime geçin." },
    { q: "Havuz bakımı ne zaman yapılmalıdır?", a: "Sezon başında açma bakımı, sezon boyunca aylık periyodik bakım ve sezon sonunda kapama bakımı önerilmektedir." },
];

/* ─── UTILS ─────────────────────────────────────────────────────────────────── */
const FadeIn = ({ children, delay = 0, y = 24 }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
};

const Stars = ({ n }) => (
    <div className="flex gap-0.5" aria-label={`${n} yıldız değerlendirme`}>
        {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < n ? "text-amber-400 fill-amber-400" : "text-gray-200 fill-gray-200"}`} />
        ))}
    </div>
);

/* ─── NAV ───────────────────────────────────────────────────────────────────── */
const NAV = [
    { label: "Hizmetler", href: "#services" },
    { label: "Neden Biz", href: "#why-us" },
    { label: "Projeler", href: "#projects" },
    { label: "SSS", href: "#faq" },
    { label: "Yorumlar", href: "#reviews" },
    { label: "İletişim", href: "#contact" },
];

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", fn);
        return () => window.removeEventListener("scroll", fn);
    }, []);

    return (
        <header
            role="banner"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white shadow-sm border-b border-gray-100"
                    : "bg-white/80 backdrop-blur-md"
                }`}
        >
            <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between h-16 sm:h-18">
                <a
                    href="#home"
                    className="flex items-center gap-2.5 group"
                    aria-label="Atelye Havuz Sistemleri - Ana Sayfa"
                >
                    <img
                        src="/favicon.png"
                        alt="Atelye Havuz Sistemleri Logo"
                        className="block w-[25px] h-[25px] object-contain translate-y-[-2px]"
                    />

                    <span className="font-bold text-sm sm:text-base tracking-tight text-gray-900">
                        {COMPANY.name}
                    </span>
                </a>

                <nav className="hidden md:flex items-center gap-7" aria-label="Ana navigasyon">
                    {NAV.map(n => (
                        <a key={n.href} href={n.href}
                            className="text-sm font-medium text-gray-500 hover:text-sky-500 transition-colors">
                            {n.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <a href={`tel:${COMPANY.phone}`}
                        className="hidden lg:inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-sky-500 transition-colors">
                        <PhoneCall className="h-4 w-4" /> {COMPANY.phone}
                    </a>
                    <a
                        href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}`}
                        className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 bg-sky-500 text-white text-sm font-semibold hover:bg-sky-600 transition-colors"
                        aria-label="WhatsApp üzerinden ücretsiz teklif alın"
                    >
                        Ücretsiz Teklif
                    </a>
                    <button
                        className="md:hidden p-2 rounded-lg text-gray-600 hover:text-sky-500"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Menüyü aç/kapat"
                    >
                        {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="px-5 py-4 flex flex-col gap-4">
                            {NAV.map(n => (
                                <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)}
                                    className="text-sm font-medium text-gray-700 hover:text-sky-500 py-1">{n.label}</a>
                            ))}
                            <a
                                href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}`}
                                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 bg-sky-500 text-white text-sm font-semibold"
                            >
                                <PhoneCall className="h-4 w-4" /> Ücretsiz Teklif Al
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

/* ─── HERO ──────────────────────────────────────────────────────────────────── */
const Hero = () => (
    <section id="home" aria-label="Ana Sayfa" className="relative min-h-screen flex items-center overflow-hidden bg-white">
        {/* Soft background blobs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
                style={{ background: "radial-gradient(circle, #bae6fd 0%, transparent 70%)", opacity: 0.5 }} />
            <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full"
                style={{ background: "radial-gradient(circle, #e0f2fe 0%, transparent 70%)", opacity: 0.6 }} />
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-8 w-full pt-24 pb-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                    {/* Trust badge */}
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-sky-50 border border-sky-200 text-sky-600 text-xs font-semibold mb-6">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        Akhisar'ın #1 Prefabrik Havuz Firması
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight"
                    >
                        Akhisar'da <span className="text-sky-500">Prefabrik Havuz</span> Yapımı
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                        className="mt-5 text-gray-500 text-base sm:text-lg leading-relaxed max-w-lg"
                    >
                        Manisa genelinde anahtar teslim prefabrik havuz kurulumu, profesyonel havuz bakımı ve ekipman satışı.
                        Kazıdan ilk çalıştırmaya tüm süreçleri yönetiyoruz.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
                        className="mt-8 flex flex-col sm:flex-row gap-3"
                    >
                        <a href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}`}
                            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 bg-sky-500 text-white font-semibold shadow-lg shadow-sky-200 hover:bg-sky-600 transition-colors text-sm"
                            aria-label="WhatsApp üzerinden ücretsiz teklif alın"
                        >
                            <PhoneCall className="h-4 w-4" /> Ücretsiz Teklif Al
                        </a>
                        <a href={`tel:${COMPANY.phone}`}
                            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 border border-gray-200 text-gray-700 font-medium hover:border-sky-300 hover:text-sky-500 transition-colors text-sm">
                            {COMPANY.phone}
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.5 }}
                        className="mt-12 flex items-center gap-8"
                    >
                        {[
                            { value: "100+", label: "Tamamlanan Proje" },
                            { value: "5★", label: "Google Puanı" },
                            { value: "10+", label: "Yıllık Deneyim" },
                        ].map((s, i) => (
                            <div key={i} className={i > 0 ? "pl-8 border-l border-gray-200" : ""}>
                                <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                                <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Hero image */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    {/* Decorative ring behind image */}
                    <div className="absolute -inset-4 rounded-[2.5rem] bg-sky-50 -z-10" />
                    <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                        <img
                            src="/hero-pool.jpg"
                            alt="Akhisar'da kurulmuş modern prefabrik yüzme havuzu"
                            className="w-full h-full object-cover"
                            loading="eager"
                            width={800}
                            height={600}
                        />
                    </div>
                    {/* Floating badge */}
                    <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-lg border border-gray-100 flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center">
                            <CheckCircle2 className="h-4 w-4 text-sky-500" />
                        </div>
                        <div>
                            <div className="text-[10px] text-gray-400 uppercase tracking-wide">Garantili İşçilik</div>
                            <div className="text-sm font-bold text-gray-900">Anahtar Teslim</div>
                        </div>
                    </div>
                    {/* Second floating badge */}
                    <div className="absolute -top-4 -right-4 bg-sky-500 text-white rounded-2xl px-4 py-3 shadow-lg flex items-center gap-2">
                        <Star className="h-4 w-4 fill-white" />
                        <div className="text-sm font-bold">5.0 Google</div>
                    </div>
                </motion.div>
            </div>
        </div>

        {/* Scroll hint */}
        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ChevronDown className="h-6 w-6 text-gray-300" />
        </motion.div>
    </section>
);

/* ─── SERVICES ──────────────────────────────────────────────────────────────── */
const SERVICES = [
    {
        icon: Construction,
        title: "Prefabrik Havuz Yapımı",
        desc: "Akhisar ve Manisa genelinde anahtar teslim prefabrik havuz kurulumu. Kazı, zemin hazırlığı, montaj, filtreleme sistemi ve ilk çalıştırma dahil.",
        features: ["Proje ve izin yönetimi", "Profesyonel montaj ekibi", "Filtreleme & aydınlatma", "Garanti belgeli işçilik"],
        keyword: "prefabrik havuz yapımı Akhisar",
    },
    {
        icon: Hammer,
        title: "Havuz Ekipman & Malzeme Satışı",
        desc: "Pompa, filtre, UV sistemleri, LED aydınlatma, kimyasallar ve tüm havuz aksesuarları. Doğru kapasite hesabı ile uzman tavsiyesi.",
        features: ["Markalı pompa & filtreler", "LED havuz aydınlatma", "Su kimyasalları", "Otomasyon sistemleri"],
        keyword: "havuz malzeme satışı Manisa",
    },
    {
        icon: Wrench,
        title: "Profesyonel Havuz Bakımı",
        desc: "Manisa genelinde periyodik havuz bakımı. Su kimyası analizi, filtre temizliği, geri yıkama ve sezon açma/kapama hizmetleri.",
        features: ["Su kimyası analizi", "Filtre & pompa bakımı", "Sezon açma / kapama", "Düzenli temizlik"],
        keyword: "havuz bakımı Manisa Akhisar",
    },
];

const Services = () => (
    <section id="services" aria-labelledby="services-title" className="py-20 sm:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <FadeIn>
                <div className="text-center mb-14">
                    <span className="text-sky-500 font-semibold text-sm uppercase tracking-widest">Hizmetlerimiz</span>
                    <h2 id="services-title" className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                        Uçtan Uca Havuz Çözümleri
                    </h2>
                    <p className="mt-3 text-gray-500 text-base max-w-xl mx-auto">
                        Prefabrik havuz kurulumundan bakımına, ekipman satışından su kimyasına — tek çatı altında profesyonel hizmet.
                    </p>
                </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6">
                {SERVICES.map((s, i) => (
                    <FadeIn key={i} delay={i * 0.1}>
                        <article
                            className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
                            aria-label={s.title}
                        >
                            <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center mb-5">
                                <s.icon className="h-6 w-6 text-sky-500" aria-hidden="true" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">{s.title}</h3>
                            <p className="mt-2 text-sm text-gray-500 leading-relaxed flex-1">{s.desc}</p>
                            <ul className="mt-5 space-y-2">
                                {s.features.map((f, j) => (
                                    <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                                        <CheckCircle2 className="h-4 w-4 text-sky-400 flex-shrink-0" aria-hidden="true" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <a href="#contact"
                                className="mt-6 inline-flex items-center gap-1 text-sky-500 text-sm font-semibold hover:gap-2 transition-all">
                                Teklif Al <ArrowRight className="h-4 w-4" />
                            </a>
                        </article>
                    </FadeIn>
                ))}
            </div>
        </div>
    </section>
);

/* ─── WHY US ─────────────────────────────────────────────────────────────────── */
const WHY = [
    { icon: Award, title: "Anahtar Teslim Rahatlık", text: "Çukur kazma, beton, izin — tüm süreçleri biz yönetiriz. Siz sadece havuzunuzun keyfini çıkarırsınız." },
    { icon: Clock, title: "Hızlı & Temiz Kurulum", text: "Prefabrik sistemin avantajıyla minimum inşaat süreci. Çoğu proje 1-2 haftada teslim edilir." },
    { icon: Shield, title: "Garantili İşçilik", text: "Kullandığımız malzemelerde üretici garantisi, kurulumda işçilik garantisi. Sonrası için de yanınızdayız." },
    { icon: Layers3, title: "Doğru Malzeme Seçimi", text: "Kapasite hesabı, marka tavsiyesi ve teknik destek ile yatırımınızı en verimli şekilde kullanın." },
    { icon: MapPin, title: "Manisa Geneli Hizmet", text: "Akhisar merkezli olarak Manisa'nın tüm ilçelerine ulaşıyoruz. Saha ziyareti ve keşif ücretsizdir." },
    { icon: MessageSquareHeart, title: "Memnun Referanslar", text: "Google'daki 5 yıldızlı yorumlar ve kurduğumuz onlarca havuz, kalitemizin en iyi göstergesidir." },
];

const WhyUs = () => (
    <section id="why-us" aria-labelledby="why-title" className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <FadeIn>
                    <div>
                        <span className="text-sky-500 font-semibold text-sm uppercase tracking-widest">Neden Atelye?</span>
                        <h2 id="why-title" className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                            Manisa'nın Güvenilir<br />Havuz Firması
                        </h2>
                        <p className="mt-4 text-gray-500 text-base leading-relaxed max-w-md">
                            Atelye Havuz Sistemleri olarak, her projeye sanki kendi havuzumuzu yapıyormuşuz gibi özen gösteriyoruz.
                            Şeffaf iletişim, zamanında teslimat ve satış sonrası destek bizim önceliğimizdir.
                        </p>
                        <a href="#contact"
                            className="mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-gray-900 text-white text-sm font-semibold hover:bg-sky-500 transition-colors">
                            Ücretsiz Keşif Randevusu <ArrowRight className="h-4 w-4" />
                        </a>
                    </div>
                </FadeIn>

                <div className="grid sm:grid-cols-2 gap-4">
                    {WHY.map((w, i) => (
                        <FadeIn key={i} delay={i * 0.08}>
                            <div className="rounded-2xl p-5 bg-gray-50 hover:bg-sky-50 transition-colors border border-transparent hover:border-sky-100">
                                <w.icon className="h-5 w-5 text-sky-500 mb-3" aria-hidden="true" />
                                <h3 className="font-semibold text-gray-900 text-sm">{w.title}</h3>
                                <p className="mt-1 text-xs text-gray-500 leading-relaxed">{w.text}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

/* ─── PROJECTS ──────────────────────────────────────────────────────────────── */
const Projects = () => (
    <section id="projects" aria-labelledby="projects-title" className="py-20 sm:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <FadeIn>
                <div className="text-center mb-14">
                    <span className="text-sky-500 font-semibold text-sm uppercase tracking-widest">Projelerimiz</span>
                    <h2 id="projects-title" className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                        Tamamlanan Havuz Projeleri
                    </h2>
                    <p className="mt-3 text-gray-500 text-base max-w-lg mx-auto">
                        Manisa ve Akhisar'da kurduğumuz prefabrik havuzlardan seçmeler. Her proje anahtar teslim tamamlanmıştır.
                    </p>
                </div>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <FadeIn key={i} delay={(i - 1) * 0.07}>
                        <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm bg-gray-200">
                            <img
                                src={`/projects/proje-${i}.jpg`}
                                alt={`Atelye Havuz Sistemleri - Manisa prefabrik havuz projesi ${i}`}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                                width={600}
                                height={450}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                <span className="text-white text-sm font-medium">Proje {i} — Manisa</span>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>

            <FadeIn delay={0.2}>
                <div className="mt-10 text-center">
                    <a href={COMPANY.instagram}
                        className="inline-flex items-center gap-2 text-sky-500 font-semibold text-sm hover:text-sky-600"
                        aria-label="Instagram'da daha fazla proje görüntüle">
                        <Instagram className="h-4 w-4" /> Instagram'da Daha Fazla Proje Görün
                    </a>
                </div>
            </FadeIn>
        </div>
    </section>
);

/* ─── FAQ ────────────────────────────────────────────────────────────────────── */
const FAQ = () => {
    const [open, setOpen] = useState(null);
    return (
        <section id="faq" aria-labelledby="faq-title" className="py-20 sm:py-28 bg-white">
            <div className="mx-auto max-w-3xl px-5 sm:px-8">
                <FadeIn>
                    <div className="text-center mb-14">
                        <span className="text-sky-500 font-semibold text-sm uppercase tracking-widest">SSS</span>
                        <h2 id="faq-title" className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                            Sıkça Sorulan Sorular
                        </h2>
                        <p className="mt-3 text-gray-500 text-base">Prefabrik havuz yapımı ve bakımı hakkında merak ettikleriniz</p>
                    </div>
                </FadeIn>

                <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
                    {faqItems.map((item, i) => (
                        <FadeIn key={i} delay={i * 0.07}>
                            <div
                                className="rounded-2xl border border-gray-100 bg-gray-50 overflow-hidden"
                                itemScope itemProp="mainEntity" itemType="https://schema.org/Question"
                            >
                                <button
                                    onClick={() => setOpen(open === i ? null : i)}
                                    className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-gray-900 text-sm gap-4"
                                    aria-expanded={open === i}
                                >
                                    <span itemProp="name">{item.q}</span>
                                    <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                                        <ChevronDown className="h-4 w-4 text-gray-400 flex-shrink-0" />
                                    </motion.div>
                                </button>
                                <AnimatePresence>
                                    {open === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25 }}
                                            itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"
                                        >
                                            <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed" itemProp="text">{item.a}</div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ─── REVIEWS ────────────────────────────────────────────────────────────────── */
const Reviews = () => (
    <section id="reviews" aria-labelledby="reviews-title" className="py-20 sm:py-28 bg-slate-900">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <FadeIn>
                <div className="text-center mb-14">
                    <span className="text-sky-400 font-semibold text-sm uppercase tracking-widest">Google Yorumları</span>
                    <h2 id="reviews-title" className="mt-2 text-3xl sm:text-4xl font-bold text-white tracking-tight">
                        Müşterilerimiz Ne Diyor?
                    </h2>
                    <div className="mt-3 flex items-center justify-center gap-2">
                        <Stars n={5} />
                        <span className="text-slate-300 text-sm">5.0 · {reviews.length} Değerlendirme</span>
                    </div>
                </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-5">
                {reviews.map((r, i) => (
                    <FadeIn key={i} delay={i * 0.1}>
                        <article
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
                            itemScope itemType="https://schema.org/Review"
                        >
                            <Stars n={r.rating} />
                            <p className="mt-4 text-slate-300 text-sm leading-relaxed" itemProp="reviewBody">"{r.text}"</p>
                            <div className="mt-4 font-semibold text-white text-sm" itemProp="author" itemScope itemType="https://schema.org/Person">
                                <span itemProp="name">{r.author}</span>
                            </div>
                        </article>
                    </FadeIn>
                ))}
            </div>

            <FadeIn delay={0.3}>
                <div className="mt-8 text-center">
                    <a href={COMPANY.googlePlaceShare}
                        className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-colors"
                        aria-label="Google'da tüm yorumları görüntüle">
                        <MessageSquareHeart className="h-4 w-4" /> Tüm Google Yorumlarını Gör
                    </a>
                </div>
            </FadeIn>
        </div>
    </section>
);

/* ─── INSTAGRAM ──────────────────────────────────────────────────────────────── */
const InstagramSection = () => (
    <section id="instagram" aria-labelledby="instagram-title" className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <FadeIn>
                <div className="text-center mb-10">
                    <span className="text-sky-500 font-semibold text-sm uppercase tracking-widest">Sosyal Medya</span>
                    <h2 id="instagram-title" className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                        Güncel Projelerimiz
                    </h2>
                    <p className="mt-3 text-gray-500 text-base">Instagram'da son işlerimizden kareler</p>
                </div>
            </FadeIn>

            <FadeIn delay={0.1}>
                <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                    <iframe
                        title="Atelye Havuz Sistemleri Instagram Galerileri"
                        src="https://snapwidget.com/embed/1105048"
                        className="w-full h-[560px]"
                        frameBorder="0" scrolling="no"
                        style={{ border: "none", overflow: "hidden" }}
                        loading="lazy"
                    />
                </div>
            </FadeIn>

            <FadeIn delay={0.15}>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <a href={COMPANY.instagram} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 bg-gradient-to-br from-pink-500 to-orange-400 text-white text-sm font-semibold shadow hover:opacity-90"
                        aria-label="Atelye Havuz Instagram hesabı">
                        <Instagram className="h-4 w-4" /> @atelyehavuz
                    </a>
                    <a href={COMPANY.facebook} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold shadow hover:opacity-90"
                        aria-label="Atelye Havuz Facebook sayfası">
                        <Facebook className="h-4 w-4" /> Facebook
                    </a>
                    <a href={COMPANY.youtube} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 bg-red-600 text-white text-sm font-semibold shadow hover:opacity-90"
                        aria-label="Atelye Havuz YouTube kanalı">
                        <Youtube className="h-4 w-4" /> YouTube
                    </a>
                </div>
            </FadeIn>
        </div>
    </section>
);

/* ─── CONTACT ────────────────────────────────────────────────────────────────── */
const Contact = () => {
    const [sent, setSent] = useState(false);
    const handleSubmit = (e) => { e.preventDefault(); setSent(true); };

    return (
        <section id="contact" aria-labelledby="contact-title" className="py-20 sm:py-28 bg-gray-50">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <FadeIn>
                    <div className="text-center mb-14">
                        <span className="text-sky-500 font-semibold text-sm uppercase tracking-widest">İletişim</span>
                        <h2 id="contact-title" className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                            Ücretsiz Keşif & Teklif
                        </h2>
                        <p className="mt-3 text-gray-500 text-base max-w-md mx-auto">
                            Projenizi anlatın, uzmanlarımız en uygun çözümü sizin için hazırlasın.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <FadeIn>
                        <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                            {sent ? (
                                <div className="text-center py-10">
                                    <CheckCircle2 className="h-12 w-12 text-sky-400 mx-auto mb-3" />
                                    <h3 className="font-bold text-gray-900 text-lg">Mesajınız alındı!</h3>
                                    <p className="text-gray-500 text-sm mt-2">En kısa sürede sizinle iletişime geçeceğiz.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4" aria-label="İletişim formu">
                                    <div>
                                        <label htmlFor="cf-name" className="block text-xs font-semibold text-gray-700 mb-1.5">Ad Soyad *</label>
                                        <input id="cf-name" name="name" placeholder="Adınız Soyadınız" required autoComplete="name"
                                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all" />
                                    </div>
                                    <div>
                                        <label htmlFor="cf-phone" className="block text-xs font-semibold text-gray-700 mb-1.5">Telefon *</label>
                                        <input id="cf-phone" name="phone" placeholder="05XX XXX XX XX" required autoComplete="tel" type="tel"
                                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all" />
                                    </div>
                                    <div>
                                        <label htmlFor="cf-email" className="block text-xs font-semibold text-gray-700 mb-1.5">E-posta (opsiyonel)</label>
                                        <input id="cf-email" name="email" type="email" placeholder="ornek@email.com" autoComplete="email"
                                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all" />
                                    </div>
                                    <div>
                                        <label htmlFor="cf-msg" className="block text-xs font-semibold text-gray-700 mb-1.5">Mesajınız</label>
                                        <textarea id="cf-msg" name="message" rows={4}
                                            placeholder="Havuz boyutu, lokasyon, bütçe gibi bilgileri paylaşabilirsiniz..."
                                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all resize-none" />
                                    </div>
                                    <button type="submit"
                                        className="w-full rounded-xl py-3.5 bg-sky-500 text-white text-sm font-semibold hover:bg-sky-600 transition-colors shadow">
                                        Teklif İste
                                    </button>
                                    <p className="text-center text-xs text-gray-400">veya doğrudan yazın →{" "}
                                        <a href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}`}
                                            className="text-sky-500 font-semibold underline">WhatsApp</a>
                                    </p>
                                </form>
                            )}
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="space-y-4">
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-3">
                                <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-3 text-sm text-gray-700 hover:text-sky-500 transition-colors">
                                    <div className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center flex-shrink-0">
                                        <PhoneCall className="h-4 w-4 text-sky-500" />
                                    </div>
                                    {COMPANY.phone}
                                </a>
                                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-sm text-gray-700 hover:text-sky-500 transition-colors">
                                    <div className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center flex-shrink-0">
                                        <Mail className="h-4 w-4 text-sky-500" />
                                    </div>
                                    {COMPANY.email}
                                </a>
                                <div className="flex items-center gap-3 text-sm text-gray-700">
                                    <div className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="h-4 w-4 text-sky-500" />
                                    </div>
                                    {COMPANY.address}
                                </div>
                            </div>
                            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                                <iframe
                                    title={`${COMPANY.name} konum haritası — ${COMPANY.address}`}
                                    src={MAP_EMBED}
                                    className="w-full h-[300px]"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    aria-label="Atelye Havuz Sistemleri harita konumu"
                                />
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

/* ─── SEO TEXT ───────────────────────────────────────────────────────────────── */
const SeoSection = () => (
    <section className="py-12 bg-white border-t border-gray-100" aria-label="Hizmet bölgeleri">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
                Manisa Genelinde Prefabrik Havuz Yapımı ve Havuz Bakımı
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
                Atelye Havuz Sistemleri, <strong>Akhisar</strong> merkezli olarak Manisa'nın tüm ilçelerinde
                profesyonel <strong>prefabrik havuz yapımı</strong>, <strong>havuz bakımı</strong> ve ekipman satışı hizmetleri sunmaktadır.
                <strong> Şehzadeler, Yunusemre, Turgutlu, Salihli, Soma, Kırkağaç, Alaşehir,
                    Sarıgöl, Kula, Demirci, Gördes, Selendi, Köprübaşı, Ahmetli</strong> ve <strong>Gölmarmara</strong>'da anahtar teslim havuz projeleri gerçekleştiriyoruz.
                Prefabrik havuz fiyatları ve ücretsiz keşif için <a href={`tel:${COMPANY.phone}`} className="text-sky-500 font-medium underline">{COMPANY.phone}</a> numarasını arayabilirsiniz.
            </p>
        </div>
    </section>
);

/* ─── FOOTER ─────────────────────────────────────────────────────────────────── */
const Footer = () => (
    <footer role="contentinfo" className="py-8 border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <div>
                <span className="font-semibold text-gray-800">{COMPANY.name}</span>
                {" "}· Akhisar, Manisa · © {new Date().getFullYear()} Tüm hakları saklıdır.
            </div>
            <div className="flex items-center gap-4">
                <a href={COMPANY.instagram} target="_blank" rel="noopener noreferrer"
                    aria-label="Instagram" className="hover:text-sky-500 inline-flex items-center gap-1">
                    <Instagram className="h-4 w-4" /> Instagram
                </a>
                <a href={COMPANY.facebook} target="_blank" rel="noopener noreferrer"
                    aria-label="Facebook" className="hover:text-sky-500 inline-flex items-center gap-1">
                    <Facebook className="h-4 w-4" /> Facebook
                </a>
                <a href={COMPANY.youtube} target="_blank" rel="noopener noreferrer"
                    aria-label="YouTube" className="hover:text-sky-500 inline-flex items-center gap-1">
                    <Youtube className="h-4 w-4" /> YouTube
                </a>
            </div>
        </div>
    </footer>
);

/* ─── FLOATING CTA ───────────────────────────────────────────────────────────── */
const FloatingCTA = () => (
    <motion.a
        href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        className="fixed bottom-6 right-6 z-50 sm:hidden flex items-center gap-2 rounded-full px-4 py-3 bg-sky-500 text-white text-sm font-semibold shadow-xl shadow-sky-500/40"
        aria-label="WhatsApp ile teklif al"
    >
        <PhoneCall className="h-4 w-4" /> Teklif Al
    </motion.a>
);

/* ─── APP ────────────────────────────────────────────────────────────────────── */
export default function AtelyeHavuzSite() {
    useEffect(() => {
        const handler = (e) => {
            const a = e.target.closest("a[href^='#']");
            if (!a) return;
            const id = a.getAttribute("href");
            const el = id && document.querySelector(id);
            if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        };
        document.addEventListener("click", handler);
        return () => document.removeEventListener("click", handler);
    }, []);

    return (
        <div className="min-h-screen text-gray-900 antialiased">
            <Header />
            <main>
                <Hero />
                <Services />
                <WhyUs />
                <Projects />
                <FAQ />
                <Reviews />
                <InstagramSection />
                <Contact />
                <SeoSection />
            </main>
            <Footer />
            <FloatingCTA />
        </div>
    );
}
