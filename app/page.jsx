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
  Star,
  GraduationCap,
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
  ["Respiración guiada", "Ejercicios para calmar tu mente y reducir el estrés.", Leaf, "12 recursos", "from-emerald-50 to-white", "/categoria_1_respiracion_guiada.png"],
  ["Meditación breve", "Prácticas cortas para conectar contigo.", Sparkles, "10 recursos", "from-indigo-50 to-white", "/categoria_2_meditacion_breve.png"],
  ["Diario emocional", "Reflexiona, comprende y libera lo que sientes.", BookOpen, "9 recursos", "from-amber-50 to-white", "/categoria_3_diario_emocional.png"],
  ["Audios de calma", "Sonidos y narraciones para relajarte.", Headphones, "14 recursos", "from-sky-50 to-white", "/categoria_4_audios_de_calma.png"],
  ["Técnicas para ansiedad", "Estrategias para manejar la ansiedad diaria.", Cloud, "11 recursos", "from-teal-50 to-white", "/categoria_5_tecnicas_ansiedad.png"],
  ["Pausas activas", "Movimiento y estiramientos para recargar energía.", Footprints, "8 recursos", "from-orange-50 to-white", "/categoria_6_pausas_activas.png"],
  ["Sueño y descanso", "Mejora tu descanso y calidad de sueño.", Moon, "9 recursos", "from-blue-50 to-white", "/categoria_7_sueno_descanso.png"],
  ["Checklist de autocuidado", "Listas prácticas para cuidar tu día.", ClipboardCheck, "7 recursos", "from-emerald-50 to-white", "/categoria_8_checklist_autocuidado.png"],
];

const supportOptions = [
  ["Chat de orientación", "Habla con alguien cuando necesites claridad y contención.", MessageCircle, "/apoyo_chat_mujer_celular.png"],
  ["Primeros auxilios emocionales", "Guías rápidas para momentos de ansiedad, estrés o saturación.", Heart, "/apoyo_mujer_alerta.png"],
  ["Red profesional", "Conexión segura con especialistas cuando haga falta.", Users, "/apoyo_profesional_laptop.png"],
];

const plannerItems = [
  ["Hoy", "Respiración guiada", "8:30 AM"],
  ["Clase", "Proyecto de investigación", "10:00 AM"],
  ["Pausa", "Check-in emocional", "1:00 PM"],
  ["Estudio", "Bloque de lectura", "4:30 PM"],
];

const organizationTools = [
  ["Planner semanal", "Ordena tus clases, tareas y pausas.", "/herramienta_1_planner_semanal.png"],
  ["Calendario de entregas", "Ten fechas importantes siempre visibles.", "/herramienta_2_calendario_entregas.png"],
  ["Priorización de tareas", "Distingue lo urgente de lo importante.", "/herramienta_3_priorizacion_tareas.png"],
  ["Técnica Pomodoro", "Estudia por bloques sin agotarte.", "/herramienta_4_tecnica_pomodoro.png"],
  ["Equilibrio estudio-descanso", "Cuida tu energía durante la semana.", "/herramienta_5_equilibrio_estudio_descanso.png"],
  ["Seguimiento de metas", "Mide avances pequeños y constantes.", "/herramienta_6_seguimiento_metas.png"],
];

