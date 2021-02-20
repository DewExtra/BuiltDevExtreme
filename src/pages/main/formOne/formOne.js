import React from 'react';
import DataGrid, {
  Column,
  Pager,
  Paging,
  FilterRow,
  Lookup
} from 'devextreme-react/data-grid';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getData: [],
    }
  }
  componentDidMount() {
    let param = {}
    fetch('http://www.truckq_api.laemchabangport.com:8043/TruckQ/Backend/DEV/truckq.master_user.api/api/v1/masteruser/filter', {

      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxjYmEwYWRtIiwiZ3JvdXAiOiIxIiwidHlwZSI6InAiLCJwb3J0IjoiTENCQTAiLCJuYmYiOjE2MDAyNTM5MzUsImV4cCI6MTkxNTYxMzkzNSwiaWF0IjoxNjAwMjUzOTM1fQ.SioBLRhW6nPS9r07r47Y1jJGysi2z_2NTdbQk2A6_08" //`Bearer ${storage.tk}`
      },
      body: JSON.stringify(param),
    }).then(response => response.json())
      .then(result => {
        debugger
        if (result.items != null) {
          this.setState({
            getData: result.items
          })
        }
      });
  }

  render() {
    return (
      <React.Fragment>
        <h2 className={'content-block'}>Test Data</h2>

        <DataGrid
          className={'dx-card wide-card'}
          dataSource={this.state.getData}
          showBorders={false}
          focusedRowEnabled={true}
          defaultFocusedRowIndex={0}
          columnAutoWidth={true}
          columnHidingEnabled={true}
          keyExpr={'userCode'}
        >
          <Paging defaultPageSize={10} />
          <Pager showPageSizeSelector={true} showInfo={true} />
          <FilterRow visible={true} />

          <Column
            dataField={'userCode'}
            caption={'userCode'}
          />
          <Column
            dataField={'username'}
            caption={'username'}
          />
          <Column
            dataField={'fullName'}
            caption={'fullName'}
          />
        </DataGrid>
      </React.Fragment>
    );
  }
};

