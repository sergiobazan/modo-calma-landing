"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  BookOpen,
  CalendarDays,
  Check,
  ChevronRight,
  Cloud,
  Download,
  Heart,
  Leaf,
  Lock,
  Menu,
  MessageCircle,
  Moon,
  Play,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  X,
  Zap,
  BarChart3,
  Headphones,
  ClipboardCheck,
  Footprints,
} from "lucide-react";
import { Button, buttonVariantsForLink } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const navItems = [
  ["inicio", "Inicio"],
  ["funciona", "¿Cómo funciona?"],
  ["checkin", "Check-in y planes"],
  ["recursos", "Recursos"],
  ["apoyo", "Apoyo emocional"],
  ["organizacion", "Organización académica"],
  ["nosotros", "Sobre nosotros"],
];

const resourceCards = [
  ["Respiración guiada", "Ejercicios para calmar tu mente y reducir el estrés.", Leaf, "12 recursos", "from-emerald-50 to-white"],
  ["Meditación breve", "Prácticas cortas para conectar contigo.", Sparkles, "10 recursos", "from-indigo-50 to-white"],
  ["Diario emocional", "Reflexiona, comprende y libera lo que sientes.", BookOpen, "9 recursos", "from-amber-50 to-white"],
  ["Audios de calma", "Sonidos y narraciones para relajarte.", Headphones, "14 recursos", "from-sky-50 to-white"],
  ["Técnicas para ansiedad", "Estrategias para manejar la ansiedad diaria.", Cloud, "11 recursos", "from-teal-50 to-white"],
  ["Pausas activas", "Movimiento y estiramientos para recargar energía.", Footprints, "8 recursos", "from-orange-50 to-white"],
  ["Sueño y descanso", "Mejora tu descanso y calidad de sueño.", Moon, "9 recursos", "from-blue-50 to-white"],
  ["Checklist de autocuidado", "Listas prácticas para cuidar tu día.", ClipboardCheck, "7 recursos", "from-emerald-50 to-white"],
];

const supportOptions = [
  ["Chat de orientación", "Habla con alguien cuando necesites claridad y contención.", MessageCircle],
  ["Primeros auxilios emocionales", "Guías rápidas para momentos de ansiedad, estrés o saturación.", Heart],
  ["Red profesional", "Conexión segura con especialistas cuando haga falta.", Users],
];

const plannerItems = [
  ["Hoy", "Respiración guiada", "8:30 AM"],
  ["Clase", "Proyecto de investigación", "10:00 AM"],
  ["Pausa", "Check-in emocional", "1:00 PM"],
  ["Estudio", "Bloque de lectura", "4:30 PM"],
];

