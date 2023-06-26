import './CostomersList.css'

const CostomersList = () => {

   return (
      <div className = "coctomerList_container">
         <div>
           <form className = "costomers_add_form">
              <label className = "add_costomer_lable">назва нового покупця</label>
              <input></input>
              <button className = "add_costomers_buttom">створити</button>
           </form>
         </div>
         
         <div>
            <ul>
               <li className = " bg-gradient bg-success text-white flex-row card">
               <button type="button" className="costomers_button" >РОЗДРІБ</button>
               </li>
           
            </ul>
            </div>
            
      </div>
     
      
   )
}
export default CostomersList