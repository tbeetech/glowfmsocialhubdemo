# GlowFM Neon Broadcast Experience — Super Implementation Blueprint

This blueprint merges the requested Afro-modern, neon broadcast art direction with concrete implementation steps for design, motion, audio-reactivity, prototyping, and deployment. Use it as the single source of truth while building or reviewing each feature block.

---

## 1. Visual DNA & Core System

- **Style Keywords**: Futuristic · Neon Broadcast · Afro-Modern · Kinetic Light · Interactive Frequency.
- **Typography**  
  - Display: `El Messiri` with fluid tracking (0.08–0.18 em) and neon glow text-shadow.  
  - Body/UI: `Inter` or `Poppins Medium`. Default tracking 0.02 em, line-height 1.6.  
  - Typewriter effects: use mono-subset of Inter for clarity.
- **Color Stack**  
  - Glow Orange `#FF6600` (primary vitality)  
  - Electric Navy `#001F3F` (night broadcast base)  
  - Neon Mint `#00FFD5` (energy pulse)  
  - Radiant White `#FFFFFF` (clarity)  
  - Dark Graphite `#0A0A0A` (deep contrast)  
  - Guideline: keep at least 2:1 ratio between dark base and emissive glows to preserve contrast.
- **Geometry & Lighting**  
  - Corner radius: 28 px core, 44 px for hero cards, pill buttons full radius.  
  - Shadows: combine 0 px 10 px 30 px rgba(0,0,0,0.45) with neon bloom 0 px 0 px 45 px brand color.  
  - Blurred neon edges: apply dual-layer drop-shadows plus CSS `filter: blur(18px)` on pseudo-elements.  
  - Light diffusion overlays: use translucent PNG or CSS gradient overlays (opacity 0.12–0.22).

---

## 2. Motion Master Timeline (Layered by Section)

| Section | Layer Stack | Duration | Delay | Ease | Notes |
| --- | --- | --- | --- | --- | --- |
| Hero Gradient Field | Background drift → parallax clouds → screen blend | 1500 ms | 200 ms | `cubic-bezier(0.25,1,0.5,1)` | 3 depth planes; parallax factor 0.35/0.2/0.1 |
| Logo Reveal | SVG stroke draw → neon glow pulse → reflection bloom | 1800 ms | 300 ms | Custom cubic `(.45,0,.2,1)` | Stroke-dasharray animation; bloom loops every 4 beats |
| Audio Visualizer Mesh | GSAP timeline tied to Tone.js frequencies | Continuous | n/a | linear for particles | Mesh alpha responds to mid frequencies |
| CTA Buttons | Entrance 700 ms; ripple distortion 450 ms on press | 150 ms | `easeOutExpo` | Ripple shader via Three.js plane |
| Scroll Cue | Idle spin 9 s loop; pulse every 2 s (4th beat) | n/a | `easeInOutSine` | Keep GPU-friendly (rotateZ only) |
| Live Player | Vinyl rotation 120 BPM; equalizer spikes 120 fps; text flicker 800 ms random | n/a | linear rotation, `steps(2)` flicker | Vinyl reflection syncs to bass |
| Schedule Cards | GSAP stagger 0.08 s; flip-scroll entry 900 ms; hover rotation 10° | 120 ms delay row-wise | `easeOutBack(1.3)` | Depth shadow expands 1.4× on hover |
| Ember Countdown | Ember particles 4 s lifespan; digit flip 600 ms; final burst 1200 ms | 0.2 s cascade per digit | `easeInCubic` for countdown; `easeOutQuart` burst | CTA reveal after burst with bass whoosh |
| About Story Blocks | Beacon sweep 2.4 s; mission typewriter 45 ms/char; timeline horizontal scroll 100 vh track | Delay 0.4 s after section enters | `cubic-bezier(0.55,0,0.1,1)` | Locomotive Scroll + ScrollTrigger pinned |
| Contact Signal Grid | Grid shimmer 5 s loop; input underline 350 ms; send button ripple 900 ms | 0.1 s | `easeOutQuad` | Confirmation morph 600 ms |
| Ads Carousel | Three.js orbit 10 s; shine pass 1.2 s; hover flip 750 ms | 0.25 s between tiers | `easeInOutCirc` | Reflection plane updates via env map |
| Social Motion Pack | Platform intros 2 s; outro pulses 1.2 s; hearts float 4 s | n/a | Mixed (see section 9) | Maintain 60 fps export-ready loops |

