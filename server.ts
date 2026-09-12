import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, ThinkingLevel } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// Health check endpoint
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "Indian Tent House API", timestamp: new Date().toISOString() });
});

// AI Event Setup Architect & Consultant with Multi-Tier Resilience
function generateCalculatedBlueprint(params: {
  eventType?: string;
  guestCount?: string;
  date?: string;
  location?: string;
  lawnDimensions?: string;
  budget?: string;
  theme?: string;
  specialRequirements?: string;
}): string {
  const guests = parseInt(params.guestCount || "500", 10) || 500;
  const event = params.eventType || "Grand Celebration";
  const venue = params.location || "Gorakhpur / Regional Lawn";
  const dimensions = params.lawnDimensions || "Open Ground";
  const themeDesc = params.theme || "Royal Traditional Velvet & Imperial Gold";
  const budgetDesc = params.budget || "Custom Standard Tier";
  const notes = params.specialRequirements || "Standard luxury setup with weatherproof layout";

  // Spatial math
  const sqftPerGuest = 16;
  const mainPavilionSqFt = Math.max(3000, guests * sqftPerGuest);
  const diningSqFt = Math.max(2000, Math.round(guests * 7.5));
  const totalCovered = mainPavilionSqFt + diningSqFt;
  const trussBays = Math.ceil(mainPavilionSqFt / 2200);
  const chandeliers = Math.max(2, Math.round(mainPavilionSqFt / 2000));
  const buffetIslands = Math.max(3, Math.ceil(guests / 110));
  const gensetKva = guests > 1000 ? "250 kVA Synchronized" : guests > 500 ? "125 kVA Silent DG Set" : "82.5 kVA Silent DG Set";

  return `### ⛺ 1. CANOPY & STRUCTURAL ARCHITECTURE
• **Recommended Structure**: German Aluminium Clear-Span Hangar (Engineered Alloy 6061-T6).
• **Estimated Footprint**: ~${mainPavilionSqFt.toLocaleString()} sq.ft Main Ceremonial Pavilion + ~${diningSqFt.toLocaleString()} sq.ft Connected Dining Marquee (Total: ~${totalCovered.toLocaleString()} sq.ft covered space).
• **Height Specifications**: Eave Side Height: 4.0 meters | Apex Center Height: 6.8 meters (allows majestic multi-tier hanging chandeliers).
• **Weather & Safety Integrity**: Heavy-duty 850 GSM blockout PVC German membrane, certified 100% waterproof and rated for up to 100 km/h wind shear resistance with ground helical anchors.

---

### 📐 2. SPATIAL ZONING & FLOW BLUEPRINT
• **Royal Entrance (Toran Foyer)**: 250 sq.ft ornamental floral tunnel entrance with dual-sided red carpet walkway.
• **Focal Stage & Mandap Zone**: 36ft x 24ft heavy-duty stage raised 3.5ft for unobstructed line-of-sight from any seat.
• **Guest Lounge & Banquets**: Dedicated seating zone with gold Chiavari chairs, round 8-seater banquets, and VIP royal diwan seating clusters.
• **Dining & Live Catering Wing**: ${buffetIslands} dual-sided brass buffet islands with dedicated high-velocity exhaust hoods for live tandoor and chaat stalls.

---

### ✨ 3. AESTHETIC, FABRICS & LIGHTING BLUEPRINT
• **Color & Drapery Palette**: ${themeDesc}.
• **Atmospheric Chandeliers**: ${chandeliers} grand bohemian crystal chandeliers with warm dimmable 2700K illumination.
• **Lighting Truss & Ambiance**: Octagonal trussing with 12x warm amber profile fixtures, LED par wash, and high-density micro-fairy-light canopies.

---

### 📋 4. EQUIPMENT, POWER & SAFETY SPECIFICATIONS
• **Target Venue Dimensions**: Compatible with ${dimensions} at ${venue}.
• **Power Backup Infrastructure**: ${gensetKva} with automatic mains failure (AMF) transfer switch for uninterrupted celebrations.
• **Safety & Fire Compliance**: Fire-retardant treated fabrics, illuminated emergency exit corridors, and on-site standby electrical crew.

---

### 💰 5. NEXT STEPS & EXECUTION TIMELINE
• **Budget Alignment**: Formulated for your ${budgetDesc} parameter.
• **Setup Turnaround**: 36 to 48 hours prior to event start for structural erection, decor dressing, and lighting testing.
• **Specific Notes Addressed**: "${notes}"
• **Direct Booking**: Connect directly with Indian Tent House (+91 93364 28824) to lock in calendar availability and schedule a complimentary on-site laser survey.`;
}

