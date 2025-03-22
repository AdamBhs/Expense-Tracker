import { useEffect, useRef } from "react";
import { IoWalletOutline } from "react-icons/io5";
import styles from "./dash.module.css";
import "../../assets/gloabl.css";
import { FiCreditCard } from "react-icons/fi";
import { PiHandCoinsLight } from "react-icons/pi";
import * as echarts from "echarts";
import Item from "../../components/tranitem/Item";

export default function Dashboard() {
    const chartRef = useRef<HTMLDivElement | null>(null);
    const barChartRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        let myPieChart: echarts.ECharts | null = null;
        let myBarChart: echarts.ECharts | null = null;

        if (chartRef.current) {
            myPieChart = echarts.init(chartRef.current);
            myPieChart.setOption({
                tooltip: { trigger: "item" },
                legend: { bottom: "0%", left: "center" },
                series: [
                    {
                        name: "Access From",
                        type: "pie",
                        radius: ["50%", "70%"],
                        avoidLabelOverlap: false,
                        label: { show: false, position: "center" },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 18,
                                formatter: (params) => `${params.name}\n${params.value}`,
                            },
                        },
                        labelLine: { show: false },
                        data: [
                            { value: 1048, name: "Total Balance" },
                            { value: 735, name: "Total Expenses" },
                            { value: 580, name: "Total Income" },
                        ],
                    },
                ],
            });
        }

        if (barChartRef.current) {
            myBarChart = echarts.init(barChartRef.current);
            myBarChart.setOption({
                tooltip: { trigger: "axis" },
                xAxis: {
                    type: "category",
                    data: ["Total Balance", "Total Expenses", "Total Income"],
                },
                yAxis: { type: "value" },
                series: [
                    {
                        name: "Amount",
                        type: "bar",
                        data: [1048, 735, 580],
                    },
                ],
            });
        }

        const updateCharts = () => {
            const newData = [
                { value: Math.floor(Math.random() * 2000), name: "Total Balance" },
                { value: Math.floor(Math.random() * 2000), name: "Total Expenses" },
                { value: Math.floor(Math.random() * 2000), name: "Total Income" },
            ];

            if (myPieChart) {
                myPieChart.setOption({ series: [{ data: newData }] });
            }

            if (myBarChart) {
                myBarChart.setOption({ series: [{ data: newData.map((item) => item.value) }] });
            }
        };

        const interval = setInterval(updateCharts, 10000);

        return () => {
            clearInterval(interval);
            myPieChart?.dispose();
            myBarChart?.dispose();
        };
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.total_c}>
                <div className={`${styles.total_p} shadow`}>
                    <div className={styles.logo_t} style={{ backgroundColor: "#485FCD" }}>
                        <FiCreditCard />
                    </div>
                    <div className={styles.desc_t}>
                        <p>Total Balance</p>
                        <h3>$7800</h3>
                    </div>
                </div>
                <div className={`${styles.total_p} shadow`}>
                    <div className={styles.logo_t} style={{ backgroundColor: "#F19109" }}>
                        <IoWalletOutline />
                    </div>
                    <div className={styles.desc_t}>
                        <p>Total Income</p>
                        <h3>$7800</h3>
                    </div>
                </div>
                <div className={`${styles.total_p} shadow`}>
                    <div className={styles.logo_t} style={{ backgroundColor: "#DC2626" }}>
                        <PiHandCoinsLight />
                    </div>
                    <div className={styles.desc_t}>
                        <p>Total Expenses</p>
                        <h3>$7800</h3>
                    </div>
                </div>
            </div>

            <div className={styles.part_2}>
                <div className={`${styles.transaction} shadow`}>
                    <h3 className={styles.title}>Recent Transactions</h3>
                    <div className={styles.list_trans}>
                        <Item amount={5000} />
                        <Item amount={1000} />
                        <Item amount={900} />
                        <Item amount={3000} />
                        <Item amount={2500} />
                    </div>
                </div>
                <div className={`${styles.overview} shadow`}>
                    <h3 className={styles.title}>Financial Overview</h3>
                    <div ref={chartRef} style={{ width: "100%", height: "350px" }}></div>
                </div>
            </div>

            <div className={styles.part_2}>
                <div className={`${styles.transaction} shadow`}>
                    <h3 className={styles.title}>Expanses</h3>
                    <div className={styles.list_trans}>
                        <Item amount={5000} />
                        <Item amount={1000} />
                        <Item amount={900} />
                        <Item amount={3000} />
                        <Item amount={2500} />
                        
                    </div>
                </div>
                <div className={`${styles.overview} shadow`}>
                    <h3 className={styles.title}>Last 30 Days Expenses</h3>
                    <div ref={barChartRef} style={{ width: "100%", height: "350px" }}></div>
                </div>
            </div>
        </div>
    );
}