function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const sections = navItems.map(([id]) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-90px 0px -55% 0px", threshold: [0.16, 0.35, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    setOpen(false);
    const section = document.getElementById(id);
    if (!section) return;
    const top = section.getBoundingClientRect().top + window.scrollY - 58;
    window.history.pushState(null, "", `#${id}`);
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[58px] border-b border-[#cbe8ee] bg-white/95 backdrop-blur">
      <div className="mx-auto grid h-full max-w-[1365px] grid-cols-[auto_1fr_auto] items-center gap-5 px-8 max-lg:grid-cols-[auto_auto] max-lg:justify-between max-lg:px-5">
        <button onClick={() => goTo("inicio")} className="flex shrink-0 items-center gap-2 whitespace-nowrap text-[26px] font-black text-[#047984]" aria-label="Modo Calma inicio">
          <span className="brand-mark shrink-0" aria-hidden="true"><i /><i /><i /></span>
          <span>Modo Calma</span>
        </button>

        <nav className={cn("flex justify-center gap-6 text-[12px] font-black max-xl:gap-4 max-lg:absolute max-lg:left-0 max-lg:right-0 max-lg:top-[58px] max-lg:hidden max-lg:grid max-lg:gap-0 max-lg:border-b max-lg:border-[#cbe8ee] max-lg:bg-white max-lg:px-6 max-lg:py-3", open && "max-lg:grid")}>
          {navItems.map(([id, label]) => (
            <button key={id} onClick={() => goTo(id)} className="relative whitespace-nowrap py-5 max-lg:py-3">
              {label}
              <span className={cn("absolute bottom-2 left-0 h-0.5 w-full scale-x-0 rounded-full bg-[#078f98] transition", active === id && "scale-x-100")} />
            </button>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3 max-lg:hidden">
          <Button variant="ghost" size="icon" aria-label="Cambiar tema"><Moon className="size-5" /></Button>
          <Link href="#login" className={buttonVariantsForLink({ variant: "outline", size: "default", className: "px-5" })}>Iniciar sesión</Link>
          <Link href="#registro" className={buttonVariantsForLink({ variant: "default", size: "default", className: "px-5" })}>Regístrate gratis</Link>
        </div>

        <Button className="hidden max-lg:inline-flex" variant="outline" size="icon" onClick={() => setOpen((value) => !value)} aria-label="Abrir menú">
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>
    </header>
  );
}

function Brand() {
  return (
    <div className="flex items-center gap-3 text-[23px] font-black text-[#047984]">
      <span className="brand-mark scale-90" aria-hidden="true"><i /><i /><i /></span>
      <span>Modo Calma</span>
    </div>
  );
}

function TrustIcon({ children }) {
  return <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#d6f4f3] text-[#047984]">{children}</span>;
}

function Hero() {
  return (
    <section id="inicio" className="scroll-mt-[58px] overflow-hidden bg-white">
      <div className="grid min-h-[385px] grid-cols-[42%_58%] max-lg:grid-cols-1">
        <div className="relative overflow-hidden bg-[#d5f6fb] px-[82px] py-8 max-xl:px-12 max-lg:px-7">
          <div className="absolute -right-4 -top-44 size-[390px] rounded-full bg-white/45" />
          <div className="relative z-10 max-w-[520px]">
            <h1 className="text-[56px] font-black leading-[.95] tracking-normal max-md:text-5xl">Modo Calma</h1>
            <h2 className="mt-1 text-[30px] font-black leading-[1.05] text-[#047984] max-md:text-2xl">Acompañamiento emocional<br />para universitarios</h2>
            <p className="mt-4 max-w-[500px] text-[17px] font-bold leading-snug text-[#33566a]">Un espacio seguro para entender lo que sientes, cuidar tu bienestar y rendir mejor en la universidad.</p>
            <div className="mt-5 flex flex-wrap gap-4">
              <Link href="#checkin" className={buttonVariantsForLink({ size: "lg", className: "min-w-[245px]" })}><Heart className="size-5" />Haz tu check-in emocional</Link>
              <Link href="#funciona" className={buttonVariantsForLink({ variant: "outline", size: "lg", className: "min-w-[230px]" })}><Play className="size-5" />Conoce cómo funciona</Link>
            </div>
            <div className="mt-7 grid max-w-[520px] grid-cols-3 gap-3 max-sm:grid-cols-1">
              <article className="grid grid-cols-[40px_1fr] items-center gap-2">
                <TrustIcon><ShieldCheck className="size-4" /></TrustIcon>
                <div><strong className="block text-[11px] font-black">Privado y confidencial</strong><small className="block text-[9px] font-bold leading-tight text-[#33566a]">Tu información está siempre protegida.</small></div>
              </article>
              <article className="grid grid-cols-[40px_1fr] items-center gap-2">
                <TrustIcon><Users className="size-4" /></TrustIcon>
                <div><strong className="block text-[11px] font-black">Apoyo profesional</strong><small className="block text-[9px] font-bold leading-tight text-[#33566a]">Contenido desarrollado por especialistas.</small></div>
              </article>
              <article className="grid grid-cols-[40px_1fr] items-center gap-2">
                <TrustIcon><Heart className="size-4" /></TrustIcon>
                <div><strong className="block text-[11px] font-black">Sin juicios, sin presiones</strong><small className="block text-[9px] font-bold leading-tight text-[#33566a]">Aquí puedes ser tú, siempre.</small></div>
              </article>
            </div>
          </div>
        </div>
        <div className="relative min-h-[385px] bg-[#edf8fb]">
          <Image className="hero-image" src="/hero.png" alt="Estudiantes universitarios conversando en el campus" fill priority sizes="(max-width: 1024px) 100vw, 58vw" />
        </div>
      </div>
      <HowHelp />
    </section>
  );
}

function HowHelp() {
  const items = [
    ["Recursos de bienestar", "Ejercicios de respiración, meditación, relajación y más para tu día a día.", Leaf, "from-emerald-50"],
    ["Apoyo emocional", "Habla con profesionales, recibe orientación y no estás solo.", MessageCircle, "from-blue-50"],
    ["Organización académica", "Planifica tu tiempo, organiza tus estudios y reduce el estrés.", CalendarDays, "from-violet-50"],
    ["Conoce tu progreso", "Reflexiona sobre tu estado emocional y da seguimiento.", BarChart3, "from-cyan-50"],
  ];
  return (
    <div className="bg-white px-16 pb-5 pt-4 max-lg:px-6">
      <div className="text-center">
        <h2 className="text-2xl font-black">¿Cómo te ayudamos?</h2>
        <p className="mt-1 text-xs font-extrabold text-[#6b8796]">Herramientas y acompañamiento para tu bienestar integral en la universidad.</p>
      </div>
      <div className="mx-auto mt-4 grid max-w-[1090px] grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {items.map(([title, text, Icon, gradient]) => (
          <Card key={title} className={cn("border-0 bg-gradient-to-br to-white shadow-none", gradient)}>
            <CardContent className="grid min-h-[100px] grid-cols-[62px_1fr] items-center gap-4 p-5">
              <TrustIcon><Icon className="size-7" /></TrustIcon>
              <div><h3 className="text-sm font-black">{title}</h3><p className="mt-1 text-[11px] font-bold leading-snug text-[#33566a]">{text}</p><Link className="mt-2 inline-block text-[11px] font-black text-[#047984]" href="#recursos">Saber más →</Link></div>
            </CardContent>
          </Card>
        ))}
      </div>
      <PrivacyBand />
    </div>
  );
}

