import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, Phone, Mail, Globe, Linkedin, Github, Twitter,
  Apple, Code2, Boxes, Cloud, Database, Container, Figma,
  Send, Sparkles,
} from "lucide-react";
import { Avatar3D } from "@/components/Avatar3D";
import { Modal } from "@/components/Modal";
import profileImg from "@/assets/profile.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bomkigothlor — Developer Portfolio" },
      { name: "description", content: "Portfolio dashboard of Bomkigothlor — software developer specializing in Python, JavaScript, ML and cloud infrastructure." },
      { property: "og:title", content: "Bomkigothlor — Developer Portfolio" },
      { property: "og:description", content: "Modern dashboard-style developer portfolio." },
    ],
  }),
  component: Dashboard,
});

type ModalKey = null | "about" | "skills" | "tech" | "experience" | "contact" | "projects";

const hoverable = "cursor-pointer hover:-translate-y-0.5 hover:shadow-xl transition-all";

function Dashboard() {
  const [modal, setModal] = useState<ModalKey>(null);

  return (
    <main className="min-h-screen w-full px-4 md:px-8 lg:px-12 py-8 md:py-12">
      <header className="max-w-7xl mx-auto mb-8 flex items-center justify-between fade-up">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-teal" />
          <span className="font-semibold tracking-tight">Bomkigothlor</span>
        </div>
        <span className="text-xs text-muted-foreground hidden sm:inline">Developer Portfolio</span>
      </header>

      <h1 className="sr-only">Bomkigothlor Developer Portfolio Dashboard</h1>

      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-5 auto-rows-min">
        {/* About / Profile card */}
        <section
          onClick={() => setModal("about")}
          className={`col-span-12 md:col-span-4 row-span-2 panel glow-teal p-6 flex flex-col fade-up ${hoverable}`}
        >
          <div className="relative">
            <div className="absolute -top-2 -left-2 w-24 h-24 rounded-tl-2xl rounded-br-3xl" style={{ background: "var(--teal)" }} />
            <div className="relative rounded-xl overflow-hidden border border-border aspect-[4/4.2] bg-muted">
              <img src={profileImg} alt="Bomkigothlor portrait" loading="lazy" width={768} height={896} className="w-full h-full object-cover" />
            </div>
          </div>
          <h2 className="mt-6 text-2xl font-bold tracking-tight">About Me</h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            I am Bomkigothlor — a developer crafting cohesive systems that bridge complex
            requirements and elegant design. Building with Python, JavaScript, ML and the
            cloud across the full stack.
          </p>
          <span className="mt-5 inline-flex items-center gap-2 self-start text-sm font-medium" style={{ color: "var(--teal)" }}>
            Read more <ArrowRight className="h-4 w-4" />
          </span>
        </section>

        {/* Skills */}
        <button
          onClick={() => setModal("skills")}
          className="col-span-12 md:col-span-4 panel glow-orange p-6 text-left hover:-translate-y-0.5 transition fade-up"
        >
          <h2 className="text-xl font-bold tracking-tight">Skills Block</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>— Expert in Python and JavaScript</li>
            <li>— Experienced in Machine Learning</li>
            <li>— Cloud Infrastructure (AWS &amp; GCP)</li>
            <li>— Advanced API Design</li>
            <li>— Scalable systems architecture</li>
          </ul>
        </button>

        {/* Tech Stack */}
        <button
          onClick={() => setModal("tech")}
          className="col-span-12 md:col-span-4 panel glow-orange p-6 text-left fade-up"
        >
          <h2 className="text-xl font-bold tracking-tight">Tech Stack</h2>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {[Apple, Code2, Boxes, Database, Cloud, Container, Figma, Github,
              Code2, Github, Boxes, Sparkles].map((Icon, i) => (
              <div key={i} className="icon-tile icon-tile-teal text-orange/90" style={{ color: "var(--orange)" }}>
                <Icon className="h-5 w-5" />
              </div>
            ))}
          </div>
        </button>

        {/* 3D Avatar */}
        <section className="col-span-12 md:col-span-4 panel glow-teal min-h-[360px] flex flex-col fade-up">
          <div className="flex-1">
            <Avatar3D />
          </div>
          <div className="p-5 pt-0">
            <h2 className="text-xl font-bold tracking-tight">3D Avatar</h2>
            <p className="text-xs text-muted-foreground mt-1">Move your cursor — he follows.</p>
          </div>
        </section>

        {/* Projects */}
        <section
          onClick={() => setModal("projects")}
          className={`col-span-12 md:col-span-4 panel glow-teal p-5 fade-up ${hoverable}`}
        >
          <h2 className="text-xl font-bold tracking-tight mb-4">Projects</h2>
          <div className="grid grid-cols-2 gap-3">
            <ProjectCard image={project1} title="Project Frr" accent="teal" />
            <ProjectCard image={project2} title="Mac Project" accent="orange" />
          </div>
          <div className="mt-3">
            <ProjectCardWide image={project1} title="Project Frreian" />
          </div>
        </section>

        {/* Contact Me */}
        <section
          onClick={() => setModal("contact")}
          className={`col-span-12 md:col-span-4 panel p-6 fade-up ${hoverable}`}
        >
          <h2 className="text-xl font-bold tracking-tight">Contact Me</h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div>
              <dt className="font-semibold">Phone</dt>
              <dd className="text-muted-foreground">+20 123 456789</dd>
            </div>
            <div>
              <dt className="font-semibold">Email</dt>
              <dd className="text-muted-foreground">instorm2@example.com</dd>
            </div>
            <div>
              <dt className="font-semibold">Website</dt>
              <dd className="text-muted-foreground">www.example.com</dd>
            </div>
          </dl>
          <div className="mt-5 flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
            {[
              { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
              { Icon: Github, label: "GitHub", href: "https://github.com" },
              { Icon: Twitter, label: "Twitter", href: "https://twitter.com" },
              { Icon: Mail, label: "Email", href: "mailto:instorm2@example.com" },
              { Icon: Globe, label: "Website", href: "https://example.com" },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="h-9 w-9 rounded-full border border-border bg-surface flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-teal transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <span className="mt-4 inline-flex items-center gap-2 text-sm" style={{ color: "var(--teal)" }}>
            Open contact form <ArrowRight className="h-4 w-4" />
          </span>
        </section>

        {/* Experience and Certificates */}
        <button
          onClick={() => setModal("experience")}
          className="col-span-12 md:col-span-8 panel glow-orange p-6 text-left fade-up"
        >
          <h2 className="text-xl font-bold tracking-tight">Experience and Certificates</h2>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative pl-5">
              <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-muted-foreground" />
              <p className="text-sm font-semibold">2023 – Present</p>
              <div className="relative pl-0 mt-4">
                <span className="absolute -left-5 top-1.5 h-2.5 w-2.5 rounded-full bg-muted-foreground" />
                <p className="text-sm font-semibold">Freelance Developer</p>
                <p className="text-xs text-muted-foreground">Self-Employed</p>
              </div>
            </div>
            <div className="pl-5 relative">
              <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-muted-foreground" />
              <p className="text-sm font-semibold mb-2">Certificates:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>— AWS Certified Cloud Practitioner</li>
                <li>— Certified Kubernetes Administrator (CKA)</li>
                <li>— Google Cloud Digital Leader</li>
              </ul>
            </div>
          </div>
        </button>
      </div>


      {/* Modals */}
      <Modal open={modal === "about"} onClose={() => setModal(null)} title="Extended About Me">
        <p>
          I am Bomkigothlor, a specialized software developer and technology integration
          specialist with over a decade of experience across diverse sectors including web
          applications, data integration, and systems architecture.
        </p>
        <p>
          My background includes pivotal roles where I led several key initiatives in
          real-time system monitoring and resource allocation design, contributing
          significantly to scalability and reliability.
        </p>
      </Modal>

      <Modal open={modal === "skills"} onClose={() => setModal(null)} title="In-Depth Skills" accent="orange">
        <Section title="Programming Languages">
          <li>Expert Python (Data Science, Backend with Django)</li>
          <li>Fluent JavaScript (React.js, Node.js, TypeScript)</li>
        </Section>
        <Section title="Domain Expertise">
          <li>Machine Learning (TensorFlow, PyTorch, model deployment)</li>
          <li>API Architecture (RESTful, GraphQL, scalable design)</li>
        </Section>
        <Section title="Cloud Infrastructure">
          <li>AWS (ECS, RDS, S3, IAM)</li>
          <li>Google Cloud (GKE, BigQuery, IAM)</li>
        </Section>
        <Section title="Process &amp; Tools">
          <li>CI/CD (Jenkins, GitHub Actions)</li>
          <li>Agile Development</li>
        </Section>
      </Modal>

      <Modal open={modal === "tech"} onClose={() => setModal(null)} title="Detailed Tech Stack" accent="orange">
        <Section title="Core Languages"><li>Python · JavaScript · Java</li></Section>
        <Section title="Web Development"><li>React · Node.js · Tailwind CSS · GraphQL</li></Section>
        <Section title="Cloud &amp; DevOps"><li>AWS · Google Cloud · Docker · Kubernetes · GitLab</li></Section>
        <Section title="Tools &amp; Design"><li>Figma · VS Code · Slack</li></Section>
      </Modal>

      <Modal open={modal === "experience"} onClose={() => setModal(null)} title="Detailed Experience and Certifications" accent="orange">
        <Section title="Freelance Developer (Self-Employed) | 2023 – Present">
          <li>Specialized in Python, JavaScript, and Machine Learning integration</li>
          <li>Architected and deployed complex cloud solutions on AWS &amp; Google Cloud</li>
          <li>Led several full-stack development projects from concept to launch</li>
        </Section>
        <Section title="Previous Roles">
          <li>Lead Engineer, DataCorp (2018–2023) — scalable data processing</li>
        </Section>
        <Section title="Certifications">
          <li>AWS Certified Cloud Practitioner — Valid through 2026</li>
          <li>Certified Kubernetes Administrator (CKA) — Valid through 2026</li>
          <li>Google Cloud Digital Leader — Valid through 2026</li>
          <li>Scrum Master Certified — Issuer: Scrum Alliance</li>
        </Section>
      </Modal>

      <Modal open={modal === "contact"} onClose={() => setModal(null)} title="Direct Contact &amp; Messages">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3">Quick Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3"><Phone className="h-4 w-4 mt-0.5 text-teal" style={{ color: "var(--teal)" }}/><div><p className="font-medium">Phone</p><p className="text-muted-foreground">+20 123 456789</p></div></li>
              <li className="flex items-start gap-3"><Mail className="h-4 w-4 mt-0.5 text-teal" style={{ color: "var(--teal)" }}/><div><p className="font-medium">Email</p><p className="text-muted-foreground">instorm2@example.com</p></div></li>
              <li className="flex items-start gap-3"><Globe className="h-4 w-4 mt-0.5 text-teal" style={{ color: "var(--teal)" }}/><div><p className="font-medium">Website</p><p className="text-muted-foreground">www.example.com</p></div></li>
            </ul>
          </div>
          <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); setModal(null); }}>
            <h4 className="font-semibold">Message Form</h4>
            <input className="w-full rounded-lg bg-input/40 border border-border px-3 py-2 text-sm focus:outline-none focus:border-teal" placeholder="Name" />
            <input className="w-full rounded-lg bg-input/40 border border-border px-3 py-2 text-sm focus:outline-none" placeholder="Email" type="email" />
            <textarea rows={4} className="w-full rounded-lg bg-input/40 border border-border px-3 py-2 text-sm" placeholder="Message" />
            <button className="w-full inline-flex items-center justify-center gap-2 rounded-lg border py-2 text-sm font-medium hover:bg-surface-elevated transition" style={{ borderColor: "var(--teal)", color: "var(--teal)" }}>
              <Send className="h-4 w-4" /> Send Message
            </button>
          </form>
        </div>
      </Modal>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-semibold text-foreground mb-1">{title}</h4>
      <ul className="list-disc pl-5 text-muted-foreground space-y-1">{children}</ul>
    </div>
  );
}

