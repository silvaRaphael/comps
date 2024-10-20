import type { Config } from "tailwindcss"
import forms from "@tailwindcss/forms"
import typography from "@tailwindcss/typography"
import scrollbarHide from "tailwind-scrollbar-hide"
import radix from "tailwindcss-radix"
import animate from "tailwindcss-animate"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["class", "class"],
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      screens: {
        xs: "420px"
      },
      typography: {
        DEFAULT: {
          css: {
            "blockquote p:first-of-type::before": {
              content: "none"
            },
            "blockquote p:first-of-type::after": {
              content: "none"
            }
          }
        }
      },
      fontFamily: {
        display: ["var(--font-satoshi)", "system-ui", "sans-serif"],
        default: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      fontSize: {
        "3xl": ["28px", "36px"]
      },
      animation: {
        "scale-in": "scale-in 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
        "fade-in": "fade-in 0.2s ease-out forwards",
        "slide-up-fade": "slide-up-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-right-fade":
          "slide-right-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-left-fade": "slide-left-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "enter-from-right": "enter-from-right 0.15s ease",
        "enter-from-left": "enter-from-left 0.15s ease",
        "exit-to-right": "exit-to-right 0.15s ease",
        "exit-to-left": "exit-to-left 0.15s ease",
        "scale-in-content": "scale-in-content 0.2s ease",
        "scale-out-content": "scale-out-content 0.2s ease",
        "accordion-down": "accordion-down 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        "accordion-up": "accordion-up 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        wiggle: "wiggle 0.75s infinite",
        spinner: "spinner 1.2s linear infinite",
        blink: "blink 1.4s infinite both",
        pulse: "pulse 1s linear infinite alternate"
      },
      keyframes: {
        "scale-in": {
          "0%": {
            transform: "scale(0.95)"
          },
          "100%": {
            transform: "scale(1)"
          }
        },
        "fade-in": {
          "0%": {
            opacity: "0"
          },
          "100%": {
            opacity: "1"
          }
        },
        "slide-up-fade": {
          "0%": {
            opacity: "0",
            transform: "translateY(2px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "slide-right-fade": {
          "0%": {
            opacity: "0",
            transform: "translateX(-2px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
        "slide-down-fade": {
          "0%": {
            opacity: "0",
            transform: "translateY(-2px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "slide-left-fade": {
          "0%": {
            opacity: "0",
            transform: "translateX(2px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
        "enter-from-right": {
          "0%": {
            transform: "translateX(200px)",
            opacity: "0"
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1"
          }
        },
        "enter-from-left": {
          "0%": {
            transform: "translateX(-200px)",
            opacity: "0"
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1"
          }
        },
        "exit-to-right": {
          "0%": {
            transform: "translateX(0)",
            opacity: "1"
          },
          "100%": {
            transform: "translateX(200px)",
            opacity: "0"
          }
        },
        "exit-to-left": {
          "0%": {
            transform: "translateX(0)",
            opacity: "1"
          },
          "100%": {
            transform: "translateX(-200px)",
            opacity: "0"
          }
        },
        "scale-in-content": {
          "0%": {
            transform: "rotateX(-30deg) scale(0.9)",
            opacity: "0"
          },
          "100%": {
            transform: "rotateX(0deg) scale(1)",
            opacity: "1"
          }
        },
        "scale-out-content": {
          "0%": {
            transform: "rotateX(0deg) scale(1)",
            opacity: "1"
          },
          "100%": {
            transform: "rotateX(-10deg) scale(0.95)",
            opacity: "0"
          }
        },
        "accordion-down": {
          from: {
            height: "0"
          },
          to: {
            height: "var(--radix-accordion-content-height)"
          }
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)"
          },
          to: {
            height: "0"
          }
        },
        wiggle: {
          "0%, 100%": {
            transform: "translateX(0%)",
            transformOrigin: "50% 50%"
          },
          "15%": {
            transform: "translateX(-4px) rotate(-4deg)"
          },
          "30%": {
            transform: "translateX(6px) rotate(4deg)"
          },
          "45%": {
            transform: "translateX(-6px) rotate(-2.4deg)"
          },
          "60%": {
            transform: "translateX(2px) rotate(1.6deg)"
          },
          "75%": {
            transform: "translateX(-1px) rotate(-0.8deg)"
          }
        },
        spinner: {
          "0%": {
            opacity: "1"
          },
          "100%": {
            opacity: "0"
          }
        },
        blink: {
          "0%": {
            opacity: "0.2"
          },
          "20%": {
            opacity: "1"
          },
          "100%": {
            opacity: "0.2"
          }
        },
        pulse: {
          from: {
            opacity: "0"
          },
          to: {
            opacity: "1"
          }
        }
      },
      colors: {
        color: {
          "50": "#EFD6FD",
          "100": "#E4BCFB",
          "200": "#e0aaff",
          "300": "#c77dff",
          "400": "#9d4edd",
          "500": "#7b2cbf",
          "600": "#6112B1",
          "700": "#3c096c",
          "800": "#240046",
          "900": "#10002b"
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))"
        }
      },
      boxShadow: {
        "command-menu": "0 12px 24px #00000008, 0 6px 12px #00000014"
      },
      dropShadow: {
        "card-hover": ["0 8px 12px #222A350d", "0 32px 80px #2f30370f"]
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      backdropBlur: {
        xs: "2px"
      }
    }
  },
  plugins: [forms, typography, scrollbarHide, radix, animate]
}

export default config