function PrivacyBand({ compact = false }) {
  return (
    <div className={cn("mx-auto mt-4 grid max-w-[1040px] grid-cols-[104px_minmax(240px,1fr)_1.9fr] items-center gap-6 rounded-[12px] bg-gradient-to-r from-[#eefbfb] to-[#f6fdff] px-8 py-3 max-lg:grid-cols-1", compact && "mt-0 max-w-[980px] grid-cols-[88px_minmax(260px,1fr)_1.45fr] py-2")}>
      <div className="relative mx-auto h-[58px] w-16 rounded-[12px] bg-gradient-to-b from-[#099aa3] to-[#067b87] shadow-[0_12px_26px_rgba(0,130,140,.22)] before:absolute before:-top-8 before:left-[13px] before:h-[42px] before:w-[38px] before:rounded-t-[24px] before:border-[9px] before:border-b-0 before:border-[#078f98] after:absolute after:left-1/2 after:top-6 after:h-[18px] after:w-2.5 after:-translate-x-1/2 after:rounded-full after:bg-white/90">
        <span className="absolute -bottom-2.5 -right-3.5 grid size-8 place-items-center rounded-full border-[3px] border-white bg-[#62c895] text-white"><Check className="size-5" /></span>
      </div>
      <div>
        <h2 className="text-[17px] font-black">Privacidad y confianza</h2>
        <p className="mt-1 text-xs font-bold leading-snug text-[#33566a]">Tu bienestar es nuestra prioridad. Tus datos son 100% confidenciales y nunca los compartimos.</p>
      </div>
      <ul className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {[
          [ShieldCheck, "Cifrado de extremo a extremo"],
          [Lock, "Tus datos son confidenciales"],
          [Users, "Tú decides qué compartir"],
          [Cloud, "Cumplimos con estándares internacionales de privacidad"],
        ].map(([Icon, text]) => (
          <li key={text} className="flex min-h-12 items-center gap-2 border-l border-[#cbe8ee] px-4 text-[10px] font-extrabold leading-tight text-[#33566a] max-lg:border-l-0 max-lg:border-t">
            <Icon className="size-5 shrink-0 text-[#047984]" />{text}
          </li>
        ))}
      </ul>
    </div>
  );
}

