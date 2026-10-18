import React from "react";
import { DataGrid } from "./components/DataGrid";
import type { ColumnDef } from "./components/data-grid-contract";

interface Employee {
  id: number;
  name: string;
  role: string;
  department: string;
}

const columns: ColumnDef<Employee>[] = [
  { header: "ID", accessorKey: "id", sortable: true },
  { header: "Họ và Tên", accessorKey: "name", sortable: true },
  { header: "Vị trí", accessorKey: "role", sortable: true },
  { header: "Phòng ban", accessorKey: "department", sortable: false },
];

const mockData: Employee[] = [
  {
    id: 101,
    name: "Nguyễn Văn A",
    role: "Frontend Engineer",
    department: "Kỹ thuật",
  },
  {
    id: 102,
    name: "Trần Thị B",
    role: "UI/UX Designer",
    department: "Thiết kế",
  },
  {
    id: 103,
    name: "Lê Hoàng C",
    role: "Fullstack Developer",
    department: "Kỹ thuật",
  },
  {
    id: 104,
    name: "Phạm Minh D",
    role: "Product Manager",
    department: "Sản phẩm",
  },
  {
    id: 105,
    name: "Hoàng Anh E",
    role: "QA Automation",
    department: "Kiểm thử",
  },
  { id: 106, name: "Đỗ Hải F", role: "DevOps Engineer", department: "Hạ tầng" },
];

export default function App() {
  return (
    <main style={{ padding: "32px" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "16px" }}>
        Enterprise Data-Grid Demo (WCAG 2.2 AA)
      </h1>
      <DataGrid<Employee>
        data={mockData}
        columns={columns}
        ariaLabel="Bảng danh sách nhân viên công ty"
        pageSize={4}
        onRowSelect={(item) => console.log("Đã chọn nhân viên:", item)}
      />
    </main>
  );
}
