import { jsPDF } from 'jspdf';
import { COLLEGE_INFO, COURSES_DATA, QUICK_STATS, PLACEMENT_STATS, RECRUITERS } from '../data/mockData';

export interface BrochureOptions {
  programFilter?: 'all' | 'ug' | 'pg';
  studentName?: string;
  studentEmail?: string;
}

// Official BITM Logo SVG String matching authentic institutional mark
const BITM_LOGO_SVG = `<svg viewBox="0 0 380 205" width="1140" height="615" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Top-Left Cyan Orbital Swoosh -->
  <path d="M 22 92 C 8 52, 45 16, 120 12 C 160 10, 198 12, 215 15 C 175 14, 115 16, 62 34 C 34 44, 18 64, 22 92 Z" fill="#00A3E8" />

  <!-- Top-Left Inner Black Arc Sweeping Right -->
  <path d="M 32 98 C 22 66, 52 32, 130 24 C 215 16, 310 32, 348 68 C 300 40, 205 30, 125 35 C 70 39, 44 68, 50 98 Z" fill="#050811" />

  <!-- Outer Elliptical Black Swoosh (Wrapping Right and Bottom) -->
  <path d="M 52 98 C 65 138, 145 162, 255 158 C 322 154, 368 128, 372 96 C 368 136, 305 165, 220 168 C 130 170, 60 144, 52 98 Z" fill="#050811" />

  <!-- Right-Side Bottom Cyan Accent Swoosh -->
  <path d="M 346 92 C 356 112, 348 134, 320 148 C 344 134, 350 114, 346 92 Z" fill="#00A3E8" />

  <!-- 3D Wireframe Globe on the Left -->
  <g transform="translate(85, 96)">
    <!-- Black Spherical Body -->
    <circle cx="0" cy="0" r="37" fill="#050811" />

    <!-- Longitudinal Meridians (White Grid) -->
    <ellipse cx="0" cy="0" rx="37" ry="37" stroke="#FFFFFF" stroke-width="2.4" fill="none" />
    <ellipse cx="0" cy="0" rx="27" ry="37" stroke="#FFFFFF" stroke-width="2.2" fill="none" />
    <ellipse cx="0" cy="0" rx="14" ry="37" stroke="#FFFFFF" stroke-width="2.2" fill="none" />
    <line x1="0" y1="-37" x2="0" y2="37" stroke="#FFFFFF" stroke-width="2.4" />

    <!-- Latitudinal Parallels (White Grid) -->
    <line x1="-37" y1="0" x2="37" y2="0" stroke="#FFFFFF" stroke-width="2.4" />
    <path d="M -35 -13 C -22 -9, 22 -9, 35 -13" stroke="#FFFFFF" stroke-width="2.0" fill="none" />
    <path d="M -29 -25 C -16 -20, 16 -20, 29 -25" stroke="#FFFFFF" stroke-width="2.0" fill="none" />
    <path d="M -35 13 C -22 9, 22 9, 35 13" stroke="#FFFFFF" stroke-width="2.0" fill="none" />
    <path d="M -29 25 C -16 20, 16 20, 29 25" stroke="#FFFFFF" stroke-width="2.0" fill="none" />
  </g>

  <!-- Cyan Wordmark: "BITM" -->
  <g fill="#00A3E8">
    <!-- Stylized 'B' with characteristic left top winglet -->
    <path d="M 136 94 L 160 89 L 160 83 L 139 86 L 143 68 L 186 61 C 202 59, 212 66, 211 78 C 210 88, 201 94, 190 96 C 204 100, 211 109, 210 124 C 208 139, 194 148, 174 150 L 138 153 Z M 160 104 L 158 133 L 173 131 C 184 130, 191 123, 192 114 C 193 106, 187 101, 175 102 Z M 163 76 L 161 93 L 174 90 C 184 89, 189 83, 190 77 C 190 71, 185 67, 176 69 Z" />

    <!-- Letter 'I' -->
    <path d="M 221 64 L 242 61 L 230 142 L 209 146 Z" />

    <!-- Letter 'T' -->
    <path d="M 246 60 L 310 50 L 306 70 L 286 73 L 275 137 L 254 140 L 265 76 L 248 79 Z" />

    <!-- Letter 'M' -->
    <path d="M 310 51 L 332 47 L 342 104 L 362 42 L 382 39 L 366 123 L 346 127 L 355 76 L 334 130 L 320 132 L 316 83 L 302 135 L 286 138 Z" />
  </g>

  <!-- "ESTD : 1997" Text -->
  <text x="238" y="160" text-anchor="middle" fill="#050811" font-size="20.5" font-weight="900" font-family="Arial, 'Helvetica Neue', Helvetica, sans-serif" letter-spacing="2.8">
    ESTD : 1997
  </text>

  <!-- Small Cyan Accent Underline Swoosh below ESTD : 1997 -->
  <path d="M 190 174 C 235 174, 280 167, 308 152 C 275 163, 235 169, 190 169 Z" fill="#00A3E8" />

  <!-- Subtext: "ENGINEERING • TECHNOLOGY • MANAGEMENT" -->
  <g>
    <path id="bitmBottomArcPdf" d="M 36 142 C 95 198, 260 205, 375 152" fill="none" />
    <text fill="#050811" font-size="14.2" font-weight="800" font-family="Arial, 'Helvetica Neue', Helvetica, sans-serif" letter-spacing="1.4">
      <textPath href="#bitmBottomArcPdf" startOffset="50%" text-anchor="middle">
        ENGINEERING <tspan fill="#00A3E8">•</tspan> TECHNOLOGY <tspan fill="#00A3E8">•</tspan> MANAGEMENT
      </textPath>
    </text>
  </g>
</svg>`;