function HowWorks() {
  const steps = [
    ["1", "Haz tu check-in emocional", "Responde unas preguntas rápidas y anónimas sobre cómo te sientes.", "crop-student-left", ["Rápido", "100% privado"], Heart],
    ["2", "Recibe orientación inmediata", "Obtén recomendaciones personalizadas con base en tu estado emocional.", "crop-student-mid", ["Personalizado", "Útil al instante"], Zap],
    ["3", "Accede a recursos de apoyo", "Explora ejercicios, guías y herramientas para tu bienestar y organización.", "crop-student-right", ["Ejercicios", "Guías y herramientas"], Download],
    ["4", "Conecta con apoyo humano si lo necesitas", "Habla con profesionales de forma segura y confidencial.", "crop-student-human", ["Profesionales", "Confidencial"], MessageCircle],
  ];
  return (
    <section id="funciona" className="leaf-bg relative scroll-mt-[58px] border-t border-[#cbe8ee] bg-white px-[82px] pb-0 pt-9 max-xl:px-11 max-lg:px-7">
      <div className="grid grid-cols-[320px_1fr] gap-12 max-lg:grid-cols-1">
        <div className="pt-4">
          <h2 className="text-[48px] font-black leading-[.98] max-md:text-[40px]">¿Cómo funciona<br />Modo Calma?</h2>
          <h3 className="mt-5 text-xl font-black leading-tight text-[#047984]">Un proceso simple, privado y pensado<br />para universitarios.</h3>
          <p className="mt-3 max-w-[310px] text-xs font-extrabold leading-relaxed text-[#33566a]">Te acompañamos en 4 pasos para que entiendas lo que sientes, cuide tu bienestar y rindas mejor en la universidad.</p>
        </div>
        <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {steps.map(([num, title, text, crop, tags, Icon], index) => (
            <div key={title} className="relative">
              <Card className="min-h-[248px] overflow-hidden bg-gradient-to-b from-[#f7fdff] to-white">
                <CardContent className="p-3.5">
                  <span className="absolute left-3 top-3 z-10 grid size-7 place-items-center rounded-full bg-gradient-to-b from-[#078f98] to-[#047984] text-[15px] font-black text-white">{num}</span>
                  <div className="relative h-[126px] overflow-hidden rounded-[10px] bg-[#effbfe]">
                    <Image className={crop} src="/hero.png" alt="" fill sizes="220px" />
                    <span className="absolute right-3 top-5 grid size-9 place-items-center rounded-xl border border-[#94d9df] bg-[#effdff]/95 text-[#047984]"><Icon className="size-5" /></span>
                  </div>
                  <h3 className="mt-3 text-[13px] font-black leading-tight">{title}</h3>
                  <p className="mt-2 min-h-[38px] text-[10px] font-bold leading-snug text-[#33566a]">{text}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {tags.map((tag) => <span key={tag} className="rounded-full bg-[#effcfd] px-2 py-1 text-[8px] font-black text-[#047984]">{tag}</span>)}
                  </div>
                </CardContent>
              </Card>
              {index < 3 && <ChevronRight className="absolute -right-4 top-[102px] size-7 text-[#047984] max-lg:hidden" />}
            </div>
          ))}
        </div>
      </div>
      <h3 className="mx-auto mt-6 max-w-[760px] border-t border-[#e6f1f5] pt-2 text-center text-sm font-black">Recursos que puedes usar en cualquier momento</h3>
      <QuickResources />
      <PrivacyBand compact />
      <ProcessCta />
    </section>
  );
}

