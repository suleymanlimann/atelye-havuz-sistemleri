import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PhoneCall, Mail, MapPin, Wrench, Layers3, Droplets, Star, Instagram, Facebook, MessageSquareHeart, Construction, Hammer, Youtube } from "lucide-react";

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

const initialReviews = [
    { author: "P. Su", rating: 5, text: "Göstermiş olduğunuz ilgi ve alakadan dolayı çok teşekkür ederim. İşinizi severek yaptığınızı, havuzumuzu gördüğüm anda anlamış oldum. Elinize sağlık 👏👏" },
    { author: "D. Özçelik", rating: 5, text: "Profesyonel ekip. İstediğim gibi kusursuz bir iş çıkardılar ve hiç zaman almadılar. Zeytinliova havuzum harika görünüyor. Her birine minnettarım." },
    { author: "S. Yeşildağ", rating: 5, text: "İşlerini titizlikle yaptılar. Az bir bütçe ile büyük konfor sunmaktalar" },
];

const Container = ({ className = "", id, children }) => (
    <div id={id} className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);
const SectionTitle = ({ title, subtitle }) => (
    <div className="mb-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{title}</h2>
        {subtitle && <p className="mt-3 text-base sm:text-lg text-gray-600">{subtitle}</p>}
    </div>
);
const Card = ({ className = "", children }) => (<div className={`rounded-2xl shadow-sm border border-gray-100 bg-white p-6 ${className}`}>{children}</div>);
const Stars = ({ n }) => (<div className="flex items-center gap-1">{Array.from({ length: 5 }).map((_, i) => (<Star key={i} className={`h-4 w-4 ${i < n ? "fill-current" : "opacity-30"}`} />))}</div>);

const NAV = [
    { label: "Ana Sayfa", href: "#home" },
    { label: "Hizmetler", href: "#services" },
    { label: "Neden Biz", href: "#why-us" },
    { label: "Projeler", href: "#projects" },
    { label: "Yorumlar", href: "#reviews" },
    { label: "Instagram", href: "#instagram" },
    { label: "İletişim", href: "#contact" },
];

