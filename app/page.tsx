import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

/**
 * Animated landing page for Sherry Huang
 * - Whimsical, modern, clean style inspired by provided logo board
 * - Palette: cream + cobalt
 * - Animations: staged reveal, soft float, sparkle twinkles
 * - Tech: React + Tailwind + Framer Motion
 */

const COLORS = {
  cream: "#FBF7F0",
  cobalt: "#2E3493", // rich royal/cobalt like the reference
};

function Star({ className = "", size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M12 2c-.3 2.4-1.6 3.7-4 4 2.4.3 3.7 1.6 4 4 .3-2.4 1.6-3.7 4-4-2.4-.3-3.7-1.6-4-4Zm0 12c-.2 1.6-1.1 2.5-2.7 2.7 1.6.2 2.5 1.1 2.7 2.7.2-1.6 1.1-2.5 2.7-2.7-1.6-.2-2.5-1.1-2.7-2.7Z" />
    </svg>
  );
}

function ArcText({ text, radius = 160, className = "" }) {
  // Draw arc text (SVG textPath)
  const id = `arc-${text.replace(/\s+/g, "-").toLowerCase()}`;
  const r = radius;
  const start = { x: 120 - r, y: 120 };
  const end = { x: 120 + r, y: 120 };
  const d = `M ${start.x} ${start.y} A ${r} ${r} 0 0 1 ${end.x} ${end.y}`;
  return (
    <svg width={240 + r} height={140} viewBox={`0 0 ${240 + r} 140`} className={className}>
      <defs>
        <path id={id} d={d} />
      </defs>
      <text fill="currentColor" fontSize="16" letterSpacing="3" fontWeight={500}>
        <textPath startOffset="50%" href={`#${id}`} textAnchor="middle">
          {text}
        </textPath>
      </text>
    </svg>
  );
}

const float = {
  initial: { y: 16 },
  animate: {
    y: [16, -6, 16],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function Component() {
  const controls = useAnimationControls();

  useEffect(() => {
    const run = async () => {
      await controls.start("stage1");
      await controls.start("stage2");
      await controls.start("stage3");
    };
    run();
  }, [controls]);

  return (
    <div
      className="min-h-screen w-full overflow-hidden"
      style={{
        background: `linear-gradient(90deg, ${COLORS.cream} 50%, ${COLORS.cobalt} 50%)`,
      }}
    >
      {/* Safe area + center */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-between px-6 py-12">
        {/* Left: Full name mark */}
        <motion.div
          variants={{
            stage1: { opacity: 1, x: 0, rotate: 0 },
            hidden: { opacity: 0, x: -40, rotate: -2 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 w-[52%] text-[clamp(36px,6vw,64px)] leading-[1.05]"
          style={{ color: COLORS.cobalt }}
        >
          <div className="pointer-events-none select-none">
            <motion.div variants={float} initial="initial" animate="animate">
              <ArcText text="GRAPHIC DESIGNER" radius={160} className="-mb-4 -ml-8 opacity-80" />
            </motion.div>
            <div className="font-serif">
              <div className="flex items-end gap-3">
                <span className="font-[500] tracking-tight">Sherry</span>
                <Star size={18} className="mb-2" />
              </div>
              <div className="-mt-2">
                <span className="font-[500] tracking-tight">Huang</span>
              </div>
            </div>
          </div>

          {/* Cream side sparkles */}
          <Sparkles color={COLORS.cobalt} />
        </motion.div>

        {/* Right: Monogram (replaces letterform, shows provided SVG) */}
        <motion.div
          variants={{ stage2: { opacity: 1, x: 0, rotate: 0 }, hidden: { opacity: 0, x: 40, rotate: 2 } }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="relative z-10 w-[48%]"
        >
          <div className="flex h-[60vh] items-center justify-center rounded-2xl bg-transparent">
            {/* Place your file at public/logo-blue.svg. Filter makes it white on cobalt. */}
            <motion.img
              src="/logo-blue.svg"
              alt="SH monogram"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="w-[min(60vw,520px)] h-auto select-none"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>

          {/* Cobalt side sparkles */}
          <Sparkles color={COLORS.cream} rightSide />
        </motion.div>

        {/* Divider flourish at center (absolute within container) */}
        <motion.div
          variants={{ stage3: { scale: 1, opacity: 1 }, hidden: { scale: 0.9, opacity: 0 } }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block"
        >
          <div className="h-28 w-px" style={{ background: `linear-gradient(${COLORS.cobalt}, ${COLORS.cream})` }} />
        </motion.div>
      </div>

      {/* CTA / Scroll hint */}
      <div
        className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-2 text-sm"
        style={{ color: COLORS.cobalt }}
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="rounded-full border px-3 py-1"
          style={{ borderColor: COLORS.cobalt, backgroundColor: COLORS.cream }}
        >
          Scroll to view work
        </motion.div>
      </div>
    </div>
  );
}

function Sparkles({ color, rightSide = false }) {
  const items = [
    { x: rightSide ? "85%" : "12%", y: "6%", delay: 0.4, size: 10 },
    { x: rightSide ? "72%" : "24%", y: "26%", delay: 0.8, size: 14 },
    { x: rightSide ? "90%" : "6%", y: "42%", delay: 1.2, size: 8 },
    { x: rightSide ? "70%" : "30%", y: "70%", delay: 1.6, size: 12 },
  ];
  return (
    <div className="pointer-events-none absolute inset-0">
      {items.map((s, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: s.x, top: s.y, color }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1, 0.6, 1], opacity: [0, 1, 0.7, 1] }}
          transition={{ duration: 1.8, delay: s.delay, repeat: Infinity, repeatDelay: 1.2 }}
        >
          <Star size={s.size} />
        </motion.div>
      ))}
    </div>
  );
}

/**
 * Quick checks (lightweight "tests")
 * These are runtime asserts that help catch obvious issues during development.
 * Remove in production if desired.
 */
if (process.env.NODE_ENV !== "production") {
  console.assert(typeof COLORS.cream === "string" && COLORS.cream.startsWith("#"), "COLORS.cream should be a hex string");
  console.assert(typeof COLORS.cobalt === "string" && COLORS.cobalt.startsWith("#"), "COLORS.cobalt should be a hex string");
}

/**
 * Usage notes
 * - This component expects Tailwind CSS to be available.
 * - Fonts: To get a similar elegant serif look, include a refined serif like "Fraunces" or "Cormorant Garamond".
 *   Example (add to <head>):
 *   <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400;500;600&display=swap" rel="stylesheet" />
 * - In Tailwind config, set fontFamily.serif to ["Fraunces", "ui-serif", "Georgia", "serif"].
 * - Drop this as your app entry or a Hero section; hook scroll to projects below.
 */
