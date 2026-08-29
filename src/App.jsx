import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  Copy,
  Check,
  Send,
  Clock,
  ArrowUpRight,
  ArrowUp,
  MessageSquare,
  MapPin,
  CheckCircle2,
  Code2,
  Layers,
  Smartphone,
  Server,
  Database,
  Cpu,
  Wrench,
  Sparkles,
  Terminal,
  ExternalLink,
  GraduationCap,
  Zap,
  Palette,
  Bot,
  FileText,
  Download,
  BookOpen,
  Award,
} from "lucide-react";
import "./App.css";
import heroAvatar from "./assets/hero.png";

// Social & Tech SVG Icons
const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const XTwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5.5" ry="5.5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LeetCodeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M15.5 3.5L7 12l6 6"
      stroke="#FFA116"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.2 12h9.3"
      stroke="currentColor"
      strokeOpacity="0.35"
      strokeWidth="2.1"
      strokeLinecap="round"
    />
    <path
      d="M10.5 17.3l3.3 3.2"
      stroke="#FFA116"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Official Tech Icons
const ReactIcon = () => (
  <svg width="18" height="18" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const NodeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
    <path
      d="M16 2.5L3.5 9.7v14.6L16 31.5l12.5-7.2V9.7L16 2.5z"
      stroke="#539E43"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    <path
      d="M16 8v16M8 12.5l8 4.5 8-4.5"
      stroke="#539E43"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const JavaIcon = () => (
  <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
    <path
      d="M11 23.5c4.5 1 10.5 1 15-1.5-2.5 1.5-7 2.5-12 2.2-2.5-.2-3.8-.5-3-.7z"
      fill="#E76F00"
    />
    <path
      d="M9.5 20.5c5 1.2 12.5 1.2 17.5-1.8-3.2 1.6-8.5 2.6-14.5 2.2-2.8-.2-4-.3-3-.4z"
      fill="#E76F00"
    />
    <path
      d="M16.5 14.5c2.2 2.2-1.5 4.2-1.5 6.2 0 1.2.8 2.2 2 3-1.8-.8-2.8-2-2.8-3.5 0-2 3.8-3.8 2.3-5.7z"
      fill="#5382A1"
    />
    <path
      d="M20.5 11c3 3-2 5.5-2 8.2 0 1.5 1.2 2.8 3 3.8-2.5-1.2-3.8-2.8-3.8-4.8 0-2.8 5-4.8 2.8-7.2z"
      fill="#E76F00"
    />
    <path
      d="M13.5 27c5.5.8 12 .5 17-2-4.5 1.5-10.5 2-15 1.5-3-.3-4.5-.8-2-.5z"
      fill="#5382A1"
    />
  </svg>
);

const PythonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
    <path
      d="M15.8 3c-6.2 0-5.8 2.7-5.8 2.7l.01 2.8h6v.85H6.9s-3.9.44-3.9 6.2 3.4 6 3.4 6h2V18.7c0-2.8 2.4-2.7 2.4-2.7h6.8c2.4 0 2.2-2.3 2.2-2.3V5.8S20.3 3 15.8 3zm-2.4 2.2a1 1 0 110 2 1 1 0 010-2z"
      fill="#387EB8"
    />
    <path
      d="M16.2 29c6.2 0 5.8-2.7 5.8-2.7l-.01-2.8h-6v-.85h9.1s3.9-.44 3.9-6.2-3.4-6-3.4-6h-2v2.85c0 2.8-2.4 2.7-2.4 2.7h-6.8c-2.4 0-2.2 2.3-2.2 2.3v7.9s-.5 2.8 4 2.8zm2.4-2.2a1 1 0 110-2 1 1 0 010 2z"
      fill="#FFE052"
    />
  </svg>
);

const MongoIcon = () => (
  <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
    <path
      d="M16 2.5C14.5 7.5 9 13.5 9 19.5c0 5 3.2 8.5 7 10 3.8-1.5 7-5 7-10 0-6-5.5-12-7-17z"
      fill="#47A248"
    />
    <path
      d="M16 2.5v27c3.8-1.5 7-5 7-10 0-6-5.5-12-7-17z"
      fill="#499D4A"
    />
    <path
      d="M16 2.5C15.2 5 13 8 13 12c0 6.5 3 10.5 3 17V2.5z"
      fill="#3FA037"
    />
  </svg>
);

const FirebaseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
    <path
      d="M6.2 23.5L13.8 9.3c.3-.5 1-.6 1.4-.2.2.2.3.4.3.7l2.2 13.7-11.5 0z"
      fill="#FFA000"
    />
    <path
      d="M5.8 23.5l1.6-17c.1-.6.6-1 1.2-.9.3 0 .5.2.7.4L13.8 14 5.8 23.5z"
      fill="#F57C00"
    />
    <path
      d="M19.8 12.8l2.5-4.8c.3-.6 1.1-.8 1.6-.4.2.1.3.3.4.5l3.9 15.4-8.4-10.7z"
      fill="#FFCA28"
    />
    <path
      d="M5.8 23.5l9.5 5.3c.4.2.9.2 1.3 0l11.6-5.3-4.5 2.6c-.4.2-.9.2-1.3 0L5.8 23.5z"
      fill="#FFA000"
    />
  </svg>
);

const JavaScriptIcon = () => (
  <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="4" fill="#F7DF1E" />
    <path d="M19.5 13.5v9.2c0 2.8 1.4 3.8 3.8 3.8 1.2 0 2.2-.3 2.7-.6v-3.2c-.4.2-.9.4-1.6.4-1.1 0-1.5-.5-1.5-1.7v-7.9h-3.4zm-10 7.8c.8.5 1.8.8 2.7.8 1.3 0 2.1-.6 2.1-1.6 0-1.1-.9-1.5-2.5-2.2-2.3-1-3.6-2.2-3.6-4.3 0-2.4 1.9-4.2 4.9-4.2 1.3 0 2.4.3 3.3.8l-.9 3c-.7-.4-1.5-.7-2.4-.7-1.1 0-1.6.5-1.6 1.2 0 .9.8 1.3 2.5 2 2.5 1 3.7 2.1 3.7 4.5 0 2.7-2 4.4-5.3 4.4-1.6 0-2.9-.4-3.9-1l1-3.2z" fill="#000000" />
  </svg>
);