const Header = () => (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 border-b border-gray-100">
        <Container className="flex items-center justify-between h-16">
            <a href="#home" className="flex items-center gap-3">
                <img src="/atelye-logo.png" alt="Atelye Logo" className="h-9 w-9 object-contain" />
                <span className="font-semibold">{COMPANY.name}</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
                {NAV.map((n) => (<a key={n.href} href={n.href} className="hover:text-teal-600 transition-colors">{n.label}</a>))}
            </nav>
            <a href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}`} className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-teal-600 text-white text-sm shadow hover:opacity-90">
                <PhoneCall className="h-4 w-4" /> Teklif Al
            </a>
        </Container>
    </header>
);

const Hero = () => (
    <div id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-teal-50 via-white to-white" />
        <Container className="py-16 sm:py-24">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl font-bold leading-tight">
                        Prefabrik Havuzda <span className="text-teal-600">Anahtar Teslim</span> Konfor
                    </motion.h1>
                    <p className="mt-5 text-gray-600 text-base sm:text-lg max-w-xl">
                        {COMPANY.slogan}. Kazıdan kuruluma, izin süreçlerinden ilk çalıştırmaya kadar tüm detayları biz yönetelim.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <a href="#services" className="rounded-xl px-5 py-3 bg-teal-600 text-white text-sm shadow hover:opacity-90">Hizmetlerimizi Görün</a>
                        <a href={`tel:${COMPANY.phone}`} className="rounded-xl px-5 py-3 border border-gray-300 text-sm hover:border-teal-600">{COMPANY.phone}</a>
                    </div>
                    <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2"><Wrench className="h-4 w-4" /> Bakım</div>
                        <div className="flex items-center gap-2"><Layers3 className="h-4 w-4" /> Prefabrik</div>
                        <div className="flex items-center gap-2"><Droplets className="h-4 w-4" /> Ekipman</div>
                    </div>
                </div>
                <Card className="p-0 overflow-hidden bg-green-200 flex items-center justify-center h-[25em]">
                    <img
                        src="/hero-pool.jpg"
                        alt="Modern prefabrik havuz"
                        className="w-full h-full object-contain"
                    />
                </Card>
            </div>
        </Container>
    </div>
);

const Services = () => (
    <section id="services" className="py-16 sm:py-24 bg-gradient-to-b from-white to-teal-50/40">
        <Container>
            <SectionTitle title="Hizmetlerimiz" subtitle="Uçtan uca profesyonel çözümler" />
            <div className="grid md:grid-cols-3 gap-6">
                <Card>
                    <div className="flex items-start gap-4">
                        <div className="rounded-2xl p-3 bg-teal-600/10"><Construction className="h-6 w-6 text-teal-700" /></div>
                        <div>
                            <h3 className="text-lg font-semibold">Prefabrik Havuz Yapımı</h3>
                            <p className="mt-2 text-sm text-gray-600">Kazı, zemin, montaj, filtreleme ve ilk çalıştırma. İzin ve süreç yönetimi bizde.</p>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="flex items-start gap-4">
                        <div className="rounded-2xl p-3 bg-teal-600/10"><Hammer className="h-6 w-6 text-teal-700" /></div>
                        <div>
                            <h3 className="text-lg font-semibold">Havuz Malzeme Satışı</h3>
                            <p className="mt-2 text-sm text-gray-600">Pompa, filtre, aydınlatma, kimyasal ve aksesuarlar. Doğru kapasite, doğru marka.</p>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="flex items-start gap-4">
                        <div className="rounded-2xl p-3 bg-teal-600/10"><Wrench className="h-6 w-6 text-teal-700" /></div>
                        <div>
                            <h3 className="text-lg font-semibold">Periyodik Havuz Bakımı</h3>
                            <p className="mt-2 text-sm text-gray-600">Su kimyası, temizlik, geri yıkama ve sezon açma/kapama hizmetleri.</p>
                        </div>
                    </div>
                </Card>
            </div>
        </Container>
    </section>
);

const WhyUs = () => (
    <section id="why-us" className="py-16 sm:py-24">
        <Container>
            <SectionTitle title="Neden Atelye?" subtitle="Şeffaf süreç, kaliteli malzeme, garantili işçilik" />
            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { title: "Anahtar Teslim Rahatlık", text: "Çukur kazma, beton dökme ve izin süreçleriyle uğraşmazsınız; biz hallederiz." },
                    { title: "Hızlı ve Temiz Kurulum", text: "Prefabrik sistemle minimum inşaat karmaşası, maksimum hız." },
                    { title: "Referans Projeler", text: "Kurulan havuzlar ve memnun müşterilerimizle gurur duyuyoruz." },
                ].map((f, i) => (
                    <Card key={i}>
                        <h3 className="text-lg font-semibold">{f.title}</h3>
                        <p className="mt-2 text-sm text-gray-600">{f.text}</p>
                    </Card>
                ))}
            </div>
        </Container>
    </section>
);

const Projects = () => (
    <section id="projects" className="py-16 sm:py-24 bg-gradient-to-b from-teal-50/40 to-white">
        <Container>
            <SectionTitle title="Seçili Projeler" subtitle="Gerçek uygulamalardan kareler" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="aspect-video overflow-hidden rounded-2xl shadow-sm">
                        <img src={`/projects/proje-${i}.jpg`} alt={`Atelye Havuz projesi ${i}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </Container>
    </section>
);

const ReviewsSection = () => {
    const [reviews] = useState(initialReviews);
    return (
        <section id="reviews" className="py-16 sm:py-24">
            <Container>
                <SectionTitle title="Google Yorumları" subtitle="Müşterilerimiz ne diyor?" />
                <div className="grid md:grid-cols-3 gap-6">
                    {reviews.map((r, idx) => (
                        <Card key={idx}>
                            <div className="flex items-center justify-between">
                                <div className="font-medium">{r.author}</div>
                                <Stars n={r.rating} />
                            </div>
                            <p className="mt-3 text-sm text-gray-700 leading-relaxed">{r.text}</p>
                        </Card>
                    ))}
                </div>
                <div className="mt-6 text-center">
                    <a href={COMPANY.googlePlaceShare} className="inline-flex items-center gap-2 text-teal-700 underline"><MessageSquareHeart className="h-4 w-4" /> Tüm yorumları görüntüle</a>
                </div>
            </Container>
        </section>
    );
};

