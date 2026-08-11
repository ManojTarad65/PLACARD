---
name: Voltage Precision
colors:
  surface: '#121315'
  surface-dim: '#121315'
  surface-bright: '#38393b'
  surface-container-lowest: '#0d0e10'
  surface-container-low: '#1b1c1e'
  surface-container: '#1f2022'
  surface-container-high: '#292a2c'
  surface-container-highest: '#343537'
  on-surface: '#e3e2e4'
  on-surface-variant: '#d6c3af'
  inverse-surface: '#e3e2e4'
  inverse-on-surface: '#303033'
  outline: '#9e8e7c'
  outline-variant: '#514535'
  surface-tint: '#ffb956'
  primary: '#ffca85'
  on-primary: '#452b00'
  primary-container: '#f2a93b'
  on-primary-container: '#664000'
  inverse-primary: '#835400'
  secondary: '#92ccff'
  on-secondary: '#003351'
  secondary-container: '#0098e3'
  on-secondary-container: '#002c47'
  tertiary: '#a9d9ff'
  on-tertiary: '#00344e'
  tertiary-container: '#62c0ff'
  on-tertiary-container: '#004d72'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddb5'
  primary-fixed-dim: '#ffb956'
  on-primary-fixed: '#2a1800'
  on-primary-fixed-variant: '#633f00'
  secondary-fixed: '#cce5ff'
  secondary-fixed-dim: '#92ccff'
  on-secondary-fixed: '#001e31'
  on-secondary-fixed-variant: '#004b73'
  tertiary-fixed: '#cae6ff'
  tertiary-fixed-dim: '#8ccdff'
  on-tertiary-fixed: '#001e2f'
  on-tertiary-fixed-variant: '#004b6f'
  background: '#121315'
  on-background: '#e3e2e4'
  surface-variant: '#343537'
  surface-panel: '#1A1C1F'
  border-hairline: '#2A2C2F'
  text-primary: '#F5F5F3'
  text-muted: '#9B9C9E'
  brand-red: '#ED1C24'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: IBM Plex Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: IBM Plex Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
  code-spec:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  grid-margin: 24px
  gutter: 16px
  stack-sm: 4px
  stack-md: 12px
  stack-lg: 24px
  section-gap: 80px
---

## Brand & Style

The design system embodies a "Premium Industrial" aesthetic, specifically tailored for a high-end electrical manufacturer. The brand personality is authoritative, precision-engineered, and technically sophisticated. It aims to evoke a sense of reliability and safety through structured layouts, while the dark theme suggests a modern, "pro-grade" environment.

The visual style is a blend of **Modern Minimalism** and **Technical Industrialism**. It utilizes deep obsidian surfaces contrasted with high-voltage accent colors to guide user attention. The interface should feel like a high-end control panel: high-contrast, perfectly aligned, and responsive. Visual motifs should include subtle glowing states and hairline dividers that mimic technical blueprints or circuit diagrams.

## Colors

The palette is anchored by **Deep Charcoal Black (#0E0F11)**, providing a void-like background that allows technical components to pop. **Voltage Amber (#F2A93B)** serves as the primary action color, symbolizing energy and heat. **Live Wire Blue (#3DB2FF)** is reserved strictly for smart features, connectivity indicators, or digital "IoT" states.

- **Primary Background**: Use `#0E0F11` for the main canvas.
- **Surface Elevation**: Use `#1A1C1F` for cards, panels, and modals to create depth without relying on heavy shadows.
- **Interaction**: Use Amber for primary buttons and active states. Use Blue for secondary technical features.
- **Typography**: Primary headers and body text use `#F5F5F3`. Use `#9B9C9E` for labels, descriptions, and metadata to maintain a clear visual hierarchy.

## Typography

The typographic system balances geometric modernism with utilitarian legibility. **Sora** is used for headlines to provide a bold, industrial character. **IBM Plex Sans** is used for all body and technical specifications because of its neutral, engineered feel and excellent readability at small sizes.

- **Headlines**: High contrast between weights. Use Bold (700) for primary statements.
- **Body**: Regular (400) for general reading, Medium (500) for emphasis within technical specs.
- **Technical Accents**: Use the `label-caps` style for tags, categories, and small status indicators to evoke the feeling of stamped metal plates or industrial labels.

## Layout & Spacing

The design system utilizes a rigorous **12-column fluid grid** for desktop and a **4-column grid** for mobile. The layout philosophy is "Grid-Visible," meaning elements should feel aligned to a strict mathematical system, reminiscent of architectural blueprints.

- **Margins**: 24px fixed side margins for mobile; 5% flexible margins for ultra-wide displays.
- **Rhythm**: All vertical spacing must be a multiple of 4px, with 8px being the base unit.
- **Reflow**: On mobile, complex product tables should transform into stacked cards using the `surface-panel` color to maintain separation.

## Elevation & Depth

In this system, depth is conveyed through **Tonal Layering** rather than traditional drop shadows. This mimics the physical construction of industrial control panels.

- **Base Layer**: Deepest (#0E0F11).
- **Surface Layer**: Raised panels (#1A1C1F).
- **Separation**: Use 1px hairline dividers (#2A2C2F) instead of shadows for a cleaner, sharper technical aesthetic.
- **Hover States**: Instead of lifting elements, apply a subtle **Amber outer glow** (`0px 0px 12px rgba(242, 169, 59, 0.3)`) to simulate electrical current or "live" status when an interactive element is focused.

## Shapes

The shape language is "Precision Softened." While industrial designs are often sharp, this design system uses a consistent **12px (0.75rem)** radius for cards and major containers to make the interface feel premium and modern.

- **Primary Buttons**: 8px roundedness for a sturdier feel.
- **Input Fields**: 4px roundedness to maintain a technical, sharp appearance.
- **Icons**: Use linear, 2px stroke icons with slightly rounded terminals to match the font weight of IBM Plex Sans.

## Components

### Buttons
- **Primary**: Solid Voltage Amber (#F2A93B) with Black text. No shadow, but a 2px glow on hover.
- **Secondary**: Ghost style with a 1px border of `#2A2C2F`. Text in `#F5F5F3`. Hover state fills the border with Amber.

### Inputs & Fields
- Use `#1A1C1F` for input backgrounds. 
- Bottom-border only (2px) is preferred for a "meter-like" look, or a full 1px border for high-density forms.
- Focus state: Border changes to Voltage Amber with a subtle glow.

### Cards & Panels
- Background: `#1A1C1F`.
- Border: 1px hairline `#2A2C2F`.
- Corner Radius: 12px.
- Use for product specs, technical diagrams, and category selection.

### Status Indicators
- **Active**: Voltage Amber pulse.
- **Smart/IoT**: Live Wire Blue solid.
- **Error**: Brand Red (#ED1C24) solid.

### Chips & Tags
- Background: Transparent with a 1px border. 
- Typography: `label-caps`.
- Use to denote material types (Copper, Steel, Poly) or certifications (UL, CE).