function ProjectCard({ image, title, accent }: { image: string; title: string; accent: "teal" | "orange" }) {
  return (
    <div className="group relative rounded-xl overflow-hidden border border-border bg-surface-elevated">
      <img src={image} alt={title} loading="lazy" className="w-full h-28 object-cover" />
      <div className="p-3 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold">{title}</p>
          <p className="text-[10px] text-muted-foreground">High-quality</p>
        </div>
        <span
          className="h-6 w-6 rounded-full flex items-center justify-center"
          style={{ background: accent === "teal" ? "var(--teal)" : "var(--orange)", color: "var(--primary-foreground)" }}
        >
          <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </div>
  );
}

function ProjectCardWide({ image, title }: { image: string; title: string }) {
  return (
    <div className="relative rounded-xl overflow-hidden border border-border bg-surface-elevated flex items-center gap-3 p-2">
      <img src={image} alt={title} loading="lazy" className="h-14 w-20 rounded-lg object-cover" />
      <div className="flex-1">
        <p className="text-xs font-semibold">{title}</p>
        <p className="text-[10px] text-muted-foreground">High-quality Project</p>
      </div>
      <span className="h-7 w-7 rounded-full flex items-center justify-center" style={{ background: "var(--teal)", color: "var(--primary-foreground)" }}>
        <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </div>
  );
}
