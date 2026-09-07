import { useEffect, useRef } from "react";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Title,
  ChartDataLabels
);

const RED = "#e34948";
const AMBER = "#eda100";
const GREEN = "#008300";

export function RatingChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const labels = ["2022", "2023", "2024", "2024 (late)", "2025 (early)", "2025"];
    const data = [4, 3.7, 3.4, 4, 4.2, 4.6];
    const lowIndex = 2;
    const turnIndex = 3;

    const colorFor = (i: number) =>
      i <= lowIndex ? RED : i === turnIndex ? AMBER : GREEN;

    chartRef.current = new Chart(canvasRef.current, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "App rating",
            data,
            borderWidth: 2,
            tension: 0.3,
            fill: false,
            segment: {
              borderColor: (ctx) => {
                if (ctx.p0DataIndex < lowIndex) return RED;
                if (ctx.p0DataIndex === lowIndex) return AMBER;
                return GREEN;
              },
              borderDash: (ctx) =>
                ctx.p0DataIndex < lowIndex ? [6, 4] : undefined,
            },
            pointBackgroundColor: (ctx) =>
              colorFor(ctx.dataIndex),
            pointBorderColor: "#fcfcfb",
            pointBorderWidth: 2,
            pointRadius: (ctx) =>
              ctx.dataIndex === lowIndex ? 9 : 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: { padding: { top: 30 } },
        plugins: {
          legend: { display: false },
          datalabels: {
            align: "top",
            anchor: "end",
            offset: 8,
            color: (ctx) => colorFor(ctx.dataIndex),
            font: (ctx) => ({
              size: 13,
              weight: ctx.dataIndex === lowIndex ? 700 : 500,
            }),
            formatter: (v) => (v as number).toFixed(1),
          },
        },
        scales: {
          y: {
            min: 3,
            max: 5,
            grid: { color: "#e1e0d9" },
            ticks: {
              color: "#898781",
              stepSize: 1,
              callback: (v) => (v as number).toFixed(0),
            },
          },
          x: {
            grid: { display: false },
            ticks: {
              color: "#898781",
              autoSkip: false,
              maxRotation: 30,
            },
          },
        },
      },
    });

    return () => {
      chartRef.current?.destroy();
      chartRef.current = null;
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "320px" }}>
      <canvas
        ref={canvasRef}
        role="img"
        aria-label="Line chart of app rating from 2022 to 2025: red dashed decline to a low of 3.4 in 2024, amber for the first recovery step to 4.0, then green for the continued climb to 4.6"
      />
    </div>
  );
}