const InstagramSection = () => (
    <section id="instagram" className="py-16 sm:py-24 bg-gradient-to-b from-white to-teal-50/40">
        <Container>
            <SectionTitle title="Instagram" subtitle="Güncel işlerimizden kareler" />
            <Card>
                <p className="text-sm text-gray-600">Instagram akışını göstermek için widget iframe URL’si veya tekil post linkleri eklenebilir.</p>
            </Card>
            <div className="mt-6 text-center flex justify-center gap-4">
                <a href={COMPANY.instagram} className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-pink-600 text-white text-sm shadow hover:opacity-90"><Instagram className="h-4 w-4" /> Instagram</a>
                <a href={COMPANY.facebook} className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-blue-600 text-white text-sm shadow hover:opacity-90"><Facebook className="h-4 w-4" /> Facebook</a>
                <a href={COMPANY.youtube} className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-pink-600 text-white text-sm shadow hover:opacity-90"><Youtube className="h-4 w-4" /> Youtube</a>

            </div>
        </Container>
    </section>
);

const ContactSection = () => (
    <section id="contact" className="py-16 sm:py-24">
        <Container>
            <SectionTitle title="İletişim" subtitle="Keşif randevusu ve hızlı fiyat teklifi için bize ulaşın" />
            <div className="grid lg:grid-cols-2 gap-8 items-start">
                <Card>
                    <form action="#" className="grid grid-cols-1 gap-4">
                        <input name="name" placeholder="Ad Soyad" required className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-teal-600" />
                        <input name="phone" placeholder="Telefon" required className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-teal-600" />
                        <input type="email" name="email" placeholder="E-posta (opsiyonel)" className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-teal-600" />
                        <textarea name="message" placeholder="İhtiyaç/mesajınız" rows={4} className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-teal-600" />
                        <button type="submit" className="rounded-xl px-5 py-3 bg-teal-600 text-white text-sm shadow hover:opacity-90">Gönder</button>
                    </form>
                    <div className="mt-4 text-sm text-gray-600">WhatsApp için <a className="text-teal-700 underline" href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}`}>{COMPANY.whatsapp}</a></div>
                </Card>
                <div className="space-y-4">
                    <Card>
                        <div className="flex items-center gap-3 text-sm"><PhoneCall className="h-4 w-4" /> {COMPANY.phone}</div>
                        <div className="mt-2 flex items-center gap-3 text-sm"><Mail className="h-4 w-4" /> {COMPANY.email}</div>
                        <div className="mt-2 flex items-center gap-3 text-sm"><MapPin className="h-4 w-4" /> {COMPANY.address}</div>
                    </Card>
                    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                        <iframe title="Google Map" src={MAP_EMBED} className="w-full h-[350px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div>
            </div>
        </Container>
    </section>
);

const Footer = () => (
    <footer className="py-8 border-t border-gray-100 bg-white">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
            <div>© {new Date().getFullYear()} {COMPANY.name}. Tüm hakları saklıdır.</div>
            <div className="flex items-center gap-4">
                <a href={COMPANY.instagram} className="hover:text-teal-700 inline-flex items-center gap-1"><Instagram className="h-4 w-4" /> Instagram</a>
                <a href={COMPANY.facebook} className="hover:text-teal-700 inline-flex items-center gap-1"><Facebook className="h-4 w-4" /> Facebook</a>
            </div>
        </Container>
    </footer>
);

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
        <div className="min-h-screen font-sans text-gray-900">
            <Header />
            <Hero />
            <Services />
            <WhyUs />
            <Projects />
            <ReviewsSection />
            <InstagramSection />
            <ContactSection />
            <Footer />
        </div>
    );
}
