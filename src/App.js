import * as React from 'react';
import './tokens.css';
import './App.css';
import Button from '@mui/base/Button';
import Tab from '@mui/base/Tab';
import TabsList from '@mui/base/TabsList';
import TabPanel from '@mui/base/TabPanel';
import Tabs from '@mui/base/Tabs';
import FilterButton from './components/FilterButton'
import ServicesIcon from './assets/services-icon.svg'
import AttributesIcon from './assets/attributes-icon.svg'
import IncentivesIcon from './assets/incentives-icon.svg'
import PenaltiesIcon from './assets/penalties-icon.svg'
import ChargesIcon from './assets/charges-icon.svg'

import Input from '@mui/base/Input';

import { DataGrid } from '@mui/x-data-grid';

// import BackButtonIcon from './assets/back-chevron.svg'
import BackButton from './components/Button';

import FilterIcon from './assets/filter-button.svg'
import InfoIcon from './assets/info-icon.svg'



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
              <BackButton className="secondaryButton" name="back"/>
              {/* <Button className="secondaryButton">Back</Button> */}
              <TabsList className="tabs-1">
                <Tab label="Story" icon={ <img src={ChargesIcon} alt="charges icon"/>} value={1}>Component Configuration</Tab>
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
                  <FilterButton
                    title="View all" 
                    active={true}/>
                  <FilterButton 
                    imageUrl={ServicesIcon}
                    title="Services"
                    front={true}/>
                  <FilterButton 
                    imageUrl={AttributesIcon} 
                    title="Attributes" 
                    front={true}/>
                  <FilterButton 
                    imageUrl={IncentivesIcon} 
                    title="Incentives"
                    front={true}/>
                  <FilterButton 
                    imageUrl={PenaltiesIcon}
                    title="Penalties" 
                    front={true}/>
                  <FilterButton 
                    imageUrl={ChargesIcon} 
                    title="Charges"
                    front={true} />
                </div>
                <div className="filter--toolbar">
                  <Input className="search" placeholder="Placeholder..."/>
                  <div className='filter--toolbar-buttons'>
                    <div className="icon--placeholder">
                      <img src={InfoIcon} alt="Info" />
                    </div>
                    <div className="icon--placeholder">
                      <img src={FilterIcon} alt="Filter" />
                    </div>
                  </div>
                </div>


              </div>

              <div className="table">
                <div style={{ height: 400, width: '100%' }}>
                  <DataGrid
                    size="small"
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
