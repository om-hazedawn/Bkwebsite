'use client';

import React, { useEffect, useState } from 'react';
import { getInteriumReportCollections } from '@/lib/api/interium-report-collections'; // Assuming this is the correct path

interface ReportFile {
  id: number;
  name: string;
  url: string;
  // Add other relevant file properties if needed
}

interface ReportData {
  id: number;
  Title: string;
  File: ReportFile;
  Date: string | null; // Corrected type to allow null
  // Add other relevant report properties if needed
}

const YEAR_RANGES = {
  'All': { start: 0, end: 9999 }, // Reinstated 'All' range
  '2019-2026': { start: 2018, end: 2024 },
  '2011-2018': { start: 2011, end: 2017 },
  '2001-2010': { start: 2001, end: 2010 },
};

type YearRangeKey = keyof typeof YEAR_RANGES;

const InteriumReportList: React.FC<{ yearRange: string }> = ({ yearRange }) => {
  const [allReports, setAllReports] = useState<ReportData[]>([]);
  const [filteredReports, setFilteredReports] = useState<ReportData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const initialRangeKey: YearRangeKey = (Object.keys(YEAR_RANGES) as YearRangeKey[]).includes(yearRange as YearRangeKey)
    ? (yearRange as YearRangeKey)
    : 'All';
  const [selectedRange, setSelectedRange] = useState<YearRangeKey>(initialRangeKey);

  useEffect(() => {
    const newRangeKey: YearRangeKey = (Object.keys(YEAR_RANGES) as YearRangeKey[]).includes(yearRange as YearRangeKey)
      ? (yearRange as YearRangeKey)
      : 'All';
    setSelectedRange(newRangeKey);
  }, [yearRange]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        // In a real application, you would fetch this from an API endpoint.
        // For this example, we'll use the local JSON data.
        // You might need to adjust the path depending on where you place the JSON file
        // relative to your public folder or how you serve static assets.
        const result = await getInteriumReportCollections();
        console.log("Results");
        console.log(result);
        if (result && Array.isArray(result.data)) {
          setAllReports(result.data);
          setFilteredReports(result.data); // Initially show all reports
        } else {
          console.error('Fetched data is not an array or is undefined:', result);
          setAllReports([]);
          setFilteredReports([]);
          setError('Failed to load reports in the expected format.');
        }
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  useEffect(() => {
    if (!allReports.length) return;

    const currentRange = YEAR_RANGES[selectedRange];
    const newFilteredReports = allReports.filter(report => {
      if (selectedRange === 'All') {
        return true; // Include all reports if 'All' is selected
      }

      // For specific year ranges, a valid date is required
      if (!report.Date) {
        return false; // Exclude if Date is null
      }
      const reportYear = parseInt(report.Date.substring(0, 4), 10);
      if (isNaN(reportYear)) {
        return false; // Exclude if year is not a number
      }
      // currentRange is derived based on selectedRange from YEAR_RANGES
      return reportYear >= currentRange.start && reportYear <= currentRange.end;
    });

    newFilteredReports.sort((a, b) => {
      if (!a.Date && !b.Date) return 0;
      if (!a.Date) return 1; // Sort items with no date to the end
      if (!b.Date) return -1; // Sort items with no date to the end
      return new Date(b.Date).getTime() - new Date(a.Date).getTime(); // Descending
    });

    setFilteredReports(newFilteredReports);
  }, [selectedRange, allReports]);

  if (loading) {
    return <p>Loading reports...</p>;
  }

  if (error) {
    return <p>Error loading reports: {error}</p>;
  }

  // Note: We check filteredReports for display, but loading/error refers to fetching allReports
  // if (!allReports.length && !loading) { // This check might be redundant if error covers it
  //   return <p>No reports available.</p>;
  // }


  // Assuming your CMS or backend serves files from a base URL.
  // Adjust this if your file URLs are absolute or structured differently.
  const cmsBaseUrl = process.env.CMS_URL || 'http://52.175.21.181'; // Example: http://localhost:1337

  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-2xl font-bold mb-4">Interium Reports</h1> */}
      
      {/* <div className="mb-4 flex space-x-2">
        {(Object.keys(YEAR_RANGES) as YearRangeKey[]).map(rangeKey => (
          <button
            key={rangeKey}
            onClick={() => handleRangeChange(rangeKey)}
            className={`px-4 py-2 rounded font-semibold 
                        ${selectedRange === rangeKey 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            {rangeKey}
          </button>
        ))}
      </div> */}

      {filteredReports.length === 0 && !loading && (
        <p>No reports found for the selected range.</p>
      )}

      <ul className="space-y-2">
        {filteredReports.map((report) => (
          <li key={report.id} className="p-2 border rounded hover:bg-gray-100">
            <a
              href={`${cmsBaseUrl}${report.File.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {report.Title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InteriumReportList;