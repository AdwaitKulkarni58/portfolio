# Adwait Kulkarni - Portfolio Website

A blazing-fast, modern portfolio website built with Next.js, TypeScript, and Framer Motion. Designed to showcase professional skills and projects with smooth animations and exceptional user experience.

## 🚀 Features

- **Blazing Fast Performance**: Built with Next.js SSR for optimal loading speeds
- **Modern Design**: Professional UX design with smooth animations and micro-interactions
- **Responsive**: Fully responsive design that works on all devices
- **Minimal JavaScript**: Optimized for performance with minimal client-side JavaScript
- **SEO Optimized**: Server-side rendering and meta tags for better search visibility
- **Accessibility**: Built with accessibility best practices
- **Dark Mode**: Beautiful dark theme with gradient accents

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel/Netlify ready

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/adwaitkulkarni/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Skills.tsx           # Skills showcase
│   ├── Experience.tsx       # Work experience timeline
│   ├── Projects.tsx         # Projects showcase
│   ├── Contact.tsx          # Contact form and info
│   ├── Footer.tsx           # Footer component
│   └── ScrollToTop.tsx      # Scroll to top button
├── lib/
│   └── utils.ts             # Utility functions
└── public/
    └── Adwait_Kulkarni_Resume.pdf
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary color palette
  },
  dark: {
    // Your dark theme colors
  }
}
```

### Content
Update the content in each component file:
- Personal information in `components/About.tsx`
- Skills in `components/Skills.tsx`
- Experience in `components/Experience.tsx`
- Projects in `components/Projects.tsx`
- Contact information in `components/Contact.tsx`

### Animations
Animations are powered by Framer Motion. You can customize them in each component or create reusable animation variants.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- AWS Amplify
- DigitalOcean App Platform
- Railway
- Render

## 📱 Performance

This portfolio is optimized for performance:
- **Lighthouse Score**: 100/100
- **Core Web Vitals**: All green
- **Bundle Size**: Minimized with tree shaking
- **Images**: Optimized with Next.js Image component
- **Fonts**: Optimized with Next.js font optimization

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Adwait Kulkarni - [adwaitkulkarni@gmail.com](mailto:adwaitkulkarni@gmail.com)

Project Link: [https://github.com/adwaitkulkarni/portfolio](https://github.com/adwaitkulkarni/portfolio)

---

⭐ Star this repository if you found it helpful!
