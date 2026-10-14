import { GoogleGenAI } from '@google/genai';
import * as fs from 'fs';

const ai = new GoogleGenAI({});

async function main() {
  const imageFiles = [
    { index: 1, path: '/tmp/img_1.gif', mimeType: 'image/gif' },
    { index: 2, path: '/tmp/img_2.gif', mimeType: 'image/gif' },
    { index: 3, path: '/tmp/img_3.png', mimeType: 'image/png' },
    { index: 4, path: '/tmp/img_4.png', mimeType: 'image/png' },
    { index: 5, path: '/tmp/img_5.png', mimeType: 'image/png' },
    { index: 6, path: '/tmp/img_6.png', mimeType: 'image/png' },
    { index: 7, path: '/tmp/img_7.png', mimeType: 'image/png' },
    { index: 8, path: '/tmp/img_8.png', mimeType: 'image/png' },
    { index: 9, path: '/tmp/img_9.png', mimeType: 'image/png' },
    { index: 10, path: '/tmp/img_10.png', mimeType: 'image/png' },
    { index: 11, path: '/tmp/img_11.png', mimeType: 'image/png' },
    { index: 12, path: '/tmp/img_12.png', mimeType: 'image/png' },
    { index: 13, path: '/tmp/img_13.png', mimeType: 'image/png' },
    { index: 14, path: '/tmp/img_14.png', mimeType: 'image/png' },
    { index: 15, path: '/tmp/img_15.png', mimeType: 'image/png' },
    { index: 16, path: '/tmp/img_16.png', mimeType: 'image/png' },
    { index: 17, path: '/tmp/img_17.png', mimeType: 'image/png' },
    { index: 18, path: '/tmp/img_18.png', mimeType: 'image/png' },
    { index: 19, path: '/tmp/img_19.png', mimeType: 'image/png' }
  ];

  const results: any[] = [];
  for (const item of imageFiles) {
    try {
      console.log(`Analyzing image ${item.index} with gemini-3.8-flash...`);
      const fileBuffer = fs.readFileSync(item.path);
      const base64Data = fileBuffer.toString('base64');
      
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: [
          {
            role: 'user',
            parts: [
              {
                inlineData: {
                  mimeType: item.mimeType,
                  data: base64Data
                }
              },
              {
                text: `You are analyzing image #${item.index} of 19 from a Behance portfolio project titled "Content Writer | Portfolio 2023 - Scatty iw".
This is a high-profile, viral content writer design showcase on Behance.
Please provide:
1. Exact transcription of ALL text in this image (titles, subheadings, paragraphs, quotes, case study texts, tags, numbers, statistics, bullet points, labels, footer). Verbatim, no paraphrasing.
2. Layout & Structure description: what does this slide represent? (e.g. Cover / Hero / Table of Contents / About Me / Education & Career Timeline / Skills & Tools / Case Study 1: Brand name & details / Case Study 2 / Copywriting Samples / Social Media Content / Articles / Testimonials / Pricing / Contact & Social Links).
3. Visual styling: Background colors (exact hex/color tone like creamy beige #fbf9f5, dark green/black, orange, pastel), typography (serif editorial headlines, grotesque sans body, retro stamps, monospace accents), graphic elements (stickers, barcode, badges, photo frames, torn paper, arrows, handwritten notes, highlighters).
4. Any specific numbers, client brand names, metrics (e.g. +300% engagement, etc.).`
              }
            ]
          }
        ]
      });

      console.log(`Finished image ${item.index}`);
      results.push({
        index: item.index,
        analysis: response.text
      });
      // Save progressively
      fs.writeFileSync('/tmp/full_portfolio_analysis.json', JSON.stringify(results, null, 2));
    } catch (err) {
      console.error(`Error analyzing image ${item.index}:`, err);
    }
  }

  console.log('ALL DONE! Saved to /tmp/full_portfolio_analysis.json');
}

main().catch(console.error);