const organizationTips = [
  ["Planifica con anticipación", "/consejo_1_planifica_anticipacion.png"],
  ["Duerme bien", "/consejo_2_duerme_bien.png"],
  ["Toma pausas activas", "/consejo_3_toma_pausas_activas.png"],
  ["Pide apoyo", "/consejo_4_pide_apoyo.png"],
  ["Confía en tu proceso", "/consejo_5_confia_proceso.png"],
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

        <nav className={cn("flex justify-center gap-6 text-[12px] font-black max-xl:gap-4 max-lg:absolute max-lg:left-0 max-lg:right-0 max-lg:top-[58px] max-lg:hidden max-lg:gap-0 max-lg:border-b max-lg:border-[#cbe8ee] max-lg:bg-white max-lg:px-6 max-lg:py-3", open && "max-lg:grid")}>
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
        <div className="relative grid min-h-[385px] place-items-center overflow-hidden bg-[#edf8fb] px-8 py-10 max-lg:min-h-[310px] max-sm:px-4">
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/80 to-transparent" />
          <div className="absolute -right-20 top-10 size-[250px] rounded-full bg-white/55" />
          <div className="absolute left-12 top-12 size-24 rounded-full bg-[#d5f6fb]/80" />
          <Image className="hero-image relative z-10" src="/hero.png" alt="Estudiantes universitarios conversando en el campus" width={648} height={257} priority sizes="(max-width: 1024px) calc(100vw - 48px), 648px" />
        </div>
      </div>
      <HowHelp />
    </section>
  );
}

