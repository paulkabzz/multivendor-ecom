import React, { useState } from "react";
import { backend_url } from "../../server";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineDelete } from "react-icons/ai";
import { DataGrid } from "@mui/x-data-grid/";
import { Button } from "@mui/material";
import { MdOutlineTrackChanges } from "react-icons/md";
import styles from "../../styles/styles";
// import styles from "../../styles/styles";

const ProfileContent = ({ active }) => {
  const { user } = useSelector((state) => state.user);
  const [name, setName] = useState(user && user?.name);
  const [email, setEmail] = useState(user && user?.email);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [zipCode, setZipCode] = useState(null);
  const [address1, setAddress1] = useState(null);
  const [address2, setAddress2] = useState(null);
  const [address3, setAddress3] = useState(null);
  const [address4, setAddress4] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="w-full ">
        {/* Profile */}
        {active === 1 && (
          <>
            <div className="flex justify-center w-full">
              <div className="relative">
                <img
                  src={`${backend_url}${user?.avatar.url}`}
                  alt={user?.name || "User Profile"}
                  className="800px:w-[250px] 800px:h-[250px] w-[200px] h-[200px] rounded-full shadow-md cursor-pointer"
                />
                <div className="w-[35px] h-[35px] bg-[#E3E9EE] rounded-full flex items-center justify-center border-[2px] border-[#f6f6f5] cursor-pointer absolute bottom-[15px] right-[20px]">
                  <img
                    src={require("../../Assets/images/icons/camera.png")}
                    width={20}
                    height={20}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="w-full px-5">
              <form onSubmit={handleSubmit}>
                <div className="w-full 800px:flex block pb-3 ">
                  <div className="800px:w-[50%] w-full">
                    <label className="block py-3 text-[14px]">Full Name</label>
                    <input
                      type="text"
                      className={
                        "rounded-[5px] shadow-sm !w-[90%] text-[14px] p-3 focus:border-[1px] border-[#2196f3]"
                      }
                      required
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </div>
                  <div className="800px:w-[50%] w-full">
                    <label className="block py-3 text-[14px]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className={
                        "rounded-[5px] shadow-sm !w-[90%] text-[14px] p-3 focus:border-[1px] border-[#2196f3]"
                      }
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                </div>
                <div className="w-full 800px:flex block pb-3 ">
                  <div className="800px:w-[50%] w-full ">
                    <label className="block py-3 text-[14px]">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      className={
                        "rounded-[5px] shadow-sm !w-[90%] text-[14px] p-3 focus:border-[1px] border-[#2196f3]"
                      }
                      required
                      value={phoneNumber}
                      onChange={(event) => setPhoneNumber(event.target.value)}
                    />
                  </div>
                  <div className="800px:w-[50%] w-full">
                    <label className="block py-3 text-[14px]">
                      Zip/Postal Code
                    </label>
                    <input
                      type="number"
                      className={
                        "rounded-[5px] shadow-sm !w-[90%] text-[14px] p-3 focus:border-[1px] border-[#2196f3]"
                      }
                      required
                      value={zipCode}
                      onChange={(event) => setZipCode(event.target.value)}
                    />
                  </div>
                </div>
                <div className="w-full 800px:flex block pb-3 ">
                  <div className="800px:w-[50%] w-full ">
                    <label className="block py-3 text-[14px]">Street</label>
                    <input
                      type="address"
                      className={
                        "rounded-[5px] shadow-sm !w-[90%] text-[14px] p-3 focus:border-[1px] border-[#2196f3]"
                      }
                      required
                      value={address1}
                      onChange={(event) => setAddress1(event.target.value)}
                    />
                  </div>
                  <div className="800px:w-[50%] w-full">
                    <label className="block py-3 text-[14px]">
                      City/Suburb
                    </label>
                    <input
                      type="address"
                      className={
                        "rounded-[5px] shadow-sm !w-[90%] text-[14px] p-3 focus:border-[1px] border-[#2196f3]"
                      }
                      required
                      value={address2}
                      onChange={(event) => setAddress2(event.target.value)}
                    />
                  </div>
                </div>
                <div className="w-full 800px:flex block pb-3 ">
                  <div className="800px:w-[50%] w-full ">
                    <label className="block py-3 text-[14px]">Province</label>
                    <input
                      type="address"
                      className={
                        "rounded-[5px] shadow-sm !w-[90%] text-[14px] p-3 focus:border-[1px] border-[#2196f3]"
                      }
                      required
                      value={address3}
                      onChange={(event) => setAddress3(event.target.value)}
                    />
                  </div>
                  <div className="800px:w-[50%] w-full">
                    <label className="block py-3 text-[14px]">
                      Apartment/Complex (optional)
                    </label>
                    <input
                      type="address"
                      className={
                        "rounded-[5px] shadow-sm !w-[90%] text-[14px] p-3 focus:border-[1px] border-[#2196f3]"
                      }
                      value={address4}
                      onChange={(event) => setAddress4(event.target.value)}
                    />
                  </div>
                </div>
                <input
                  type="submit"
                  required
                  value="Update Details"
                  className="bg-[#000] text-[#fff] text-[14px] 800px:w-[150px] w-[90%] p-4 rounded shadow-sm cursor-pointer mt-8"
                />
              </form>
            </div>
          </>
        )}

        {/* Orders */}
        {active === 2 && (
          <>
            <div>
              <AllOrders />
            </div>
          </>
        )}

        {/* Refunds */}
        {active === 3 && (
          <>
            <div>
              <Refunds />
            </div>
          </>
        )}

        {/* Track Order */}
        {active === 5 && (
          <>
            <div>
              <TrackOrder />
            </div>
          </>
        )}

        {/* Payment Methods */}
        {active === 6 && (
          <>
            <div>
              <PaymentMethods user={user} />
            </div>
          </>
        )}

        {/* Addresses */}
        {active === 7 && (
          <>
            <div>
              <Addresses />
            </div>
          </>
        )}
      </div>
    </>
  );
};