function QuickResources() {
  const items = [
    ["Ejercicio de respiración", "Técnicas guiadas para reducir el estrés y recuperar la calma.", Leaf, "Probar ahora", "from-emerald-50"],
    ["Plan de organización", "Organiza tu tiempo y tareas con plantillas prácticas.", CalendarDays, "Explorar", "from-violet-50"],
    ["Seguimiento emocional", "Conoce tus patrones emocionales y tu progreso.", BarChart3, "Ver mi progreso", "from-sky-50"],
  ];
  return (
    <div className="mx-auto my-3 grid max-w-[850px] grid-cols-3 gap-5 max-lg:grid-cols-1">
      {items.map(([title, text, Icon, action, color]) => (
        <article key={title} className={cn("grid min-h-[82px] grid-cols-[54px_1fr] items-center gap-4 rounded-[12px] bg-gradient-to-br to-white px-5 py-4", color)}>
          <TrustIcon><Icon className="size-7" /></TrustIcon>
          <div><h4 className="text-[13px] font-black">{title}</h4><p className="mt-1 text-[10px] font-bold leading-snug text-[#33566a]">{text}</p><Link href="#recursos" className="mt-2 inline-block text-[10px] font-black text-[#047984]">{action} →</Link></div>
        </article>
      ))}
    </div>
  );
}

function ProcessCta() {
  return (
    <section className="mx-auto mt-3 grid max-w-[980px] grid-cols-[230px_1fr_auto] items-center gap-6 max-lg:grid-cols-1 max-lg:text-center">
      <div className="h-[78px] overflow-hidden max-lg:mx-auto">
        <Image className="h-[120px] w-[250px] object-cover object-bottom" src="/hero.png" alt="" width={250} height={120} />
      </div>
      <div>
        <h2 className="text-[21px] font-black">Empieza a cuidar tu bienestar hoy</h2>
        <p className="mt-1 text-[11px] font-bold leading-snug text-[#33566a]">Miles de estudiantes ya están usando Modo Calma para sentirse mejor y vivir su universidad con más equilibrio.</p>
      </div>
      <div className="text-center">
        <Link href="#checkin" className={buttonVariantsForLink({ size: "lg", className: "min-w-[190px]" })}>Empieza ahora</Link>
        <small className="mt-3 block text-[10px] font-extrabold text-[#6b8796]">Es gratis y toma menos de 2 minutos</small>
      </div>
    </section>
  );
}

