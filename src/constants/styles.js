import { COLORS } from "./colors";

export const FONT_FAMILY = {
  HIRAGINO: 'Hiragino Kaku Gothic Pro, sans-serif',
};

export const FONT_WEIGHT = {
  LIGHT: 300,
  REGULAR: 400,
  MEDIUM: 500,
  BOLD: 700,
};

export const TEXT_STYLES = {
  FOOTER_LINK: {
    fontFamily: FONT_FAMILY.HIRAGINO,
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: '11px',
    lineHeight: '16px',
    letterSpacing: '0.03px',
  },
  HEADING: {
    fontFamily: FONT_FAMILY.HIRAGINO,
    fontWeight: FONT_WEIGHT.BOLD,
    fontSize: '24px',
    lineHeight: '32px',
    letterSpacing: '0.02px',
  },
  BODY: {
    fontFamily: FONT_FAMILY.HIRAGINO,
    fontWeight: FONT_WEIGHT.REGULAR,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.01px',
  },
};

export const CHALLENGE_STYLES = {
  heading: {
    fontWeight: 400,
    fontSize: '15px',
    lineHeight: '18px',
    letterSpacing: '0.15px',
    display: 'inline-block',
  },
  date: {
    fontWeight: 400,
    fontSize: '22px',
    lineHeight: '27px',
    letterSpacing: '0.11px',
  },
};

export const DIARY_CARD_STYLES = {
  date: {
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '22px',
    letterSpacing: '0.09px',
    color: '#414141',
  },
  time: {
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '22px',
    letterSpacing: '0.09px',
    color: '#414141',
  },
  content: {
    fontWeight: 300,
    fontSize: 12,
    lineHeight: '17px',
    letterSpacing: '0.06px',
    color: '#414141',
  },
};

export const BUTTON_VARIANTS = {
  primary: 'bg-primary-400 hover:bg-primary-500 text-white',
  secondary: 'bg-secondary-300 hover:bg-secondary-300 text-black',
  gradient: 'bg-gradient-to-r from-[#FFCC21] to-[#FF963C] text-white font-normal text-lg leading-[26px] tracking-normal text-center rounded-lg border-none shadow-none transition-colors duration-200',
};

export const CHALLENGE_CARD_STYLES = {
  title: {
    color: COLORS.primary[300],
    fontWeight: 400,
    fontSize: '25px',
    lineHeight: '30px',
    letterSpacing: '0.13px',
    textAlign: 'center',
    width: '100%',
    display: 'block',
  },
  subLabel: {
    background: COLORS.primary[400],
    color: COLORS.white,
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '24px',
    padding: '8px 0px',
    width: '160px',
    textAlign: 'center',
  },
};

export const CHART_STYLES = {
  title: {
    color: COLORS.white,
    fontSize: '18px',
    fontWeight: 700,
    marginRight: '16px',
  },
  date: {
    color: COLORS.white,
    fontSize: '16px',
  },
  chartOptions: {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 0,
        right: 0,
        bottom: 70,
        top: 0,
      }
    },
    plugins: { 
      legend: { 
        display: false 
      } 
    },
    scales: {
      y: {
        display: false,
        grid: { 
          display: false, 
          drawBorder: false 
        },
        ticks: { 
          display: false 
        },
      },
      x: {
        grid: {
          color: COLORS.chart.grid,
          lineWidth: 2,
          drawBorder: false,
        },
        offset: true,
        ticks: {
          color: COLORS.chart.text,
          font: {
            weight: 300,
            size: 8,
            lineHeight: 1.5,
          },
          padding: 10,
        },
      },
    },
  },
}; 