function HowHelp() {
  const items = [
    ["Recursos de bienestar", "Ejercicios de respiración, meditación, relajación y más para tu día a día.", Leaf, "from-emerald-50", "/recurso_1_respiracion_478.png"],
    ["Apoyo emocional", "Habla con profesionales, recibe orientación y no estás solo.", MessageCircle, "from-blue-50", "/apoyo_estudiante_tablet.png"],
    ["Organización académica", "Planifica tu tiempo, organiza tus estudios y reduce el estrés.", CalendarDays, "from-violet-50", "/organizacion_dos_estudiantes.png"],
    ["Conoce tu progreso", "Reflexiona sobre tu estado emocional y da seguimiento.", BarChart3, "from-cyan-50", "/cuadro_3_mockup_celular.png"],
  ];
  return (
    <div className="bg-white px-16 pb-5 pt-4 max-lg:px-6">
      <div className="text-center">
        <h2 className="text-2xl font-black">¿Cómo te ayudamos?</h2>
        <p className="mt-1 text-xs font-extrabold text-[#6b8796]">Herramientas y acompañamiento para tu bienestar integral en la universidad.</p>
      </div>
      <div className="mx-auto mt-4 grid max-w-[1090px] grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {items.map(([title, text, Icon, gradient, image]) => (
          <Card key={title} className={cn("border-0 bg-gradient-to-br to-white shadow-none", gradient)}>
            <CardContent className="grid min-h-[116px] grid-cols-[76px_1fr] items-center gap-4 p-4">
              <div className="relative h-[76px] overflow-hidden rounded-[12px] bg-white/70">
                <Image className="object-contain p-1" src={image} alt="" fill sizes="76px" />
                <span className="absolute left-1 top-1 grid size-7 place-items-center rounded-full bg-white/90 text-[#047984]"><Icon className="size-4" /></span>
              </div>
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
    ["1", "Haz tu check-in emocional", "Responde unas preguntas rápidas y anónimas sobre cómo te sientes.", "/tarjeta_1_completa.png", ["Rápido", "100% privado"], Heart],
    ["2", "Recibe orientación inmediata", "Obtén recomendaciones personalizadas con base en tu estado emocional.", "/tarjeta_2_completa.png", ["Personalizado", "Útil al instante"], Zap],
    ["3", "Accede a recursos de apoyo", "Explora ejercicios, guías y herramientas para tu bienestar y organización.", "/tarjeta_3_completa.png", ["Ejercicios", "Guías"], Download],
    ["4", "Conecta con apoyo humano si lo necesitas", "Habla con profesionales de forma segura y confidencial.", "/tarjeta_4_completa.png", ["Profesionales", "Confidencial"], MessageCircle],
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
          {steps.map(([num, title, text, image, tags, Icon], index) => (
            <div key={title} className="relative">
              <Card className="min-h-[248px] overflow-hidden bg-gradient-to-b from-[#f7fdff] to-white">
                <CardContent className="p-3.5">
                  <span className="absolute left-3 top-3 z-10 grid size-7 place-items-center rounded-full bg-gradient-to-b from-[#078f98] to-[#047984] text-[15px] font-black text-white">{num}</span>
                  <div className="relative h-[126px] overflow-hidden rounded-[10px] bg-[#effbfe]">
                    <Image className="object-contain object-bottom pt-2" src={image} alt="" fill sizes="220px" />
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
    ["Ejercicio de respiración", "Técnicas guiadas para reducir el estrés y recuperar la calma.", Leaf, "Probar ahora", "from-emerald-50", "/recurso_1_respiracion_478.png"],
    ["Plan de organización", "Organiza tu tiempo y tareas con plantillas prácticas.", CalendarDays, "Explorar", "from-violet-50", "/cuadro_4_estudiante_laptop.png"],
    ["Seguimiento emocional", "Conoce tus patrones emocionales y tu progreso.", BarChart3, "Ver mi progreso", "from-sky-50", "/recurso_3_diario_agradece_pequeno.png"],
  ];
  return (
    <div className="mx-auto my-3 grid max-w-[850px] grid-cols-3 gap-5 max-lg:grid-cols-1">
      {items.map(([title, text, Icon, action, color, image]) => (
        <article key={title} className={cn("grid min-h-[92px] grid-cols-[68px_1fr] items-center gap-4 rounded-[12px] bg-gradient-to-br to-white px-4 py-3", color)}>
          <div className="relative h-[68px] overflow-hidden rounded-[12px] bg-white/75">
            <Image className="object-contain p-1" src={image} alt="" fill sizes="68px" />
            <span className="absolute bottom-1 right-1 grid size-6 place-items-center rounded-full bg-white/95 text-[#047984]"><Icon className="size-3.5" /></span>
          </div>
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
        <Image className="h-[78px] w-[230px] object-contain object-bottom" src="/personas_juntas.png" alt="" width={230} height={82} />
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
  const moods = [
    ["Ansioso/a", "/emocion_1_ansioso.png"],
    ["Cansado/a", "/emocion_2_cansado.png"],
    ["Saturado/a", "/emocion_3_saturado.png"],
    ["Tranquilo/a", "/emocion_4_tranquilo.png"],
  ];
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
                {moods.map(([mood, image]) => (
                  <button key={mood} aria-label={mood} className="grid h-28 content-center justify-items-center rounded-[12px] border border-[#eadcc9] bg-gradient-to-br from-violet-50 to-amber-50 px-2 transition hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(12,70,88,.08)]">
                    <Image className="h-[82px] w-full object-contain" src={image} alt="" width={97} height={65} />
                  </button>
                ))}
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
          <div className="relative mx-auto mt-4 h-[352px] max-w-[210px]">
            <Image className="object-contain object-center drop-shadow-[0_18px_28px_rgba(12,70,88,.18)]" src="/cuadro_3_mockup_celular.png" alt="Vista móvil del check-in emocional" fill sizes="210px" />
          </div>
        </div>
      </div>
      <PricingPlans />
    </section>
  );
}

function PricingPlans() {
  const trustItems = [
    [Lock, "Privacidad y confianza", "Tus datos están protegidos"],
    [Users, "Apoyo profesional", "Equipo de psicólogos especializados"],
    [Cloud, "Acceso en todos lados", "Desde la app o la web, cuando lo necesites"],
    [GraduationCap, "Hecho para estudiantes", "Diseñado para acompañarte en tu vida académica"],
  ];

  return (
    <section className="relative mt-10 overflow-hidden rounded-[30px] border border-[#cbe8ee] bg-gradient-to-br from-white via-[#fbfeff] to-[#eefbfb] px-10 py-10 shadow-[0_24px_70px_rgba(12,70,88,.1)] max-lg:px-6">
      <div className="pointer-events-none absolute -left-14 top-12 h-56 w-32 rounded-full bg-[#d5f6fb]/70 blur-sm" />
      <div className="pointer-events-none absolute -right-10 top-10 h-48 w-28 rounded-full bg-[#e8f8ff]/80 blur-sm" />

      <div className="relative mx-auto max-w-[820px] text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#cbe8ee] bg-[#eefbfb] px-5 py-2 text-xs font-black text-[#047984]"><Leaf className="size-4" />Planes pensados para tu bienestar</span>
        <h2 className="mt-4 text-[42px] font-black leading-tight max-md:text-[34px]">Plan gratuito y plan premium estudiantil</h2>
        <p className="mx-auto mt-3 max-w-[620px] text-sm font-bold leading-relaxed text-[#33566a]">Elige el plan que mejor se adapta a ti y comienza a cuidar tu bienestar emocional, tu organización y tu crecimiento personal.</p>
      </div>

      <div className="relative mt-8 grid items-stretch gap-6 lg:grid-cols-[1fr_1.08fr_.95fr]">
        <PlanCard
          title="Gratis"
          description="Todo lo esencial para empezar tu camino de bienestar."
          price="S/ 0"
          icon={Leaf}
          features={[
            ["Check-in emocional diario", "seguimiento simple de cómo te sientes"],
            ["Recursos básicos", "guías y ejercicios para tu bienestar"],
            ["Organización académica básica", "planificador y recordatorios"],
          ]}
        />
        <PlanCard
          title="Premium estudiante"
          description="Todo lo del plan gratis, más herramientas avanzadas para tu bienestar integral."
          price="S/ 9.90"
          icon={Star}
          featured
          features={[
            ["Apoyo profesional prioritario", "respuestas más rápidas"],
            ["Contenido exclusivo", "recursos y herramientas avanzadas"],
            ["Seguimiento emocional", "acompañamiento personalizado"],
            ["Estadísticas avanzadas", "reportes y progreso detallado"],
          ]}
        />

        <aside className="grid gap-5">
          <div className="relative min-h-[250px] overflow-hidden rounded-[24px] bg-[#e9faff]">
            <div className="absolute left-5 top-4 z-10 inline-flex items-center gap-2 rounded-[14px] bg-white px-4 py-2 text-xs font-black text-[#33566a] shadow-[0_12px_28px_rgba(12,70,88,.12)]"><Zap className="size-5 text-[#f59b33]" />Más elegido por estudiantes</div>
            <Image className="object-cover object-center" src="/hero.png" alt="Estudiantes de Modo Calma" fill sizes="360px" />
            <span className="absolute right-5 top-10 grid size-14 place-items-center rounded-full bg-white text-[#078f98] shadow-[0_12px_24px_rgba(12,70,88,.12)]"><Heart className="size-7 fill-[#bdeff3]" /></span>
          </div>
          <div className="grid grid-cols-[58px_1fr] items-center gap-4 rounded-[22px] border border-[#cbe8ee] bg-white/85 p-5">
            <TrustIcon><ShieldCheck className="size-7" /></TrustIcon>
            <div>
              <h3 className="font-black">Tu bienestar es nuestra prioridad</h3>
              <p className="mt-1 text-xs font-bold leading-relaxed text-[#33566a]">Tus datos están protegidos y son 100% confidenciales. Puedes cancelar cuando quieras.</p>
            </div>
          </div>
        </aside>
      </div>

      <div className="relative mt-7 grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {trustItems.map(([Icon, title, text]) => (
          <article key={title} className="grid grid-cols-[52px_1fr] items-center gap-3 rounded-[18px] bg-white/80 p-4">
            <TrustIcon><Icon className="size-6" /></TrustIcon>
            <div>
              <h3 className="text-sm font-black">{title}</h3>
              <p className="mt-1 text-[11px] font-bold leading-snug text-[#33566a]">{text}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="relative mt-6 text-center text-[11px] font-bold text-[#6b8796]">*Puedes cambiar o cancelar tu plan en cualquier momento desde tu cuenta.</p>
    </section>
  );
}

function PlanCard({ title, description, price, features, featured, icon: Icon }) {
  return (
    <article className={cn("relative overflow-hidden rounded-[24px] border border-[#cbe8ee] bg-white p-7 shadow-[0_18px_42px_rgba(12,70,88,.08)]", featured && "border-[#d7ccff] bg-gradient-to-br from-white via-[#fbf9ff] to-[#f3efff] shadow-[0_22px_54px_rgba(83,62,170,.14)]")}>
      {featured && <span className="absolute right-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-black text-[#5d45bf] shadow-[0_10px_24px_rgba(83,62,170,.12)]">Precio especial</span>}
      <div className="grid grid-cols-[72px_1fr] items-center gap-4">
        <span className={cn("grid size-16 place-items-center rounded-full bg-[#d6f4f3] text-[#078f98]", featured && "bg-[#6b50c8] text-white")}><Icon className="size-9" /></span>
        <div>
          <h3 className={cn("text-[24px] font-black", featured && "text-[#4e36a9]")}>{title}</h3>
          <p className="mt-1 text-xs font-bold leading-snug text-[#33566a]">{description}</p>
        </div>
      </div>
      <div className="mt-6">
        <p className={cn("text-center text-[46px] font-black leading-none", featured ? "text-[#4e36a9]" : "text-[#06324a]")}>{price}<span className="ml-1 text-sm font-black text-[#33566a]">/ mes</span></p>
        {featured && <p className="mx-auto mt-3 w-max rounded-full bg-[#eeeafe] px-4 py-1 text-[10px] font-black text-[#5d45bf]">Precio especial para estudiantes</p>}
      </div>
      <div className="my-6 h-px bg-[#d9edf2]" />
      <p className="text-xs font-black text-[#33566a]">{featured ? "Incluye todo lo de Gratis, y además:" : "Incluye:"}</p>
      <ul className="mt-4 space-y-4">
        {features.map(([feature, detail]) => (
          <li key={feature} className="grid grid-cols-[24px_1fr] gap-3 text-sm">
            <span className={cn("mt-0.5 grid size-5 place-items-center rounded-full border border-[#87d8d5] text-[#047984]", featured && "border-[#9b87df] text-[#5d45bf]")}><Check className="size-3.5" /></span>
            <span><strong className="block font-black">{feature}</strong><small className="block text-[11px] font-bold leading-tight text-[#6b8796]">{detail}</small></span>
          </li>
        ))}
      </ul>
      <Button className={cn("mt-7 w-full", featured && "bg-gradient-to-b from-[#6b50c8] to-[#5236b0] shadow-[0_12px_24px_rgba(83,62,170,.22)]")} variant={featured ? "default" : "outline"}>{featured ? "Elegir Premium estudiante" : "Comenzar gratis"}</Button>
    </article>
  );
}

function Resources() {
  return (
    <section id="recursos" className="scroll-mt-[58px] bg-[#eef8fb] px-20 py-14 max-xl:px-10 max-lg:px-6">
      <div className="rounded-[24px] border border-[#cbe8ee] bg-white p-10 shadow-[0_22px_54px_rgba(12,70,88,.1)]">
        <div className="grid grid-cols-[1fr_520px] items-end gap-8 max-lg:grid-cols-1">
          <div><h2 className="text-[44px] font-black leading-tight">Recursos para<br />acompañarte en tu día a día</h2><p className="mt-3 max-w-[480px] font-bold text-[#33566a]">Herramientas prácticas para tu bienestar emocional, mejorar tu concentración y cuidar de ti.</p></div>
          <div className="relative h-[190px] overflow-hidden rounded-[18px] bg-[#e9faff]"><Image className="object-contain object-bottom p-3" src="/recursos_banner_personas.png" alt="Estudiantes usando recursos de bienestar" fill sizes="520px" /></div>
        </div>
        <div className="mt-6 grid grid-cols-[1fr_auto_auto] gap-4 max-lg:grid-cols-1">
          <div className="relative"><Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-[#6b8796]" /><Input className="h-12 pl-12" placeholder="Buscar recursos, guías o herramientas..." /></div>
          <Button variant="outline"><Sparkles className="size-4" />Todas las categorías</Button>
          <Button variant="outline"><BarChart3 className="size-4" />Más relevantes</Button>
        </div>
        <div className="mt-5 grid grid-cols-4 gap-4 max-xl:grid-cols-2 max-sm:grid-cols-1">
          {resourceCards.map(([title, text, _Icon, count, color, image]) => (
            <Card key={title} className={cn("bg-gradient-to-br shadow-none", color)}>
              <CardContent className="text-center">
                <div className="relative mx-auto h-[92px] w-full max-w-[176px]">
                  <Image className="object-contain" src={image} alt={title} fill sizes="176px" />
                </div>
                <p className="mx-auto mt-3 max-w-[220px] text-[12px] font-bold leading-snug text-[#33566a]">{text}</p><span className="mt-4 inline-block rounded-full bg-white px-3 py-1 text-[10px] font-black text-[#047984]">{count}</span>
              </CardContent>
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
        <div>
          <h2 className="text-[44px] font-black leading-tight">Apoyo emocional<br />cuando lo necesitas</h2>
          <p className="mt-4 max-w-[520px] font-bold text-[#33566a]">Un espacio seguro para hablar, ordenar lo que sientes y recibir orientación sin juicios.</p>
          <div className="relative mt-7 h-[260px] overflow-hidden rounded-[22px] bg-[#e9faff]">
            <Image className="object-contain object-bottom p-4" src="/apoyo_grupo_principal.png" alt="Grupo de estudiantes recibiendo apoyo emocional" fill sizes="520px" />
          </div>
        </div>
        <div className="grid gap-4">
          {supportOptions.map(([title, text, Icon, image]) => <Card key={title} className="shadow-none"><CardContent className="grid grid-cols-[82px_1fr] items-center gap-4"><div className="relative h-[78px] overflow-hidden rounded-[14px] bg-[#effbfe]"><Image className="object-contain p-1" src={image} alt="" fill sizes="82px" /><span className="absolute bottom-1 right-1 grid size-7 place-items-center rounded-full bg-white/95 text-[#047984]"><Icon className="size-4" /></span></div><div><h3 className="font-black">{title}</h3><p className="text-sm font-bold text-[#33566a]">{text}</p></div></CardContent></Card>)}
          <div className="relative h-[88px] overflow-hidden rounded-[16px] bg-[#effbfe]">
            <Image className="object-contain object-center p-2" src="/apoyo_banner_grupo_inferior.png" alt="" fill sizes="560px" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Organization() {
  return (
    <section id="organizacion" className="scroll-mt-[58px] bg-[#f5fbfd] px-20 py-14 max-xl:px-10 max-lg:px-6">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid items-center gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <h2 className="text-[44px] font-black leading-tight max-md:text-[36px]">Organiza tu vida académica sin perder tu calma</h2>
            <p className="mt-4 max-w-[560px] font-bold text-[#33566a]">Planifica clases, entregas, sesiones de estudio y descansos en una rutina visual que se siente manejable.</p>
            <div className="mt-6 grid max-w-[520px] grid-cols-3 gap-3">
              {[
                ["7", "herramientas"],
                ["5", "consejos"],
                ["1", "plan semanal"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-[16px] border border-[#cbe8ee] bg-white px-4 py-3 max-sm:px-3">
                  <strong className="block text-3xl font-black text-[#078f98] max-sm:text-2xl">{value}</strong>
                  <span className="text-xs font-black leading-tight text-[#33566a] max-sm:text-[10px]">{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 relative h-[92px] overflow-hidden rounded-[18px] bg-white">
              <Image className="object-contain object-center p-3" src="/herramienta_7_plantillas_descargables.png" alt="Plantillas descargables para organizar la semana" fill sizes="520px" />
            </div>
          </div>
          <div className="relative min-h-[410px] overflow-hidden rounded-[26px] border border-[#cbe8ee] bg-white shadow-[0_22px_54px_rgba(12,70,88,.1)] max-md:min-h-[300px]">
            <Image className="object-contain object-center p-5" src="/organizacion_plan_semanal_completo.png" alt="Vista de plan semanal académico" fill sizes="680px" />
          </div>
        </div>

        <div className="mt-7 grid gap-5 lg:grid-cols-[1fr_360px]">
          <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {organizationTools.map(([title, text, image]) => (
              <article key={title} aria-label={`${title}. ${text}`} className="grid min-h-[132px] place-items-center rounded-[16px] border border-[#d9edf2] bg-white p-4 shadow-[0_10px_26px_rgba(12,70,88,.05)]">
                <div className="relative h-[96px] w-full">
                  <Image className="object-contain object-center" src={image} alt="" fill sizes="190px" />
                </div>
              </article>
            ))}
          </div>

          <Card className="self-stretch">
            <CardContent className="grid h-full content-between">
              <div className="flex items-center justify-between"><h3 className="text-xl font-black">Plan de hoy</h3><CalendarDays className="size-6 text-[#078f98]" /></div>
              <div className="mt-4 space-y-3">{plannerItems.map(([type, title, time]) => <div key={title} className="grid grid-cols-[64px_1fr_auto] items-center rounded-xl bg-[#f4fbfd] p-3 text-sm max-sm:grid-cols-1 max-sm:gap-1"><span className="font-black text-[#047984]">{type}</span><span className="font-bold">{title}</span><span className="text-xs font-black text-[#6b8796]">{time}</span></div>)}</div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 rounded-[22px] bg-white px-5 py-4 shadow-[0_14px_34px_rgba(12,70,88,.06)]">
          <h3 className="text-center text-sm font-black text-[#047984]">Consejos para estudiar con más calma</h3>
          <div className="mt-4 grid grid-cols-5 gap-3 max-lg:grid-cols-3 max-sm:grid-cols-1">
            {organizationTips.map(([title, image]) => (
              <article key={title} aria-label={title} className="grid min-h-[148px] place-items-center rounded-[16px] bg-[#f4fbfd] px-3 py-3">
                <Image className="h-[124px] w-full object-contain" src={image} alt="" width={110} height={127} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="nosotros" className="scroll-mt-[58px] bg-white px-20 py-14 max-xl:px-10 max-lg:px-6">
      <div className="grid items-center gap-8 lg:grid-cols-[420px_1fr]">
        <div className="relative h-[300px] overflow-hidden rounded-[22px] bg-[#e9faff]"><Image className="object-contain object-bottom p-3" src="/sobre_nosotros_grupo_principal.png" alt="Comunidad universitaria de Modo Calma" fill sizes="420px" /></div>
        <div>
          <h2 className="text-[44px] font-black leading-tight">Tecnología con empatía para estudiantes</h2>
          <p className="mt-4 max-w-[640px] font-bold leading-relaxed text-[#33566a]">Modo Calma nace para acompañar la vida universitaria con herramientas simples, privacidad real y apoyo humano cuando hace falta. Diseñamos cada experiencia pensando en estudiantes que necesitan claridad, contención y organización.</p>
          <div className="mt-6 grid grid-cols-3 gap-4 max-sm:grid-cols-1">{["Privacidad", "Bienestar", "Acompañamiento"].map((item) => <div key={item} className="rounded-xl bg-[#eefbfb] p-4 text-center text-sm font-black text-[#047984]">{item}</div>)}</div>
          <div className="mt-6 grid grid-cols-4 gap-3 max-md:grid-cols-2">
            {[
              ["Kevin", "/fundador_1_kevin.png"],
              ["Mivra", "/fundador_2_mivra.png"],
              ["Gigi", "/fundador_3_gigi.png"],
              ["Santiago", "/fundador_4_santiago.png"],
            ].map(([name, image]) => (
              <div key={name} className="grid min-h-[128px] content-end justify-items-center rounded-[16px] bg-[#f4fbfd] px-3 pt-3 text-center text-xs font-black text-[#047984]">
                <Image className="h-[86px] w-full object-contain object-bottom" src={image} alt="" width={88} height={113} />
                <span className="py-2">{name}</span>
              </div>
            ))}
          </div>
        </div>
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
