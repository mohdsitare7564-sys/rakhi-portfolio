import { GoogleGenAI } from '@google/genai';
import * as fs from 'fs';

const ai = new GoogleGenAI({});

async function main() {
  const images = [
    'https://mir-s3-cdn-cf.behance.net/project_modules/1400/1ec04c183895215.6565b138705d0.gif',
    'https://mir-s3-cdn-cf.behance.net/project_modules/1400/d7e70a183895215.6565b1386fa81.gif',
    'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/cf39fa183895215.6565aa9f4d45d.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/bef58c183895215.654c3c48c3f5f.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/937ecd183895215.65487991c3166.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/1908a4183895215.6582760aae777.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/a0dcfc183895215.65487991c975a.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/70eb2f183895215.65487991c6077.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/345762183895215.6565aa9f4c74f.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/b90b08183895215.6565aa9f49c5f.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/b6b1ba183895215.65487991c425b.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/1e7ed4183895215.6565aa9f4e302.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/87abcf183895215.65487991c12f4.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/832596183895215.65487991c2155.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/71d6b3183895215.6565aa9f4a9d6.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/f65c68183895215.654c3c48c32ed.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/b8acaa183895215.65487991bcabd.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/a1fa27183895215.6565aa9f4b8c7.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/60f0e7183895215.654c3c48c17da.png'
  ];

  console.log(`Starting download of ${images.length} images...`);
  const downloaded: { path: string; mimeType: string; index: number; url: string }[] = [];

  for (let i = 0; i < images.length; i++) {
    const url = images[i];
    try {
      const res = await fetch(url);
      const buffer = Buffer.from(await res.arrayBuffer());
      const ext = url.endsWith('.gif') ? 'gif' : 'png';
      const path = `/tmp/img_${i + 1}.${ext}`;
      fs.writeFileSync(path, buffer);
      downloaded.push({
        path,
        mimeType: ext === 'gif' ? 'image/gif' : 'image/png',
        index: i + 1,
        url
      });
      console.log(`Downloaded image ${i + 1} (${buffer.length} bytes)`);
    } catch (e) {
      console.error(`Failed to download ${url}:`, e);
    }
  }

  // Analyze images in batches using gemini-2.5-flash
  const results: any[] = [];
  for (const item of downloaded) {
    try {
      console.log(`Analyzing image ${item.index}...`);
      const fileBuffer = fs.readFileSync(item.path);
      const base64Data = fileBuffer.toString('base64');
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
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
                text: `You are an expert web UI/UX designer and developer analyzing an image from a Behance portfolio project titled "Content Writer | Portfolio 2023 - Scatty iw".
Analyze this image in extreme detail:
1. Exact text content, headlines, subheadings, paragraphs, dates, labels, tags, numbers. Transcribe ALL readable text verbatim.
2. Visual layout & composition: background color (exact hex if possible), typography (serif/sans-serif/display fonts, weights, sizes, alignments), layout structure (grids, columns, card layouts, stickers, badges, illustrations, doodles, UI elements).
3. Section purpose: Is it a Hero section, About Me, Table of Contents, Skills/Services, Project Case Study (which client/project?), Articles, Results/Metrics, Process, Testimonials, Contact/Footer?
4. Interactive elements implied: tabs, buttons, links, toggles, filters.
5. Specific color codes (e.g. background cream/black/orange/olive/etc, accents, border colors).
Provide a structured, complete transcript and design spec.`
              }
            ]
          }
        ]
      });

      results.push({
        index: item.index,
        url: item.url,
        analysis: response.text
      });
      console.log(`Finished analyzing image ${item.index}`);
    } catch (err) {
      console.error(`Error analyzing image ${item.index}:`, err);
    }
  }

  fs.writeFileSync('/tmp/full_portfolio_analysis.json', JSON.stringify(results, null, 2));
  console.log('Saved all analysis to /tmp/full_portfolio_analysis.json');
}

main().catch(console.error);