/**
 * Converts the official BITM SVG logo to a high-resolution transparent PNG Data URL
 * for crisp, uncompressed embedding in jsPDF.
 */
const getBitmLogoDataUrl = async (): Promise<string | null> => {
  if (typeof window === 'undefined') return null;

  return new Promise((resolve) => {
    try {
      const blob = new Blob([BITM_LOGO_SVG], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const img = new Image();

      img.onload = () => {
        const canvas = document.createElement('canvas');
        // Render at 3x scale (1140x615) for ultra-sharp 300+ DPI print quality
        canvas.width = 1140;
        canvas.height = 615;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          URL.revokeObjectURL(url);
          resolve(canvas.toDataURL('image/png'));
        } else {
          URL.revokeObjectURL(url);
          resolve(null);
        }
      };

      img.onerror = () => {
        URL.revokeObjectURL(url);
        // Fallback to static asset if blob fails
        const fallbackImg = new Image();
        fallbackImg.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = 760;
          canvas.height = 410;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(fallbackImg, 0, 0, canvas.width, canvas.height);
            resolve(canvas.toDataURL('image/png'));
          } else {
            resolve(null);
          }
        };
        fallbackImg.onerror = () => resolve(null);
        fallbackImg.src = '/bitm-logo.svg';
      };

      img.src = url;
    } catch {
      resolve(null);
    }
  });
};

/**
 * Generates and downloads an authentic, high-resolution multi-page PDF brochure
 * for Ballari Institute of Technology & Management (BITM).
 */
