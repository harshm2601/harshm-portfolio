# Harsh Maheshwari - Portfolio Website

A beautiful, modern portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui components, showcasing my journey as an AI Engineer and Machine Learning enthusiast.

## 🚀 Live Demo

The portfolio is now running at [http://localhost:3000](http://localhost:3000)

## ✨ Features

### 🎨 Design & User Experience
- **Modern, Responsive Design** - Optimized for all devices and screen sizes
- **Smooth Animations** - Powered by Framer Motion for engaging interactions
- **Gradient Backgrounds** - Beautiful gradient designs throughout
- **Glass Morphism Effects** - Modern UI with backdrop blur effects
- **Custom Scrollbar** - Styled scrollbar matching the theme
- **Dark/Light Theme Support** - Built-in theme switching capability

### 📱 Sections

1. **Hero Section** - Eye-catching introduction with technology stack showcase
2. **About Me** - Detailed professional background, experience, and achievements
3. **Projects** - Featured projects with live demos and GitHub links
4. **LeetCode Journey** - Competitive programming achievements and stats
5. **Resume** - Professional resume with downloadable PDF option
6. **Contact** - Multiple contact methods and social links

### 🛠 Technologies Used

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript for type safety
- **Styling:** Tailwind CSS for utility-first styling
- **UI Components:** shadcn/ui for modern, accessible components
- **Animations:** Framer Motion for smooth transitions
- **Icons:** Lucide React for consistent iconography

### 🎯 Key Highlights

- **750+ LeetCode Problems** solved with 1841 rating
- **500-Day Streak** in competitive programming
- **Published Research** in AI and Computer Vision
- **Professional Experience** at Lumeo (San Francisco) and Ziguratss LLP
- **Academic Excellence** - 9.12 CGPA at CHARUSAT
- **Multiple Certifications** from NPTEL and Coursera

## 📋 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main homepage
│   └── globals.css        # Global styles and custom CSS
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── sections/         # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── LeetCodeSection.tsx
│   │   ├── ResumeSection.tsx
│   │   └── ContactSection.tsx
│   ├── Navigation.tsx    # Main navigation component
│   └── Footer.tsx        # Footer component
└── lib/                  # Utility functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation & Setup

1. **Clone the repository** (if using git)
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Personal Information
Update the personal details in each component:
- `HeroSection.tsx` - Name, title, and introduction
- `AboutSection.tsx` - Professional experience and skills
- `ProjectsSection.tsx` - Project details and links
- `ContactSection.tsx` - Contact information

### Styling
- **Colors:** Modify Tailwind classes or add custom CSS variables
- **Animations:** Adjust Framer Motion configurations
- **Layout:** Update component structures as needed

### Adding New Sections
1. Create new component in `src/components/sections/`
2. Import and add to `src/app/page.tsx`
3. Update navigation in `Navigation.tsx`

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop** (1024px+)
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)

## 🔧 Development Features

- **TypeScript** for enhanced development experience
- **ESLint** for code quality
- **Hot Reload** for instant development feedback
- **Turbopack** for faster builds (Next.js 15)

## 📊 Performance Optimizations

- **Image Optimization** with Next.js Image component
- **Code Splitting** for optimal loading
- **SEO Optimized** with proper meta tags
- **Accessible** following WCAG guidelines

## 🤝 Contact Information

- **Email:** harshmaheshwari219@gmail.com
- **LinkedIn:** [linkedin.com/in/harshism1](https://linkedin.com/in/harshism1)
- **GitHub:** [github.com/harshm2601](https://github.com/harshm2601)
- **LeetCode:** [leetcode.com/harshism](https://leetcode.com/harshism)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **shadcn/ui** for the beautiful component library
- **Vercel** for Next.js and hosting platform
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations

---

**Built with ❤️ by Harsh Maheshwari**
