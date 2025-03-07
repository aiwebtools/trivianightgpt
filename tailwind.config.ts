
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Custom colors for cyberpunk theme
				neon: {
					purple: '#b829e3',
					blue: '#2de2e6',
					pink: '#ff3864',
					yellow: '#f9c80e',
					green: '#2ecc71',
				},
				dark: {
					DEFAULT: '#0f0f1a',
					light: '#1a1a2e',
					lighter: '#242444',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '1',
						filter: 'brightness(1)',
					},
					'50%': { 
						opacity: '0.8',
						filter: 'brightness(1.3)',
					},
				},
				'shooting-star': {
					'0%': { 
						transform: 'translateX(-100px) translateY(-100px)',
						opacity: '0' 
					},
					'10%': { 
						opacity: '1' 
					},
					'100%': { 
						transform: 'translateX(calc(100vw + 100px)) translateY(calc(100vh + 100px))',
						opacity: '0' 
					}
				},
				'rotate-3d': {
					'0%': { transform: 'rotateX(0) rotateY(0)' },
					'50%': { transform: 'rotateX(15deg) rotateY(180deg)' },
					'100%': { transform: 'rotateX(0) rotateY(360deg)' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'neon-pulse': {
					'0%, 100%': { 
						textShadow: '0 0 5px rgba(45, 226, 230, 0.7), 0 0 10px rgba(45, 226, 230, 0.5), 0 0 15px rgba(45, 226, 230, 0.3)'
					},
					'50%': { 
						textShadow: '0 0 10px rgba(45, 226, 230, 0.9), 0 0 20px rgba(45, 226, 230, 0.7), 0 0 30px rgba(45, 226, 230, 0.5)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'float-slow': 'float 8s ease-in-out infinite',
				'float-fast': 'float 4s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'shooting-star': 'shooting-star 5s linear infinite',
				'rotate-3d': 'rotate-3d 12s linear infinite',
				'fade-in': 'fade-in 0.6s ease-out',
				'neon-pulse': 'neon-pulse 2s ease-in-out infinite'
			},
			backgroundImage: {
				'cyber-grid': 'linear-gradient(rgba(45, 226, 230, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(45, 226, 230, 0.1) 1px, transparent 1px)',
				'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
			},
			backgroundSize: {
				'cyber-grid': '30px 30px',
			},
			boxShadow: {
				'neon-blue': '0 0 5px theme("colors.neon.blue"), 0 0 20px theme("colors.neon.blue")',
				'neon-purple': '0 0 5px theme("colors.neon.purple"), 0 0 20px theme("colors.neon.purple")',
				'neon-pink': '0 0 5px theme("colors.neon.pink"), 0 0 20px theme("colors.neon.pink")',
				'neon-yellow': '0 0 5px theme("colors.neon.yellow"), 0 0 20px theme("colors.neon.yellow")',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