export const generateBitmBrochurePdf = async (options: BrochureOptions = { programFilter: 'all' }): Promise<void> => {
  // Pre-load high-res logo data URL
  const logoDataUrl = await getBitmLogoDataUrl();

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 210 mm
  const pageHeight = doc.internal.pageSize.getHeight(); // 297 mm
  const margin = 14;
  const contentWidth = pageWidth - margin * 2; // 182 mm

  // Color constants
  const NAVY = { r: 0, g: 31, b: 63 }; // #001f3f
  const BLUE_PRIMARY = { r: 0, g: 51, b: 102 }; // #003366
  const GOLD = { r: 245, g: 158, b: 11 }; // #f59e0b
  const LIGHT_GOLD = { r: 254, g: 243, b: 199 }; // #fef3c7
  const DARK_TEXT = { r: 15, g: 23, b: 42 }; // #0f172a
  const MUTED_TEXT = { r: 71, g: 85, b: 105 }; // #475569
  const LIGHT_BG = { r: 248, g: 250, b: 252 }; // #f8fafc
  const WHITE = { r: 255, g: 255, b: 255 };
  const BORDER_COLOR = { r: 226, g: 232, b: 240 };
  const CYAN_BITM = { r: 0, g: 162, b: 237 }; // #00A2ED official BITM cyan

  // Helper: Draw properly fitted official BITM logo inside any bounding box with exact aspect ratio
  const drawProperlyFittedLogo = (
    boxX: number,
    boxY: number,
    boxW: number,
    boxH: number,
    padding: number = 1.5,
    drawCard: boolean = true
  ) => {
    if (drawCard) {
      // White backing card with subtle golden border
      doc.setFillColor(WHITE.r, WHITE.g, WHITE.b);
      doc.roundedRect(boxX, boxY, boxW, boxH, 2, 2, 'F');
      doc.setDrawColor(GOLD.r, GOLD.g, GOLD.b);
      doc.setLineWidth(0.35);
      doc.roundedRect(boxX, boxY, boxW, boxH, 2, 2, 'S');
    }

    const innerX = boxX + padding;
    const innerY = boxY + padding;
    const innerW = Math.max(1, boxW - padding * 2);
    const innerH = Math.max(1, boxH - padding * 2);

    const logoAspect = 380 / 205; // ~1.853658

    let renderW: number;
    let renderH: number;

    if (innerW / innerH > logoAspect) {
      renderH = innerH;
      renderW = innerH * logoAspect;
    } else {
      renderW = innerW;
      renderH = innerW / logoAspect;
    }

    // Mathematically center within container
    const renderX = innerX + (innerW - renderW) / 2;
    const renderY = innerY + (innerH - renderH) / 2;

    if (logoDataUrl) {
      doc.addImage(logoDataUrl, 'PNG', renderX, renderY, renderW, renderH, undefined, 'FAST');
    } else {
      // Fallback vector card
      doc.setFillColor(NAVY.r, NAVY.g, NAVY.b);
      doc.circle(renderX + renderW * 0.25, renderY + renderH * 0.5, renderH * 0.35, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(Math.max(6, renderH * 0.6));
      doc.setTextColor(CYAN_BITM.r, CYAN_BITM.g, CYAN_BITM.b);
      doc.text('BITM', renderX + renderW * 0.48, renderY + renderH * 0.55);
      doc.setFontSize(Math.max(3.5, renderH * 0.25));
      doc.setTextColor(DARK_TEXT.r, DARK_TEXT.g, DARK_TEXT.b);
      doc.text('ESTD : 1997', renderX + renderW * 0.48, renderY + renderH * 0.82);
    }
  };

  // Helper: Draw standard Page Header (Pages 2+)
  const drawPageHeader = (pageTitle: string, pageNum: number, totalPages: number) => {
    // Top bar background
    doc.setFillColor(NAVY.r, NAVY.g, NAVY.b);
    doc.rect(0, 0, pageWidth, 18, 'F');

    // Accent line
    doc.setFillColor(GOLD.r, GOLD.g, GOLD.b);
    doc.rect(0, 18, pageWidth, 1.5, 'F');

    // Properly fitted official BITM Logo on header bar
    drawProperlyFittedLogo(margin, 2.2, 24, 13.6, 1.2, true);

    // Institution Name
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(WHITE.r, WHITE.g, WHITE.b);
    doc.text('BALLARI INSTITUTE OF TECHNOLOGY & MANAGEMENT', margin + 27, 11);

    // Section title
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(GOLD.r, GOLD.g, GOLD.b);
    doc.text(pageTitle.toUpperCase(), pageWidth - margin, 11, { align: 'right' });

    // Footer bar
    doc.setFillColor(LIGHT_BG.r, LIGHT_BG.g, LIGHT_BG.b);
    doc.rect(0, pageHeight - 12, pageWidth, 12, 'F');
    doc.setDrawColor(BORDER_COLOR.r, BORDER_COLOR.g, BORDER_COLOR.b);
    doc.line(0, pageHeight - 12, pageWidth, pageHeight - 12);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(MUTED_TEXT.r, MUTED_TEXT.g, MUTED_TEXT.b);
    doc.text(`BITM Official Course Prospectus 2026-27 • KCET: ${COLLEGE_INFO.kcetCode} • COMED-K: ${COLLEGE_INFO.comedkCode}`, margin, pageHeight - 5);
    doc.text(`Page ${pageNum} of ${totalPages}`, pageWidth - margin, pageHeight - 5, { align: 'right' });
  };

  // =========================================================================
  // PAGE 1: COVER & INSTITUTIONAL OVERVIEW
  // =========================================================================
  
  // Hero Cover Header Background
  doc.setFillColor(NAVY.r, NAVY.g, NAVY.b);
  doc.rect(0, 0, pageWidth, 90, 'F');

  // Gold Accent Top Stripe
  doc.setFillColor(GOLD.r, GOLD.g, GOLD.b);
  doc.rect(0, 0, pageWidth, 4, 'F');

  // Subtitle Badge
  doc.setFillColor(BLUE_PRIMARY.r, BLUE_PRIMARY.g, BLUE_PRIMARY.b);
  doc.roundedRect(margin, 12, 95, 7, 2, 2, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(GOLD.r, GOLD.g, GOLD.b);
  doc.text('OFFICIAL ACADEMIC PROSPECTUS • 2026 - 2027', margin + 4, 16.5);

  // Official BITM Logo Badge on Cover (Top-Right, properly fitted)
  drawProperlyFittedLogo(pageWidth - margin - 52, 10, 52, 28, 2, true);

  // College Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(WHITE.r, WHITE.g, WHITE.b);
  doc.text('BALLARI INSTITUTE OF', margin, 29);
  doc.setTextColor(GOLD.r, GOLD.g, GOLD.b);
  doc.text('TECHNOLOGY & MANAGEMENT', margin, 38);

  // Short tagline & affiliation
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(220, 230, 245);
  doc.text('Autonomous Institution affiliated to Visvesvaraya Technological University (VTU), Belagavi', margin, 46);
  doc.text('Approved by AICTE, New Delhi & Recognized by Govt. of Karnataka', margin, 52);

  // Accreditation Badges on Cover
  doc.setFillColor(WHITE.r, WHITE.g, WHITE.b);
  doc.roundedRect(margin, 59, 52, 16, 2, 2, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(BLUE_PRIMARY.r, BLUE_PRIMARY.g, BLUE_PRIMARY.b);
  doc.text("NAAC 'A+' GRADE", margin + 5, 66);
  doc.setFontSize(7.5);
  doc.setTextColor(MUTED_TEXT.r, MUTED_TEXT.g, MUTED_TEXT.b);
  doc.text('Highest Standards of Quality', margin + 5, 71);

  doc.setFillColor(WHITE.r, WHITE.g, WHITE.b);
  doc.roundedRect(margin + 56, 59, 54, 16, 2, 2, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(BLUE_PRIMARY.r, BLUE_PRIMARY.g, BLUE_PRIMARY.b);
  doc.text('NBA ACCREDITED', margin + 61, 66);
  doc.setFontSize(7.5);
  doc.setTextColor(MUTED_TEXT.r, MUTED_TEXT.g, MUTED_TEXT.b);
  doc.text('Tier-1 Engineering Programs', margin + 61, 71);

  doc.setFillColor(GOLD.r, GOLD.g, GOLD.b);
  doc.roundedRect(margin + 114, 59, 68, 16, 2, 2, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(NAVY.r, NAVY.g, NAVY.b);
  doc.text(`KCET: ${COLLEGE_INFO.kcetCode} • COMED-K: ${COLLEGE_INFO.comedkCode}`, margin + 117, 66);
  doc.setFontSize(7.5);
  doc.text(`PGCET: ${COLLEGE_INFO.pgcetCode} • Admissions Open`, margin + 117, 71);

  // Gold Separator Line
  doc.setFillColor(GOLD.r, GOLD.g, GOLD.b);
  doc.rect(0, 90, pageWidth, 2, 'F');

  // Key Institutional Statistics Grid (Cover)
  let currY = 100;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(NAVY.r, NAVY.g, NAVY.b);
  doc.text('Institutional Excellence & Milestones', margin, currY);

  currY += 6;
  const statBoxWidth = (contentWidth - 8) / 3; // 3 columns
  const statBoxHeight = 22;

  const keyStats = [
    { value: '27+ Years', label: 'Legacy of Excellence', sub: 'Estd. 1997 by Late Smt. Basavarajeswari' },
    { value: '27.7 LPA', label: 'Highest Salary Package', sub: 'Top Tier MNC Placement Offer' },
    { value: '300+', label: 'Annual Recruiters', sub: 'Infosys, Wipro, TCS, IBM, JSW' },
    { value: '6.5 LPA', label: 'Average Package', sub: 'Across Engineering & MBA Streams' },
    { value: '11+ Acres', label: 'Green Campus', sub: 'Jnana Gangotri, Ballari' },
    { value: '16,000+', label: 'Global Alumni Network', sub: 'Leaders across Tech & Industry' },
  ];

  keyStats.forEach((st, idx) => {
    const col = idx % 3;
    const row = Math.floor(idx / 3);
    const x = margin + col * (statBoxWidth + 4);
    const y = currY + row * (statBoxHeight + 4);

    doc.setFillColor(LIGHT_BG.r, LIGHT_BG.g, LIGHT_BG.b);
    doc.roundedRect(x, y, statBoxWidth, statBoxHeight, 2, 2, 'F');
    doc.setDrawColor(BORDER_COLOR.r, BORDER_COLOR.g, BORDER_COLOR.b);
    doc.roundedRect(x, y, statBoxWidth, statBoxHeight, 2, 2, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(GOLD.r, GOLD.g, GOLD.b);
    doc.text(st.value, x + 3.5, y + 6.5);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(DARK_TEXT.r, DARK_TEXT.g, DARK_TEXT.b);
    doc.text(st.label, x + 3.5, y + 12);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.8);
    doc.setTextColor(MUTED_TEXT.r, MUTED_TEXT.g, MUTED_TEXT.b);
    doc.text(st.sub, x + 3.5, y + 17.5);
  });

  // Overview / Vision Narrative
  currY += 2 * (statBoxHeight + 4) + 6;

  doc.setFillColor(LIGHT_GOLD.r, LIGHT_GOLD.g, LIGHT_GOLD.b);
  doc.roundedRect(margin, currY, contentWidth, 32, 2, 2, 'F');
  doc.setDrawColor(GOLD.r, GOLD.g, GOLD.b);
  doc.roundedRect(margin, currY, contentWidth, 32, 2, 2, 'S');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(NAVY.r, NAVY.g, NAVY.b);
  doc.text('Vision & Academic Philosophy', margin + 5, currY + 6.5);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(DARK_TEXT.r, DARK_TEXT.g, DARK_TEXT.b);
  const visionText = doc.splitTextToSize(
    'To develop into an institution of excellence in Engineering and Management education, fostering innovative research, entrepreneurial mindset, and ethical leadership to serve the socio-economic development of the nation. BITM provides state-of-the-art outcome-based education (OBE) with extensive industry internships and global corporate linkages.',
    contentWidth - 10
  );
  doc.text(visionText, margin + 5, currY + 13);

  // Salient Features Bullet Points
  currY += 38;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(NAVY.r, NAVY.g, NAVY.b);
  doc.text('Key Campus Highlights for Prospective Students', margin, currY);

  currY += 5;
  const highlights = [
    'Govt. of Karnataka K-Tech NAIN Startup Hub with seed grants up to INR 3 Lakhs per student project.',
    'Modern Digital Central Library spanning 15,000 sq.ft with Koha ILMS, 100K+ print/digital volumes and IEEE/Springer access.',
    'NVIDIA GPU Computing & AI Research Lab for high-performance deep learning and data engineering.',
    'MoUs & Training Centers: Infosys Springboard, AWS Academy, Cisco Networking Academy, Texas Instruments & JSW Steel.',
    'Jnana Gangotri Sports Complex with floodlit synthetic basketball courts, full-size cricket turf, and gymnasium.',
    'Dedicated Campus Placement Cell with pre-placement corporate readiness, soft-skills, and technical coding bootcamps.'
  ];

  highlights.forEach((hl) => {
    doc.setFillColor(GOLD.r, GOLD.g, GOLD.b);
    doc.circle(margin + 2.5, currY + 1.5, 1.2, 'F');

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(DARK_TEXT.r, DARK_TEXT.g, DARK_TEXT.b);
    const hlLines = doc.splitTextToSize(hl, contentWidth - 8);
    doc.text(hlLines, margin + 6, currY + 2.5);
    currY += hlLines.length * 4.2 + 1.5;
  });

  // Cover Footer
  doc.setFillColor(NAVY.r, NAVY.g, NAVY.b);
  doc.rect(0, pageHeight - 14, pageWidth, 14, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(GOLD.r, GOLD.g, GOLD.b);
  doc.text(`ADMISSION HELPLINE: ${COLLEGE_INFO.admissionHelpline}`, margin, pageHeight - 6);
  doc.setTextColor(WHITE.r, WHITE.g, WHITE.b);
  doc.text(`WEB: www.bitm.edu.in • EMAIL: ${COLLEGE_INFO.admissionsEmail}`, pageWidth - margin, pageHeight - 6, { align: 'right' });

  // =========================================================================
  // PAGE 2: UNDERGRADUATE (B.E.) & POSTGRADUATE (MBA/MCA) PROGRAMS
  // =========================================================================
  doc.addPage();
  drawPageHeader('Academic Programs & Intake Structure', 2, 4);

  let p2Y = 26;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(NAVY.r, NAVY.g, NAVY.b);
  doc.text('Bachelor of Engineering (B.E.) Programs', margin, p2Y);
  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(MUTED_TEXT.r, MUTED_TEXT.g, MUTED_TEXT.b);
  doc.text('4 Years (8 Semesters) • AICTE Approved • VTU Affiliated • KCET Code: E037', margin, p2Y + 4.5);

  p2Y += 10;

  // Table Header for B.E. Programs
  doc.setFillColor(BLUE_PRIMARY.r, BLUE_PRIMARY.g, BLUE_PRIMARY.b);
  doc.roundedRect(margin, p2Y, contentWidth, 7, 1, 1, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(WHITE.r, WHITE.g, WHITE.b);
  doc.text('PROGRAM / STREAM', margin + 3, p2Y + 4.8);
  doc.text('CODE', margin + 78, p2Y + 4.8);
  doc.text('INTAKE', margin + 98, p2Y + 4.8);
  doc.text('KEY FOCUS AREAS & INDUSTRY CAREERS', margin + 120, p2Y + 4.8);

  p2Y += 7.5;

  const ugCourses = COURSES_DATA.filter((c) => c.category === 'Undergraduate');
  ugCourses.forEach((c, idx) => {
    const isEven = idx % 2 === 0;
    const rowHeight = 15;

    doc.setFillColor(isEven ? LIGHT_BG.r : WHITE.r, isEven ? LIGHT_BG.g : WHITE.g, isEven ? LIGHT_BG.b : WHITE.b);
    doc.rect(margin, p2Y, contentWidth, rowHeight, 'F');
    doc.setDrawColor(BORDER_COLOR.r, BORDER_COLOR.g, BORDER_COLOR.b);
    doc.line(margin, p2Y + rowHeight, margin + contentWidth, p2Y + rowHeight);

    // Course Name
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(NAVY.r, NAVY.g, NAVY.b);
    doc.text(`B.E. ${c.name}`, margin + 3, p2Y + 5);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(MUTED_TEXT.r, MUTED_TEXT.g, MUTED_TEXT.b);
    doc.text(`Estd: ${c.established} • HOD: ${c.hodName || 'Department Head'}`, margin + 3, p2Y + 9.5);

    // Code & Intake
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(DARK_TEXT.r, DARK_TEXT.g, DARK_TEXT.b);
    doc.text(c.code, margin + 78, p2Y + 6.5);
    doc.setTextColor(GOLD.r, GOLD.g, GOLD.b);
    doc.text(`${c.intake} Seats`, margin + 98, p2Y + 6.5);

    // Career / Focus
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(DARK_TEXT.r, DARK_TEXT.g, DARK_TEXT.b);
    const careers = c.careerProspects.slice(0, 3).join(', ');
    const careerLines = doc.splitTextToSize(careers, contentWidth - 122);
    doc.text(careerLines, margin + 120, p2Y + 5);

    p2Y += rowHeight;
  });

  // Postgraduate Programs Section
  p2Y += 8;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(NAVY.r, NAVY.g, NAVY.b);
  doc.text('Postgraduate Degree Programs (MBA & MCA)', margin, p2Y);
  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(MUTED_TEXT.r, MUTED_TEXT.g, MUTED_TEXT.b);
  doc.text('2 Years (4 Semesters) • AICTE Approved • VTU Affiliated • PGCET Code: B125 / C414', margin, p2Y + 4.5);

  p2Y += 9;

  // Table Header for PG Programs
  doc.setFillColor(BLUE_PRIMARY.r, BLUE_PRIMARY.g, BLUE_PRIMARY.b);
  doc.roundedRect(margin, p2Y, contentWidth, 7, 1, 1, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(WHITE.r, WHITE.g, WHITE.b);
  doc.text('PROGRAM', margin + 3, p2Y + 4.8);
  doc.text('CODE', margin + 78, p2Y + 4.8);
  doc.text('INTAKE', margin + 98, p2Y + 4.8);
  doc.text('DUAL SPECIALIZATIONS / SKILL TRACKS', margin + 120, p2Y + 4.8);

  p2Y += 7.5;

  const pgCourses = COURSES_DATA.filter((c) => c.category === 'Postgraduate');
  pgCourses.forEach((c, idx) => {
    const isEven = idx % 2 === 0;
    const rowHeight = 15;

    doc.setFillColor(isEven ? LIGHT_BG.r : WHITE.r, isEven ? LIGHT_BG.g : WHITE.g, isEven ? LIGHT_BG.b : WHITE.b);
    doc.rect(margin, p2Y, contentWidth, rowHeight, 'F');
    doc.setDrawColor(BORDER_COLOR.r, BORDER_COLOR.g, BORDER_COLOR.b);
    doc.line(margin, p2Y + rowHeight, margin + contentWidth, p2Y + rowHeight);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(NAVY.r, NAVY.g, NAVY.b);
    doc.text(c.name, margin + 3, p2Y + 5);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(MUTED_TEXT.r, MUTED_TEXT.g, MUTED_TEXT.b);
    doc.text(`Duration: 2 Years • HOD: ${c.hodName || 'Dept Head'}`, margin + 3, p2Y + 9.5);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(DARK_TEXT.r, DARK_TEXT.g, DARK_TEXT.b);
    doc.text(c.code, margin + 78, p2Y + 6.5);
    doc.setTextColor(GOLD.r, GOLD.g, GOLD.b);
    doc.text(`${c.intake} Seats`, margin + 98, p2Y + 6.5);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(DARK_TEXT.r, DARK_TEXT.g, DARK_TEXT.b);
    const careers = c.careerProspects.slice(0, 3).join(', ');
    const careerLines = doc.splitTextToSize(careers, contentWidth - 122);
    doc.text(careerLines, margin + 120, p2Y + 5);

    p2Y += rowHeight;
  });

  // Doctoral & Research Section
  p2Y += 6;
  doc.setFillColor(LIGHT_BG.r, LIGHT_BG.g, LIGHT_BG.b);
  doc.roundedRect(margin, p2Y, contentWidth, 24, 2, 2, 'F');
  doc.setDrawColor(BORDER_COLOR.r, BORDER_COLOR.g, BORDER_COLOR.b);
  doc.roundedRect(margin, p2Y, contentWidth, 24, 2, 2, 'S');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(NAVY.r, NAVY.g, NAVY.b);
  doc.text('VTU Recognized Doctoral & Research Centers (Ph.D. / M.Sc. Engg)', margin + 4, p2Y + 5.5);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(DARK_TEXT.r, DARK_TEXT.g, DARK_TEXT.b);
  const researchText = doc.splitTextToSize(
    'BITM is a recognized VTU Research Center across 6 academic disciplines: Computer Science & Engineering, Electronics & Communication, Electrical & Electronics, Mechanical Engineering, Mathematics, and Business Administration. Faculty and research scholars have published over 500+ Scopus & IEEE indexed papers.',
    contentWidth - 8
  );
  doc.text(researchText, margin + 4, p2Y + 11.5);

  // =========================================================================
  // PAGE 3: PLACEMENT TRACK RECORD & CAMPUS FACILITIES
  // =========================================================================
  doc.addPage();
  drawPageHeader('Training, Placements & Campus Infrastructure', 3, 4);

  let p3Y = 26;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(NAVY.r, NAVY.g, NAVY.b);
  doc.text('Corporate Placements & Career Milestones', margin, p3Y);

  p3Y += 5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(MUTED_TEXT.r, MUTED_TEXT.g, MUTED_TEXT.b);
  doc.text('Over 850+ Offers generated in recent placement seasons with 300+ visiting tech conglomerates.', margin, p3Y);

  p3Y += 7;

  // Placement Stat Cards
  const pCards = [
    { label: 'Highest Salary Offered', val: '27.7 LPA', sub: 'Top MNC Product Engineering' },
    { label: 'Average CTC Package', val: '6.5 LPA', sub: 'Consistent across streams' },
    { label: 'Total Job Offers', val: '850+ Offers', sub: 'Single & Multiple offers' },
    { label: 'Corporate Recruiters', val: '300+ MNCs', sub: 'Tier-1 IT & Core Engineering' }
  ];

  const pCardW = (contentWidth - 6) / 4;
  pCards.forEach((pc, idx) => {
    const x = margin + idx * (pCardW + 2);
    doc.setFillColor(NAVY.r, NAVY.g, NAVY.b);
    doc.roundedRect(x, p3Y, pCardW, 20, 2, 2, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(GOLD.r, GOLD.g, GOLD.b);
    doc.text(pc.val, x + 3, p3Y + 6.5);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.setTextColor(WHITE.r, WHITE.g, WHITE.b);
    doc.text(pc.label, x + 3, p3Y + 11.5);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6);
    doc.setTextColor(200, 215, 235);
    doc.text(pc.sub, x + 3, p3Y + 16.5);
  });

  p3Y += 25;

  // Top Recruiters Grid List
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(NAVY.r, NAVY.g, NAVY.b);
  doc.text('Key Corporate Recruiters & Industry Partners', margin, p3Y);

  p3Y += 4.5;
  const recruiterNames = RECRUITERS.map((r) => `${r.name} (${r.tier || 'MNC'})`);
  const rCols = 3;
  const rRows = Math.ceil(recruiterNames.length / rCols);
  const rColW = contentWidth / rCols;

  doc.setFillColor(LIGHT_BG.r, LIGHT_BG.g, LIGHT_BG.b);
  doc.roundedRect(margin, p3Y, contentWidth, rRows * 5.5 + 4, 2, 2, 'F');
  doc.setDrawColor(BORDER_COLOR.r, BORDER_COLOR.g, BORDER_COLOR.b);
  doc.roundedRect(margin, p3Y, contentWidth, rRows * 5.5 + 4, 2, 2, 'S');

  recruiterNames.forEach((rn, i) => {
    const col = i % rCols;
    const row = Math.floor(i / rCols);
    const x = margin + 4 + col * rColW;
    const y = p3Y + 4.5 + row * 5.5;

    doc.setFillColor(GOLD.r, GOLD.g, GOLD.b);
    doc.circle(x, y - 1, 0.9, 'F');

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(DARK_TEXT.r, DARK_TEXT.g, DARK_TEXT.b);
    doc.text(rn, x + 3, y);
  });

  p3Y += rRows * 5.5 + 10;

  // Campus Facilities & Infrastructure
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(NAVY.r, NAVY.g, NAVY.b);
  doc.text('World-Class Campus Infrastructure (11+ Acres)', margin, p3Y);

  p3Y += 5;
  const facilityHighlights = [
    { name: 'Central Digital Library', detail: '15,000 sq.ft area, 100K+ print/digital books, IEEE/Springer, RFID kiosks.' },
    { name: 'GPU & AI Computing Labs', detail: 'NVIDIA RTX workstations, Gigabit fiber, high-throughput model training rigs.' },
    { name: 'K-Tech NAIN Startup Hub', detail: 'Govt. of Karnataka incubator with 3D printers, laser cutters & seed grants.' },
    { name: 'Sir M.V. Grand Auditorium', detail: '800+ seater acoustically tuned auditorium with Dolby line-array sound.' },
    { name: 'Jnana Gangotri Sports Arena', detail: 'Floodlit basketball courts, cricket pitch, badminton courts, multi-gym.' },
    { name: 'Hostels & Campus Dining', detail: 'Dedicated on-campus boys & girls hostels with Wi-Fi, RO water & security.' },
    { name: 'Fleet Transportation', detail: '15+ college buses connecting Ballari, Toranagallu, Siruguppa & Hospete.' },
    { name: 'Green Energy Campus', detail: '250 kW clean rooftop solar power plant offsetting 60%+ campus carbon footprint.' },
  ];

  const facW = (contentWidth - 4) / 2;
  facilityHighlights.forEach((fh, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = margin + col * (facW + 4);
    const y = p3Y + row * 15;

    doc.setFillColor(LIGHT_BG.r, LIGHT_BG.g, LIGHT_BG.b);
    doc.roundedRect(x, y, facW, 13, 1.5, 1.5, 'F');
    doc.setDrawColor(BORDER_COLOR.r, BORDER_COLOR.g, BORDER_COLOR.b);
    doc.roundedRect(x, y, facW, 13, 1.5, 1.5, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(BLUE_PRIMARY.r, BLUE_PRIMARY.g, BLUE_PRIMARY.b);
    doc.text(fh.name, x + 3, y + 4.5);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.8);
    doc.setTextColor(MUTED_TEXT.r, MUTED_TEXT.g, MUTED_TEXT.b);
    const facLines = doc.splitTextToSize(fh.detail, facW - 6);
    doc.text(facLines, x + 3, y + 8.5);
  });

  // =========================================================================
  // PAGE 4: ADMISSIONS, ELIGIBILITY, SCHOLARSHIPS & CONTACT DIRECTORY
  // =========================================================================
  doc.addPage();
  drawPageHeader('Admissions, Eligibility & Contact Directory', 4, 4);

  let p4Y = 26;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(NAVY.r, NAVY.g, NAVY.b);
  doc.text('Admissions 2026-27: Eligibility & Quotas', margin, p4Y);

  p4Y += 6;

  // Eligibility Info Box
  doc.setFillColor(LIGHT_BG.r, LIGHT_BG.g, LIGHT_BG.b);
  doc.roundedRect(margin, p4Y, contentWidth, 38, 2, 2, 'F');
  doc.setDrawColor(BORDER_COLOR.r, BORDER_COLOR.g, BORDER_COLOR.b);
  doc.roundedRect(margin, p4Y, contentWidth, 38, 2, 2, 'S');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(NAVY.r, NAVY.g, NAVY.b);
  doc.text('1. Bachelor of Engineering (B.E. 1st Year / Lateral Entry)', margin + 4, p4Y + 5.5);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(DARK_TEXT.r, DARK_TEXT.g, DARK_TEXT.b);
  const beElig = doc.splitTextToSize(
    '• Passed 10+2 / 2nd PUC with Physics & Mathematics as compulsory subjects along with Chemistry / Bio-Technology / Biology / Computer Science.\n• Minimum 45% aggregate marks in PCM for General Category (40% for SC/ST/OBC Karnataka Candidates).\n• Admission through KCET (Karnataka Examination Authority - Code: E037), COMED-K (Code: E025), or Institutional Management Quota.\n• Diploma holders are eligible for Lateral Entry directly into 3rd Semester (2nd Year B.E.) via DCET.',
    contentWidth - 8
  );
  doc.text(beElig, margin + 4, p4Y + 11.5);

  p4Y += 42;

  // PG Eligibility
  doc.setFillColor(LIGHT_BG.r, LIGHT_BG.g, LIGHT_BG.b);
  doc.roundedRect(margin, p4Y, contentWidth, 24, 2, 2, 'F');
  doc.setDrawColor(BORDER_COLOR.r, BORDER_COLOR.g, BORDER_COLOR.b);
  doc.roundedRect(margin, p4Y, contentWidth, 24, 2, 2, 'S');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(NAVY.r, NAVY.g, NAVY.b);
  doc.text('2. Master of Business Administration (MBA) & Master of Computer Applications (MCA)', margin + 4, p4Y + 5.5);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(DARK_TEXT.r, DARK_TEXT.g, DARK_TEXT.b);
  const pgElig = doc.splitTextToSize(
    '• Recognized Bachelor\'s degree of minimum 3-Year duration with at least 50% aggregate marks (45% for Karnataka SC/ST/OBC).\n• Valid score in Karnataka PGCET (Code: B125 / C414), KMAT, CMAT, or MAT.\n• For MCA: Mathematics / Statistics / Computer Programming at 10+2 or Degree level is mandatory.',
    contentWidth - 8
  );
  doc.text(pgElig, margin + 4, p4Y + 11.5);

  p4Y += 28;

  // Documents Required Checklist
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(NAVY.r, NAVY.g, NAVY.b);
  doc.text('Mandatory Verification Documents for Admission', margin, p4Y);

  p4Y += 4.5;
  const docsList = [
    'SSLC / 10th Standard Original Marks Card',
    '2nd PUC / 12th Standard Original Marks Card',
    'Transfer Certificate (TC) & Migration Certificate',
    'KCET / COMEDK / PGCET Rank Card & Allotment Letter',
    'Caste / Income / Rural / Kannada Medium Certificates (if applicable)',
    'Study Certificates (7 Years in Karnataka for Govt. Quota)',
    'Recent Passport Size Color Photographs (6 Copies)',
    'Student & Parent Aadhaar Card Copies',
  ];

  const docCols = 2;
  const docColW = contentWidth / docCols;
  docsList.forEach((d, idx) => {
    const col = idx % docCols;
    const row = Math.floor(idx / docCols);
    const x = margin + col * docColW;
    const y = p4Y + row * 5;

    doc.setFillColor(GOLD.r, GOLD.g, GOLD.b);
    doc.rect(x + 2, y + 1, 2, 2, 'F');

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(DARK_TEXT.r, DARK_TEXT.g, DARK_TEXT.b);
    doc.text(d, x + 6, y + 3);
  });

  p4Y += Math.ceil(docsList.length / docCols) * 5 + 7;

  // Official Contact Directory Card (Bottom of Page 4)
  doc.setFillColor(NAVY.r, NAVY.g, NAVY.b);
  doc.roundedRect(margin, p4Y, contentWidth, 48, 2, 2, 'F');
  doc.setFillColor(GOLD.r, GOLD.g, GOLD.b);
  doc.rect(margin, p4Y, contentWidth, 2, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(GOLD.r, GOLD.g, GOLD.b);
  doc.text('ADMISSIONS COUNSELING & VISITATION DESK', margin + 6, p4Y + 9);

  // Fitted Official Logo Emblem inside the Contact Desk card
  drawProperlyFittedLogo(pageWidth - margin - 46, p4Y + 6, 40, 22, 1.2, true);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(WHITE.r, WHITE.g, WHITE.b);
  doc.text(`Campus Address: ${COLLEGE_INFO.address}`, margin + 6, p4Y + 16);
  doc.text(`Admission Helplines: ${COLLEGE_INFO.admissionHelpline}`, margin + 6, p4Y + 22);
  doc.text(`Direct Telephone: ${COLLEGE_INFO.phone}`, margin + 6, p4Y + 28);
  doc.text(`Official Email: ${COLLEGE_INFO.admissionsEmail} • General: ${COLLEGE_INFO.email}`, margin + 6, p4Y + 34);
  doc.setTextColor(GOLD.r, GOLD.g, GOLD.b);
  doc.setFont('helvetica', 'bold');
  doc.text('Official Portal: www.bitm.edu.in • KCET Code: E037 • COMEDK Code: E025', margin + 6, p4Y + 41);

  // Save / Trigger Download
  const filename = 'BITM_Ballari_Official_Course_Brochure_2026-27.pdf';
  doc.save(filename);
};