---

## 3. Hero / Homepage Implementation Notes

1. **Hero Gradient Field**  
   - Use Three.js plane with shader mixing gradient clouds (Perlin noise) and color LUT.  
   - Layer 3 canvases (background → mid → foreground) with CSS `mix-blend-mode: screen`.  
   - Parallax via `pointermove` (scaled) + ScrollTrigger pinned range 0–800 px.
2. **Logo Reveal**  
   - Export logo as SVG; define path lengths for GSAP draw SVG plugin.  
   - Sequence: `strokeDashoffset` → glow pulse (CSS filter or shader) → reflection via duplicating path, scaling Y -1, blur 6 px, fade.  
3. **Audio Visualizer Mesh**  
   - Construct plane geometry with vertex displacement; feed analyzer data (Tone.js).  
   - Map low/mid/high to amplitude, color, and particle emission count.  
4. **CTA Buttons**  
   - Base style: gradient fill, 28 px radius, neon border.  
   - Ripple/Refraction: render a shader plane aligned to button using framebuffer; on click, spawn ripple wave with decay 0.75 and distortion map.  
5. **Scroll Cue**  
   - Circular waveform SVG; idle rotate 360°/9 s; glow pulse `box-shadow` tied to beat.

---

## 4. Live Player Interface

- **3D Vinyl Disc**:  
  - Use Three.js or CSS 3D with texture map. Rotation speed: 120 BPM = 2 RPS; apply `requestAnimationFrame`.  
  - Waveform edge: shader-driven rim glow whose amplitude equals mid frequency RMS.
- **Now Streaming Text**:  
  - Tube-light flicker animation using `@keyframes flicker { 0%{opacity:.6;} 5%{opacity:1;} 10%{opacity:.2;} ... }` plus random GSAP `repeatRefresh`.  
- **Equalizer Spikes**:  
  - Map 12 bars; amplitude smoothing 0.65; update at 60 fps.  
- **Volume Slider**:  
  - Input range disguised as track with gradient trail using `linear-gradient` updated on `input` event; trailing glow via CSS custom property.  
- **Background Reflections**:  
  - Use pseudo-element with `background: linear-gradient` and animate `background-position` to mimic light ripples.  
- **Audio Link Effects**:  
  - Tone.js splits low/mid/high; create hooks to update CSS vars `--bassPulse`, `--midScale`, `--trebleShimmer`.  
  - Neon border pulse triggered on bassline (4th beat) using modulo of beat counter.

---

## 5. Program Schedule & Show Panels

- **Entry Animation**:  
  ```ts
  const showCardTimeline = gsap.timeline({
    defaults: { duration: 0.9, ease: "easeOutBack", transformOrigin: "center" },
    scrollTrigger: { trigger: ".show-grid", start: "top 80%" }
  });
  showCardTimeline.from(".show-card", {
    rotateX: -15,
    yPercent: 40,
    opacity: 0,
    stagger: 0.08
  });
  ```
- **Hover Interactions**: rotateY 10°, depth shadow from 12 px to 32 px blur, gradient sweep from Electric Navy to Glow Orange.  
- **Live Indicator**: double-layer ring where outer ring oscillates scale 1–1.18; inner radio-wave circle uses `stroke-dashoffset` animation.  
- **Dynamic Grid Motion**: GSAP ScrollTrigger pinned horizontal track to create kinetic flow on desktop; degrade to fade/slide on mobile.

---

## 6. Ember Challenge Countdown

- **Particle System**: WebGL instanced particles (200). Properties: lifespan 4 s, velocity randomized, color gradient Glow Orange → Neon Mint, motion blur via `velocity * deltaTime`.  
- **Countdown Digits**: Flip-clock using CSS 3D panels; apply metallic shader or gradient overlay; highlight reflection pass each flip.  
- **Zero Event**:  
  - Ember burst timeline: particles accelerate outward, opacity ramp 1→0.  
  - CTA button fades in using bright flare overlay; trigger low bass whoosh (preloaded audio).  
- **FX Parameters**: 80% ambient, 40% emission lights; respond to bass amplitude for glow intensity.

---

## 7. Parallax Background System

