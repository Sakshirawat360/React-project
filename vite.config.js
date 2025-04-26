import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // Make sure you import this if you're using it

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Add this if you are using the Tailwind plugin for Vite
  ],
});
