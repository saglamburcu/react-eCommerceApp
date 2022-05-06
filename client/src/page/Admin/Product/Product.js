import { Table, Popconfirm } from "antd";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { fetchProductList, deleteProduct } from "../../../api";
import { Link } from "react-router-dom";

function Product() {

  const { isLoading, isError, data } = useQuery("admin: products", fetchProductList);

  const queryClient = useQueryClient();

  const deleteMutation = useMutation(deleteProduct, {
    onSuccess: () => queryClient.invalidateQueries("admin: products")
  })

  if (isLoading) {
    return <div>Loading...</div>
  };

  if (isError) {
    return <div>Error</div>
  };

  console.log(data)

  const columns =
    [
      {
        title: "Title",
        dataIndex: "title",
        key: "title"
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price"
      },
      {
        title: "Created At",
        dataIndex: "createdAt",
        key: "createdAt"
      },
      {
        title: "Action",
        dataIndex: "action",
        render: (text, record) => (
          //console.log("record", record)
          <>
            <Link to={`/admin/product/${record._id}`}>
              Edit
            </Link>

            <Popconfirm
              title="Are you sure to delete this product?"
              onConfirm={() => {
                deleteMutation.mutate(record._id, {
                  onSuccess: () => { console.log("success") }
                })
              }}
              onCancel={() => console.log("fail")}
              okText="Yes"
              cancelText="No"
              placement="left"
            >
              <Link to="/#" style={{ marginLeft: "10px" }}>
                Delete
              </Link>
            </Popconfirm>

          </>

        )
      }
    ]

  return (
    <Table dataSource={data} columns={columns} rowKey="_id" />
  )
};

export default Product;