- **Layers**: Studio silhouette, skyline, frequency wave paths, drifting clouds.  
- **Technologies**: Locomotive Scroll for smooth scroll + GSAP ScrollTrigger for animations + shader pass to add depth distort.  
- **Depth Map**: Use grayscale image to shift layers along Z; map scroll position to translation `z = scroll * depthFactor`.  
- **Opacity Modulation**: gradient overlays adjust between 0.2–0.4 opacity based on scroll threshold (calc with ScrollTrigger `onUpdate`).  
- **Mouse Tracking**: integrate `lenis` or pointer listener to nudge highest depth layers ±10 px.

---

## 8. About Page — Cinematic Story Blocks

- **Intro**: Fade from black; rotating light beam (Three.js spotlight or CSS conic gradient) simulating radio beacon.  
- **Mission Text**: Typewriter effect using GSAP `TextPlugin`, 45 ms per char, with background pulse (scale 1.02).  
- **Timeline**:  
  - Horizontal scroll container; central SVG line animates via path offset.  
  - Milestone cards rise 30 px with elastic ease, connect using animated beam (SVG gradient line).  
- **Team Portraits**: apply holographic ring by duplicating portrait mask and animating radial gradient blur; hover lifts portrait 12 px.

---

## 9. Contact Page — Interactive Signal Design

- **Circuit Grid Background**: Canvas or SVG grid with glow nodes; animate current flow (stroke dash) across lines.  
- **Inputs**: Underlines animate width and glow on focus; use `:focus-visible` to trigger gradient highlight.  
- **Send Button**: On submit, trigger shader-based wave distortion that ripples through background grid; hooking into form success event.  
- **Confirmation**: Morph “Send” text into “Message Sent” with checkmark drawn via stroke animation.  
- **Map**: Use Mapbox or static map overlay; animate pulsing circles from Akure coordinates with 2.5 s loop.

---

## 10. Advertisement Page — Immersive Marketing Layer

- **Hero Motion**: Three.js scene featuring floating billboards; OrbitControls auto-rotate; env map for reflections.  
- **Ad Tiers**: Silver/Gold/Platinum cards rotate in carousel; each has reflective glass material (bloom post-processing).  
- **Hover Behavior**: Slight zoom (scale 1.08) and flip to reveal backside details with glass-reflective finish.  
- **Pricing Shine Pass**: CSS gradient highlight sweeping across numbers using `background-size: 200%` animation.  
- **Testimonials**: Slide/fade loop with reactive light sweeps triggered by audio mids if music present.  
- **CTA**: “Book a Slot” button loops neon pulse; includes subtle frequency click SFX.

---

## 11. Social Media Motion System

- **Global Look**: Animated gradient backgrounds with particle shimmer; maintain 60 fps loops.  
- **Logo Intro (2 s)**: Sequence — 3D vinyl spin (Spline export) → light streak sweep (After Effects) → static logo with beat drop audio stub.  
- **Platform Beats**:  
  - **Reels/TikTok**: Lower thirds slide in with wave distortion; comment hearts float upward (opacity fade). Outro: neon sweep + “Follow @glow991fm” flash pulse.  
  - **YouTube**: Transition wipes as moving light beams; audio waveform overlay on intros/outros; 3D mic rotation for show titles.  
  - **Facebook/X**: Animated gradient frames, subtle particle motion, hover shimmer on CTA text.  
- **Deliverables**: Provide editable templates (After Effects + Lottie + MP4) sized 1080×1920 (Reels), 1920×1080 (YouTube), 1200×675 (X).

---

## 12. Audio-Visual Sync Strategy

- **Master BPM**: 120 (2 beats/sec).  
- **Beat Alignment**: Primary pulses every 2 s (4th beat). Secondary micro interactions 0.25–0.5 s.  
- **Frequency Mapping Table**:  

| Band | Range (Hz) | Visual Mapping | Component |
| --- | --- | --- | --- |
| Bass | 20–150 | Glow intensity, border pulses | Hero CTA, player border, countdown flare |
| Low Mid | 150–600 | Mesh displacement, card scale | Hero mesh, schedule cards |
| High Mid | 600–2k | Particle emission rate | Ember particles, social sparkles |
| Treble | 2k–6k | Shimmer speed, text glints | Scroll cue, mission typewriter highlight |

