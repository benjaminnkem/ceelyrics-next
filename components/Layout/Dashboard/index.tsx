"use client";
import { AreaChart, Card, Title } from "@tremor/react";
import Sidebar from "@/components/Layout/Dashboard/sidebar";

const chartdata = [
  {
    date: "Jan 22",
    "Semi Analysis": 2890,
    "The Pragmatic Engineer": 2338,
  },
  {
    date: "Feb 22",
    "Semi Analysis": 2756,
    "The Pragmatic Engineer": 2103,
  },
  {
    date: "Mar 22",
    "Semi Analysis": 3322,
    "The Pragmatic Engineer": 2194,
  },
  {
    date: "Apr 22",
    "Semi Analysis": 3470,
    "The Pragmatic Engineer": 2108,
  },
  {
    date: "May 22",
    "Semi Analysis": 3475,
    "The Pragmatic Engineer": 1812,
  },
  {
    date: "Jun 22",
    "Semi Analysis": 3129,
    "The Pragmatic Engineer": 1726,
  },
];

const valueFormatter = function (number: number) {
  return "$ " + new Intl.NumberFormat("us").format(number).toString();
};

const DashboardContent = () => {
  return (
    <>
      <main>
        <div className="min-h-screen">
          <Sidebar />
          <div className="h-full md:ml-[320px]">
            <div className="max-w-5xl mx-auto">
              <div className="p-10">
                {/* <Card>
          <Title>Newsletter revenue over time (USD)</Title>
          <AreaChart
            className="h-72 mt-4"
            data={chartdata}
            index="date"
            categories={["Semi Analysis", "The Pragmatic Engineer"]}
            colors={["indigo", "cyan"]}
            valueFormatter={valueFormatter}
          />
        </Card> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DashboardContent;
