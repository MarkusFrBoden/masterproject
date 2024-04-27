export interface radarChartData {
    labels: string[];
    datasets: Dataset[];
  }

interface Dataset {
    label: string;
    backgroundColor: string;
    borderColor: string;
    pointBackgroundColor: string;
    pointBorderColor: string;
    pointHoverBackgroundColor: string;
    pointHoverBorderColor: string;
    data: any;
  }