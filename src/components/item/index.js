import React from "react";
import PropTypes from "prop-types";
import './style.css';

function Item(props){
  const callbacks = {
    onAdd: (e) => {
      e.stopPropagation();
      props.onAdd(props.item.code);
    },
    onDelete: (e) => {
      e.stopPropagation();
      props.onDelete(props.item.code);
    }
  }

  return (
    <div className="Item">
      <div className='Item-code'>{props.item.code}</div>
      <div className='Item-title'>
        {props.item.title}
      </div>
      <div className='Item-actions'>
        <div>
          {Intl.NumberFormat("ru",{style: "currency", currency: "RUB", minimumFractionDigits: 0}).format(props.item.price)}
        </div>

        {props.showCount && props.item.count && (
          <div className="Item-count">{props.item.count} шт.</div>
        )}

        {props.onAdd && (
          <button onClick={callbacks.onAdd}>
            Добавить
          </button>
        )}

        {props.onDelete && (
          <button onClick={callbacks.onDelete}>
            Удалить
          </button>
        )}
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number
  }).isRequired,
  showCount: PropTypes.bool,
  onAdd: PropTypes.func,
  onDelete: PropTypes.func,
};

Item.defaultProps = { 
  showCount: false
}

export default React.memo(Item);
