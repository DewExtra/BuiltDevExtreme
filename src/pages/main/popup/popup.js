import React from 'react';
import { Popup } from 'devextreme-react/popup';
import Button from 'devextreme-react/button';
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
            popupRenovation: true,
            getData:[],
        };
        // this.hideRenovationInfo = this.hideRenovationInfo(this);
    }

    componentDidMount() {
        let param = 
        {
            
        }
          fetch('http://192.168.1.33/api/api/province/filter', {
            
          method: "post",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(param),
        }).then(response => response.json())
          .then(result => {
            if (result.items != null) {
              this.setState({
                getData: result.items
              })
              debugger
            }
          });
      }
    hideRenovationInfo = () => {
        this.setState({
            popupRenovation: false
        });
        debugger
    }
    render() {
        return (
            <React.Fragment>
                <h1>Test</h1>
                <Popup
                    className={'popup'}
                    visible={this.state.popupRenovation}
                    onHiding={this.hideRenovationInfo}
                    closeOnOutsideClick={true}
                    // width={1200}
                    // height={550}
                    fullScreen={true}
                    showTitle={false}
                >
                    <p style={{ 'textAlign': 'center', 'paddingTop': '10px', 'fontSize': '20px' }}>TestKUbb</p>
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
                    <div style={{ 'textAlign': 'center' }}>
                        <Button style={{ margin: '1rem' }}
                            disabled={false}
                            text="ปิด"
                            onClick={this.hideRenovationInfo}
                            className="btn btn-danger"
                        />
                    </div>

                </Popup>
            </React.Fragment>
        );
    }

};