const TypeScriptIcon = () => (
  <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="4" fill="#3178C6" />
    <path d="M19.8 14.8v10.7c0 2.8 1.4 3.8 3.8 3.8 1.2 0 2.2-.3 2.7-.6v-3.2c-.4.2-.9.4-1.6.4-1.1 0-1.5-.5-1.5-1.7v-9.4h-3.4zm-12.3 0h10.8v3.2h-3.7v11.3H11.2V18H7.5v-3.2z" fill="#FFFFFF" />
  </svg>
);

const DartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
    <path d="M6 6l10-4 10 10-14 14L6 6z" fill="#0175C2" />
    <path d="M16 2l10 10-6 6-10-10 6-6z" fill="#02569B" />
    <path d="M12 26l14-14 4 4-14 14-4-4z" fill="#29B6F6" />
    <path d="M6 6l14 14-4 4L2 10 6 6z" fill="#01579B" />
  </svg>
);

const NextjsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="15" fill="#000000" stroke="#333333" strokeWidth="1.5" />
    <path d="M21.5 10v12M10.5 10v12l11-13" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TailwindIcon = () => (
  <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
    <path d="M9 13.5C10.2 9 13.8 6.75 19.8 6.75c7.2 0 8.7 5.25 10.2 10.5.9 3.15 2.1 4.5 4.5 4.5" stroke="#38BDF8" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M1.5 22.5c1.2-4.5 4.8-6.75 10.8-6.75 7.2 0 8.7 5.25 10.2 10.5.9 3.15 2.1 4.5 4.5 4.5" stroke="#38BDF8" strokeWidth="2.4" strokeLinecap="round" />
  </svg>
);

const ViteIcon = () => (
  <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
    <path d="M28.5 4.5l-12 24L3.5 4.5 17 8l11.5-3.5z" fill="#BD34FE" />
    <path d="M21.5 3L16 14.5l-3-6.5L3.5 4.5 16 28.5 28.5 4.5 21.5 3z" fill="#41D1FF" />
    <path d="M16.5 7.5l-6 13.5 5.5-1.5-2.5 6 7-13.5-5.5 1.5 1.5-6z" fill="#FFD62E" />
  </svg>
);

const FlutterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
    <path d="M18.5 3L4 17.5l4.5 4.5L27.5 3h-9z" fill="#42A5F5" />
    <path d="M18.5 16.5L9.5 25.5l4.5 4.5 13.5-13.5h-9z" fill="#0D47A1" />
    <path d="M14 21l4.5-4.5 4.5 4.5-4.5 4.5L14 21z" fill="#29B6F6" />
  </svg>
);

const SocketIoIcon = () => (
  <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="14" fill="#010101" stroke="#00d2ff" strokeWidth="1.5" />
    <path d="M18.5 6.5L9 18h6.5l-2 8.5 10.5-12h-6.5l2-8z" fill="#FFFFFF" />
  </svg>
);

const ExpressIcon = () => (
  <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="6" fill="#1e293b" />
    <text x="16" y="21" fill="#f8fafc" fontSize="11" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">ex</text>
  </svg>
);

