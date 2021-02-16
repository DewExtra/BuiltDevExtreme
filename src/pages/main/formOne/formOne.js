import React from 'react';
import DataGrid, {
  Column,
  Pager,
  Paging,
  FilterRow,
  Lookup
} from 'devextreme-react/data-grid';

export default class extends React.Component {

  dataSource_x = {
    store: {
     type: 'array',
      key: 'userIndex',
      url: 'http://kascoit.ddns.me:99/Amazon_MasterAPI/api/User/addUser'
    },
    select: [
      'userIndex',
      'userGroupName',  
      'isActive'
    ]
  };

  dataSource = {
    store: {
      type: 'odata',
      key: 'Task_ID',
      url: 'https://js.devexpress.com/Demos/DevAV/odata/Tasks'
    },
    expand: 'ResponsibleEmployee',
    select: [
      'Task_ID',
      'Task_Subject',
      'Task_Start_Date',
      'Task_Due_Date',
      'Task_Status',
      'Task_Priority',
      'Task_Completion',
      'ResponsibleEmployee/Employee_Full_Name'
    ]
  };

  priorities = [
    { name: 'High', value: 4 },
    { name: 'Urgent', value: 3 },
    { name: 'Normal', value: 2 },
    { name: 'Low', value: 1 }
  ];

  render() {
    return (
      <React.Fragment>
        <h2 className={'content-block'}>Test Data</h2>

      
        <DataGrid
          className={'dx-card wide-card'}
          dataSource={this.dataSource_x}
          showBorders={false}
          focusedRowEnabled={true}
          defaultFocusedRowIndex={0}
          columnAutoWidth={true}
          columnHidingEnabled={true}
        >
          <Paging defaultPageSize={10} />
          <Pager showPageSizeSelector={true} showInfo={true} />
          <FilterRow visible={true} />

          <Column dataField={'userIndex'} width={90} hidingPriority={2} />
          <Column
            dataField={'userGroupName'}
            width={190}
            caption={'userGroupName'}
            hidingPriority={8}
          />
          <Column
            dataField={'isActive'}
            caption={'isActive'}
            hidingPriority={6}
          />     
        </DataGrid>
      </React.Fragment>
    );
  }
};

