# Weather Dashboard

A beautiful and interactive weather dashboard built with React, TypeScript, and Chart.js. Track temperature trends and variations with detailed historical weather data.



## Features

- 📊 Interactive temperature charts with toggleable metrics
- 📅 Date range selection for historical data
- 📍 Location-based weather data using coordinates
- 🌡️ Both actual and apparent temperature tracking
- 📱 Fully responsive design
- 🎨 Beautiful UI with backdrop blur effects

## Tech Stack

- React 18
- TypeScript
- Chart.js & react-chartjs-2
- TailwindCSS
- date-fns
- Lucide React Icons

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/           # React components
│   ├── ChartControls.tsx
│   ├── CoordinateInput.tsx
│   ├── DateInput.tsx
│   ├── TableHeader.tsx
│   ├── TablePagination.tsx
│   ├── TableRow.tsx
│   ├── WeatherChart.tsx
│   └── WeatherTable.tsx
├── hooks/               # Custom React hooks
│   ├── useChartMetrics.ts
│   └── useTablePagination.ts
├── types/               # TypeScript type definitions
│   └── weather.ts
├── utils/               # Utility functions
│   ├── chartConfig.ts
│   ├── chartDatasets.ts
│   ├── chartOptions.ts
│   ├── chartSetup.ts
│   └── formatters.ts
├── App.tsx             # Main application component
└── main.tsx           # Application entry point
```

## API Integration

The dashboard uses the Open-Meteo API to fetch weather data. Available endpoints:

- Temperature data (2m above ground)
- Apparent temperature
- Daily aggregates (max, min, mean)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Weather data provided by [Open-Meteo](https://open-meteo.com/)
- Icons by [Lucide](https://lucide.dev/)
- Background image from (https://t4.ftcdn.net/jpg/06/41/91/85/360_F_641918542_bL3O5qWqKmaVrxM12Qa1pp1owFvKKP3k.jpg)