const OpenAiIcon = () => (
  <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
    <path d="M27.5 13.8c-.3-2.5-1.8-4.6-4.1-5.6-.6-.2-1.2-.4-1.8-.4-.4-1.7-1.4-3.2-2.8-4.2-2.3-1.6-5.3-1.7-7.7-.3-1.1.6-2 1.5-2.6 2.6-1.7.3-3.3 1.3-4.3 2.7-1.7 2.3-1.9 5.3-.6 7.8-.3.7-.5 1.5-.5 2.3 0 2.8 1.6 5.4 4.1 6.6.6.3 1.2.5 1.8.5.4 1.7 1.4 3.2 2.8 4.2 2.3 1.6 5.3 1.7 7.7.3 1.1-.6 2-1.5 2.6-2.6 1.7-.3 3.3-1.3 4.3-2.7 1.7-2.3 1.9-5.3.6-7.8.3-.7.5-1.5.5-2.4 0-.3 0-.7-.1-1z" stroke="#10b981" strokeWidth="2" strokeLinejoin="round" fill="none" />
    <path d="M16 11.5v9M11.5 13.7l7.8 4.5M11.5 18.3l7.8-4.5" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const GitIcon = () => (
  <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
    <path d="M29.5 13.8L18.2 2.5c-.7-.7-1.8-.7-2.5 0L12 6.2l3.4 3.4c.7-.2 1.6 0 2.2.6.6.6.8 1.5.6 2.2l3.3 3.3c.7-.2 1.6 0 2.2.6 1 1 1 2.5 0 3.5s-2.5 1-3.5 0c-.8-.8-.9-1.9-.4-2.8l-3-3v7.3c.3.2.5.5.7.8 1 1 1 2.5 0 3.5s-2.5 1-3.5 0-1-2.5 0-3.5c.3-.3.7-.5 1.1-.6v-7.5c-.4-.1-.8-.3-1.1-.6-.8-.8-.9-1.9-.4-2.8L10.3 7.8 2.5 15.6c-.7.7-.7 1.8 0 2.5l11.3 11.3c.7.7 1.8.7 2.5 0l13.2-13.1c.7-.7.7-1.8 0-2.5z" fill="#F05032" />
  </svg>
);

function App() {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const contactRef = useRef(null);
  const [contactVisible, setContactVisible] = useState(false);
  
  const workRef = useRef(null);
  const [workVisible, setWorkVisible] = useState(false);
  const [activeWorkTab, setActiveWorkTab] = useState("all");

  const aboutRef = useRef(null);
  const [aboutVisible, setAboutVisible] = useState(false);

  const skillsRef = useRef(null);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [activeSkillTab, setActiveSkillTab] = useState("all");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = "hello.satyam27@gmail.com";

  // Update local clock for UTC+5:30 (IST)
  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Scroll-trigger for work section
  useEffect(() => {
    const el = workRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setWorkVisible(true); },
      { threshold: 0.05, rootMargin: "0px 0px 50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Scroll-trigger for about section
  useEffect(() => {
    const el = aboutRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAboutVisible(true); },
      { threshold: 0.05, rootMargin: "0px 0px 50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Scroll-trigger for skills section
  useEffect(() => {
    const el = skillsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setSkillsVisible(true); },
      { threshold: 0.05, rootMargin: "0px 0px 50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Scroll-trigger for contact section
  useEffect(() => {
    const el = contactRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setContactVisible(true); },
      { threshold: 0.05, rootMargin: "0px 0px 50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Scrollspy & Scrolled Header listener
  useEffect(() => {
    const handleScroll = () => {
      // Toggle compact glass styling when scrolled
      setScrolled(window.scrollY > 25);

      // Determine active section
      const sections = ["hero", "work", "about", "skills", "contact"];
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
      setActiveSection(id);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // EmailJS credentials (from my-portfolio)
  const EMAILJS_SERVICE_ID  = "service_hvoqys3";
  const EMAILJS_TEMPLATE_ID = "template_guin48a";
  const EMAILJS_PUBLIC_KEY  = "ERcS2hOvR_hVjIE4G";

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailjs = window.emailjs;
      if (!emailjs) throw new Error("EmailJS not loaded");

      emailjs.init(EMAILJS_PUBLIC_KEY);

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name:    formData.name,
        from_email:   formData.email,
        message:      formData.message,
        reply_to:     formData.email,
      });

      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      console.error("EmailJS send error:", err);
      setIsSubmitting(false);
      alert("Oops! Something went wrong sending the message. Please email me directly at " + emailAddress);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Dev channels — where the code lives
  const devChannels = [
    {
      icon: <GithubIcon />,
      name: "GitHub",
      handle: "@itsSatyam27",
      href: "https://github.com/itsSatyam27",
    },
    {
      icon: <LeetCodeIcon />,
      name: "LeetCode",
      handle: "@itsSatyam27",
      href: "https://leetcode.com/u/bysatyam",
    },
    {
      icon: <LinkedinIcon />,
      name: "LinkedIn",
      handle: "itsSatyam27",
      href: "https://linkedin.com/in/itssatyam27",
    },
  ];

  // Elsewhere — social + direct mail
  const elsewhereChannels = [
    {
      icon: <InstagramIcon />,
      name: "Instagram",
      handle: "@bytebysatyam",
      href: "https://instagram.com/bytebysatyam",
    },
    {
      icon: <XTwitterIcon />,
      name: "X (Twitter)",
      handle: "@itsSatyam27",
      href: "https://x.com/itsSatyam27",
    },
  ];

  // Skills Categories derived from real projects
  const skillCategories = [
    {
      id: "languages",
      path: "~/languages",
      title: "Core Languages",
      icon: <Code2 size={18} className="icon-cyan" />,
      tag: "Foundation",
      accent: "cyan",
      skills: [
        { name: "JavaScript", type: "ES6+ / Modern", icon: <JavaScriptIcon /> },
        { name: "TypeScript", type: "Type-Safe Scale", icon: <TypeScriptIcon /> },
        { name: "Python", type: "AI & Scripting", icon: <PythonIcon /> },
        { name: "Dart", type: "Flutter SDK", icon: <DartIcon /> },
        { name: "Java", type: "OOP & DSA", icon: <JavaIcon /> },
      ],
    },
    {
      id: "frontend",
      path: "~/frontend",
      title: "Frontend Ecosystem",
      icon: <Layers size={18} className="icon-cyan" />,
      tag: "UI / Web Apps",
      accent: "cyan",
      skills: [
        { name: "React 19", type: "Component Architecture", icon: <ReactIcon /> },
        { name: "Next.js", type: "SSR & Turbopack", icon: <NextjsIcon /> },
        { name: "Tailwind CSS", type: "v4 Design Tokens", icon: <TailwindIcon /> },
        { name: "Vite", type: "Blazing Fast HMR", icon: <ViteIcon /> },
      ],
    },
    {
      id: "mobile",
      path: "~/mobile",
      title: "Mobile Development",
      icon: <Smartphone size={18} className="icon-pink" />,
      tag: "Cross-Platform",
      accent: "pink",
      skills: [
        { name: "Flutter", type: "iOS & Android", icon: <FlutterIcon /> },
        { name: "React Native", type: "Native Bridges", icon: <ReactIcon /> },
        { name: "Expo SDK", type: "Universal Mobile", icon: <Layers size={16} className="icon-pink" /> },
        { name: "Riverpod / Provider", type: "State Architecture", icon: <DartIcon /> },
      ],
    },
    {
      id: "backend",
      path: "~/backend",
      title: "Backend & Realtime",
      icon: <Server size={18} className="icon-emerald" />,
      tag: "Distributed Systems",
      accent: "emerald",
      skills: [
        { name: "Node.js", type: "Event-Driven Runtime", icon: <NodeIcon /> },
        { name: "Express.js", type: "RESTful Endpoints", icon: <ExpressIcon /> },
        { name: "Socket.IO", type: "Bi-Directional Realtime", icon: <SocketIoIcon /> },
        { name: "REST APIs", type: "Architecture & Auth", icon: <Server size={16} className="icon-emerald" /> },
      ],
    },
    {
      id: "cloud-db",
      path: "~/cloud-database",
      title: "Cloud & Databases",
      icon: <Database size={18} className="icon-amber" />,
      tag: "Data Persistence",
      accent: "amber",
      skills: [
        { name: "MongoDB", type: "Document Database", icon: <MongoIcon /> },
        { name: "Firestore", type: "NoSQL Cloud DB", icon: <FirebaseIcon /> },
        { name: "Firebase Auth", type: "Identity & Tokens", icon: <FirebaseIcon /> },
        { name: "Firebase Admin", type: "Backend SDK", icon: <FirebaseIcon /> },
      ],
    },
    {
      id: "ai-systems",
      path: "~/ai-automation",
      title: "AI & Automation",
      icon: <Cpu size={18} className="icon-purple" />,
      tag: "Intelligent Workflows",
      accent: "purple",
      skills: [
        { name: "OpenAI API", type: "GPT Copilots & Prompts", icon: <OpenAiIcon /> },
        { name: "Speech & Audio", type: "SpeechRecognition / pyttsx3", icon: <Cpu size={16} className="icon-purple" /> },
        { name: "Tesseract OCR", type: "Computer Vision", icon: <Cpu size={16} className="icon-purple" /> },
        { name: "PyAutoGUI", type: "OS Control & Scripts", icon: <Terminal size={16} className="icon-purple" /> },
      ],
    },
    {
      id: "tools",
      path: "~/tools",
      title: "Tooling & Workflow",
      icon: <Wrench size={18} className="icon-blue" />,
      tag: "Engineering Flow",
      accent: "blue",
      skills: [
        { name: "Git & GitHub", type: "Source Control", icon: <GitIcon /> },
        { name: "VS Code", type: "Primary IDE", icon: <Wrench size={16} className="icon-blue" /> },
        { name: "pnpm / npm", type: "Package Management", icon: <Wrench size={16} className="icon-blue" /> },
        { name: "Firebase CLI", type: "Deployments", icon: <FirebaseIcon /> },
      ],
    },
  ];

  // Projects dataset from real repositories
  const projects = [
    {
      id: "novyn-chat",
      num: "// 01",
      path: "~/projects/novyn-chat",
      title: "Novyn Chat",
      category: "fullstack",
      tag: "Featured Full-Stack",
      accent: "cyan",
      tagline: "Real-time messaging suite with companion Flutter mobile app",
      description:
        "A full-stack communication suite engineered with high-concurrency WebSocket channels, MongoDB persistence, Firebase authentication, and a responsive glassmorphism UI with Flutter mobile support.",
      highlights: [
        "Bi-directional Socket.IO channels with low-latency event delivery",
        "Dual client ecosystem: Modern React 19 web app + Flutter mobile client",
        "MongoDB state migrations and secure Firebase Admin backend auth",
      ],
      tech: [
        { name: "React 19", icon: <ReactIcon /> },
        { name: "Node.js", icon: <NodeIcon /> },
        { name: "Socket.IO", icon: <SocketIoIcon /> },
        { name: "MongoDB", icon: <MongoIcon /> },
        { name: "Flutter", icon: <FlutterIcon /> },
        { name: "Firebase", icon: <FirebaseIcon /> },
      ],
      githubUrl: "https://github.com/itsSatyam27",
      liveUrl: null,
    },
    {
      id: "aadhya",
      num: "// 02",
      path: "~/projects/aadhya",
      title: "Aadhya — Focus & Purpose",
      category: "fullstack",
      tag: "Next.js Web App",
      accent: "emerald",
      tagline: "Deep focus and task orchestration suite built on Next.js 16 & Turbopack",
      description:
        "An intentional productivity ecosystem designed to eliminate distraction, manage goal roadmaps, and sync real-time session metrics with Firebase Firestore and TanStack Query.",
      highlights: [
        "Next.js 16 App Router with Turbopack & React 19 Server Components",
        "TanStack Query cache management for fluid, offline-tolerant data fetching",
        "Tailwind CSS v4 tokenized dark-mode aesthetic with customizable timers",
      ],
      tech: [
        { name: "Next.js", icon: <NextjsIcon /> },
        { name: "TypeScript", icon: <TypeScriptIcon /> },
        { name: "React 19", icon: <ReactIcon /> },
        { name: "Tailwind CSS", icon: <TailwindIcon /> },
        { name: "Firebase", icon: <FirebaseIcon /> },
      ],
      githubUrl: "https://github.com/itsSatyam27",
      liveUrl: null,
    },
    {
      id: "lumi-voice-assist",
      num: "// 03",
      path: "~/projects/lumi-voice-assist",
      title: "Lumi AI Voice Assist",
      category: "ai",
      tag: "AI & Desktop Automation",
      accent: "purple",
      tagline: "Always-on voice copilot with screen vision OCR and OS automation",
      description:
        "A desktop intelligent assistant built in Python that listens for custom wake words, captures screen context via Tesseract OCR, reasons using OpenAI GPT models, and executes OS commands automatically.",
      highlights: [
        "Always-on Picovoice Porcupine hotkey & wake-word detection engine",
        "Screen capture OCR via Tesseract & Pillow for contextual visual reasoning",
        "PyAutoGUI desktop automation for hands-free workflow control",
      ],
      tech: [
        { name: "Python", icon: <PythonIcon /> },
        { name: "OpenAI GPT", icon: <OpenAiIcon /> },
        { name: "Speech & Audio", icon: <Cpu size={15} className="icon-purple" /> },
        { name: "Tesseract OCR", icon: <Cpu size={15} className="icon-purple" /> },
      ],
      githubUrl: "https://github.com/itsSatyam27",
      liveUrl: null,
    },
    {
      id: "skipq",
      num: "// 04",
      path: "~/projects/skipq",
      title: "SkipQ — Smart Mobile Queue",
      category: "mobile",
      tag: "React Native Mobile App",
      accent: "pink",
      tagline: "Cross-platform mobile queue management & location-based beacon discovery",
      description:
        "A mobile application built in React Native and Expo 54 that allows users to monitor live virtual queues, discover nearby service points via Expo Location, and get wait-time estimates.",
      highlights: [
        "Expo 54 mobile architecture running on React Native 0.81",
        "Geolocation-based queue discovery using Expo Location & Async Storage",
        "Seamless cross-platform support across Android and iOS",
      ],
      tech: [
        { name: "React Native", icon: <ReactIcon /> },
        { name: "Expo SDK", icon: <Layers size={15} className="icon-pink" /> },
        { name: "JavaScript", icon: <JavaScriptIcon /> },
      ],
      githubUrl: "https://github.com/itsSatyam27",
      liveUrl: null,
    },
    {
      id: "cv-resume-maker",
      num: "// 05",
      path: "~/projects/cv-resume-maker",
      title: "AI Resume & Portfolio Builder",
      category: "ai",
      tag: "AI Tooling",
      accent: "amber",
      tagline: "Intelligent career document generator with live GPT-4.1 Copilot scoring",
      description:
        "An AI-powered web builder that generates structured resumes and portfolios with live Markdown previews, section-by-section AI rewriting, ATS keyword optimization, and one-click PDF exports.",
      highlights: [
        "OpenAI GPT-4.1-mini proxy integration for real-time section optimization",
        "Live dual-pane editing interface with instant formatting",
        "Firebase Hosting deployment with clean vanilla JS architecture",
      ],
      tech: [
        { name: "JavaScript", icon: <JavaScriptIcon /> },
        { name: "OpenAI API", icon: <OpenAiIcon /> },
        { name: "Node.js", icon: <NodeIcon /> },
        { name: "Firebase", icon: <FirebaseIcon /> },
      ],
      githubUrl: "https://github.com/itsSatyam27",
      liveUrl: null,
    },
  ];

  const filteredProjects =
    activeWorkTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeWorkTab);

  const filteredCategories =
    activeSkillTab === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeSkillTab);

  return (
    <div className="portfolio-wrapper">
      {/* Background Ambient Glows & Grid */}
      <div className="bg-glow bg-glow-hero" />
      <div className="bg-glow bg-glow-contact" />
      <div className="bg-glow bg-glow-bottom" />
      <div className="bg-subtle-grid" />

      {/* Navigation */}
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, "hero")}
            className="logo"
          >
            SATYAM<span className="logo-dot">.</span>
          </a>

          <div className="nav-right">
            <nav className="nav-links">
              <a
                href="#work"
                onClick={(e) => scrollToSection(e, "work")}
                className={`nav-link ${activeSection === "work" ? "active" : ""}`}
              >
                WORK
                {activeSection === "work" && <span className="nav-active-glow" />}
              </a>
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, "about")}
                className={`nav-link ${activeSection === "about" ? "active" : ""}`}
              >
                ABOUT
                {activeSection === "about" && <span className="nav-active-glow" />}
              </a>
              <a
                href="#skills"
                onClick={(e) => scrollToSection(e, "skills")}
                className={`nav-link ${activeSection === "skills" ? "active" : ""}`}
              >
                SKILLS
                {activeSection === "skills" && <span className="nav-active-glow" />}
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
              >
                CONTACT
                {activeSection === "contact" && <span className="nav-active-glow" />}
              </a>
            </nav>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="btn-connect"
            >
              <span>Let's Connect</span>
              <span className="arrow">↗</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="hero-section" id="hero">
        <div className="hero-layout">
          {/* Left Column: Hero Information */}
          <div className="hero-left">
            <div className="eyebrow-container">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">
                CSE STUDENT &times; FULL-STACK DEVELOPER
              </span>
            </div>

            <h1 className="hero-title">
              <span className="title-white">SOFTWARE</span>
              <br />
              <span className="title-cyan">DEVELOPER.</span>
            </h1>

            <p className="hero-tagline">
              Building full-stack experiences where
              <br />
              engineering meets{" "}
              <span className="thoughtful-highlight">
                thoughtful design.
                <svg
                  className="handdrawn-underline"
                  viewBox="0 0 160 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 11C35 4 105 3 157 9"
                    stroke="#00d2ff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M18 13C45 10 95 9 142 13.5"
                    stroke="#38bdf8"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeOpacity="0.8"
                  />
                </svg>
              </span>
            </p>

            {/* Call To Action Buttons */}
            <div className="hero-actions">
              <a href="#work" className="btn-work">
                View My Work <span className="btn-icon">↓</span>
              </a>

              <a
                href="https://github.com/itsSatyam27"
                target="_blank"
                rel="noreferrer"
                className="btn-github"
              >
                GitHub <span className="btn-icon">↗</span>
              </a>
            </div>

            {/* Tech Stack Badges */}
            <div className="tech-stack-row">
              <div className="tech-badge">
                <ReactIcon />
                <span>React</span>
              </div>
              <div className="tech-badge">
                <NodeIcon />
                <span>Node.js</span>
              </div>
              <div className="tech-badge">
                <JavaIcon />
                <span>Java</span>
              </div>
              <div className="tech-badge">
                <PythonIcon />
                <span>Python</span>
              </div>
              <div className="tech-badge">
                <MongoIcon />
                <span>MongoDB</span>
              </div>
              <div className="tech-badge">
                <FirebaseIcon />
                <span>Firebase</span>
              </div>
            </div>

            {/* Availability Status Card */}
            <div className="availability-card">
              <div className="status-indicator">
                <span className="status-dot-ping" />
                <span className="status-dot-solid" />
              </div>
              <div className="status-text">
                <span className="status-label">Available for</span>
                <span className="status-value">Internship Opportunities</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Graphic Visual & Code Widget */}
          <div className="hero-right">
            {/* Ambient Background Circle Ring */}
            <div className="visual-circle-ring" />

            {/* Crosshair accents */}
            <div className="crosshair crosshair-top-left">+</div>
            <div className="crosshair crosshair-bottom-right">+</div>

            {/* Floating Code Snippet Card */}
            <div className="code-widget">
              <div className="code-content">
                <span className="code-kw">while</span> (
                <span className="code-var">curiosity</span>) &#123;
                <br />
                &nbsp;&nbsp;<span className="code-func">build</span>();
                <br />
                &nbsp;&nbsp;<span className="code-func">learn</span>();
                <br />
                &nbsp;&nbsp;<span className="code-func">improve</span>();
                <br />
                &#125;
              </div>
            </div>

            {/* Main Avatar / Splash Image */}
            <div className="avatar-container">
              <img
                src={heroAvatar}
                alt="Satyam - Full-Stack Software Developer"
                className="avatar-image"
              />
              <div className="avatar-dark-blend" />
            </div>
          </div>
        </div>

        {/* Right Vertical Scroll Indicator */}
        <div className="vertical-scroll">
          <span className="scroll-text">SCROLL</span>
          <div className="scroll-line-container">
            <span className="scroll-line" />
            <span className="scroll-arrow">↓</span>
          </div>
        </div>
      </main>

      {/* =========================================================================
          WORK / PROJECTS SECTION
          ========================================================================= */}
      <section className="work-section" id="work" ref={workRef}>
        {/* Ambient background particle glows */}
        <div className="work-orb work-orb-1" />
        <div className="work-orb work-orb-2" />
        <div className="work-top-stripe" />

        <div className={`work-container${workVisible ? " work-visible" : ""}`}>
          {/* Section Header */}
          <div className="section-header">
            <div className="section-header-top">
              <div className="eyebrow-container">
                <span className="eyebrow-line" />
                <span className="eyebrow-text">// 01. FEATURED PROJECTS</span>
              </div>

              <div className="live-meta-row">
                <span className="live-meta-item font-mono">
                  <Sparkles size={13} className="icon-cyan" />
                  5 Production Repositories
                </span>
              </div>
            </div>

            <h2 className="section-title">
              Crafted with passion, built for <span className="title-cyan">impact</span>.
            </h2>
            <p className="section-description">
              A curated selection of full-stack web platforms, cross-platform mobile apps,
              and AI automation tooling designed and engineered from the ground up.
            </p>
          </div>

          {/* Project Filter Tabs */}
          <div className="work-tabs-row">
            <button
              type="button"
              onClick={() => setActiveWorkTab("all")}
              className={`work-tab-btn ${activeWorkTab === "all" ? "active" : ""}`}
            >
              All Projects ({projects.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveWorkTab("fullstack")}
              className={`work-tab-btn ${activeWorkTab === "fullstack" ? "active" : ""}`}
            >
              Full-Stack ({projects.filter((p) => p.category === "fullstack").length})
            </button>
            <button
              type="button"
              onClick={() => setActiveWorkTab("mobile")}
              className={`work-tab-btn ${activeWorkTab === "mobile" ? "active" : ""}`}
            >
              Mobile Apps ({projects.filter((p) => p.category === "mobile").length})
            </button>
            <button
              type="button"
              onClick={() => setActiveWorkTab("ai")}
              className={`work-tab-btn ${activeWorkTab === "ai" ? "active" : ""}`}
            >
              AI &amp; Automation ({projects.filter((p) => p.category === "ai").length})
            </button>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className={`project-card card-${project.accent}`}
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                {/* Project Header */}
                <div className="project-card-header">
                  <div className="project-path-group">
                    <span className="project-path font-mono">{project.path}</span>
                    <span className="project-tag-pill">{project.tag}</span>
                  </div>
                  <span className="project-num font-mono">{project.num}</span>
                </div>

                {/* Title & Tagline */}
                <h3 className="project-title">{project.title}</h3>
                <p className="project-tagline">{project.tagline}</p>
                <p className="project-description">{project.description}</p>

                {/* Highlights List */}
                <div className="project-highlights">
                  {project.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="highlight-item">
                      <span className="highlight-bullet">&rsaquo;</span>
                      <span className="highlight-text">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="project-tech-row">
                  {project.tech.map((t) => (
                    <div key={t.name} className="project-tech-badge">
                      <span className="project-tech-icon">{t.icon}</span>
                      <span className="project-tech-name">{t.name}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="project-actions">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-project-action btn-project-gh"
                  >
                    <GithubIcon />
                    <span>View Repository</span>
                    <ArrowUpRight size={14} className="action-arrow" />
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-project-action btn-project-live"
                    >
                      <ExternalLink size={15} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          ABOUT SECTION
          ========================================================================= */}
      <section className="about-section" id="about" ref={aboutRef}>
        {/* Ambient background particle glows */}
        <div className="about-orb about-orb-1" />
        <div className="about-orb about-orb-2" />
        <div className="about-top-stripe" />

        <div className={`about-container${aboutVisible ? " about-visible" : ""}`}>
          {/* Section Header */}
          <div className="section-header">
            <div className="section-header-top">
              <div className="eyebrow-container">
                <span className="eyebrow-line" />
                <span className="eyebrow-text">// 02. ABOUT &amp; BACKGROUND</span>
              </div>

              <div className="live-meta-row">
                <span className="live-meta-item font-mono">
                  <BookOpen size={13} className="icon-cyan" />
                  B.Tech CSE &bull; 2024&ndash;2028
                </span>
              </div>
            </div>

            <h2 className="section-title">
              Engineering experiences from the <span className="title-cyan">ground up</span>.
            </h2>
            <p className="section-description">
              Passionate about turning complex systems into elegant, high-performance software.
              Currently pursuing Computer Science while architecting web, mobile, and AI applications.
            </p>
          </div>

          {/* About Layout Grid */}
          <div className="about-grid">
            {/* Left Column: Bio & Core Engineering Pillars */}
            <div className="about-left-col">
              {/* Bio Narrative Card */}
              <div className="about-card bio-card">
                <div className="card-top-header">
                  <span className="channel-path font-mono">~/bio</span>
                  <span className="badge-pill">The Developer</span>
                </div>
                <h3 className="about-card-title">Curiosity-driven Software Engineer</h3>
                <p className="about-paragraph">
                  I'm a 5th-semester Computer Science &amp; Engineering undergraduate at{" "}
                  <strong className="text-highlight">Aditya Silver Oak Institute of Technology</strong>.
                  My engineering journey is centered around crafting scalable web systems, cross-platform mobile apps,
                  and practical AI tooling that solve real problems.
                </p>
                <p className="about-paragraph">
                  Whether implementing WebSocket architectures for real-time messaging in{" "}
                  <span className="text-cyan font-mono">Novyn Chat</span>, building focus workflows with{" "}
                  <span className="text-cyan font-mono">Aadhya</span>, or developing voice assistant automation in{" "}
                  <span className="text-cyan font-mono">Lumi</span>, I focus on clean code, thoughtful architecture,
                  and delightful UI execution.
                </p>
              </div>

              {/* Engineering Pillars */}
              <div className="about-pillars-grid">
                <div className="pillar-card">
                  <div className="pillar-icon-box cyan-accent">
                    <Zap size={18} className="icon-cyan" />
                  </div>
                  <div className="pillar-content">
                    <h4 className="pillar-title">Performance &amp; Scale</h4>
                    <p className="pillar-desc">
                      Optimized render pipelines, clean state architectures, and robust API endpoints built to respond with low latency.
                    </p>
                  </div>
                </div>

                <div className="pillar-card">
                  <div className="pillar-icon-box pink-accent">
                    <Palette size={18} className="icon-pink" />
                  </div>
                  <div className="pillar-content">
                    <h4 className="pillar-title">Thoughtful UX Design</h4>
                    <p className="pillar-desc">
                      Crafting interfaces with depth, micro-interactions, dark glass aesthetics, and seamless responsive behaviors.
                    </p>
                  </div>
                </div>

                <div className="pillar-card">
                  <div className="pillar-icon-box purple-accent">
                    <Bot size={18} className="icon-purple" />
                  </div>
                  <div className="pillar-content">
                    <h4 className="pillar-title">Applied AI &amp; Automation</h4>
                    <p className="pillar-desc">
                      Integrating OpenAI models, OCR pipelines, speech synthesis, and OS-level automation into everyday workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Education, Milestones & Stats */}
            <div className="about-right-col">
              {/* Education Card */}
              <div className="about-card education-card">
                <div className="card-top-header">
                  <span className="channel-path font-mono">~/education</span>
                  <GraduationCap size={18} className="icon-cyan" />
                </div>
                <h3 className="about-card-title">Academic Journey</h3>

                <div className="timeline-list">
                  {/* Item 1: B.Tech */}
                  <div className="timeline-item current">
                    <div className="timeline-node">
                      <div className="node-dot" />
                    </div>
                    <div className="timeline-details">
                      <div className="timeline-badge-row">
                        <span className="year-tag font-mono">2024 &ndash; 2028</span>
                        <span className="status-tag current-tag">In Progress</span>
                      </div>
                      <h4 className="timeline-degree">Bachelor of Technology (B.Tech)</h4>
                      <p className="timeline-field">Computer Science &amp; Engineering</p>
                      <p className="timeline-inst">Aditya Silver Oak Institute of Technology</p>
                      <div className="timeline-pills">
                        <span className="tiny-pill font-mono">5th Semester</span>
                        <span className="tiny-pill font-mono">Full-Time</span>
                      </div>
                    </div>
                  </div>

                  {/* Item 2: HSC */}
                  <div className="timeline-item">
                    <div className="timeline-node">
                      <div className="node-dot node-done" />
                    </div>
                    <div className="timeline-details">
                      <div className="timeline-badge-row">
                        <span className="year-tag font-mono">HSC</span>
                        <span className="status-tag completed-tag">Completed</span>
                      </div>
                      <h4 className="timeline-degree">Higher Secondary Education</h4>
                      <p className="timeline-field">Science Stream (Physics, Chemistry, Math)</p>
                      <p className="timeline-inst">Scottish Central School</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Metrics Grid Card */}
              <div className="about-card metrics-card">
                <div className="metrics-grid">
                  <div className="metric-box">
                    <span className="metric-number">10+</span>
                    <span className="metric-label">Repositories &amp; Apps</span>
                  </div>
                  <div className="metric-box">
                    <span className="metric-number">5th</span>
                    <span className="metric-label">Semester CSE</span>
                  </div>
                  <div className="metric-box">
                    <span className="metric-number">2028</span>
                    <span className="metric-label">Graduation Year</span>
                  </div>
                  <div className="metric-box">
                    <span className="metric-number">100%</span>
                    <span className="metric-label">Commitment</span>
                  </div>
                </div>
              </div>

              {/* Resume & Connect CTA Bar */}
              <div className="about-card resume-cta-card">
                <div className="resume-cta-info">
                  <FileText size={20} className="icon-cyan" />
                  <div className="resume-cta-text">
                    <span className="resume-title">Satyam Pandey — Resume</span>
                    <span className="resume-subtitle font-mono">PDF Document &bull; Updated 2026</span>
                  </div>
                </div>
                <a
                  href="https://raw.githubusercontent.com/bysatyam/assets/main/pdfs/Satyam_Pandey_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-download-resume"
                >
                  <Download size={15} />
                  <span>Get Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SKILLS SECTION
          ========================================================================= */}
      <section className="skills-section" id="skills" ref={skillsRef}>
        {/* Ambient background particle glows */}
        <div className="skills-orb skills-orb-1" />
        <div className="skills-orb skills-orb-2" />
        <div className="skills-top-stripe" />

        <div className={`skills-container${skillsVisible ? " skills-visible" : ""}`}>
          {/* Section Header */}
          <div className="section-header">
            <div className="section-header-top">
              <div className="eyebrow-container">
                <span className="eyebrow-line" />
                <span className="eyebrow-text">// 03. SKILLS &amp; STACK</span>
              </div>

              <div className="live-meta-row">
                <span className="live-meta-item font-mono">
                  <Sparkles size={13} className="icon-cyan" />
                  Production Tested Across 10+ Repos
                </span>
              </div>
            </div>

            <h2 className="section-title">
              Technologies I <span className="title-cyan">engineer</span> with.
            </h2>
            <p className="section-description">
              A comprehensive toolkit developed through architecting full-stack web applications,
              cross-platform mobile apps in Flutter/React Native, and AI automation workflows.
            </p>
          </div>

          {/* Skill Filter Tabs */}
          <div className="skills-tabs-row">
            <button
              type="button"
              onClick={() => setActiveSkillTab("all")}
              className={`skill-tab-btn ${activeSkillTab === "all" ? "active" : ""}`}
            >
              All Skills ({skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)})
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveSkillTab(cat.id)}
                className={`skill-tab-btn ${activeSkillTab === cat.id ? "active" : ""}`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="skills-grid">
            {filteredCategories.map((category, catIdx) => (
              <div
                key={category.id}
                className={`skill-category-panel panel-${category.accent}`}
                style={{ animationDelay: `${catIdx * 70}ms` }}
              >
                <div className="category-panel-header">
                  <div className="category-path-group">
                    <span className="category-path font-mono">{category.path}</span>
                    <span className="category-tag-pill">{category.tag}</span>
                  </div>
                  <h3 className="category-title">
                    {category.icon}
                    <span>{category.title}</span>
                  </h3>
                </div>

                <div className="skills-items-grid">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={skill.name}
                      className="skill-item-card"
                      style={{ animationDelay: `${(catIdx * 70) + (sIdx * 45)}ms` }}
                    >
                      <div className="skill-icon-wrapper">
                        {skill.icon}
                      </div>
                      <div className="skill-meta">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-type font-mono">{skill.type}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONTACT SECTION
          ========================================================================= */}
      <section className="contact-section" id="contact" ref={contactRef}>
        {/* Top gradient stripe bar */}
        <div className="contact-top-stripe" />

        {/* Floating ambient particle orbs */}
        <div className="contact-orb contact-orb-1" />
        <div className="contact-orb contact-orb-2" />
        <div className="contact-orb contact-orb-3" />

        <div className={`contact-container${contactVisible ? " contact-visible" : ""}`}>
          {/* Section Header */}
          <div className="section-header">
            <div className="section-header-top">
              <div className="eyebrow-container">
                <span className="eyebrow-line" />
                <span className="eyebrow-text">// 04. GET IN TOUCH</span>
              </div>

              <div className="live-meta-row">
                <span className="live-meta-item font-mono">
                  <Clock size={13} className="icon-cyan" />
                  {currentTime || "12:00:00 PM"} IST
                </span>
                <span className="live-meta-divider" />
                <span className="live-meta-item">
                  <MapPin size={13} className="icon-emerald" />
                  India · Remote friendly
                </span>
              </div>
            </div>

            <h2 className="section-title">
              Let's build something <span className="title-cyan">extraordinary</span> together.
            </h2>
            <p className="section-description">
              Have an exciting internship opportunity, open-source collaboration, or a technical challenge?
              I'm always excited to connect and craft high-impact solutions.
            </p>
          </div>

          {/* Channels + Quick Message Layout */}
          <div className="channels-layout">
            {/* Panel 1: Dev Channels */}
            <div className="channel-panel dev-panel" style={{ animationDelay: "0ms" }}>
              <div className="channel-panel-header">
                <span className="channel-path font-mono">~/dev</span>
                <h3 className="channel-panel-title">Where the code lives</h3>
              </div>

              <div className="channel-list">
                {devChannels.map((ch, i) => (
                  <a
                    key={ch.name}
                    href={ch.href}
                    target="_blank"
                    rel="noreferrer"
                    className="channel-row"
                    style={{ animationDelay: `${i * 90}ms` }}
                  >
                    <span className="channel-row-icon dev-icon">{ch.icon}</span>
                    <span className="channel-row-meta">
                      <span className="channel-row-name">{ch.name}</span>
                      <span className="channel-row-handle">{ch.handle}</span>
                    </span>
                    <ArrowUpRight size={15} className="channel-row-arrow" />
                  </a>
                ))}
              </div>
            </div>

            {/* Panel 2: Elsewhere (social + mail) */}
            <div className="channel-panel elsewhere-panel" style={{ animationDelay: "100ms" }}>
              <div className="channel-panel-header">
                <span className="channel-path font-mono">~/elsewhere</span>
                <h3 className="channel-panel-title">Say hello anywhere</h3>
              </div>

              <div className="channel-list">
                {elsewhereChannels.map((ch, i) => (
                  <a
                    key={ch.name}
                    href={ch.href}
                    target="_blank"
                    rel="noreferrer"
                    className="channel-row"
                    style={{ animationDelay: `${i * 90}ms` }}
                  >
                    <span className="channel-row-icon elsewhere-icon">{ch.icon}</span>
                    <span className="channel-row-meta">
                      <span className="channel-row-name">{ch.name}</span>
                      <span className="channel-row-handle">{ch.handle}</span>
                    </span>
                    <ArrowUpRight size={15} className="channel-row-arrow" />
                  </a>
                ))}

                {/* Mail row — quick copy + mailto */}
                <div className="channel-row mail-row" style={{ animationDelay: "180ms" }}>
                  <span className="channel-row-icon elsewhere-icon">
                    <Mail size={18} />
                  </span>
                  <span className="channel-row-meta">
                    <span className="channel-row-name">Email</span>
                    <span className="channel-row-handle">{emailAddress}</span>
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className={`mail-copy-btn ${copied ? "copied" : ""}`}
                    title="Copy email address"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                  </button>
                  <a
                    href={`mailto:${emailAddress}?subject=Hello%20Satyam%20-%20Let's%20Connect`}
                    className="mail-open-btn"
                    title="Open in mail client"
                  >
                    <ArrowUpRight size={15} className="channel-row-arrow" />
                  </a>
                </div>
              </div>
            </div>

            {/* Panel 3: Quick Message */}
            <div className="channel-panel quick-message-panel" style={{ animationDelay: "200ms" }}>
              <div className="channel-panel-header">
                <span className="channel-path font-mono">~/quick-msg</span>
                <div className="quick-msg-title-row">
                  <h3 className="channel-panel-title">
                    <MessageSquare size={18} className="icon-cyan" />
                    Send a quick message
                  </h3>
                  <span className="live-status-pill">
                    <span className="pulsing-dot" /> Online
                  </span>
                </div>
              </div>

              {submitted ? (
                <div className="form-success-banner">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={32} className="icon-emerald" />
                  </div>
                  <h4>Message sent!</h4>
                  <p>
                    Thanks for reaching out, {formData.name || "friend"}. I'll reply to your email soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="btn-send-another"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="quick-message-form">
                  <div className="form-row-dual">
                    <div className="form-group">
                      <label htmlFor="form-name" className="input-label">
                        Name <span className="req">*</span>
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Alex Johnson"
                        className="text-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="form-email" className="input-label">
                        Email <span className="req">*</span>
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="alex@example.com"
                        className="text-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="form-message" className="input-label">
                      Message <span className="req">*</span>
                    </label>
                    <textarea
                      id="form-message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, timeline, or just say hi..."
                      className="textarea-input"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-submit-message ${isSubmitting ? "loading" : ""}`}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-loader" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send message</span>
                        <Send size={16} className="send-icon" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FOOTER
          ========================================================================= */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="#hero" className="logo">
                SATYAM<span className="logo-dot">.</span>
              </a>
              <p className="footer-brand-tagline">
                Crafting full-stack systems with clean architecture, high performance, and thoughtful user experiences.
              </p>
            </div>

            <div className="footer-nav-col">
              <span className="footer-nav-title">Navigation</span>
              <div className="footer-links">
                <a href="#hero">Home</a>
                <a href="#work">Work</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
              </div>
            </div>

            <div className="footer-nav-col">
              <span className="footer-nav-title">Socials</span>
              <div className="footer-links">
                <a href="https://github.com/itsSatyam27" target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
                <a href="https://linkedin.com/in/itssatyam27" target="_blank" rel="noreferrer">
                  LinkedIn ↗
                </a>
                <a href="https://x.com/itsSatyam27" target="_blank" rel="noreferrer">
                  Twitter / X ↗
                </a>
                <a href={`mailto:${emailAddress}`}>
                  Direct Email ↗
                </a>
              </div>
            </div>

            <div className="footer-action-col">
              <button onClick={scrollToTop} className="btn-back-to-top" title="Back to top">
                <span>Back to Top</span>
                <ArrowUp size={16} className="top-arrow-icon" />
              </button>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright-text">
              &copy; {new Date().getFullYear()} Satyam. Crafted with React, modern CSS &amp; care.
            </p>
            <div className="footer-badge">
              <span className="status-dot-solid" />
              <span>All Systems Operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;