// AI Event Setup Architect & Consultant
app.post("/api/plan-event", async (req, res) => {
  const {
    eventType,
    guestCount,
    date,
    location,
    lawnDimensions,
    budget,
    theme,
    specialRequirements,
  } = req.body;

  const prompt = `
You are the Chief Event Setup Architect & Structural Consultant for "Indian Tent House" (Established 1991 in Gorakhpur, UP, India - renowned for grand wedding shamianas, luxury German aluminium hangars, royal mandaps, sangeet canopies, and banquet catering pavilions).

A client has requested a comprehensive, high-level architectural & layout consultation for their upcoming celebration.
Analyze their event requirements and provide an in-depth, actionable plan:

Client Event Parameters:
- Event Occasion / Type: ${eventType || "Grand Indian Wedding"}
- Expected Guests: ${guestCount || "500"}
- Event Date / Season: ${date || "Upcoming Season"}
- Venue / Location: ${location || "Outdoor Lawn / Farmhouse"}
- Venue Dimensions / Area: ${lawnDimensions || "Open Lawn approx 15,000 to 20,000 sq ft"}
- Estimated Budget Range: ${budget || "Custom / Flexible"}
- Theme & Mood Vision: ${theme || "Royal Velvet Maroon & Imperial Gold with Chandeliers"}
- Specific Client Notes: ${specialRequirements || "Needs mandap stage, dining canopy, buffet counters, and high wind protection"}

Please structure your response clearly with:
1. ⛺ Canopy & Structural Architecture (Tent types: German Aluminium Hangar vs Traditional Scalloped Shamiana, recommended dimensions, center height clearance, weatherproofing/wind-resistance).
2. 📐 Spatial Zoning & Flow Layout (Zoned sq footage for: Welcome Foyer/Toran, Main Stage/Mandap focal area, Guest Seating & Lounges, Dining & Buffet Marquee, and Service corridors).
3. ✨ Aesthetic & Lighting Blueprint (Lighting temperature, chandeliers, trusses, fairy light canopies, drape fabrics, color palette harmonizing with the theme).
4. 📋 Structural & Equipment Checklist (Poles, truss spans, fire-retardant fabric specs, flooring/carpeting, power backup/genset recommendation).
5. 💰 Itemized Cost Estimation & Timeline (Realistic budget tier estimate, setup turnaround time, and direct contact recommendation with Indian Tent House).

Keep the tone professional, authoritative, warm, and distinctly tailored to Indian hospitality and grand celebration standards.
`;

  const ai = getGeminiClient();

  if (!ai) {
    const calculatedPlan = generateCalculatedBlueprint(req.body);
    return res.json({
      success: true,
      plan: calculatedPlan,
      modelUsed: "Architectural Rule Engine",
    });
  }

  // Attempt 1: gemini-3.8-flash (official recommendation for standard text tasks)
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        systemInstruction:
          "You are an expert structural engineer and luxury event designer for Indian Tent House. Provide deep, rigorous, technically grounded, and aesthetically magnificent event setup plans.",
      },
    });

    if (response?.text) {
      return res.json({
        success: true,
        plan: response.text,
        modelUsed: "Gemini 3.8 Flash",
      });
    }
  } catch (err: any) {
    console.warn("gemini-3.8-flash attempt encountered an issue:", err?.message || err);

    // Attempt 2: gemini-3.1-flash-lite fallback
    try {
      const liteResponse = await ai.models.generateContent({
        model: "gemini-3.1-flash-lite",
        contents: prompt,
        config: {
          systemInstruction:
            "You are an expert structural engineer and luxury event designer for Indian Tent House. Provide practical, high-quality event setup blueprints.",
        },
      });

      if (liteResponse?.text) {
        return res.json({
          success: true,
          plan: liteResponse.text,
          modelUsed: "Gemini 3.1 Flash Lite",
        });
      }
    } catch (liteErr: any) {
      console.warn("gemini-3.1-flash-lite attempt also encountered an issue:", liteErr?.message || liteErr);
    }
  }

  // If external AI quotas/endpoints are exhausted or experiencing high demand,
  // seamlessly return the customized, calculated architectural blueprint
  const calculatedPlan = generateCalculatedBlueprint(req.body);
  return res.json({
    success: true,
    plan: calculatedPlan,
    modelUsed: "Architectural Engine",
  });
});

// Vite middleware & Static Serving
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Indian Tent House Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
