import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../cdatasrc";
import { Link } from "react-router-dom";
import { useState } from "react";
import './cFtable.css';

const CFtable = () => {

    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };
    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <div className="viewButton">
                            <Link to="/adposts/Cmodifier" className="link">
                                Modifier
                            </Link>
                        </div>
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];

    return (
        <div className='datatable'>
            <div className="datatableTitle">
                les administrateurs regionales
                <Link to="/adposts/Cnew" className="link">
                    Add New
                </Link>
            </div>
            <DataGrid
                rows={data}
                columns={userColumns.concat(actionColumn)}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    )
}
export default CFtable
