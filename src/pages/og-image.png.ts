import { ImageResponse } from "@vercel/og";
import { html } from "satori-html";
import { ALL_PROJECTS } from "../data/projects";

export const prerender = false;

export async function GET() {
  const latest = ALL_PROJECTS[0];
  const subtitle = latest
    ? `Latest: ${latest.year} · ${latest.id === "after" ? "After They're Gone" : latest.id === "traveler" ? "Traveler" : latest.id === "overtale" ? "Overtale" : latest.id === "cami" ? "CAMI" : "Picnic Panic!"}`
    : "Game design portfolio";

  const markup = html(`
    <div
      style="
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 68px 72px;
        background:
          radial-gradient(circle at 10% 5%, rgba(139, 92, 246, 0.38), transparent 35%),
          radial-gradient(circle at 88% 0%, rgba(236, 72, 153, 0.32), transparent 32%),
          #0f0f14;
        color: #f5f7fb;
        font-family: Inter, Arial, sans-serif;
      "
    >
      <div style="display: flex; flex-direction: column; gap: 14px;">
        <div style="font-size: 30px; color: #c4b5fd; letter-spacing: 0.06em; text-transform: uppercase;">
          David Bao
        </div>
        <div style="font-size: 70px; font-weight: 800; line-height: 1.06;">
          Game Design Portfolio
        </div>
        <div style="font-size: 32px; color: #d7dced;">
          Storytelling · System Design · Playable Prototypes
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: flex-end;">
        <div style="display: flex; gap: 12px; color: #d7dced; font-size: 24px;">
          <span style="padding: 8px 14px; border-radius: 10px; border: 1px solid rgba(139, 92, 246, 0.55); background: rgba(139, 92, 246, 0.12);">Unity</span>
          <span style="padding: 8px 14px; border-radius: 10px; border: 1px solid rgba(139, 92, 246, 0.55); background: rgba(139, 92, 246, 0.12);">Unreal</span>
          <span style="padding: 8px 14px; border-radius: 10px; border: 1px solid rgba(139, 92, 246, 0.55); background: rgba(139, 92, 246, 0.12);">C++</span>
          <span style="padding: 8px 14px; border-radius: 10px; border: 1px solid rgba(139, 92, 246, 0.55); background: rgba(139, 92, 246, 0.12);">Java</span>
        </div>
        <div style="font-size: 24px; color: #a7b0c0;">
          ${subtitle}
        </div>
      </div>
    </div>
  `);

  return new ImageResponse(markup, {
    width: 1200,
    height: 630,
  });
}