function CheckInPlans() {
  const moods = ["Ansioso/a", "Cansado/a", "Saturado/a", "Tranquilo/a"];
  return (
    <section id="checkin" className="scroll-mt-[58px] bg-white px-20 py-14 max-xl:px-10 max-lg:px-6">
      <div className="grid gap-8 lg:grid-cols-[330px_1fr_260px]">
        <div className="rounded-[18px] bg-[#e9faff] p-8">
          <h2 className="text-[46px] font-black leading-tight">Tu espacio<br />para volver a ti</h2>
          <p className="mt-5 text-xl font-black leading-tight text-[#047984]">Acompañamiento emocional para universitarios.</p>
          <p className="mt-4 text-sm font-bold text-[#33566a]">Herramientas simples, apoyo humano y recursos para tu bienestar.</p>
          <div className="mt-6 grid gap-3">
            <Link href="#checkin" className={buttonVariantsForLink({ size: "lg" })}><Heart className="size-5" />Haz tu check-in emocional</Link>
            <Link href="#recursos" className={buttonVariantsForLink({ variant: "outline", size: "lg" })}><BookOpen className="size-5" />Explorar recursos</Link>
          </div>
        </div>
        <Card className="bg-white">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div><h3 className="text-xl font-black">¡Hola, Alex! 👋</h3><p className="text-xs font-bold text-[#6b8796]">Bienvenido/a a tu espacio personal de bienestar.</p></div>
              <span className="rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-black text-[#8a5b12]">🔥 7 días</span>
            </div>
            <div className="mt-5 rounded-[14px] border border-[#e2eef2] p-4">
              <h4 className="font-black">¿Cómo te sientes hoy?</h4>
              <div className="mt-4 grid grid-cols-4 gap-3 max-md:grid-cols-2">
                {moods.map((mood) => <button key={mood} className="h-20 rounded-[12px] border border-[#eadcc9] bg-gradient-to-br from-violet-50 to-amber-50 text-xs font-black">{mood}</button>)}
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 max-md:grid-cols-1">
              {[
                ["Respiración guiada", "Ejercicios breves para calmar tu mente.", Leaf],
                ["Organiza tu día", "Planifica tus tareas y momentos de descanso.", CalendarDays],
                ["Habla con alguien", "Conecta con apoyo profesional.", MessageCircle],
                ["Tu progreso", "Conoce tus avances.", BarChart3],
              ].map(([title, text, Icon]) => <Card key={title} className="shadow-none"><CardContent className="grid grid-cols-[48px_1fr] gap-3 p-4"><TrustIcon><Icon className="size-5" /></TrustIcon><div><h4 className="text-sm font-black">{title}</h4><p className="text-[11px] font-bold text-[#33566a]">{text}</p></div></CardContent></Card>)}
            </div>
          </CardContent>
        </Card>
        <div className="rounded-[18px] border border-[#d7edf2] bg-gradient-to-b from-white to-[#f4fcfe] p-6 text-center">
          <h3 className="font-black">Así se siente tu check-in</h3>
          <div className="mx-auto mt-4 h-[330px] max-w-[180px] rounded-[28px] border-[8px] border-[#172632] bg-white p-3 shadow-2xl">
            <div className="h-28 rounded-[16px] bg-gradient-to-br from-[#d8f5fb] to-[#fce4b7]" />
            <h4 className="mt-4 text-xs font-black">Gracias por compartir cómo te sientes.</h4>
            <div className="mt-4 space-y-2 text-left text-[10px] font-bold">
              <div className="rounded-lg bg-[#effcfd] p-2">Respiración para ansiedad</div>
              <div className="rounded-lg bg-violet-50 p-2">Escribe lo que sientes</div>
              <div className="rounded-lg bg-blue-50 p-2">Habla con alguien</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-[1fr_1fr_260px] gap-4 max-lg:grid-cols-1">
        <PlanCard title="Gratis" price="S/ 0" features={["Check-in emocional diario", "Recursos de bienestar", "Ejercicios guiados básicos", "Organización académica básica"]} />
        <PlanCard title="Premium estudiante" price="S/ 29.90" featured features={["Todo lo del plan Gratis", "Apoyo profesional prioritario", "Contenido exclusivo", "Estadísticas avanzadas"]} />
        <div className="grid content-center gap-4 text-sm font-bold text-[#33566a]">
          <p><ShieldCheck className="mr-2 inline size-5 text-[#047984]" />Tu bienestar es seguro</p>
          <p><Heart className="mr-2 inline size-5 text-[#047984]" />Apoyo real y humano</p>
          <p><Users className="mr-2 inline size-5 text-[#047984]" />Diseñado para estudiantes</p>
        </div>
      </div>
    </section>
  );
}

function PlanCard({ title, price, features, featured }) {
  return (
    <Card className={cn("shadow-none", featured && "border-[#078f98] ring-2 ring-[#bdeff3]")}>
      <CardContent>
        <div className="flex items-center justify-between"><h3 className="text-lg font-black">{title}</h3>{featured && <span className="rounded-full bg-[#dff6f8] px-3 py-1 text-xs font-black text-[#047984]">Más popular</span>}</div>
        <ul className="mt-4 space-y-2 text-sm font-bold text-[#33566a]">{features.map((f) => <li key={f}><Check className="mr-2 inline size-4 text-[#047984]" />{f}</li>)}</ul>
        <p className="mt-5 text-3xl font-black">{price}<span className="text-xs text-[#6b8796]"> / mes</span></p>
        <Button className="mt-4 w-full" variant={featured ? "default" : "outline"}>{featured ? "Probar 7 días gratis" : "Comenzar gratis"}</Button>
      </CardContent>
    </Card>
  );
}

