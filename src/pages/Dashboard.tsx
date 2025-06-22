
import React, { useState, useMemo } from 'react';
import { mockEmployees, departments } from '../data/mockData';
import { FilterState } from '../types';
import Layout from '../components/Layout';
import EmployeeCard from '../components/EmployeeCard';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';

const Dashboard = () => {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    departments: [],
    ratings: [],
  });

  const filteredEmployees = useMemo(() => {
    return mockEmployees.filter(employee => {
      const matchesSearch = 
        employee.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        employee.email.toLowerCase().includes(filters.search.toLowerCase()) ||
        employee.department.toLowerCase().includes(filters.search.toLowerCase());

      const matchesDepartment = 
        filters.departments.length === 0 || 
        filters.departments.includes(employee.department);

      const matchesRating = 
        filters.ratings.length === 0 || 
        filters.ratings.includes(employee.rating);

      return matchesSearch && matchesDepartment && matchesRating;
    });
  }, [filters]);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Employee Performance Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage and view employee performance across departments
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <SearchBar
              value={filters.search}
              onChange={(search) => setFilters(prev => ({ ...prev, search }))}
            />
          </div>
          <div className="flex gap-3">
            <FilterDropdown
              title="Department"
              options={departments}
              selected={filters.departments}
              onChange={(departments) => setFilters(prev => ({ ...prev, departments }))}
            />
            <FilterDropdown
              title="Rating"
              options={[1, 2, 3, 4, 5]}
              selected={filters.ratings}
              onChange={(ratings) => setFilters(prev => ({ ...prev, ratings }))}
            />
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            Showing {filteredEmployees.length} of {mockEmployees.length} employees
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEmployees.map((employee) => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </div>

        {filteredEmployees.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 dark:text-gray-600 text-lg mb-2">
              No employees found
            </div>
            <p className="text-gray-500 dark:text-gray-500">
              Try adjusting your search criteria or filters
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Dashboard;