const AllOrders = () => {
  const orders = [
    {
      _id: "173SHANKHWBSKANANJ217317137",
      orderItems: {
        name: "PS5",
      },
      totalPrice: 7999,
      orderStatus: "Processing",
    },
  ];
  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.row.status === "Delivered" ? "greenColor" : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },
    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Link to={`/user/order/${params.id}`}>
            <Button>
              <AiOutlineArrowRight size={20} />
            </Button>
          </Link>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        status: item.orderStatus,
        itemsQty: item.orderItems.length,
        total: "R" + item.totalPrice,
      });
    });
  return (
    <>
      <div className="pl-8 pt-1">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-[20px] font-[600] text-[#000000ba] pb-2">
            All Orders
          </h1>
        </div>
        <DataGrid
          rows={row}
          columns={columns}
          pageSizeOptions={10}
          disableRowSelectionOnClick
          autoHeight
        />
      </div>
    </>
  );
};

const Refunds = () => {
  const orders = [
    {
      _id: "173SHANKHWBSKANANJ217317137",
      orderItems: {
        name: "PS5",
      },
      totalPrice: 7999,
      orderStatus: "Processing",
    },
  ];

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.row.status === "Delivered" ? "greenColor" : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },
    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Link to={`/user/order/${params.id}`}>
            <Button>
              <AiOutlineArrowRight size={20} />
            </Button>
          </Link>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        status: item.orderStatus,
        itemsQty: item.orderItems.length,
        total: "R" + item.totalPrice,
      });
    });
  return (
    <>
      <div className="pl-8 pt-1">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-[20px] font-[600] text-[#000000ba] pb-2">
            Refunds
          </h1>
        </div>
        <DataGrid
          rows={row}
          columns={columns}
          pageSizeOptions={10}
          disableRowSelectionOnClick
          autoHeight
        />
      </div>
    </>
  );
};

const TrackOrder = () => {
  const orders = [
    {
      _id: "173SHANKHWBSKANANJ217317137",
      orderItems: {
        name: "PS5",
      },
      totalPrice: 7999,
      orderStatus: "Processing",
    },
  ];

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.row.status === "Delivered" ? "greenColor" : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },
    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Link to={`/user/order/${params.id}`}>
            <Button>
              <MdOutlineTrackChanges size={20} />
            </Button>
          </Link>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        status: item.orderStatus,
        itemsQty: item.orderItems.length,
        total: "R" + item.totalPrice,
      });
    });
  return (
    <>
      <div className="pl-8 pt-1">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-[20px] font-[600] text-[#000000ba] pb-2">
            Track Orders
          </h1>
        </div>
        <DataGrid
          rows={row}
          columns={columns}
          pageSizeOptions={10}
          disableRowSelectionOnClick
          autoHeight
        />
      </div>
    </>
  );
};

const PaymentMethods = ({ user }) => {
  return (
    <>
      <div className="w-full px-5">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-[20px] font-[600] text-[#000000ba] pb-2">
            Payment Methods
          </h1>
          <button className={styles.button + " bg-[#000] rounded-md"}>
            <span className="text-[#fff] text-[14px]">Add New</span>
          </button>
        </div>
        <br />
        <div className="w-full bg-[#fff] h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10">
          <div className="flex items-center">
            <img
              src={require("../../Assets/images/icons/visa.png")}
              width={25}
              alt=""
            />
            <h5 className="pl-5 font-[600] text-[14px]">{user.name} </h5>
          </div>
          <div className="pl-8 flex items-center">
            <p className="text-[14px] ">1234 **** **** ****</p>
            <p className="pl-6 text-[14px]">05/2030</p>
          </div>

          <div className="min-w-[10%] flex items-center justify-between pl-8">
            <AiOutlineDelete size={20} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

const Addresses = () => {
  return (
    <>
      <div className="w-full px-5">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-[20px] font-[600] text-[#000000ba] pb-2">
            Addresses
          </h1>
          <button className={styles.button + " bg-[#000] rounded-md"}>
            <span className="text-[#fff] text-[14px]">Add New</span>
          </button>
        </div>
        <br />
        <div className="w-full bg-[#fff] h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10">
          <div className="flex items-center">
            <h5 className="pl-5 font-[600] text-[14px]">Default Address </h5>
          </div>
          <div className="pl-8 flex items-center">
            <p className="text-[14px] ">
              146 Tryall Rd, Milnerton Rural, Cape Town, 7441
            </p>
          </div>
          <div className="pl-8 flex items-center">
            <p className="text-[14px] ">067 221 6329</p>
          </div>
          <div className="min-w-[10%] flex items-center justify-between pl-8">
            <AiOutlineDelete size={20} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileContent;
