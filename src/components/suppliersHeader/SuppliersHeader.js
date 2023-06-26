import { Link} from 'react-router-dom'

import './SuppliersHeader.css' 


const SuppliersHeader = () => {
   return (
   
      <div className = "supplier_header">
          <h1 className= "supplier_title">постачальники </h1>
       
         <h2 > <Link to="/" className= "supplier_link">покупці</Link>  </h2> 
       
          
      </div>
     
       
   )
}
export default SuppliersHeader