function Resources() {
  return (
    <section id="recursos" className="scroll-mt-[58px] bg-[#eef8fb] px-20 py-14 max-xl:px-10 max-lg:px-6">
      <div className="rounded-[24px] border border-[#cbe8ee] bg-white p-10 shadow-[0_22px_54px_rgba(12,70,88,.1)]">
        <div className="grid grid-cols-[1fr_520px] items-end gap-8 max-lg:grid-cols-1">
          <div><h2 className="text-[44px] font-black leading-tight">Recursos para<br />acompañarte en tu día a día</h2><p className="mt-3 max-w-[480px] font-bold text-[#33566a]">Herramientas prácticas para tu bienestar emocional, mejorar tu concentración y cuidar de ti.</p></div>
          <div className="relative h-[190px] overflow-hidden rounded-[18px] bg-[#e9faff]"><Image className="object-cover object-center" src="/hero.png" alt="" fill /></div>
        </div>
        <div className="mt-6 grid grid-cols-[1fr_auto_auto] gap-4 max-lg:grid-cols-1">
          <div className="relative"><Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-[#6b8796]" /><Input className="h-12 pl-12" placeholder="Buscar recursos, guías o herramientas..." /></div>
          <Button variant="outline"><Sparkles className="size-4" />Todas las categorías</Button>
          <Button variant="outline"><BarChart3 className="size-4" />Más relevantes</Button>
        </div>
        <div className="mt-5 grid grid-cols-4 gap-4 max-xl:grid-cols-2 max-sm:grid-cols-1">
          {resourceCards.map(([title, text, Icon, count, color]) => (
            <Card key={title} className={cn("bg-gradient-to-br shadow-none", color)}>
              <CardContent className="text-center"><Icon className="mx-auto size-9 text-[#078f98]" /><h3 className="mt-3 text-sm font-black">{title}</h3><p className="mt-1 text-[11px] font-bold text-[#33566a]">{text}</p><span className="mt-3 inline-block rounded-full bg-white px-3 py-1 text-[10px] font-black text-[#047984]">{count}</span></CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Support() {
  return (
    <section id="apoyo" className="scroll-mt-[58px] bg-white px-20 py-14 max-xl:px-10 max-lg:px-6">
      <div className="grid items-center gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <div><h2 className="text-[44px] font-black leading-tight">Apoyo emocional<br />cuando lo necesitas</h2><p className="mt-4 max-w-[520px] font-bold text-[#33566a]">Un espacio seguro para hablar, ordenar lo que sientes y recibir orientación sin juicios.</p></div>
        <div className="grid gap-4">
          {supportOptions.map(([title, text, Icon]) => <Card key={title} className="shadow-none"><CardContent className="grid grid-cols-[56px_1fr] gap-4"><TrustIcon><Icon className="size-6" /></TrustIcon><div><h3 className="font-black">{title}</h3><p className="text-sm font-bold text-[#33566a]">{text}</p></div></CardContent></Card>)}
        </div>
      </div>
    </section>
  );
}

function Organization() {
  return (
    <section id="organizacion" className="scroll-mt-[58px] bg-[#f5fbfd] px-20 py-14 max-xl:px-10 max-lg:px-6">
      <div className="grid gap-8 lg:grid-cols-[1fr_430px]">
        <div><h2 className="text-[44px] font-black leading-tight">Organiza tu vida académica sin perder tu calma</h2><p className="mt-4 max-w-[560px] font-bold text-[#33566a]">Planifica clases, tareas, descansos y recursos emocionales en una rutina más sostenible.</p></div>
        <Card>
          <CardContent>
            <div className="flex items-center justify-between"><h3 className="text-xl font-black">Plan de hoy</h3><CalendarDays className="size-6 text-[#078f98]" /></div>
            <div className="mt-4 space-y-3">{plannerItems.map(([type, title, time]) => <div key={title} className="grid grid-cols-[64px_1fr_auto] items-center rounded-xl bg-[#f4fbfd] p-3 text-sm"><span className="font-black text-[#047984]">{type}</span><span className="font-bold">{title}</span><span className="text-xs font-black text-[#6b8796]">{time}</span></div>)}</div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="nosotros" className="scroll-mt-[58px] bg-white px-20 py-14 max-xl:px-10 max-lg:px-6">
      <div className="grid items-center gap-8 lg:grid-cols-[420px_1fr]">
        <div className="relative h-[260px] overflow-hidden rounded-[22px] bg-[#e9faff]"><Image className="object-cover object-center" src="/hero.png" alt="Comunidad universitaria de Modo Calma" fill /></div>
        <div><h2 className="text-[44px] font-black leading-tight">Tecnología con empatía para estudiantes</h2><p className="mt-4 max-w-[640px] font-bold leading-relaxed text-[#33566a]">Modo Calma nace para acompañar la vida universitaria con herramientas simples, privacidad real y apoyo humano cuando hace falta. Diseñamos cada experiencia pensando en estudiantes que necesitan claridad, contención y organización.</p><div className="mt-6 grid grid-cols-3 gap-4 max-sm:grid-cols-1">{["Privacidad", "Bienestar", "Acompañamiento"].map((item) => <div key={item} className="rounded-xl bg-[#eefbfb] p-4 text-center text-sm font-black text-[#047984]">{item}</div>)}</div></div>
      </div>
    </section>
  );
}

function Footer() {
  const columns = [
    ["Plataforma", ["¿Cómo funciona?", "Recursos", "Apoyo emocional", "Organización académica"]],
    ["Sobre nosotros", ["Quiénes somos", "Nuestro equipo", "Blog", "Contacto"]],
    ["Legal", ["Términos y condiciones", "Política de privacidad", "Aviso de privacidad"]],
  ];
  return (
    <footer className="grid grid-cols-[1.2fr_repeat(3,1fr)_1.5fr] gap-8 border-t border-[#cbe8ee] bg-white px-[150px] py-5 max-xl:px-16 max-lg:grid-cols-1 max-lg:px-7">
      <div><Brand /><p className="mt-3 text-xs font-bold text-[#33566a]">Acompañamiento emocional para universitarios.</p></div>
      {columns.map(([title, links]) => <nav key={title} className="grid content-start gap-1"><strong className="text-[11px] font-black">{title}</strong>{links.map((link) => <a key={link} className="text-[10px] font-bold text-[#33566a]" href="#">{link}</a>)}</nav>)}
      <form className="content-start" onSubmit={(event) => event.preventDefault()}>
        <label className="text-[11px] font-black">Mantente al día</label>
        <p className="text-[10px] font-bold text-[#33566a]">Recibe tips y recursos para tu bienestar.</p>
        <div className="mt-2 grid grid-cols-[1fr_auto] gap-2"><Input placeholder="Tu correo electrónico" /><Button>Suscribirme</Button></div>
        <div className="mt-3 flex gap-4 text-[10px] font-black text-[#047984]"><span>IG</span><span>TT</span><span>YT</span><span>SP</span></div>
      </form>
      <small className="col-span-full text-center text-[10px] font-bold text-[#6b8796]">© 2024 Modo Calma. Todos los derechos reservados.</small>
    </footer>
  );
}

export default function Page() {
  const sections = useMemo(() => [Hero, HowWorks, CheckInPlans, Resources, Support, Organization, About], []);

  return (
    <>
      <Header />
      <main className="mx-auto mt-[58px] max-w-[1365px] overflow-hidden rounded-b-[24px] bg-white shadow-[0_20px_60px_rgba(12,70,88,.08)]">
        {sections.map((Section, index) => <Section key={index} />)}
        <Footer />
      </main>
    </>
  );
}
