export interface doughnutChartData {
    labels: string[];
    datasets: Dataset[];
  }

interface Dataset {
  backgroundColor: string[];
    data: number[];
  }