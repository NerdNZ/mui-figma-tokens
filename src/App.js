import * as React from 'react';
// import './Button.css';
import './App.css';
import Button from '@mui/base/Button';
import Tab from '@mui/base/Tab';
import TabsList from '@mui/base/TabsList';
import TabPanel from '@mui/base/TabPanel';
import Tabs from '@mui/base/Tabs';

import Input from '@mui/base/Input';

import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function App() {
  return (
      <div className="App">
       
       {/* nav bar */}

       <div className="container">

        
        <Tabs defaultValue={1} className="tabs">
          <div className="tabs--buttons">
            <div className="tabs--buttons-main">
              <Button className="mainButton">Back</Button>
              <TabsList>
                <Tab value={1}>Component Configuration</Tab>
                <Tab value={2}>User Management</Tab>
                <Tab value={3}>Reporting Settings</Tab>
              </TabsList>
            </div>
            <Button className="mainButton">Create new component</Button>
          </div>
          <TabPanel value={1}>

          <div className="header"><h1>Product components</h1></div>

            <div className="table-container">

              <div className="filter">

                <div className="filter--buttons">
                  <Button className="mainButton">View all</Button>
                  <Button className="mainButton">Services</Button>
                  <Button className="mainButton">Attributes</Button>
                  <Button className="mainButton">Incentives</Button>
                  <Button className="mainButton">Penalties</Button>
                  <Button className="mainButton">Charges</Button>
                </div>

                <div className="filter--search">
                  <Input />
                  {/* icon */}
                  {/* icon */}
                </div>


              </div>

              <div className="table">
                <div style={{ height: 400, width: '100%' }}>
                  <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                      },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                  />
                </div>
              </div>

            </div>

          </TabPanel>
          <TabPanel value={2}>Second page</TabPanel>
          <TabPanel value={3}>Third page</TabPanel>
          
        </Tabs>
        

        

       </div>

      </div>
  );
}

export default App;
