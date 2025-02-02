# ChipsXP Blog

## Overview

This project is a blog application designed to showcase articles and posts on various topics such as quantum computing, web development trends, and more. Built with Astro 4.0, this application provides a fast, modern, and user-friendly interface for both readers and content creators.

## Main Technologies

- **Astro 4.0**: Built using Astro's latest version, leveraging its Islands Architecture for optimal performance and partial hydration.
- **TypeScript**: Used for type safety and improved developer experience.
- **Tailwind CSS**: Utilized for styling with a utility-first approach and built-in dark mode support.
- **Markdown/MDX**: Content is written in Markdown and MDX, with full support for Astro's Content Collections API.
- **View Transitions API**: Implements smooth page transitions using Astro's native view transitions.

## Key Components

- **BaseHead.astro**: Manages the document head section with meta tags, SEO optimization, and site-wide styles.
- **Footer.astro**: Responsive footer component with site-wide links and information.
- **Header.astro**: Navigation header with responsive menu and theme switcher.
- **SearchBar.astro**: Client-side search functionality using Astro's built-in search capabilities.
- **Sidebar.astro**: Dynamic sidebar for category navigation and featured content.
- **FormattedDate.astro**: Utility component for consistent date formatting.

## Content Structure

The blog uses Astro's Content Collections for type-safe content management:

- **Advance Posts**: Located in `src/content/advance`, covering advanced technical topics.
- **Research Posts**: Located in `src/content/research`, focusing on research and analysis.
- **Content Schema**: Defined in `src/content/config.ts` using Astro's collection schema.

## Development Setup

1. **Prerequisites**:
   - Node.js 18+ (recommended)
   - Git

2. **Clone the Repository**: 
   ```bash
   git clone <repository-url>
   cd blog
   ```

3. **Install Dependencies**: 
   ```bash
   npm install
   ```

4. **Development Commands**:
   ```bash
   npm run dev        # Start dev server
   npm run build      # Build for production
   npm run preview    # Preview production build
   npm run astro ...  # Run CLI commands
   ```

5. **Environment Setup**:
   - Copy `.env.example` to `.env` (if applicable)
   - Configure any required environment variables

## Features

- **Performance**: Optimized with partial hydration and minimal JavaScript.
- **SEO Ready**: Built-in SEO optimization with configurable meta tags.
- **Search**: Full-text search functionality across all blog posts.
- **Categories**: Content organization with dynamic category pages.
- **Responsive Design**: Mobile-first approach with dark mode support.
- **RSS Feed**: Automatic RSS feed generation.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
