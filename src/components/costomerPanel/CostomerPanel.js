import "./CostomerPanel.css";

const CostomerPanel = () => {
  return (
    <div className="costomer_panel_container">
      <div className="customer_panel_info">
        <h3>Покупець: Роздріб</h3>
        <h3>Дата:01.01.01</h3>
        <h3>Борг:0</h3>
        <h3>Сума покупки:0</h3>

          <lable>Знижка <input /></lable>
          
      </div>
      <div>
        <button>Сормувати</button>
      </div>
    </div>
  );
};
export default CostomerPanel;
