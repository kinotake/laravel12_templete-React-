import React, { useMemo, useState } from 'react';
import { router, usePage } from '@inertiajs/react';

type Department = {
  id: number;
  name: string;
};

type PageProps = {
  display_data: {
    departments: Department[];
  };
};

const DepartmentsSelectPage: React.FC = () => {
  const { display_data } = usePage<PageProps>().props;
  const { departments } = display_data;
  const [selectedDepartmentIds, setSelectedDepartmentIds] = useState<number[]>([]);

  const selectedSet = useMemo(() => new Set(selectedDepartmentIds), [selectedDepartmentIds]);

  const toggleDepartment = (departmentId: number) => {
    setSelectedDepartmentIds((prev) => {
      if (prev.includes(departmentId)) return prev.filter((id) => id !== departmentId);
      return [...prev, departmentId];
    });
  };

  const submitSelectedDepartments = () => {
    router.post('/department/user/set', {
      department_ids: selectedDepartmentIds,
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-50 py-10">
      <h1 className="text-2xl font-bold mb-6">所属する部署を選択してください</h1>

      <div className="w-full max-w-xl bg-white shadow-md rounded-lg p-6">
        {departments.length === 0 ? (
          <p className="text-gray-500 text-center">部署が登録されていません。</p>
        ) : (
          <ul className="space-y-3">
            {departments.map((department) => (
              <li
                key={department.id}
                className="border rounded-md px-4 py-3 hover:bg-gray-100 cursor-pointer flex items-center justify-between"
                onClick={() => toggleDepartment(department.id)}
              >
                <span className="text-gray-800 font-medium">{department.name}</span>
                <input
                  type="checkbox"
                  className="h-5 w-5"
                  checked={selectedSet.has(department.id)}
                  onChange={() => toggleDepartment(department.id)}
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`${department.name} を選択`}
                />
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        type="button"
        className="mt-6 rounded-md bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 disabled:opacity-50"
        disabled={selectedDepartmentIds.length === 0}
        onClick={submitSelectedDepartments}
      >
        選択した部署で登録
      </button>
    </div>
  );
};

export default DepartmentsSelectPage;

