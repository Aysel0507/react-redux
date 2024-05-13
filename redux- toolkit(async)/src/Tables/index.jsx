import React from "react";
import { useDeleteOneMutation, useGetAllDataQuery } from "../services/TableApi";
import { Button, Popconfirm, Table } from "antd";

const Customers = () => {
  const { data: customers, isLoading, refetch } = useGetAllDataQuery();
  const[deleteOne]=useDeleteOneMutation()
  console.log(customers);
  const columns = [
    {
      title: "id",
      dataIndex: "id",
    },
    {
      title: "companyName",
      dataIndex: "companyName",
    },
    {
      title: "contactTitle",
      dataIndex: "contactTitle",
    },
    {
      title: "contactName",
      dataIndex: "contactName",
      sorter: (a, b) => a.contactName.localeCompare(b.contactName),
    },
    {
      title: "delete",
      dataIndex: "Delete",
      render: (data,record) => (
        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this task?"
          onConfirm={() => confirm(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button
           type="primary" danger>
            Delete
          </Button>
        </Popconfirm>
      ),
    },
];

    const confirm=async(id)=>{
        await deleteOne(id)
        refetch()
    }
  return <Table columns={columns} dataSource={customers} rowKey="id" />;
};

export default Customers;
