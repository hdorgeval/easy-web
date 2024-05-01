import { FC } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import googleSearchPerformance from '../../data/google-search/Dates.json';
import { useDate } from '../../hooks/useCalendar';
import { websiteConfig } from '../../website.config';
import { PageSubTitle } from '../page-layout/PageSubTitle';
import { PageTitle } from '../page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundGradient } from '../page-layout/PublicPageLayoutWithFixedBackgroundGradient';
export const Dashboard: FC = () => {
  const lastUpdated = useDate('2024-05-01');
  const data = googleSearchPerformance.toReversed();
  return (
    <PublicPageLayoutWithFixedBackgroundGradient
      htmlTitle={`Dashboard | ${websiteConfig.websiteTitle}`}
    >
      <div className="d-flex flex-column justify-content-start align-items-center">
        <div className="mt-7">
          <PageTitle>Dashboard</PageTitle>
        </div>
        <div>
          {lastUpdated && (
            <PageSubTitle className="fs-6">{`Actualisé le ${lastUpdated.longDate}`}</PageSubTitle>
          )}
        </div>
        <div
          className="fs-6 mt-4 mx-4 text-start text-light"
          style={{ minWidth: '80vw', width: '80vw' }}
        >
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f8f9fa" stopOpacity={1} />
                  <stop offset="95%" stopColor="#f8f9fa" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="Date" interval="preserveStartEnd" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip contentStyle={{ backgroundColor: 'rgb(28 32 35 / 96%)' }} />
              <Legend verticalAlign="top" height={36} />
              <Area
                type="monotone"
                dataKey="Clics"
                stroke="#f8f9fa"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
              <Area
                type="monotone"
                dataKey="Impressions"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorPv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </PublicPageLayoutWithFixedBackgroundGradient>
  );
};

Dashboard.displayName = 'Dashboard';
