# Design Consultants of Tampa Bay - Brand Guidelines

## Logo Technical Specifications

### What Failed in Previous Attempts

**Critical Issues Identified:**
- **Methodology mismatch:** Generative model ≠ vector precision (99% confidence)
- **Background spec drift:** White inside frame, transparent outside unreliable
- **Letterform integrity risk:** Serif terminals, stroke contrast altered
- **Kerning/alignment drift:** Interlock overlaps (C→B, T over D) can shift
- **Shadow fidelity:** Pink-tinted elliptical shadow often becomes gray

### Correct Rebuild Process

1. **Vector Rebuild:** Manual pen tool trace in Illustrator/Figma
2. **Layer Management:** D (rear), C (mid), T (upper-front), B (front)  
3. **Color Sampling:** Exact hex values from master reference
4. **Typography:** Montserrat with precise tracking and weights
5. **Shadow Recreation:** Elliptical underlay with exact blur and opacity
6. **Export Suite:** SVG master, PDF print, PNG web, JPG social

### Brand Tokens

```
BRAND COLORS
brand.green: #A7C957  (sample from master)
brand.pink:  #E63973  (sample from master) 
brand.black: #000000
brand.white: #FFFFFF

WORDMARK TYPOGRAPHY
design_consultants:
  font: Montserrat SemiBold
  case: uppercase
  tracking: +60
  size: 1.00x

of_tampa_bay:
  font: Montserrat Medium  
  case: uppercase
  tracking: +80
  size: 0.70x
  line_gap: 0.90x cap-height

FRAME & LAYOUT
stroke: 1px #000000
inside_fill: #FFFFFF
outside: transparent
padding: +25% breathing room

SHADOW SPECIFICATION
type: elliptical underlay
color: brand.pink @ 10%
blur: 28px Gaussian
offset: x=0, y=3px
clip: inside frame
```

### Logo Construction Requirements

**Letters:** Use serif letterforms, not sans-serif. Interlace four letters:
- **D (green)** back layer, top left
- **C (green)** overlapping center  
- **T (pink)** top right, serif overlapping D
- **B (pink)** bottom front

The four letters must overlap like a classical monogram, with proper serif curves.

### Export Requirements

**Deliverables Needed:**
- dctb-logo_master.svg (vector source)
- dctb-logo_print.pdf (PDF-X/4)  
- dctb-logo_web@2048.png (transparent)
- dctb-logo_social@1200.jpg (flat white)

### Usage Guidelines

- Maintain minimum clear space around logo
- Never stretch or distort proportions
- Use approved color variations only
- Ensure proper contrast on backgrounds
- Vector format preferred for all applications

---

*This documentation serves as the complete technical brief for professional logo recreation and brand consistency.*
