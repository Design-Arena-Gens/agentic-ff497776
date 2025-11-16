'use client';

import { useState } from 'react';

const photographyPrompts = [
  {
    title: "Golden Hour Urban Explorer",
    prompt: "A candid street photograph captured during golden hour in Tokyo's Shibuya district. A young woman in a flowing cream linen coat walks through the famous scramble crossing, her hair catching the warm 6pm sunlight. Shot with a 35mm lens at f/1.8, creating a shallow depth of field that blurs the neon signs and crowds behind her. The light creates a natural rim light effect, with long shadows stretching across the wet pavement from a recent rain. Color grading emphasizes warm amber tones contrasted with cool blue shadows. Fujifilm color science aesthetic with slightly lifted blacks and a gentle film grain texture.",
    style: "Street Photography",
    camera: "35mm f/1.8",
    lighting: "Golden Hour"
  },
  {
    title: "Misty Mountain Portrait",
    prompt: "An environmental portrait of a bearded mountaineer at dawn on a misty alpine peak. Shot with an 85mm f/1.4 lens, the subject stands in three-quarter profile gazing toward distant mountain ranges emerging from low-lying clouds. He wears a weathered brown leather jacket with visible texture and patina. Soft, diffused morning light from the left creates gentle shadows that sculpt his features. The background is layers of blue-gray mountains fading into atmospheric perspective. Shot at ISO 400 with slight underexposure for moody tones. Post-processing features desaturated colors except for warm skin tones, increased clarity on the subject while keeping the background soft and dreamlike.",
    style: "Environmental Portrait",
    camera: "85mm f/1.4",
    lighting: "Soft Dawn Light"
  },
  {
    title: "Minimalist Coastal Architecture",
    prompt: "A minimalist architectural photograph of a white modernist beach house at noon on the Amalfi Coast. Shot with a 24mm tilt-shift lens to correct perspective distortion, showing clean geometric lines of the cubic structure against a deep blue Mediterranean sky. The building features floor-to-ceiling windows reflecting the sky, with a single olive tree providing organic contrast. Harsh midday sun creates strong shadows that emphasize the building's geometric form. Shot at f/8 for maximum sharpness throughout. The composition follows rule of thirds with the building occupying the right two-thirds of the frame. Color palette is limited to whites, blues, and the silvery green of the olive tree. High contrast, crisp details, Mediterranean architectural photography style reminiscent of Julius Shulman's work.",
    style: "Architectural Photography",
    camera: "24mm Tilt-Shift f/8",
    lighting: "Harsh Midday Sun"
  }
];

export default function Home() {
  const [selectedPrompt, setSelectedPrompt] = useState(null);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px 20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <header style={{
          textAlign: 'center',
          marginBottom: '50px',
          color: 'white'
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '10px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
          }}>
            Creative Photography Prompts
          </h1>
          <p style={{
            fontSize: '1.2rem',
            opacity: '0.9'
          }}>
            Professional, realistic photography prompts for AI image generation
          </p>
        </header>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px',
          marginBottom: '40px'
        }}>
          {photographyPrompts.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedPrompt(selectedPrompt === index ? null : index)}
              style={{
                background: 'white',
                borderRadius: '15px',
                padding: '30px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                transform: selectedPrompt === index ? 'scale(1.02)' : 'scale(1)',
                border: selectedPrompt === index ? '3px solid #667eea' : '3px solid transparent'
              }}
              onMouseEnter={(e) => {
                if (selectedPrompt !== index) {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.25)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedPrompt !== index) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                }
              }}
            >
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: '15px',
                color: '#333'
              }}>
                {item.title}
              </h2>

              <div style={{
                display: 'flex',
                gap: '10px',
                marginBottom: '15px',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  background: '#667eea',
                  color: 'white',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '500'
                }}>
                  {item.style}
                </span>
                <span style={{
                  background: '#f093fb',
                  color: 'white',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '500'
                }}>
                  {item.camera}
                </span>
                <span style={{
                  background: '#4facfe',
                  color: 'white',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '500'
                }}>
                  {item.lighting}
                </span>
              </div>

              <p style={{
                fontSize: '0.95rem',
                lineHeight: '1.6',
                color: '#555',
                marginBottom: '15px'
              }}>
                {selectedPrompt === index ? item.prompt : `${item.prompt.substring(0, 150)}...`}
              </p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigator.clipboard.writeText(item.prompt);
                  alert('Prompt copied to clipboard!');
                }}
                style={{
                  background: '#667eea',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  width: '100%',
                  transition: 'background 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#5568d3'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#667eea'}
              >
                {selectedPrompt === index ? 'Copy Full Prompt' : 'Click to Expand & Copy'}
              </button>
            </div>
          ))}
        </div>

        <footer style={{
          textAlign: 'center',
          color: 'white',
          opacity: '0.8',
          marginTop: '50px'
        }}>
          <p>Click any card to view the full prompt • Click "Copy" to use in your AI image generator</p>
        </footer>
      </div>
    </div>
  );
}
