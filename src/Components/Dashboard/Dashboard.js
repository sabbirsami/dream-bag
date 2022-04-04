import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    AreaChart,
    Tooltip,
    Area,
} from "recharts";

const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("chartData.json")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);
    console.log(data);

    //

    return (
        <Container>
            <div className="row pt-5">
                <div className="col-lg-6">
                    <LineChart width={600} height={300} data={data}>
                        <Line
                            type="monotone"
                            dataKey="investment"
                            stroke="#8884d8"
                        />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="month" />
                        <YAxis />
                    </LineChart>
                </div>
                <div className="col-lg-6">
                    <AreaChart
                        width={600}
                        height={300}
                        data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient
                                id="colorUv"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="#8884d8"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="#8884d8"
                                    stopOpacity={0}
                                />
                            </linearGradient>
                            <linearGradient
                                id="colorPv"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="#82ca9d"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="#82ca9d"
                                    stopOpacity={0}
                                />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="revenue"
                            stroke="#8884d8"
                            fillOpacity={1}
                            fill="url(#colorUv)"
                        />
                        <Area
                            type="monotone"
                            dataKey="investment"
                            stroke="#82ca9d"
                            fillOpacity={1}
                            fill="url(#colorPv)"
                        />
                    </AreaChart>
                </div>
            </div>
        </Container>
    );
};

export default Dashboard;
