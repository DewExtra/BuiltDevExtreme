import { HomePage, DisplayDataPage, ProfilePage } from './pages';
import employeeForm from './pages/main/employeeForm/employeeForm';
import companyForm from './pages/main/companyForm/companyForm';
import employeeTypeForm from './pages/main/employeeTypeForm/employeeTypeForm';
import groupForm from './pages/main/groupForm/groupForm';
import provinceForm from './pages/main/provinceForm/provinceForm';
import districtForm from './pages/main/districtForm/districtForm';
import subdistrictForm from './pages/main/subdistrictForm/subdistrictForm';
import popup from './pages/main/popup/popup';

export default [
  {
    path: '/display-data',
    component: DisplayDataPage
  },
  {
    path: '/employeeForm',
    component: employeeForm
  },
  {
    path: '/companyForm',
    component: companyForm
  },
  {
    path: '/employeeTypeForm',
    component: employeeTypeForm
  },
  {
    path: '/groupForm',
    component: groupForm
  },
  {
    path: '/provinceForm',
    component: provinceForm
  },
  {
    path: '/districtForm',
    component: districtForm
  },
  {
    path: '/subdistrictForm',
    component: subdistrictForm
  },
  {
    path: '/popup',
    component: popup
  }
  ];
