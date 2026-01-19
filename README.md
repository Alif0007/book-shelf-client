#<img width="1920" height="876" alt="Screenshot (5)" src="https://github.com/user-attachments/assets/9d1b55dd-8242-4b6a-915f-f1d43fe6e4a0" />
 Book Shelf - Modern Book Management Application

A beautifully designed, feature-rich book management application built with React, Vite, and DaisyUI. The application offers an intuitive interface for browsing, searching, and managing books with a focus on user experience and aesthetics.

## 🌟 Features

### UI/UX Enhancements
- **Modern Minimalist Design**: Clean, elegant interface with carefully chosen color palette (soft teals, warm grays, off-whites)
- **Responsive Layout**: Fully responsive design that works on all device sizes
- **Dark/Light Mode**: Beautiful theme switching with animated sun/moon toggle
- **Sticky Navbar**: Persistent navigation that stays at the top of the screen
- **MainLayout Component**: Consistent layout with proper spacing and structure

### Core Functionality
- **Book Discovery**: Browse and explore a wide collection of books
- **Advanced Search & Filtering**: Filter by title, author, genre, and rating
- **Sorting Options**: Sort books by rating, title, or date added
- **User Authentication**: Secure login/register functionality with Google OAuth
- **Personal Book Library**: Add, manage, and organize your personal book collection
- **Book Details**: Detailed views with ratings, descriptions, and more

### Interactive Elements
- **Animated Book Cards**: Hover effects with scaling and shadow transitions
- **Dynamic Theme Toggle**: Sun/moon icons that change based on current theme
- **Smooth Animations**: Hover effects, transitions, and micro-interactions throughout
- **Loading States**: Skeleton loaders for better perceived performance
- **Attractive Buttons**: Enhanced button styling with hover effects and animations

## 🛠️ Tech Stack

- **React**: Modern component-based UI framework
- **Vite**: Fast build tool and development server
- **DaisyUI**: Beautiful component library for Tailwind CSS
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing solution
- **Firebase**: Authentication and backend services
- **Axios**: HTTP client for API requests
- **SwiperJS**: Carousel/slider functionality
- **React Icons**: SVG icon library

## 🎨 Design Highlights

### Color Palette
- **Light Mode**:
  - Background: `#FFFFFF` (Pure white)
  - Surfaces: `#F9FAFB` (Very light gray)
  - Primary: `#0D9488` / `#319795` (Soft teal/blue)
  - Accent: `#6B7280` (Warm gray)

- **Dark Mode**:
  - Base: `#0F1117` (Near-black)
  - Cards: `#1F2937` (Dark gray)
  - Primary: `#2DD4BF` (Cyan/teal)
  - Text: `#E5E7EB`

### UI Components
- **Book Cards**: Visually appealing cards with hover effects and gradient overlays
- **Theme Toggle**: Animated sun/moon toggle with smooth transitions
- **Navigation**: Intuitive and accessible navigation with active state indicators
- **Forms**: Well-designed input fields and form layouts
- **Buttons**: Consistent styling with hover and active states

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd book-shelf
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5175` (or the port shown in the terminal)

### Environment Variables
Create a `.env` file in the root directory with your Firebase configuration:
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
# ... other Firebase config variables
```

## 📁 Project Structure

```
src/
├── authProvider/           # Authentication context
├── component/              # Reusable UI components
│   ├── footer/             # Footer component
│   ├── header/             # Navbar and slider components
│   ├── BookCard.jsx        # Book card component
│   ├── MainLayout.jsx      # Main layout wrapper
│   └── ThemeController.jsx # Theme management
├── firebase/               # Firebase configuration
├── pages/                  # Page components
├── root/                   # Root application component
└── routes/                 # Routing configuration
```

## 🧩 Key Components

### MainLayout
Provides consistent layout structure with sticky navbar and footer, ensuring proper spacing and responsive design.

### ThemeController
Manages theme switching functionality, persistence in localStorage, and system preference detection.

### BookCard
Reusable component for displaying book information with attractive styling, hover effects, and interactive elements.

### Navbar
Features the animated theme toggle, user profile dropdown, and responsive navigation menu.

## 🔐 Authentication

The application supports both email/password and Google authentication. Users can securely log in, manage their profiles, and maintain their personal book collections.

## 📱 Responsive Design

The application is fully responsive and provides an optimal viewing experience across all devices:
- Mobile: Touch-friendly interface with hamburger menu
- Tablet: Balanced layout with appropriate spacing
- Desktop: Full-featured interface with expanded navigation

## 🎯 Performance Optimizations

- Lazy loading for images
- Efficient state management
- Optimized rendering with React.memo where appropriate
- Skeleton loaders for improved perceived performance
- Proper code splitting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions, please open an issue in the GitHub repository.

---

Built with ❤️ using React, Vite, and DaisyUI