- **Implementation**: Tone.js `Tone.Analyser("fft", 1024)` feeding custom hook that updates CSS vars and GSAP timelines. Ensure update throttled to 60 fps.  
- **Fallback**: When audio unavailable, play deterministic animation loop seeded to BPM.

---

## 13. Prototyping & Asset Workflow

- **Tools**:  
  - Figma/Framer for UI layout + micro-interaction mockups.  
  - Spline or Blender (EEVEE) for 3D assets; export `.glTF` + normal/roughness maps.  
  - After Effects → Lottie for light streaks, logo reveals, looping particles.  
- **Depth Grid**: Maintain 8-layer depth grid for parallax; document z-index, blur, and speed per layer.  
- **Naming Convention**: `glowfm_{section}_{element}_{state}_v01` (e.g., `glowfm_hero_logo_glow_v02`).  
- **Render Guidelines**:  
  - AE compositions at 60 fps, 32-bit color, linear workspace.  
  - Export Lottie via Bodymovin with glyphs turned off; include fallback MP4 for legacy browsers.  
  - Blender renders at 2048×2048 for hero assets; compress via Draco when exporting glTF.

---

## 14. Code Templates (Framer Motion / GSAP / Three.js)

```tsx
// Framer Motion hero entrance
const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, delay: 0.2, ease: [0.25, 1, 0.5, 1] }
  }
};
```

```ts
// GSAP stagger for program cards
gsap.from(".program-card", {
  rotateX: -12,
  y: 60,
  opacity: 0,
  stagger: 0.08,
  ease: "custom", // cubic-bezier(0.25,1,0.5,1)
  duration: 0.9
});
```

```ts
// Three.js ripple shader uniform
uniforms: {
  uTime: { value: 0 },
  uImpactPoint: { value: new Vector2(0.5, 0.5) },
  uRippleIntensity: { value: 0 },
}
// On click -> set impact point + animate intensity with gsap.to
```

```ts
// Tone.js frequency hook
export const useFrequencyData = (node: AudioNode | null) => {
  const [data, setData] = useState({ bass: 0, mid: 0, treble: 0 });
  useEffect(() => {
    if (!node) return;
    const analyser = new Tone.Analyser("fft", 1024);
    node.connect(analyser);
    const loop = () => {
      const values = analyser.getValue();
      setData({
        bass: getBand(values, 20, 150),
        mid: getBand(values, 150, 2000),
        treble: getBand(values, 2000, 6000)
      });
      requestAnimationFrame(loop);
    };
    loop();
    return () => analyser.dispose();
  }, [node]);
  return data;
};
```

---

## 15. Performance Optimization

- Lazy-load heavy shaders and Three.js scenes via dynamic imports.  
- Use `requestAnimationFrame` loops with internal throttling when tabs hidden.  
- Cap concurrent animations to <8 per frame; pause non-visible ScrollTrigger timelines.  
- Preload fonts + hero assets; ensure `<2.5 s` LCP on 4G via responsive image sizes and code splitting.  
- Provide static fallbacks (PNG/SVG) for motion-critical sections on low-end devices.

---

## 16. Deployment Roadmap

1. **Phase 1**: Hero 3D visuals + core glow motion framework.  
2. **Phase 2**: Live player + Ember countdown integration.  
3. **Phase 3**: About, Contact, Ads cinematic layers.  
4. **Phase 4**: Social media motion pack & reels templates.  
5. **Phase 5**: Full audio-visual sync QA + performance hardening.

Each phase ships with regression tests, visual QA captures, and fallback asset checks.

---

## 17. Final Exports & Recommendations

- **Assets**:  
  - 3D: `.glTF` + `.bin`, textures in `.png` or `.ktx2`.  
  - Motion: `.json` (Lottie) + `.mp4` fallback.  
  - Audio cues: `.wav` 48 kHz for editing, `.mp3` for web.  
- **Load Order**: critical CSS/JS inline for hero; lazy-load heavy scripts (`three`, `gsap/ScrollTrigger`) after first paint.  
- **QA Checklist**: verify 60 fps animations, beat sync at 120 BPM, GPU utilization <65% on MacBook Air baseline, mobile fallbacks active.

---

Use this guide in tandem with `FUTURISTIC_DESIGN_SYSTEM.md` to ensure every GlowFM touchpoint delivers the requested neon broadcast experience with audio-reactive precision.
