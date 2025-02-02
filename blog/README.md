# Blog Project

## Overview

This project is a blog application designed to showcase articles and posts on various topics such as quantum computing, web development trends, and more. The application is built using modern web technologies and provides a user-friendly interface for both readers and content creators.

## Main Technologies

- **Astro**: The application is primarily built using Astro, a modern static site generator that allows for fast and optimized web pages.
- **TypeScript**: Used for type safety and improved developer experience.
- **Tailwind CSS**: Utilized for styling the application with a utility-first approach.
- **Markdown/MDX**: Content is written in Markdown and MDX, allowing for rich text formatting and embedding React components within the content.

## Components

- **BaseHead.astro**: Manages the head section of the HTML, including meta tags and links.
- **Footer.astro**: The footer component displayed across the site.
- **Header.astro**: The header component, including navigation links.
- **SearchBar.astro**: A component for searching through blog posts.
- **Sidebar.astro**: A sidebar component for additional navigation or information.

## Content Structure

- **Advance Posts**: Located in `src/content/advance`, these posts cover advanced topics.
- **Research Posts**: Located in `src/content/research`, these posts focus on research topics.

## How to Run the App

1. **Clone the Repository**: 
   ```bash
   git clone <repository-url>
   cd blog
   ```

2. **Install Dependencies**: 
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Run the Development Server**: 
   Start the application in development mode:
   ```bash
   npm run dev
   ```

4. **Build for Production**: 
   To build the application for production, use:
   ```bash
   npm run build
   ```

5. **Preview the Production Build**: 
   To preview the production build locally:
   ```bash
   npm run preview
   ```

## Usage

- Navigate to the homepage to view the latest posts.
- Use the search bar to find specific articles.
- Explore different categories and topics through the sidebar and header links.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
