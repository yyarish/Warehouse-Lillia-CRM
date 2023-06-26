import AppBanner from "../appBanner/AppBanner"
import SuppliersHeader from "../suppliersHeader/SuppliersHeader"
import SuppliersList from "../suppliersList/SuppliersList"
import SupplierPanel from "../supplierPanel/SupplierPanel"
import SupplierTable from "../supplierTable/SupplierTable"
import AddGood from "../addGood/AddGood"

import'./SuppliersPage.css'

const SuppliersPage = () => {

   return (
      <>
      <div className = "suppliers_page">
        <AppBanner/>
        <SuppliersHeader/>
      </div>
     
      <div>
       <div>
        <SuppliersList/>
        <AddGood/>
       </div>
      <div>
        <SupplierPanel/>
        <SupplierTable/>
       </div>
      </div>
      
      </>
   )
}
export default SuppliersPage